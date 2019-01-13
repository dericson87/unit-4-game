$(document).ready(function () {
  
  var goalNum = 0;

  var num1 = 0;
  var num2 = 0;
  var num3 = 0;
  var num4 = 0;

  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  function reset() {
    goalNum = Math.floor(Math.random() * 101 + 19);
    $('#randomNumber').text(goalNum);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#finalTotal').text(userTotal);
  }

  function winner() {
    $("#winLossAlert").html("<p>You win!</p>");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }

  function loser() {
    $("#winLossAlert").html("<p>You lose!</p>");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

  $('#one, #two, #three, #four').on('click', function (event) {
    console.log(event.target)
    var num = -1;
    if(event.target.id == 'one')
      num = num1;
    if(event.target.id == 'two')
      num = num2;
      if(event.target.id == 'three')
      num = num3;
      if(event.target.id == 'four')
      num = num4;
      console.log("Adding: " + num)
    userTotal = userTotal + num;
    $('#finalTotal').text(userTotal);
    if (userTotal == goalNum) {
      winner();
    } else if (userTotal > goalNum) {
      loser();
    }
  })

    
  reset();
});