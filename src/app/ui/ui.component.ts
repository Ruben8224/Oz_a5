import { Component, OnInit } from '@angular/core';
import { simpson } from '../simpson/simpson';
import { t } from '../distribucion-t/t';
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  f: string = "";
  x0: number = 0;
  x1: number = 0;
  num_seg: number = 0;
  dof: number = 0;
  resultnumber: number = 0;
  resultString: string = "";
  TextSimpson: number = 0;
  TextT: number = 0;

  ngOnInit(): void {
  }

  Simpson() {
    let myresult = 0;
    myresult = simpson(this.f, this.x0, this.x1, this.num_seg, this.dof);
    this.resultnumber = myresult;
    this.TextSimpson = this.resultnumber;
  }

  FuncionT() {
    let myresult = 0;
    myresult = t(this.dof, this.num_seg, this.x1);
    this.resultnumber = myresult;
    this.TextT = this.resultnumber;
  }
}
