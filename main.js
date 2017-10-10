
var app = {};
app.menuVisible = false;
app.keyCodeESC = 27;



$(document).ready(function(){

 
    /*fixed header*/



   /*hamburger button*/

    app.revealMenu = function(){
        app.menuVisible = true;
        var openTimeline = anime.timeline();
        openTimeline
        .add({
        targets: '.menu',
        translateX: ["100vw",'0'],
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
            targets: '.menu ul li span',
            translateY:["-56px","0"],
            opacity:1,
            duration:860,
            easing: "easeOutExpo",
            delay: function(el, i, l) {
                return i * 100;
            },
            offset:"-=860"            
        })

    }
    app.closeMenu = function(){
        app.menuVisible = false;
        var closeTimeline = anime.timeline();
        closeTimeline
        .add({
            targets:'.close',
            opacity:0,
            easing: "easeOutExpo",
            duration:860
        })
        .add({
            targets: '.menu ul li span',
            translateY:["-0","-56px"],
            opacity:1,
            duration:860,
            easing: "easeOutExpo",
            delay: function(el, i, l) {
                return i * 100;
            },
            offset:"-=860"            
        })
        .add({
            targets: '.menu',
            translateX: "100vw",
            easing: "easeOutExpo",
            duration: 860,
            offset:"-=860"   
        })
    }
    app.handleESCKey = function() {
        $(document).trigger("pressed:ESC");
        if (app.menuVisible) app.closeMenu();
    }

   //hamburger button hover
    $(".ham").mouseenter(function(){ 
        $(".ham > span").addClass("ham_hover");
    });

    $(".ham").mouseleave(function(){ 
        $(".ham > span").removeClass("ham_hover");
    });

    //open menu
   
    $(".ham").click(function(){
        app.revealMenu();
    });
  
    //close menu
    $(".close").click(function(){
        app.closeMenu();
    });

    // Hide nav if clicked outside of a menu alternative
    $('.menu').click(function(e) {
        app.closeMenu();
    });

      // Listen to ESC, close menu if visible
    $(document).keyup(function(e) {
        if (e.keyCode == app.keyCodeESC) app.handleESCKey();
    });


    //typed string

}); 