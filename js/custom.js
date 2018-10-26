////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var resizeId;

$(document).ready(function($) {
    "use strict";

   

    $("#ts-content .ts-bubble-border, #ts-footer .ts-bubble-border").each(function () {
        var $this = $(this);
        $this.isInViewport(function(status) {
            if (status === "entered") {
                $this.addClass("in");
            }
            else if (status === "leaved") {
                $this.removeClass("in");
            }
        });
    });


    $("body").imagesLoaded( function() {
        $("body").addClass("loading-done");
        $("#ts-first .ts-bubble-border").each(function(){
            var $this = $(this);
            var $active = $(this).find(".active");

            $this.width( $this.find(".active").outerWidth() );
            $this.height( $this.find(".active").outerHeight() );

            setTimeout(function(){
                $("#ts-first .ts-bubble-border").addClass("in");
                setInterval(function(){
                    $this.find(".active").addClass("out");
                    setTimeout(function(){
                        $this.find(".active").removeClass("active out");
                        if( $active.next().length ) {
                            $active.next().addClass("active");
                            $active = $active.next();
                        }
                        else {
                            $active = $this.find(".ts-title-rotate span:first");
                            $active.addClass("active");
                        }
                        $this.width( $this.find(".active").outerWidth() );
                        $this.height( $this.find(".active").outerHeight() );

                    }, 800);
                }, 3000);
            }, 500);

        });
        $("[data-animate]").scrolla({
            mobile: true
        });
    });


  $('.navbar-nav .nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

    $(".ts-img-into-bg").each(function() {
        $(this).css("background-image", "url("+ $(this).find("img").attr("src") +")" );
    });

    //  Background

        $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
            var $this = $(this);

            if( $this.hasClass("ts-separate-bg-element") ){
                $this.append('<div class="ts-background">');

                // Background Color

                if( $("[data-bg-color]") ){
                    $this.find(".ts-background").css("background-color", $this.attr("data-bg-color") );
                }

                // Particles

                if( $this.attr("data-bg-particles-line-color") || $this.attr("data-bg-particles-dot-color") ){
                    $this.find(".ts-background").append('<div class="ts-background-particles">');
                    $(".ts-background-particles").each(function () {
                        var lineColor = $this.attr("data-bg-particles-line-color");
                        var dotColor = $this.attr("data-bg-particles-dot-color");
                        var parallax = $this.attr("data-bg-particles-parallax");
                        $(this).particleground({
                            density: 15000,
                            lineWidth: 0.2,
                            lineColor: lineColor,
                            dotColor: dotColor,
                            parallax: parallax,
                            proximity: 200
                        });
                    });
                }

                // Background Image

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.find(".ts-background").append('<div class="ts-background-image">');
                    $this.find(".ts-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                    $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                    $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                    $this.find(".ts-background-image").css("opacity", $this.attr("data-bg-image-opacity") );

                    $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                    $this.find(".ts-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                    $this.find(".ts-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }

                // Parallax effect

                if( $this.attr("data-bg-parallax") !== undefined ){
                    $this.find(".ts-background-image").addClass("ts-parallax-element");
                }
            }
            else {

                if(  $this.attr("data-bg-color") !== undefined ){
                    $this.css("background-color", $this.attr("data-bg-color") );
                    if( $this.hasClass("btn") ) {
                        $this.css("border-color", $this.attr("data-bg-color"));
                    }
                }

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );

                    $this.css("background-size", $this.attr("data-bg-size") );
                    $this.css("background-repeat", $this.attr("data-bg-repeat") );
                    $this.css("background-position", $this.attr("data-bg-position") );
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                }

            }
        });


    $(".progress").each(function(){
        var $this = $(this);
        $this.find(".ts-progress-value").text( $this.attr("data-progress-width") );
        $this.isInViewport(function(status) {
            if (status === "entered") {
                $this.find(".progress-bar").width( $this.attr("data-progress-width") );
                $this.find(".ts-progress-value").css("left", $this.attr("data-progress-width"));
            }
        });
    });



// On RESIZE actions

    $(window).on("resize", function(){
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 250);
    });

// On SCROLL actions

    $(window).on("scroll", function(){
        if ( $(window).scrollTop() >= $(window).height() ) {
            $(".navbar").addClass("in");
        }
        else {
            $(".navbar").removeClass("in");
        }
    });

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Do after resize

function doneResizing(){
    //heroHeight();
    $(".owl-carousel").trigger('next.owl.carousel');
}

// Set Hero height

function heroHeight(){
    $(".ts-full-screen").height( $(window).height() );
}

// Smooth Scroll

$(".ts-scroll").on("click", function(event) {
    if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
    ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                }
            });
        }
    }
});



// Return scrollbar width

function getScrollBarWidth () {
    var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
        widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
}

function simpleMap(latitude, longitude, markerImage, mapStyle, mapElement, markerDrag){
    if (!markerDrag){
        markerDrag = false;
    }
    var mapCenter = new google.maps.LatLng(latitude,longitude);
    var mapOptions = {
        zoom: 13,
        center: mapCenter,
        disableDefaultUI: true,
        scrollwheel: false,
        styles: mapStyle
    };
    var element = document.getElementById(mapElement);
    var map = new google.maps.Map(element, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude,longitude),
        map: map,
        icon: markerImage,
        draggable: markerDrag
    });
}