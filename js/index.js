//loadfunctions{
function loadfuncs(){
	goSlider();
}
//menu js
$("#menu").click(function(event) {
  event.preventDefault();
  $(this).toggleClass("on");
});
function menuState(){
 var debug = document.getElementById("debug");
	debug.innerHTML == "1" ? debug.innerHTML = "0" : debug.innerHTML = "1";
}
//end menu js
function revealLinksbar(){
var linksbar = document.getElementById("linksbar");
	linksbar.style.marginTop == "12vh" ? linksbar.style.marginTop = "0" : 
linksbar.style.marginTop = "12vh";
}
//Slider begins...

function toggleSlide1() {
var contentId = document.getElementById("slide1");
  contentId.style.height == "350px" ? contentId.style.height = "0px" : 
contentId.style.height = "350px"; 
}
function toggleSlide2() {
var contentId = document.getElementById("slide2");
  contentId.style.height == "350px" ? contentId.style.height = "0px" : 
contentId.style.height = "350px"; 
}
function toggleSlide3() {
var contentId = document.getElementById("slide3");
  contentId.style.height == "350px" ? contentId.style.height = "0px" : 
contentId.style.height = "350px"; 
}
function clearSlide1() {
var contentId = document.getElementById("slide1");
  contentId.style.height ="0px";
}
function clearSlide2() {
var contentId = document.getElementById("slide2");
  contentId.style.height = "0px";
}
function clearSlide3() {
var contentId = document.getElementById("slide3");
  contentId.style.height = "0px";
}
function toggleOne() {

clearSlide1();
clearSlide2();
clearSlide3();
toggleSlide1();

}
function toggleTwo() {

clearSlide3();
clearSlide1();
toggleSlide2();

}
function toggleThree() {

clearSlide2();
clearSlide1();
toggleSlide3();

}
/** Timer**/
function nextSlide1() {
	
toggleOne();
button1();

}
function nextSlide2() {
	
toggleTwo();
button2();

}
function nextSlide3() {
	
toggleThree();
button3();

}
function goSlider(){
setTimeout(nextSlide1, 0);
setTimeout(nextSlide2, 10000);
setTimeout(nextSlide3, 20000);
}
setInterval (goSlider, 30000);
function button1() {
var slide1d = document.getElementById("slide1");
var button1d = document.getElementById("b1");
var button2d = document.getElementById("b2");
var button3d = document.getElementById("b3");
if (slide1d.style.height = "350px") {
	button1d.style.opacity = "1";
	button2d.style.opacity = "0.5";
	button3d.style.opacity = "0.5";
} else {
	button1d.style.opacity = "0.5";
	
}}
function button2() {
var slide2d = document.getElementById("slide2");
var button1d = document.getElementById("b1");
var button2d = document.getElementById("b2");
var button3d = document.getElementById("b3");
if (slide2d.style.height = "350px") {
	button2d.style.opacity = "1";
	button1d.style.opacity = "0.5";
	button3d.style.opacity = "0.5";
} else {
	button2d.style.opacity = "0.5";
	
}}
function button3() {
var slide3d = document.getElementById("slide3");
var button1d = document.getElementById("b1");
var button2d = document.getElementById("b2");
var button3d = document.getElementById("b3");
if (slide3d.style.height = "350px") {
	button3d.style.opacity = "1";
	button2d.style.opacity = "0.5";
	button1d.style.opacity = "0.5";
} else {
	button3d.style.opacity = "0.5";
}}
/*side buttons*/
function nextSlide() {
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
if (slide1.style.height = "350px")
{
    slide1Next()
}
else {
    if (slide2.style.height = "350px")
    {
        slide2Next()
    }
    else {
        if (slide3.style.height = "350px")
        {
           slide3Next()
        }
    }
}}
/**/
function slide1Next() {
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
	button2();
	slide1.style.height = "0px";
	slide3.style.height = "0px";
	slide2.style.height = "350px";
}
function slide2Next() {
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
	slide2.style.height = "0px";
	slide1.style.height = "0px";
	slide3.style.height = "350px";
}
function slide3Next() {
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
	slide3.style.height = "0px";
	slide2.style.height = "0px";
	slide1.style.height = "350px";
}
//slider ends!
//below are some aesthetic tweaks between mobile & desktop
function alignText() {
var cboxh1 = document.getElementsByTagName("cboxh1");

if (window.innerWidth < 800) {
	cboxh1.style.textAlign = "left";
} else {
	cboxh1.style.textAlign = "center";	
}}