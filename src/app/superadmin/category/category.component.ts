import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private firestore: AngularFirestore) { }
  ngOnInit(): void {
  }
  Onsubmit(data: any) {
    let categoryData = {
      category: data.NameOfCategory
    }
    this.firestore.collection('Catagories').add(categoryData).then((DocumentReferance) => {
      console.log("This is documentation", DocumentReferance, "and it is stored with id ", DocumentReferance.id);
    }).catch(error => {
      console.log("there is a error saving data to firebase database, and the reason is ", error);
      alert("error!");
    })
  }
}

