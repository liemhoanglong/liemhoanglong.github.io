 $(function(){
 	vitricuaedu = $('#khoi_edu').offset().top;
 	$(".xuong,.exp").click(function(){
 		$('body,html').animate({scrollTop:vitricuaedu - 40}, 700)
 	});

 	vitricuaskills = $('#khoi_skills').offset().top;
 	$(".xuong,.skills").click(function(){
 		$('body,html').animate({scrollTop:vitricuaskills}, 700)
 	});
 	vitricuacmt = $('#khoi_cmt').offset().top;
 	$(".xuong,.cmt").click(function(){
 		$('body,html').animate({scrollTop:vitricuacmt}, 700)
 	});

})  
 