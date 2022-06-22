$(document).ready(function() {
    $("hvr1").hover(function() {
        $(this).hide();
        $(this).fadeIn();
        $(this).text("You hovered over me!");
    },function() {
        $(this).hide();
        $(this).fadeIn();
        $(this).text("Paris is the capital of France. Hover over me!"); 
    });
});