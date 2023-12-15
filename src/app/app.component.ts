import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  @ViewChild('g') inputForm:NgForm;
  defaultQuestion:string='pet';
  answer:string;
  user:{
    username:string,
    email:string,
    secret:string,
    answer:string,
    gender:string
  }={
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:''
  };
  submitted:boolean=false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userdata:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'Male'
    // });
    this.signupForm.form.patchValue({
      userdata:{
        username: suggestedName
      }
    });
  }

  genders:string[]=['Male','Female'];
  // onSubmit(form : NgForm){
	// 	console.log(form);
	// }

  onSubmit(){
    // console.log(this.signupForm);
    this.submitted=true;
    this.user.username=this.signupForm.value.userdata.username;
    this.user.email=this.signupForm.value.userdata.email;
    this.user.secret=this.signupForm.value.secret;
    this.user.answer=this.signupForm.value.questionAnswer;
    this.user.gender=this.signupForm.value.gender;

    this.signupForm.reset();
  }
  farToCell(degree:any):void{
    this.inputForm.form.patchValue({
      inputs:{Celsius: (degree-32)*5/9}
    })
  }
  cellToFar(degree:any):void{
    this.inputForm.form.patchValue({
      inputs:{farenheit: degree*9/5 + 32}
    })
  }
}
