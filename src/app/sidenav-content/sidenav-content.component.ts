import { Component, OnInit } from '@angular/core';
export interface Section {
  name: string;
  updated: Date;
  url: string;
}
@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  folders: Section[] = [
    {
      name: 'Home',
      updated: new Date('1/1/16'),
      url: '/home',
    },
    {
      name: 'Academy',
      updated: new Date('1/17/16'),
      url: '/academy',
    },
    {
      name: 'Profile',
      updated: new Date('1/28/16'),
      url: '/profile',
    },
  ];
  account: Section[] = [
    {
      name: 'Setting',
      updated: new Date('2/20/16'),
      url: '/setting',
    },
    // {
    //   name: 'Logout',
    //   updated: new Date('1/18/16'),

    // },
  ];
}
