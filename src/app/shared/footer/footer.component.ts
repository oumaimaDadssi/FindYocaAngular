import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('assets/js/jquery.min.js');
    $.getScript('assets/js/jquery-migrate-3.0.1.min.js');
    $.getScript('assets/js/popper.min.js');
    $.getScript('assets/js/bootstrap.min.js');
    $.getScript('assets/js/jquery.easing.1.3.js');
    $.getScript('assets/js/jquery.waypoints.min.js');
    $.getScript('assets/js/jquery.stellar.min.js');
    $.getScript('assets/js/owl.carousel.min.js');
    $.getScript('assets/js/jquery.magnific-popup.min.js');
    $.getScript('assets/js/aos.js');
    $.getScript('assets/js/jquery.animateNumber.min.js');
    $.getScript('assets/js/bootstrap-datepicker.js');
    $.getScript('assets/js/jquery.timepicker.min.js');
    $.getScript('assets/js/scrollax.min.js');
    $.getScript('assets/js/google-map.js');
    $.getScript('assets/js/main.js');
  
  }

}
