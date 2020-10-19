import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MyformserveService } from '../myformserve.service';
import { Student } from '../formdata';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
// export class MyformComponent{
//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//   });
// updateName() {
//   this.profileForm.firstName.setValue('Nancy');
// }
// }

// class MygetData {
//   public students: Student;
//   public errorMsg;
//   constructor(private _myformService: MyformserveService) { }

// ngOnInit(): void {
//   this._myformService.getStudents()
//     .subscribe(data => this.students = data.body,
//       error => this.errorMsg = error);
// }
// }

export class MyformComponent implements OnInit {
  public students: Student;
  errorMsg: String;
  myForm: FormGroup;
  message: string;
  errmessage: boolean = false;
  succmessage: boolean = false;

  constructor(private fb: FormBuilder, private _myformService: MyformserveService) { }
  ngOnInit(): void {
    this._myformService.getStudents()
      .subscribe(data => {
        this.students = data.body;
        this.myForm.patchValue({
          name: this.students.name,
          email: this.students.email,
          comment: this.students.comment,
          feedback: this.students.feedback
        });
      },
        error => {
          this.errorMsg = error;
          alert(this.errorMsg);
        }
      );
    this.initializeForm();
    this.onChanges();
    // this.updateProfile();

  }
  initializeForm(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      // feedback: this.fb.group({
      //   great: false,
      //   okay: false,
      //   Good: false
      // }),
      feedback: ['', Validators.required],
      comment: ['']
    });
  }
  onSubmit() {
    console.log(this.myForm.value);
    this._myformService.postStudents(this.myForm.value).subscribe(
      response => {
        console.log('Success!', response);
        this.succmessage = true;
        this.errmessage = false;
        this.myForm.reset();
        this.myForm.patchValue({
          name: '',
          email: '',
          comment: '',
          feedback: ''
        });
      },
      error => {
        console.log('Error!', error);
        this.errmessage = true;
        this.succmessage = false;
      }
    );
  }

  // updateProfile() {
  //   this.myForm.patchValue({
  //     name: 'this.students.name',
  //     email: 'megha@gmail.com',
  //     comment: 'Great work'
  //   });
  // }

  onChanges(): void {
    this.myForm.valueChanges.subscribe(val => {
      this.message =
        `Name : ${val.name} 
         Email : ${val.email} 
         Comment :  ${val.comment}
         Feedback : ${val.feedback}`;
    });
  }

}


