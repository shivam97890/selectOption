import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  category = [
    { catA: ['cat1', 'cat2'] },
    { catB: ['cat3', 'cat4'] },
    { catC: ['cat5', 'cat6'] }
  ]
  list = [];
  selectedList = [];
  description='';

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.list = [];
    this.category.forEach((element) => {
      this.list = [].concat(this.list, Object.keys(element));
    });
  }

  dataChanged(item) {
    this.selectedList = [];
    console.log('selected: ', item);

    let obj = this.category.find(x => {
      return Object.keys(x).indexOf(item) >= 0;
    })[item];

    this.selectedList = [].concat(this.selectedList, obj);
  }
  catDescription(item) {
    this.description='This is '+item;
  }

}
