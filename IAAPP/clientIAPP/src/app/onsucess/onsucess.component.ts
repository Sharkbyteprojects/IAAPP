import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'onsucess',
  templateUrl: './onsucess.component.html',
  styleUrls: ['./onsucess.component.css'],
})
export class OnsucessComponent implements OnInit {
  @Input() xrs;
  hardness: string = '';
  constructor() {}
  topsecret = '';
  ngOnInit(): void {
    const avail: string[] = [
      'MY SECRET IS A RANDOM THING',
      'MY LEMONCAKE HAS 3 THING\n\nBUTTER\nLEMONS\nEGGS',
      'I HATE TRASH',
      'HAVE YOU EATEN MY CAR?',
      'WHAT IS HERE?',
      'THIS APP USE ANGULAR',
      'THIS APP USE NODE.JS',
      ':))',
      '////MYFILE////',
      'Samba is insecure',
      'eval is evil',
      'I LIKE SOME CATS',
    ];
    this.topsecret = `TOP SECRET:\n\n${
      avail[Math.round(Math.random() * (avail.length - 1))]
    }`;
    this.hardness = this.xrs;
  }
}
