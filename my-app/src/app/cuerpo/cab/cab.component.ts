import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cab',
  templateUrl: './cab.component.html',
  styleUrls: ['./cab.component.css']
})
export class CabComponent implements OnInit{

  fbURL="http://www.facebook.com/Tobias.te.amo";
  pinURL="https://ar.pinterest.com/silborsa";
  linURL="https://www.linkedin.com/in/licspb";
  tgmURL="https://t.me/51lv4n4_ok";
  
  fbSRC="../assets/face.png";
  pinSRC="../assets/pint.png";
  linSRC="../assets/lin.png";
  tgmSRC="../assets/tgm.png";
  logSRC="../assets/login.png";

  ngOnInit(): void {
    
  }
}
