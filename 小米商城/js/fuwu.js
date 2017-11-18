$(function(){
	var img=$("#imgbox > div");
	var btn=$("#img_button > span");
	var timer=null;
	var num=0;
	var index;
	var newleft;
	
	timer=setInterval(function(){
		
		num++;
		if(num>=btn.length){
			num=0;
		}
		btn.eq(num).trigger("click");
	},3000)
	btn.on("click",function(){
		 index=$(this).index();
		 num=index;
		 img.eq(index).css('transform','scale(1)').siblings().css('transform','scale(0)');
	     $(this).addClass('bg').siblings().removeClass('bg');
	     
	});
	
	
	
	
	
	
	
	var back=$("#return");
	 var tit_box=$("#xm_tit_box");
	 back.on("click",function(){
	 	  $("html,body").animate({scrollTop:0},800);
	 });
	 $(window).on("scroll",function(){
	 	   if($(window).scrollTop()>$(window).height()){
	 	   	     back.fadeIn();
	 	   }else{
		 	   	back.fadeOut();
	 	   }
	 });
	 $(window).trigger("scroll");
	
});
