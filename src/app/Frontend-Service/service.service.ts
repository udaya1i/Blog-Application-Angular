import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    private firebaseAuthentication: AngularFireAuth
  ) { }

  getAllCategories() {
    return this.database.collection('Categoriess').snapshotChanges().pipe(
      map(categories => {
        return categories.map(a => {
          const categories = a.payload.doc.data();
          const categoriesId = a.payload.doc.id;
          return { categories, categoriesId }
        })
      })
    )
  }

  getFeaturedPost() {
    return this.database.collection('PostData', post => post.where('isFeatured', '==', true)).valueChanges();
  }

}
