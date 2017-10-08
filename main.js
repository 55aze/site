
$(document).ready(function(){


    //hamberger button

    // var hamburg_hover = anime({
    //     targets: '.nav span',
    //     // translateY: function(el, i) {
    //     //     return 6 +(-6*i);
    //     // },
    //     duration: 500,
    //     loop: false,
    //     autoplay:false
    //   });

    $(".ham").mouseenter(function(){ 
        //alert ("hovered");
        $(".ham > span").addClass("ham_hover");
    });

    $(".ham").mouseleave(function(){ 
        //alert ("hovered");
        $(".ham > span").removeClass("ham_hover");
    });

    $(".ham").click(function(){
        myTimeline
        .add({
          targets: '.menu',
          translateX: "100vm",
          easing: "easeOutExpo",
          duration: 860,
        })
        
       
       
        // anime({
        //     targets: ".menu",
        //     scaleX:  {
        //         value: 1,
        //         duration:2000,
        //     },
        //     easing: 'easeOutExpo',
        //     // scaleY: {
        //     //     value:1,
        //     //     duration:300,
        //     //     delay:500,
        //     //     transformOrigin:'center top'
        //     // },
            
        //     loop:false
        // });

        // anime({
        //     targets:'.menu ul li',
        //     translateY:20,
        //     opacity:1,
        //     delay: function()
        // })
      //  $(".menu").addClass("menu_show");
    });

    $(".close").click(function(){
        anime({
            targets:".menu",
            scaleY:0,
            opacity:0,
            duration:500,
            loop:false
        });
        //$(".menu").removeClass("menu_show");
    });


    // $(".nav").mouseleave(function(){ 
    //     hamburg_hover.translateY = 0;
    //     hamburg_hover.play;
    // });

    //typed string

}); 