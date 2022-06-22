$(document).ready(function() {
    $("hvr1").hover(function() {
        $(this).text("You hovered over me!");
        $(".hvr").animate({opacity:0.5});
    },function() {
        $(this).text("Paris is the capital of France. Hover over me!");
        $(".hvr").animate({opacity:1});
    });
    $("fcp").hover(function() {
        $(this).text("This will take you to a fun project I made in Khan Academy.");
    },function() {
        $(this).text("Fun Canvas Project!");
    });
});