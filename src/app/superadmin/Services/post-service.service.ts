import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(image: File) {
    const path = `image/${Date.now()}`;
    const fileRef: AngularFireStorageReference = this.storage.ref(path);
    const task = fileRef.put(image).then((res)=>{
      console.log("Image Upload Successfully");
    });
  }
}
