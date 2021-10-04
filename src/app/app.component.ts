import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator';
  num1!:number;
  num2!:number;
  result!:number;

  getValue(value:any){
    this.num1=parseInt(value);
  }

  getValue2(value:any){
    this.num2=parseInt(value);
  }

  add(){
    this.result=this.num1+this.num2;
  }

  sub(){
    this.result=this.num1-this.num2;
  }

  mul(){
    this.result=this.num1*this.num2;
  }

  div(){
    this.result=this.num1/this.num2;
  }
}
