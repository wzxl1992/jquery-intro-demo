/* app.js
* main script file for our little application
* */

"use strict";

$(document).ready(function() {
    $('p a').attr('target', '_blank');
    $('section').hide().fadeIn(1000);

    $('nav a, p a[href="#top"]').click(function(eventObject) {
        console.log(this.hash);
        var targetElement = $(this.hash);
        $('html, body').animate({scrollTop:targetElement.offset().top - navHeight}, 700);
        eventObject.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceholder = $('.nav-placeholder');
    navPlaceholder.height(navHeight);

    $(window).scroll(function(){
        var scrollPos = $(this).scrollTop();
        //console.log();
        if (scrollPos > navTop){
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    $('#exit-button').click(function(){
        $('#confirm-exit-modal').modal();
    });
    $('#confirm-exit-button').click(function(){
        window.location = 'http://ischool.uw.edu';
    });
});
