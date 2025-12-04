$(document).ready(function() {
  var currentPage = 1;
  var totalPages = 4;

  // Show the first page initially
  $("#page" + currentPage).fadeIn();

  // Navigate when the highlighted word is clicked
  $(".hover-word").on("click", function() {
    $("#page" + currentPage).fadeOut(function() {
      // Determine the next page
      if(currentPage === 4) {
        currentPage = 1; // loop back to first page
      } else {
        currentPage++;
      }
      $("#page" + currentPage).fadeIn();
    });
  });
});
