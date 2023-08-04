import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { fromEventPattern, map } from 'rxjs';
import * as firebase from 'firebase'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private storage: AngularFireStorage,
    private database: AngularFirestore,
    private firebaseAuthentication: AngularFireAuth,
    private message:ToastrService
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
    return this.database.collection('PostData', post => post.where('isFeatured', '==', true)).snapshotChanges().pipe(
      map(a => {
        return a.map(featuredPost => {
          const id = featuredPost.payload.doc.id;
          const data = featuredPost.payload.doc.data();
          return { id, data }
        })
      })
    )
  }
  getRecentBlog() {
    return this.database.collection('PostData', recent => recent.orderBy('createdAt')).snapshotChanges().pipe(
      map(posts => {
        return posts.map(recentposts => {
          const id = recentposts.payload.doc.id;
          const data = recentposts.payload.doc.data();
          return { id, data }
        })
      })
    )
  }

  getAllPosts() {
    return this.database.collection('PostData').valueChanges();
  }

  categoryPosts(categoryId: string) {
    return this.database.collection('PostData', categorydata => categorydata
      .where('category.categoryId', '==', categoryId))
      .snapshotChanges()
      .pipe(
        map(data => {
          return (data.map(category => {
            const id = category.payload.doc.id;
            const data = category.payload.doc.data();
            return { id, data }
          }))
        })
      )
  }
  getSingleCategory(id: string) {
    return this.database.collection('PostData').doc(id).valueChanges();
  }
  categoryRelatedPosts(categoryId: string) {
    return this.database.collection('PostData', categorydata => categorydata
      .where('category.categoryId', '==', categoryId).limit(4))
      .snapshotChanges()
      .pipe(
        map(data => {
          return (data.map(category => {
            const id = category.payload.doc.id;
            const data = category.payload.doc.data();
            return { id, data }
          }))
        })
      )
  }
  count(id:any){
    const viewCount={
      views: firebase.default.firestore.FieldValue.increment(1)
    }
    this.database.collection('PostData').doc(id).update(viewCount).then((res)=>{
      console.log("updated successfully");
    })
  }
  subscriber(data:any){
    this.database.collection('Subscriber').add(data).then(res=>{
      console.log('subscribed!!');
      this.message.success('User Subscribed Successfully!')
    })
  }
  checkDuplication(data:string){
   return this.database.collection('Subscriber', res => res.where('email','==',data)).get();
  }
}
