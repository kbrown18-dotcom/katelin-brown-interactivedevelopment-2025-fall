$(document).ready(function () {

  $("*").on("mouseenter", function (e) {
    e.stopPropagation(); 
    
    const tag = $(this).prop("tagName").toLowerCase();
    const w = $(this).outerWidth();
    const h = $(this).outerHeight();

    console.log(`${tag} → ${w}px × ${h}px`);
  });

});

$(document).mousemove(function(e) {
  const sparkle = $('<div class="sparkle">✦</div>');
  sparkle.css({
    left: e.pageX + "px",
    top: e.pageY + "px"
  });
  $("body").append(sparkle);

  sparkle.animate({
    opacity: 0,
    top: e.pageY - 10 + "px"
  }, 300, function() {
    sparkle.remove();
  });
});

$(".grid-item").each(function (i) {
  $(this)
    .css("opacity", 0)
    .delay(150 * i)
    .animate({ opacity: 1 }, 400);
});
