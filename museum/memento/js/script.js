$(document).ready(function () {
  var currentPage = 1;
  var totalPages = 4;

  var bgColors = ["#9e8a7c", "#1c1d23", "#9e8a7c", "#1c1d23"];
  var textColors = ["#412a22", "#9b9a99", "#412a22", "#9b9a99"];

  $("body").css({
    backgroundColor: bgColors[0],
    color: textColors[0]
  });

  // Show first page
  $("#page1").fadeIn(600);

  $(".hover-word").on("click", function () {
    $("#page" + currentPage).fadeOut(600, function () {

      currentPage = (currentPage % totalPages) + 1;

   
      $("body").css({
        backgroundColor: bgColors[currentPage - 1],
        color: textColors[currentPage - 1]
      });
      
      // Fade in next page
      $("#page" + currentPage).fadeIn(600);
    });
  });
});
