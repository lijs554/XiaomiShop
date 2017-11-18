window.onload=function(){
//	var img_maxbox=document.getElementById("img_maxbox");
//	var box_div=img_maxbox.getElementsByTagName("div");
//	var img_button=document.getElementById("img_button");
//	var btn_img=img_button.getElementsByTagName("span");
//	var timer=null;
//	var index=0;
//
//	timer=setInterval(function(){
//		index++;
//		if(index>=btn_img.length){
//			index=0;
//		}
//	    PhotoLunBo(index)
//	},3000);
//	
//	for(var i=0;i<btn_img.length;i++){
//		btn_img[i].id=i;
//		btn_img[i].onclick=function(){
//			PhotoLunBo(this.id);
//		}
//	}
//	function PhotoLunBo(curindex){
//	
//		for(var j=0;j<btn_img.length;j++){
//			box_div[j].style.opacity="0";
//		    btn_img[j].className="";
//		}
//		box_div[curindex].style.opacity="1";
//		btn_img[curindex].className="bg";
//		
//  }
}


$(function(){
	
	var btn_img=$("#img_button > span");
	var eight_btn=$("#eight_btn > span");
	var timer=null;
	var i=0;
	var index=0;
	
	timer=setInterval(function(){
		
		i++;
		if(i>=btn_img.length){
			i=0;
		}
		btn_img.eq(i).trigger("click");
//	    $("#img_button > span").eq(i).addClass("bg").siblings().removeClass("bg"); 
//		$("#img_maxbox > div").eq(i).css('opacity',1).siblings().css('opacity',0);
	},3000);
	
	btn_img.on("click",function(){
		index=$(this).index(); 
		i=index;
		$(this).addClass("bg").siblings().removeClass("bg"); 
		$("#img_maxbox > div").eq(index).css('opacity',1).siblings().css('opacity',0);
		$("#txt_maxbox > div").eq(index).css('opacity',1).siblings().css('opacity',0);
//		$("#img_text").eq(index).addClass("img_text2");
	});

    eight_btn.on("click",function(){
		index=$(this).index(); 
		i=index;
		$(this).addClass("bc").siblings().removeClass("bc"); 
		$("#eight_box > div").eq(index).css('opacity',1).siblings().css('opacity',0);
	});
	
	
	
	//返回顶部
	 var back=$("#return");
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
	  console.log(tit_box);
      $(window).on("scroll",function(){
             //获取滚动条滚动的高度
             var scroltop=$(window).scrollTop();
//           console.log(scroltop+"<----------->"+tit_box);
             if (scroltop > tit_box){
                 $("#xm_tit_box").addClass('xm_tit_box2');
             }else {
                $("#xm_tit_box").removeClass('xm_tit_box2');
             }
        });
     
	
	
});


