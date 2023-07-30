import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { NewPostInterface } from 'src/app/interfaces/new-post-interface';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private storage: AngularFireStorage,
    private dataStorage: AngularFirestore,
    private tosterMessage: ToastrService,
    private router: Router
  ) { }

  uploadImage(image: File, data: any, status: string, id: string) {
    const path = `image/${Date.now()}`;
    const fileRef: AngularFireStorageReference = this.storage.ref(path);
    const task = fileRef.put(image).then((res) => {
      this.storage.ref(path).getDownloadURL().subscribe(URL => {
        data.ImagePath = URL
        let postdatas = data;
        if (status == 'Edit') {
              this.updatePost(id, data)
        } else {
          this.saveData(data);

        }

      });
    });
  }
  saveData(data: any) {
    this.dataStorage.collection('PostData').add(data).then((res) => {
      // this.tosterMessage.success('Data Uploaded Successfully')
      console.log('this i sres', res);

    });
  }

  // getAllPostData(){
  //   console.log("lorem");
  // return  this.dataStorage.collection('PostData').snapshotChanges().pipe(
  //     map(e=>{
  //       return e.map(details=>{
  //         console.log("test test");
  //         console.log(details);
  //       })
  //     })
  //   )
  // }

  // getAllPostData(): Observable<any[]> {
  //   return this.dataStorage.collection('PostData').valueChanges();
  // }

  deleteBlog(data: string) {
    try {
      this.dataStorage.collection('PostData').doc(data).delete().then(delted => {
        this.tosterMessage.warning('Blog Deleted Successfully');
        console.log(delted);

      });
    } catch (er) {
      this.tosterMessage.error('Failed to delete Blog');
    }
  }

  getAllPostData() {
    return this.dataStorage.collection('PostData').snapshotChanges().pipe(
      map(data => {
        return data.map(test => {
          const id = test.payload.doc.id
          const data = test.payload.doc.data()
          return { id, data }
        })
      })
    );
  }

  editBlogData(id: string) {
    return this.dataStorage.collection<NewPostInterface>('PostData').doc(id).valueChanges();
  }

  updatePost(id:string, postDate:string) {
    this.dataStorage.doc(`PostData/${id}`).update(postDate).then(res => {
      this.tosterMessage.success('Post Updated Successfully');
      this.router.navigate(['/posts'])
    })
  }
}
