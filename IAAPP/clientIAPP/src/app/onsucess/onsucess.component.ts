import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'onsucess',
  templateUrl: './onsucess.component.html',
  styleUrls: ['./onsucess.component.css']
})
export class OnsucessComponent implements OnInit {
  @Input() xrs;
  hardness:string="";
  constructor() { }

  ngOnInit(): void {
    this.hardness=this.xrs;
  }

}
