var targetTS = targetDate.getTime(),
    $d = document.getElementById("days"),
    $h = document.getElementById("hours"),
    $m = document.getElementById("minutes"),
    $s = document.getElementById("seconds"),
    $tick = document.getElementById("tick"),
    $tock = document.getElementById("tock");

function updateCountDown() {
  var currentDate = new Date().getTime();
  var secondsLeft = (targetTS - currentDate) / 1000;

  var days = parseInt(secondsLeft / 86400);
  secondsLeft = secondsLeft % 86400;

  var hours = parseInt(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  var minutes = parseInt(secondsLeft / 60);
  var seconds = parseInt(secondsLeft % 60);

  $d.innerHTML = days;
  $h.innerHTML = hours;
  $m.innerHTML = minutes;

  if (seconds % 2 == 0) {
    $tick.innerHTML = seconds;
    $s.className = "";
  } else {
    $tock.innerHTML = seconds;
    $s.className = "odd";
  }
}

updateCountDown();
setInterval(updateCountDown, 1000);
