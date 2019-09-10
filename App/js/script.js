$(document).ready(function(){

///////////////////////////////////////SLIDER FUNCTION///////////////////////////////////////

  $('.slider').slick({
    fade:true,
    speed:300,
    dots:true,
    slidesToShow: 1,
    adaptiveHeight: true,
	nextArrow: $('#button-next')    
  });

//remove main div click event
$("#removebutton").click(function(){
	$("#div-hover").fadeOut("slow");
});



///////////////////////////////////////LOCATION BUTTON FUNCTION///////////////////////////////////////


//Move to Auckland 
document.getElementById('fly-Auckland').addEventListener('click', function () {
map.flyTo({
center: [174.7633,-36.8485], zoom:11});
});

//Move to Rotorua 
document.getElementById('fly-Rotorua').addEventListener('click', function () {
map.flyTo({
center: [176.2497,-38.1368], zoom:13});
});

//Move to Wellington 
document.getElementById('fly-Wellington').addEventListener('click', function () {
map.flyTo({
center: [174.7762,-41.2865], zoom:13});
});

//Move to Christchurch 
document.getElementById('fly-Christchurch').addEventListener('click', function () {
map.flyTo({
center: [172.6362,-43.5321], zoom:11});
});

//Move to Queenstown 
document.getElementById('fly-Queenstown').addEventListener('click', function () {
map.flyTo({
center: [168.6626,-45.0312], zoom:13});
});


//Go to next slide after selection

$('#fly-Auckland').click(function(){
    $(".slider").slick('slickNext');
});

$('#fly-Rotorua').click(function(){
    $(".slider").slick('slickNext');
});

$('#fly-Wellington').click(function(){
    $(".slider").slick('slickNext');
});

$('#fly-Christchurch').click(function(){
    $(".slider").slick('slickNext');
});

$('#fly-Queenstown').click(function(){
    $(".slider").slick('slickNext');
});






















}); //IFFE ENDS