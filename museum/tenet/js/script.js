$(function () {
  function reportSizes() {
    console.clear();

    console.log("BODY:", {
      width: $("body").width(),
      height: $("body").height()
    });

    console.log("TEXT CONTAINER:", {
      width: $(".text-container").width(),
      height: $(".text-container").height()
    });

    $(".line").each(function (i) {
      console.log("LINE " + (i + 1) + ":", {
        width: $(this).width(),
        height: $(this).height()
      });
    });

    console.log("BUTTON CONTAINER:", {
      width: $(".button-container").width(),
      height: $(".button-container").height()
    });
  }

  reportSizes();


  $(window).on("resize", reportSizes);
});
