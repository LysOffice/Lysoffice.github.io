$(document).ready(function() {
    window.onscroll = function() {stickymenu();}
});




var sticky = 52;
function stickymenu() {
  if (window.pageYOffset >= sticky) {
    
    $('.scrollToTop').addClass("top-on").removeClass("top-off");
  } else {
      
    $('.scrollToTop').addClass("top-off").removeClass("top-on");
  }
}

$(function() {
    $(".scrollToTop").click(function() {
        $("body").animate({scrollTop : 0}, 500);
    });
});