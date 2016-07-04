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
			/*$("#twoTen div").css("display", "block");*/
			
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
		
		/*$("header").css("display", "block");
		if($("header").css("display", "block"))
		{
			$("header").animate({"opacity": "1"}, 1500);
		}
		
		$("#clapperOne, #reelWrapA, #clapperTwo, #reelWrapB, #nine, #twoThou, #twoTen").css("display", "block");
			
		if($("#clapperOne, #reelWrapA, #clapperTwo, #reelWrapB, #nine, #twoThou, #twoTen").css("display", "block"))
		{
			$("#clapperOne, #reelWrapA, #clapperTwo, #reelWrapB, #nine, #twoThou, #twoTen").animate({"opacity": "1"}, 1500);				
		}*/
	});
	
	$(".setA, .setB, .setC, .setD, .setE, .setF, .setG, .setH, .setI, .setJ, .setK").hover(
	function()
	{
		$(this, ".setB, .setC, .setD, .setE, .setF, .setG, .setH, .setI, .setJ, .setK").css("cursor", "pointer");
		$(".bodyCopy, h2").stop().fadeTo(1000, 1);
	},
	
	function()
	{
		$(".bodyCopy, h2").stop().fadeTo(1000, 0);
	});
	
	
	/*PARALLAX SCROLL*/
	$('#menuHead').localScroll(800);
	sevEig.parallax("100%", 0.1);
	nine.parallax("100%", 0.1);
});