$(document).ready(function() {
    $("hvr1").hover(function() {
        $(this).text("You hovered over me!");
    },function() {
        $(this).text("Paris is the capital of France. Hover over me!");
    });
});