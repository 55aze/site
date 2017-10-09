
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
        var openTimeline = anime.timeline();
        openTimeline
        .add({
          targets: '.menu',
          translateX: ["100vm",'0'],
          easing: "easeOutExpo",
          duration: 860,
        })
        .add({
            targets:'.close',
            opacity:1,
            easing: "easeOutExpo",
            duration:860,
            offset:"-=200"
        })
        .add({
            targets: '.menu ul li',
            translateY:["-56px","0"],
            opacity:1,
            duration:860,
            delay: function(el, i, l) {
                return i * 100;
              },
            offset:"-=860"            
            
        })
      //  $(".menu").addClass("menu_show");
    });

    $(".close").click(function(){
        var closeTimeline = anime.timeline();
        closeTimeline
        .add({
            targets:".menu",
            translateX: ['0','100vm'],            
            duration:500,
            loop:false
        })
        //$(".menu").removeClass("menu_show");
    });


    // $(".nav").mouseleave(function(){ 
    //     hamburg_hover.translateY = 0;
    //     hamburg_hover.play;
    // });

    //typed string

}); 