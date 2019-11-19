$(document).ready(function() {
  $("form#booker").submit(function(event){
    var nameInput = $("input#nameInput").val();

    var radioValue = $("input[name='date']:checked").val();

    var timeValue = $("#times").val();

    $(".times").text(timeValue);
    $(".date").text(radioValue);
    $(".nameInput").text(nameInput);

    $("#step2").show();

    event.preventDefault();
  });
});
