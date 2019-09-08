$(document).ready(function(){


//SLIDER FUNCTION

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



//fire loading screen

//Display results in div
// $("#results")


//click event: Display food options 

}); //IFFE ENDS