import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private storage: AngularFireStorage,
    private dataStorage: AngularFirestore,
    private tosterMessage: ToastrService
  ) { }

  uploadImage(image: File, data: any) {
    const path = `image/${Date.now()}`;
    const fileRef: AngularFireStorageReference = this.storage.ref(path);
    const task = fileRef.put(image).then((res) => {
      this.storage.ref(path).getDownloadURL().subscribe(URL => {
        data.ImagePath = URL
        let postdatas = data;
        this.dataStorage.collection('PostData').add(postdatas).then((res) => {
          this.tosterMessage.success('Data Uploaded Successfully')
        });
      });
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

  getAllPostData(): Observable<any[]> {
    return this.dataStorage.collection('PostData').valueChanges();
  }
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
}
