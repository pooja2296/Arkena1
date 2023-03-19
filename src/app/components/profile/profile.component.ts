import { Component, OnInit } from '@angular/core';
import { EditProfileComponent } from 'src/app/edit-profile/edit-profile.component';
import {
  MatDialog
} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileData: any;
  predefinedData = {
    name: 'Mary, Jason & Hodge of Attorney',
    domain: 'www.mjhattorenys.com',
    gender: 'Male',
    dob: '8th June 1979',
    pnumber: 8654321234,
    location: '12 street, Silicon Valley, Avenue NE, Huntsville',
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.setFormValue(this.predefinedData);
  }

  setFormValue(result: any) {
    this.profileData = {
      name: result.name,
      domain: result.domain,
      gender: result.gender,
      dob: result.dob,
      pnumber: result.pnumber,
      location: result.location,
    };
  }

  onEditProfile(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      data: { data: this.predefinedData },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.setFormValue(result);
      }
    });
  }
}
