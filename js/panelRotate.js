// JavaScript Document

$(document).ready(function() {
	$("#movieWrap").cycle({
		fx:		"scrollHorz",
		next:	"#clapperTwo",
		prev:	"#clapperOne",
		timeout: 0
	});
	
	/*ROTATE MOVIE REELS*/	
	/*$("#clapperOne, #clapperTwo").click(
		function()
		{
			$("#reelWrapA, #reelWrapB").stop().animate({rotation: 360},
			{
				duration: 500,
				step: function(now, fx)
			{
			
			$("#reelWrapA, #reelWrapB").css({"transform": "rotate("+now+"deg)"});
			}
		});
	});*/
	
	$(".bodyCopy, h2").animate({"display": "block"}, 5000, function()
	{
		$(".bodyCopy, h2").stop().fadeTo(1000, 0);
	});
	
	$(".setA, .setB, .setC, .setD, .setE, .setF, .setG, .setH, .setI, .setJ, .setK").hover(
	function()
	{
		$(this).css("cursor", "pointer");
		$(".setB").css("cursor", "pointer");
		$(".setC").css("cursor", "pointer");
		$(".setD").css("cursor", "pointer");
		$(".setE").css("cursor", "pointer");
		$(".setF").css("cursor", "pointer");
		$(".setG").css("cursor", "pointer");
		$(".setH").css("cursor", "pointer");
		$(".setI").css("cursor", "pointer");
		$(".setJ").css("cursor", "pointer");
		$(".setK").css("cursor", "pointer");
		$(".bodyCopy, h2").stop().fadeTo(1000, 1);
	},
	
	function()
	{
		$(".bodyCopy, h2").stop().fadeTo(1000, 0);
	});
	
	
	
	
	/*NEXT BUTTON*/
	/*$("#clapperTwo").click(function()
	{
		$(this).css("display", "none");
		$("#clapperTwo").css("display", "none");
		$("#clapperOne").css("display", "block");
		$("#clapperThree").css("display", "block");
		var currImg = $(".setA");
		var nextImg = currImg.next();
		
		currImg.animate({"margin-left": "-=1560px"}, 2000).css("float", "left");
		nextImg.animate({"margin-left": "0px"}, 2000);
		
	});
		   
	$("#clapperThree").click(function()
	{
		$("#clapperThree").css("opacity", ".5");
		var currImg = $(".setB");
		var nextImg = currImg.next();
		
		currImg.animate({"margin-left": "-=1560px"}, 2000).css("float", "left");
		nextImg.animate({"margin-left": "0px"}, 2000);
	});*/
	
		
	
	
	/*$("#clapperTwo").click(function()
	{
		var currImg = $(".show");
		var nextImg = currImg.next();
		
		currImg.removeClass("show").addClass("hidden");
		nextImg.addClass("show");
			
		if(nextImg.length == 1)
		{
			$("#clapperTwo").css("display", "none");
			$("#clapperThree").css("display", "block");
		}
	});
	
	$("#clapperThree").click(function()
	{
		var currImg = $(".show");
		var nextImg = currImg.next();
		
		currImg.removeClass("show").addClass("hidden");
		nextImg.addClass("show");
		
		if(nextImg.length == 1)
		{
			$("#clapperThree").css("display", "none");
			$("#clapperOne").css("display", "block");			
		}		
	});
	
	$("#clapperOne").click(function()
	{
		var currImg = $(".hidden");
		var prevImg = currImg.prev();
		
		currImg.removeClass("hidden").addClass("show");
		prevImg.addClass("hidden");
		
		if(prevImg.length == 1)
		{
			$("#clapperFour").css("display", "block");
			$("#clapperOne").css("display", "none");
		}		
	});
	
	$("#clapperFour").click(function()
	{
		var currImg = $(".hidden");
		var prevImg = currImg.prev();
		
		currImg.removeClass("hidden").addClass("show");
		prevImg.addClass("hidden");	
		
		if(prevImg.length == 0)
		{
			$("#clapperFour").css("display", "none");
			$("#clapperTwo").css("display", "block");
		}
	});*/
	
	/*nextImg.insertBefore(".setA").first().show();*/
	
	
});