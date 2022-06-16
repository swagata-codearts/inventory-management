import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Step } from '../Model/step.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ionicForm: FormGroup;
 
  isSubmitted = false;
  Step:Step;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      itemOne: ['', [Validators.required, Validators.minLength(1)]],
      itemTwo: ['', [Validators.required, Validators.minLength(1)]],
      itemThree: ['', [Validators.required, Validators.minLength(1)]],
      itemFour: ['', [Validators.required, Validators.minLength(1)]],
      
    })
  }
      
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      //console.log(this.ionicForm.value)
      this.Step = new Step();
      this.Step.itemOne = this.ionicForm.value.itemOne;
      this.Step.itemTwo = this.ionicForm.value.itemTwo;
      this.Step.itemThree = this.ionicForm.value.itemThree;
      this.Step.itemFour = this.ionicForm.value.itemFour;

      console.log(this.Step)

    }
  }
}