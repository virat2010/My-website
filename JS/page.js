$(document).ready(function(){
    $("#button").click(function(){
        $("#animate").toggle("fast").animate({left:"+=10px", top: "+=10px"}, "fast");
        $("#moveAmount").val(parseInt($("#moveAmount").val())+2);  
        $("#moveAmount").trigger('change');
    });
});