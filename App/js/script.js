$(document).ready(function(){


//SLIDER FUNCTION

  $('.slider').slick({
    fade:true,
    speed:300,
    dots:true,
    slidesToShow: 1,
    adaptiveHeight: true,
  });


//remove main div click event
$("#removebutton").click(function(){
	$("#div-hover").fadeOut("slow");
});











}); //IFFE ENDS