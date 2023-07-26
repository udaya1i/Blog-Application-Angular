import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoryInterface } from '../interfaces/category-interface';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperadminCategoryServiceService {
  constructor(private firestore: AngularFirestore, private toaster: ToastrService) { }
  submitDataToDatabase(data: CategoryInterface) {
    let categoryData = {
      category: data.NameOfCategory
    }
    this.firestore.collection('Categoriess').add(categoryData).then((DocumentReferance) => {
      this.toaster.success("Data Saved Successfully");

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
  deleteCategoryById(id:CategoryInterface){
    this.firestore.collection('Categoriess')
  }
}


   // let subCategoryData = {
    //   category: 'Samsung a7'
    // }
    // let thirdSubCategory = {
    //   category: 'sammmm'
    // }
 //sub category ---
      // this.firestore.collection('Categories').doc(DocumentReferance.id)
      //  path url method
      // this.firestore.doc(`Categories/${DocumentReferance.id}`)
      // .collection('Smartphone').add(subCategoryData).then((SubCatagoryDocumentRefeance) => {
      // console.log("this is sub Category", SubCatagoryDocumentRefeance);
      // path url method
      // this.firestore.collection('Cateogries').doc(DocumentReferance.id).collection('Smartphone').doc(SubCatagoryDocumentRefeance.id)
      // this.firestore.doc(`Categories/${DocumentReferance.id}/Smartphone/${SubCatagoryDocumentRefeance.id}`)
      //   .collection('thirdSubCollection').add(thirdSubCategory).then((ThirdSubCategoryId) => {
      //     console.log("this is third sub cateogry", ThirdSubCategoryId);
      //   });
      // });
      //sub category ----
