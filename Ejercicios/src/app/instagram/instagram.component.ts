import { Component, OnInit } from '@angular/core';
declare let $:any
@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})

export class InstagramComponent implements OnInit {

  constructor() { 
    $(document).ready(function () {

      let contador_configuracion:boolean = true
      $('.btn-configuracion').click(function () {
        if (contador_configuracion === true) {
          $('.panel-configuracion').css('height','90vh')
          contador_configuracion = false
        }else {
          $('.panel-configuracion').css('height','0vh')
          contador_configuracion = true
        }
      })
    })
    $(function () {
    })
  }

  ngOnInit(): void {
  }

}
