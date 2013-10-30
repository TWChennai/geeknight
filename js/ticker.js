var targetTS = targetDate.getTime(),
    $d = document.getElementById("days"),
    $h = document.getElementById("hours"),
    $m = document.getElementById("minutes"),
    $s = document.getElementById("seconds"),
    $tick = document.getElementById("tick"),
    $tock = document.getElementById("tock"),
    $tack = document.getElementById("tack"),
    $sElements = [ $tick, $tock, $tack ],
    $sClasses = [ "tick", "tock", "tack" ];

function updateCountDown() {
  var currentDate = new Date().getTime();
  var secondsLeft = (targetTS - currentDate) / 1000;
  if (secondsLeft < 0) secondsLeft = 0;

  var days = parseInt(secondsLeft / 86400);
  secondsLeft = secondsLeft % 86400;

  var hours = parseInt(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  var minutes = parseInt(secondsLeft / 60);
  var seconds = parseInt(secondsLeft % 60);

  $d.innerHTML = days;
  $h.innerHTML = hours;
  $m.innerHTML = minutes;

  var i = seconds % 3;
  $s.className = $sClasses[i];
  $sElements[i].innerHTML = seconds;
}

updateCountDown();
setInterval(updateCountDown, 1000);
