let x = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
$("#rest").hide();
$(document).ready(function() {
    $("hvr1").hover(function() {
        $(this).hide();
        $(this).fadeIn();
        $(this).text("You hovered over me!" +x+x+x);
        $("#rest").fadeIn();
    },function() {
        $(this).hide();
        $(this).fadeIn();
        $(this).text("Paris is the capital of France. Hover over me!");
        $("#rest").fadeOut();
    });
});