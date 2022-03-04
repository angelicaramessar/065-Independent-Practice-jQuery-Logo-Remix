$(".board").hide();

//1
$(".start").click(function() {
   $(".board").slideDown();
});

//2
$(".end").click(function() {
    $(".board").slideUp();
});

//3
$("button").hover(function() {
    $(".board").css("border", "solid blue 5px");
});

//4
$(".board").mouseenter(function() {
	$(".board").css("border", "solid black 5px");
});

//5
$("img").dblclick(function() {
    $(".company-slogan").show();
    $(".company-slogan").text("Connecting Communities. Creating Opportunities");
});


//6
$("img").mouseleave(function() {
    $(".company-slogan").hide();
    $(".company-slogan").text("Connecting Communities. Creating Opportunities");
});
    
    
    
    