$(function(){
	
//返回顶部
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
	 
	 
//弹出标题
	 var tit_box=$("#xm_tit_box").height();//获取目标的height值
      $(window).scroll(function(){
             //获取滚动条滚动的高度
             var scroltop=$(window).scrollTop();
             if (scroltop > tit_box){
                 $("#xm_tit_box").addClass('xm_tit_box2');
             }else {
                $("#xm_tit_box").removeClass('xm_tit_box2');
             }
        });
     
     
})
