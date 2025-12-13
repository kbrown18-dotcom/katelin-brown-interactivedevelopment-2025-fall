$(document).ready(function () {

  const pageOne = [
    "For me,",
    "I think this is the end",
    "of a beautiful friendship."
  ];

  const pageTwo = [
    "But for me,",
    "it's just",
    "the beginning."
  ];

  let currentPage = 1;
  const lines = $(".line");
  let lineIndex = 0;
  let charIndex = 0;
  let textArray = pageOne;
  let currentText = "";

  function resetLines() {
    lines.text("").css("opacity", 0);
    lineIndex = 0;
    charIndex = 0;
    currentText = "";
  }

  function typeLine() {
    const line = lines.eq(lineIndex);
    const fullText = textArray[lineIndex];

    line.css("opacity", 1);

    if (charIndex < fullText.length) {
      currentText += fullText.charAt(charIndex);
      line.text(currentText);
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      lineIndex++;
      charIndex = 0;
      currentText = "";

      if (lineIndex < textArray.length) {
        setTimeout(typeLine, 600);
      }
    }
  }

  // page one starts
  typeLine();

  $("#nextBtn").on("click", function (e) {
    e.preventDefault();

    if (currentPage === 1) {
      currentPage = 2;
      textArray = pageTwo;

      $(".text-container").addClass("right-align");
      $("body").css({
        backgroundColor: "#222123",
        color: "#7c9478"
      });

      resetLines();
      typeLine();

      $(".button-container").html(`
        <a href="#" class="next-button" id="restartBtn">Restart</a>
        <a href="../../index.html" class="next-button">Lobby</a>
      `);

      $(".button-container").addClass("two-buttons");
    }
  });

  $(document).on("click", "#restartBtn", function (e) {
    e.preventDefault();
    location.reload();
  });

});
