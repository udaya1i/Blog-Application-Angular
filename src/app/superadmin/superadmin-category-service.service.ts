import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoryInterface } from '../interfaces/category-interface';
import { ToastrService } from 'ngx-toastr';

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
      console.log("there is a error saving data to firebase database, and the reason is ", error);
      alert("error!");
      this.toaster.error("There is a error to save you data")
    });
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
