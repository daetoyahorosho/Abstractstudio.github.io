$.fn.parallax = function(resistance, mouse) {
  $el = $(this);
  TweenLite.to($el, 0.3, {
    x: -((mouse.clientX - window.innerWidth / 2) / resistance),
    y: -((mouse.clientY - window.innerHeight / 2) / resistance)
  });
};

$(document).mousemove(function(e) {
  $(".background").parallax(10, e);
  $(".cloud1").parallax(15, e);
  $(".cloud2").parallax(28, e);
  $(".cloud3").parallax(240, e);
  });
