

$(document).ready(function() {
  var age = parseInt(prompt("How Old are you"));

  if (age >= 18) {
    $("#can-vote").removeClass("hide");
  } else {
    $("#cant-vote").removeClass("hide");
  }
});
