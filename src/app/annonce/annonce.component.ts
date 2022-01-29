import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  constructor() { }

  //constructor(private service : AnnonceService) { }
  //AnnonceList:any=[];


  ngOnInit() : void{
    
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
    //this.refreshAnnonceList();
    
  }

  //refreshAnnonceList(){
    //this.service.getAnnone().subscribe(data=>{this.AnnonceList=data;});
 // }

}
