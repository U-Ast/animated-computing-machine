import {Component, Input, OnInit } from '@angular/core';

@Component({
 selector: 'app-child',
 templateUrl : './child.component.html',
 styleUrls : ['./child.component.css']
})
export class ChildComponent {
    @Input()
    massage = 'Нажми на ок для отображения текста';
    constructor () {
       alert(this.massage) 
    }
   
 }
  
