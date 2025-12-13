$(document).ready(function() {
  var countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 1); // 1 day from now

  function updateCountdown() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    if (distance < 0) {
      distance = 0;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#days').text(days < 10 ? '0' + days : days);
    $('#hours').text(hours < 10 ? '0' + hours : hours);
    $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
    $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

