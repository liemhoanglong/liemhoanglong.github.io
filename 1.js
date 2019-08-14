 $(function(){
 	vitricuaedu = $('#khoi_edu').offset().top;
 	$(".xuong,.exp").click(function(){
 		$('body,html').animate({scrollTop:vitricuaedu - 40}, 700)
 	});

 	vitricuaskills = $('#khoi_skills').offset().top;
 	$(".skills").click(function(){
 		$('body,html').animate({scrollTop:vitricuaskills}, 700)
 	});

 	vitricuacontact = $('#khoi_contact').offset().top;
 	$(".cont").click(function(){
 		$('body,html').animate({scrollTop:vitricuacontact}, 700)
 	});

  	vitricuacmt = $('#khoi_cmt').offset().top;
 	$(".cmt").click(function(){
 		$('body,html').animate({scrollTop:vitricuacmt}, 700)
 	});
})  
 