import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/jquery.min.js');
    $.getScript('assets/js/popper.min.js');
    $.getScript('assets/js/bootstrap.min.js');
    $.getScript('assets/js/main.js');
  }

}


