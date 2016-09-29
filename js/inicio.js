//Acciones cuando el DOM está listo
$(document).ready(function(){
//  $('.carousel.carousel-slider').carousel({full_width: true,indicators: true});
  $(document).ready(function(){$('.slider').slider({full_width: true});});
//  $('.carousel').carousel();
})

// Checar si hubo scroll cada cierto tiempo
var  didScroll = false;
$(window).scroll(function(){
      didScroll = true;
});
setInterval(function() {
  if ( didScroll ) {
    didScroll = false;
    //Acciones que se ejecutan si hubo scroll
    fix_nav_tienda();
  }
}, 100);

//Fijar navbar de tienda
var offset_galeria = 1000;
$(window).load(function() {
  offset = $("#nav-tienda").offset();
  offset_galeria = offset.top;
});
function fix_nav_tienda(){
  if($(document).scrollTop() > offset_galeria){
    $("#nav-tienda").addClass("nav-tienda_fixed");
  }
  else{
    $("#nav-tienda").removeClass("nav-tienda_fixed");
  }
}
