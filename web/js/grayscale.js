// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}
$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

// particlesJS.load(@dom-id, @path-json, @callback (optional)); 
//Home
particlesJS.load('home-particles', 'particles/home_particle.json', function() {
    // console.log('callback - particles.js config loaded');
});
//BG
particlesJS.load('bg-particles', 'particles/bg_particle.json', function() {
    // console.log('callback - particles.js config loaded');
});

var safeWhoAmiIArray = [
    "I'm a Full-Stack Web Developer",
    "I'm a Penetration Tester",
    "I'm a Blockchain Engineer",
    "I'm a Terrible Dancer ᕕ( ᐛ )ᕗ",
    ]

var whoAmIArrayTech = [
    "My name's Sadan. <br> I'm a Full-Stack Web Developer",
    "My name's Sadan. <br> I'm a DevOps Engineer",
    "My name's Sadan. <br> I'm a Penetration Tester",
    "My name's Sadan. <br> I'm a Linux Server Admin",
    "My name's Sadan. <br> I'm a Blockchain Engineer",
    ];

var whoAmIArrayKindaTech = [
    "My name's Sadan. <br> I'm a Computer Enthusiast",
    "My name's Sadan. <br> I'm a Video Game Nerd",
    "My name's Sadan. <br> I'm a Vimposter",
    "My name's Sadan. <br> I'm an Introvert",
    "My name's Sadan. <br> I'm a C fanboy",
    ];

var whoAmIArrayFunny = [
    "My name's Sadan. <br> I'm a pro Alistar (moo)",
    "My name's Sadan. <br> I'm Gosu at StarCraft (ggnore)",
    "My name's Sadan. <br> I'm a Terrible Dancer ᕕ( ᐛ )ᕗ",
    "My name's Sadan. <br> I'm a pro memester ( ͡° ͜ʖ ͡°)",
    "My name's Sadan. <br> It's pronounced Jif (Soft G)",
    ];

function getRandNum(){
   return Math.floor(Math.random()*5); 
}

// save format
function aboutMe(){
    $(".element").typed({
        strings: [safeWhoAmiIArray[0], safeWhoAmiIArray[1], safeWhoAmiIArray[2], safeWhoAmiIArray[3], "¯\\_(ツ)_/¯"],
        typeSpeed: 50,
        loop: false,
    });
};

// Adventurious Typed.js style
// function aboutMe(){
//     $(".element").typed({
//         strings: ["^3000 "+whoAmIArrayTech[getRandNum()], whoAmIArrayKindaTech[getRandNum()], whoAmIArrayFunny[getRandNum()], "¯\\_(ツ)_/¯"],
//         typeSpeed: 0,
//         loop: false,
//     });
// };

// Selecting the container element
var el = document.querySelector('.my-name-text');

// All the possible options (these are the default values)
// Remember that every option (except individualDelays) can be defined as single value or array
var options = {
    size: 100,         // Font size, defined by the height of the letters (pixels)
    weight: 10,         // Font weight (pixels)
    rounded: true,    // Rounded letter endings
    // color: '#5F6062',  // Font color
    color: '#FFF',  // Font color
    duration: 2,       // Duration of the animation of each letter (seconds)
    delay: [0, 0.05],  // Delay animation among letters (seconds)
    fade: 0.5,         // Fade effect duration (seconds)
    easing: d3_ease.easeCubicInOut.ease,   // Easing function
    individualDelays: false,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
};

// Initializing the text (Letters parameters: container-element, options)
var myText = new Letters(el, options);

// Selecting the container element
var wel = document.querySelector('.my-welcome-text');

// All the possible options (these are the default values)
// Remember that every option (except individualDelays) can be defined as single value or array
var woptions = {
    size: 100,         // Font size, defined by the height of the letters (pixels)
    weight: 10,         // Font weight (pixels)
    rounded: true,    // Rounded letter endings
    // color: '#5F6062',  // Font color
    color: '#FFF',  // Font color
    duration: 2,       // Duration of the animation of each letter (seconds)
    delay: [0, 0.05],  // Delay animation among letters (seconds)
    fade: 0.5,         // Fade effect duration (seconds)
    easing: d3_ease.easeCubicInOut.ease,   // Easing function
    individualDelays: false,               // If false (default), every letter delay increase gradually, showing letters from left to right always. If you want to show letters in a disorderly way, set it to true, and define different delays for the desired letters.
};

// Initializing the text (Letters parameters: container-element, options)
var myWelText = new Letters(wel, woptions);

// Show letters with the default options defined
// mytext.show();

// Hide letters with the default options defined
// myText.hide();

// Toggle letters with the default options defined
// myText.toggle();

// An example with all the possible options for triggers
// Parameters (JSON): duration, delay, fade, easing, individualDelays, callback
var newOptions = {
    duration: 2,
    delay: 0.2,
    fade: 1,
    easing: d3_ease.easeCircleInOut.ease,
    individualDelays: false,
    callback: function(){
        // myText.hide({callback:function(){myWelText.show({callback:aboutMe()});$(".my-name-text").hide();$(".my-welcome-text").show();}});
        aboutMe();
    }
};
// These new options will override the options defined in the initialization
myText.show(newOptions);

// Show letters instantly, without any animation at all
// There is a hideInstantly and toggleInstantly function, too
// myText.showInstantly();  // Shortcut for myText.show(0, 0, 0);
