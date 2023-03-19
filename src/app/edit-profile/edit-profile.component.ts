import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  profileData:any;
  profileForm!: FormGroup ;
  genderOptions: string[]=["Female", "Male"] 
  
  constructor(public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
       this.profileForm = new FormGroup({
      name : new FormControl(''),
      domain : new FormControl(''),
      gender : new FormControl(''),
      dob : new FormControl(''),
      pnumber: new FormControl(''),
      location : new FormControl('')
    })
     }


  ngOnInit(): void {
    this.profileData = this.data.data;
    debugger;
   // this.name = this.name.setValue('Nancy');
   this.profileForm.patchValue( {
    
    name: this.profileData.name, 
    domain: this.profileData.domain,
    gender: this.profileData.gender,
    dob: new Date(this.profileData.dob).toLocaleTimeString(),
    pnumber: this.profileData.pnumber,
    location: this.profileData.location
    
  });
  }
  onCancel():void{
    this.dialogRef.close();
  }

  onSave():void{
    console.log(this.profileForm.value);
    this.dialogRef.close(this.profileForm.value);
  }
}
