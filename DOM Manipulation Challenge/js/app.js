$("#box1").css("background", "green");
$("#para1").css({"font-weight": "bold", "font-size": "200%"});
$(".box2").addClass("spin");
$("#button1").click(function() {
	alert("You clicked the button");
});

$("#box3").hover(function()  {
	$("#box3").css("background", "green");
}
,function() {
	$("#box3").css("background", "red");
});

$("#input1").keyup(function() {
	console.log($('#input1').val());
});

$( "#box4" ).click(function() {
  $( "#box4" ).animate({
    "left": "+=400px",
    "top": "+=150px"
  }, 1200 );
});
