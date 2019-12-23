import { Component, OnInit } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() {
    
   }
   
  ngAfterViewInit() {
    (function() {
      if ($(".stats").length > 0) {
        var t = 0;
        $(window).on("scroll", function() {
          var o = $(".stats").offset().top - window.innerHeight;
          0 == t &&
            $(window).scrollTop() > o &&
            ($(".stats .single-stat .counter").each(function() {
              var t = $(this),
                o = t.attr("data-count");
              $({ countNum: 0 }).animate(
                { countNum: o },
                {
                  duration: 3000,
                  easing: "swing",
                  step: function() {
                    t.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    t.text(this.countNum);
                  }
                }
              );
            }),
            (t = 1));
        });
      }
    })();

    
  }
  ngOnInit() {
    
  }

}
