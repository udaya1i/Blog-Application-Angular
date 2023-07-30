import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SuperadminCategoryServiceService {
  constructor(private firestore: AngularFirestore, private toaster: ToastrService) { }
  submitDataToDatabase(data: any) {

    this.firestore.collection('Categoriess').add(data).then((DocumentReferance) => {
      this.toaster.success("Data Saved Successfully");
      console.log(DocumentReferance);
      

    }).catch(error => {
      console.log(error);
      this.toaster.error("There is a error to save you data")
    });
  }

  getCategory() {
    return this.firestore.collection('Categoriess').snapshotChanges().pipe(
      map(datas => {
        return datas.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;      
          return { data, id }
          
        })
      })
    )
  }

  /** 
        Delete using collection method 
  */

  // deleteCategoryById(id: string) {
  //   try {
  //     this.firestore.collection('Categoriess').doc(id).delete().then((res) => {
  //       this.toaster.info("Category Deleted Successfully")
  //     });
  //   } catch (er) {
  //     console.log(er);
  //     this.toaster.success("Error!!")
  //   }
  // }

  /*
  Delete using path method
  */


  deleteCategoryById(id: string) {
    try {
      this.firestore.doc(`Categoriess/${id}`).delete().then(res => {
        this.toaster.warning('Category Deleted Successully!!');
      });
    } catch (er) {
      console.log(er);
      this.toaster.error("Error!!")

    }
  }

  /**
   * UPDATE USING NORMAL METHOD
   */


  // updateCategory(id: string, categoryObj: object) {
  //   try {
  //     console.log("this is the types", typeof id, typeof categoryObj);
  //     this.firestore.collection('Categoriess').doc(id).update(categoryObj).then((res) => {
  //       console.log("the product is updated!!", typeof res);
  //       this.toaster.info("Category Update Successfully!!!")
  //     })
  //   } catch (er) {
  //     console.log(er);
  //     this.toaster.error("Error")
  //   }
  // }

  /**
   * UPDATE USING PATH METHOD
   */
  updateCategory(id: string, categoryObj: object) {
    try {
      this.firestore.doc(`Categoriess/${id}`).update(categoryObj).then((res) => {
        this.toaster.info('Category Update Successfully!!')
      });
    } catch (er) {
      this.toaster.error("Error!!")
    }
  }
}