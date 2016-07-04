// JavaScript Document

jQuery(document).ready(function($){
	var sevEig = $("#sevEig");
	var nine = $("#nine");
	var twoThou = $("#twoThou");
	var twoTen = $("#twoTen");
	var linkSevEig = $("#linkSevEig");
	var linkNine = $("#linkNine");
	var linkTwoThou = $("#linkTwoThou");
	var linkTwoTen = $("#linkTwoTen");
	
	/*MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS*/
	$(window).scrollTop(0);
	/**/
	
	
	
	/*ANCHOR LINK SCROLLING*/
	jQuery(function()
	{
		jQuery('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
			{
				var target = jQuery(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length)
				{
					jQuery('html,body').animate({scrollTop: target.offset ().top}, 1800);
					return false;
				}
			}
		});
	});

	
	
	if (navigator.userAgent.indexOf('Chrome') != -1)
	{
		$("#sevEig, #nine, #twoThou, #twoTen").css("height", "950px");
	}



	/*LINKS IN MENU BAR ARE ACTIVE WHEN SCROLLED TO THEIR ANCHOR*/
	$(window).scroll(function(event)
	{
		if(sevEig.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkSevEig.addClass('current'); 
			linkNine.removeClass('current'); 
			linkTwoThou.removeClass('current');
			linkTwoTen.removeClass('current');
		
			$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: -360},
			{
				duration: 1000,
				step: function(now, fx)
				{
					$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+now+"deg)"});
				}
			});
		}
		
		if(nine.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkNine.addClass('current'); 
			linkSevEig.removeClass('current'); 
			linkTwoThou.removeClass('current');
			linkTwoTen.removeClass('current');
			
			$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: 360},
			{
				duration: 1000,
				step: function(nowTwo, fxTwo)
				{
					$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+nowTwo+"deg)"});
				}
			});
		}
		
		if(twoThou.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkTwoThou.addClass('current'); 
			linkSevEig.removeClass('current'); 
			linkNine.removeClass('current');
			linkTwoTen.removeClass('current');
		
			$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: -360},
			{
				duration: 1000,
				step: function(now, fx)
				{
					$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+now+"deg)"});
				}
			});
		}
		
		if(twoTen.offset().top < $(window).scrollTop() + $(window).outerHeight())
		{
			linkTwoTen.addClass('current'); 
			linkTwoThou.removeClass('current'); 
			linkSevEig.removeClass('current'); 
			linkNine.removeClass('current');
			
			$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: 360},
			{
				duration: 1000,
				step: function(nowTwo, fxTwo)
				{
					$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+nowTwo+"deg)"});
				}
			});
		}       
	});
	/**/
	
	
	/*REFERENCE JQUERY CYCLE PLUGIN TO MAKE IMAGES HORIZONTAL SCROLL WHEN ON CLICK*/
	$("#sevEig #movieWrap").cycle({
		fx:		"scrollHorz",
		next:	"#clapperTwo",
		prev:	"#clapperOne",
		timeout: 0
	});
	
	$("#nine #movieWrap").cycle({
		fx:		"scrollHorz",
		next:	"#clapperFour",
		prev:	"#clapperThree",
		timeout: 0
	});
	
	$("#twoThou #movieWrap").cycle({
		fx:		"scrollHorz",
		next:	"#clapperSix",
		prev:	"#clapperFive",
		timeout: 0
	});
	
	$("#twoTen #movieWrap").cycle({
		fx:		"scrollHorz",
		next:	"#clapperEight",
		prev:	"#clapperSeven",
		timeout: 0
	});
	/**/
	
	
	/*MAKE LINK ACTIVE WHEN CLICKED*/	
	linkNine.click(function()
	{
		linkNine.addClass("current");
		$("#linkSevEig, #linkTwoThou, #linkTwoTen").removeClass("current");
		
		$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: -360},
		{
			duration: 1000,
			step: function(now, fx)
			{
				$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+now+"deg)"});
			}
		});
	});
	
	linkSevEig.click(function()
	{
		linkSevEig.addClass("current");
		$("#linkNine, #linkTwoThou, #linkTwoTen").removeClass("current");
		
		$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: 360},
		{
			duration: 1000,
			step: function(nowTwo, fxTwo)
			{
				$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+nowTwo+"deg)"});
			}
		});
	});
	
	linkTwoThou.click(function()
	{
		linkTwoThou.addClass("current");
		$("#linkSevEig, #linkNine, #linkTwoTen").removeClass("current");
		
		$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: -360},
		{
			duration: 1000,
			step: function(now, fx)
			{
				$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+now+"deg)"});
			}
		});
	});
	
	linkTwoTen.click(function()
	{
		linkTwoTen.addClass("current");
		$("#linkSevEig, #linkNine, #linkTwoThou").removeClass("current");
		
		$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: 360},
		{
			duration: 1000,
			step: function(nowTwo, fxTwo)
			{
				$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+nowTwo+"deg)"});
			}
		});
	});
	/**/
	
	
	/*ROTATE MOVIE REELS*/	
	$("#clapperOne, #clapperThree, #clapperFive, #clapperSeven").click(function()
	{
		$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: -360},
		{
			duration: 1000,
			step: function(now, fx)
			{
				$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+now+"deg)"});
			}
		});
	});
	
	$("#clapperTwo, #clapperFour, #clapperSix, #clapperEight").click(function()
	{
		$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").stop().animate({rotation: 360},
		{
			duration: 1000,
			step: function(nowTwo, fxTwo)
			{
				$("#reelWrapA, #reelWrapB, #reelWrapC, #reelWrapD, #reelWrapE, #reelWrapF, #reelWrapG, #reelWrapH").css({"transform": "rotate("+nowTwo+"deg)"});
			}
		});
	});
	/**/
	
	
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
	
	
	/*PARALLAX SCROLL*/
	$('#menuHead').localScroll(800);
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	sevEig.parallax("100%", 0.1);
	nine.parallax("100%", 0.1);
	
	/*if($(window).width() < 1700)
	{
		$("header").css("min-width", "100%");
		$("#info").css("font-size", "15px");
		$("#headOne").css({"font-size": "15px", "padding-left": "2.5%"});
		$("#menuHead").css({"margin-left": "72%", "font-size": ".8em"});
	}*/
	
	/*IMAGE ROTATOR*/
/*$(function ()
{
	setInterval("rotateImg()", 3000);
	setInterval("rotateImg2()", 3000);
});
	
function rotateImg()
{
	var currImg = $('#imgRotate div.current');
	var currNext = currImg.next();
	if(currNext.length == 0)
	currNext = $('#imgRotate div:first');
	currImg.removeClass('current').addClass('previous');
	currNext.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000, 
	function()
	{
		currImg.removeClass('previous');
	});
};

function rotateImg2()
{
	var currImg2 = $('#imgRotate2 div.current');
	var currNext2 = currImg2.next();
	if(currNext2.length == 0)
	currNext2 = $('#imgRotate2 div:first');
	currImg2.removeClass('current').addClass('previous');
	currNext2.css({opacity: 0.0}).addClass('current').animate({opacity: 1.0}, 1000, 
	function()
	{
		currImg2.removeClass('previous');
	});
};*/
	

	
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