$(function () {
  function reportSizes() {
    console.clear();

    console.log("BODY:", {
      width: $("body").width(),
      height: $("body").height()
    });

    console.log("HEADER:", {
      width: $("header").width(),
      height: $("header").height()
    });

    console.log("FILM CONTAINER:", {
      width: $(".film-container").width(),
      height: $(".film-container").height()
    });

    $(".film").each(function (i) {
      const id = $(this).attr("id") || "film " + (i + 1);

      console.log(id.toUpperCase() + " BOX:", {
        width: $(this).width(),
        height: $(this).height()
      });

      console.log(id.toUpperCase() + " TITLE:", {
        width: $(this).find(".title").width(),
        height: $(this).find(".title").height()
      });

      console.log(id.toUpperCase() + " RUNTIME:", {
        width: $(this).find(".runtime").width(),
        height: $(this).find(".runtime").height()
      });
    });

    console.log("FOOTER:", {
      width: $("footer").width(),
      height: $("footer").height()
    });
  }

  reportSizes();

  $(window).on("resize", reportSizes);
});
