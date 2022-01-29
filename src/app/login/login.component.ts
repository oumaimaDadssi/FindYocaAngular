import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getScript('assets/js/jquery.min.js');
    $.getScript('assets/js/popper.min.js');
    $.getScript('assets/js/bootstrap.min.js');
    $.getScript('assets/js/main.js');
  }

}
