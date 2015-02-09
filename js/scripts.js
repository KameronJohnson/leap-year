var leapYear = function( year ) {
  if (( year % 400 === 0 ) || (( year % 4 === 0 ) && ( year % 100 !== 0 ))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".input-year").text(year);
    if (result) {
      $(".answer").text("IS");
    } else {
      $(".answer").text("isn't")
    }

    $("#result").show();
    event.preventDefault();
  });


});
