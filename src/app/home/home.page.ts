import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
ionicForm: FormGroup;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myForm: FormGroup;
  tell2Form: FormGroup;



  

  // get itemOne() {
  //   return this.ionicForm.get('itemOne')
  // }
  // get itemTwo() {
  //   return this.ionicForm.get('itemTwo')
  // }
  // get itemThree() {
  //   return this.ionicForm.get('itemThree')
  // }
  // get itemFour() {
  //   return this.ionicForm.get('itemFour')
  // }

  constructor(public formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.tell2Form = new FormGroup({
      itemOne: new FormControl('', Validators.required),
      itemTwo: new FormControl('', Validators.required),
      itemThree: new FormControl('', Validators.required),
      itemFour: new FormControl('', Validators.required)
    })
  }
  onDescSave() {
    console.log(this.tell2Form.value.itemOne, this.tell2Form.value.itemTwo, this.tell2Form.value.itemThree, this.tell2Form.value.itemFour)
  }

}
