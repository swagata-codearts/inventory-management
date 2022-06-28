import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Step } from '../Model/step.model';
import { StepTwo } from '../Model/step-two.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  ionicForm: FormGroup;
  ionicForm2: FormGroup;
 
  isSubmitted = false;
  Step:Step;
  StepTwo:StepTwo;
  constructor(public formBuilder: FormBuilder) { }
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      itemOne: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      itemTwo: ['', [Validators.required, Validators.minLength(1)]],
      itemThree: ['', [Validators.required, Validators.minLength(1)]],
      itemFour: ['', [Validators.required, Validators.minLength(1)]],
      
    })
    this.ionicForm2 = this.formBuilder.group({
      productOne: ['', [Validators.required, Validators.minLength(1)]],
      productTwo: ['', [Validators.required, Validators.minLength(1)]],
      productThree: ['', [Validators.required, Validators.minLength(1)]],
      productFour: ['', [Validators.required, Validators.minLength(1)]],
      productFive: ['', [Validators.required, Validators.minLength(1)]]
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

  submitForm2() {
  
    if (!this.ionicForm2.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      //console.log(this.ionicForm.value)
      this.StepTwo = new StepTwo();
      this.StepTwo.productOne = this.ionicForm2.value.productOne;
      this.StepTwo.productTwo = this.ionicForm2.value.productTwo;
      this.StepTwo.productThree = this.ionicForm2.value.productThree;
      this.StepTwo.productFour = this.ionicForm2.value.productFour;
      this.StepTwo.productFive = this.ionicForm2.value.productFive;

      console.log(this.StepTwo)

    }
  }
}