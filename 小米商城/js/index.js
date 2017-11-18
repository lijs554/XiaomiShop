window.onload=function(){
	var imgbox=document.getElementById("imgbox");
	var img=imgbox.getElementsByTagName("li");
	var but=document.getElementById("img_bat");
	var button=but.getElementsByTagName("span");
	var imgleft=document.getElementById("img_left");
	var imgright=document.getElementById("img_right");
	var index=0;
	var num=0;
	var timer;
	
	
	
//	小圆点击
	for(var i=0;i<button.length;i++){
		button[i].id=i;
		button[i].onclick=function(){
			run(this.id);
		}
	}
	
	
//自动播放
	
	
	function play(){
		    if(timer){
				clearInterval(timer);
				timer=null;
			}
			timer=setInterval(function(){
				index++;
				if(index>=button.length){
					index=0;
				}
				run(index);
			
		},3000);
	}
	play();
	
	
//左右切换
	imgleft.onclick=function(){
		num--;
		if(num>=button.length){
			num=5;
		}
		if(num==-1){
			num=5;
		}
		run(num);
		buttonshow();
	}
	imgright.onclick=function(){
		num++;
		if(num>=button.length){
			num=0;
		}
		run(num);
		buttonshow();
	}
	imgright.onmouseover=function(){clearInterval(timer);}
	imgright.onmouseout=function(){play();}
	imgleft.onmouseover=function(){clearInterval(timer);}
	imgleft.onmouseout=function(){play();}
	


//section_one部分
   
   var secbox=document.getElementById("sec_one_box");
   var sb=document.getElementById("onebutton");
   var span=sb.getElementsByTagName("span");
   var s_left=document.getElementById("bt_left");
   var s_right=document.getElementById("bt_right");
   var num1=0;
   var time=null;
   var newleft;
   
function secRun(){
	if(time){
		clearInterval(time);
		timer=null;
	}
	time=setInterval(function(){
		num1++;
		if(num1>=span.length){
			num1=0;
		}
	   	animation(-100);
	   	butshow();
	},3000);
}
   secRun();
	
//section_one左右切换
   s_left.onclick=function(){
   	if(this.className=="bt"){
   		return;
   	}
   	num1--;
	if(num1>=span.length){
		num1=0;
	}
   	animation(100);
   	butshow();
   }
   s_right.onclick=function(){
   	if(this.className=="bt"){
   		return;
   	}
   	num1++;
	if(num1>=span.length){
		num1=0;
	}
   	animation(-100);
   	butshow();
   }
   s_left.onmouseover=function(){clearInterval(time)};
   s_left.onmouseout=function(){secRun()};
   s_right.onmouseover=function(){clearInterval(time)};
   s_right.onmouseout=function(){secRun()};


//----------------------------------------------
//section部分
//t_fenlei部分
   var t_fenlei=document.getElementById("t_fenlei");
   var t_button=t_fenlei.getElementsByTagName("a");
   var neiron=document.getElementsByName("neiron");
   
   for(var i=0;i<t_button.length;i++){
   	    t_button[i].id=i;
   	    t_button[i].onmouseover=function(){
   	    	for(var j=0;j<t_button.length;j++){
   	    		neiron[j].style.display="none";
   	    	    t_button[j].className=""
   	    	}
   	    	neiron[this.id].style.display="block";
   	    	this.className="ba"
   	    }
   }


//t_fenlei2部分

   var t_fenlei2=document.getElementById("t_fenlei2");
   var t_button2=t_fenlei2.getElementsByTagName("a");
   var neiron2=document.getElementsByName("neiron2");
   
   for(var i=0;i<t_button2.length;i++){
   	    t_button2[i].id=i;
   	    t_button2[i].onmouseover=function(){
   	    	for(var j=0;j<t_button2.length;j++){
   	    		neiron2[j].style.display="none";
   	    	    t_button2[j].className=""
   	    	}
   	    	neiron2[this.id].style.display="block";
   	    	this.className="ba"
   	    }
   }


//t_fenlei3部分

   var t_fenlei3=document.getElementById("t_fenlei3");
   var t_button3=t_fenlei3.getElementsByTagName("a");
   var neiron3=document.getElementsByName("neiron3");
   
   for(var i=0;i<t_button3.length;i++){
   	    t_button3[i].id=i;
   	    t_button3[i].onmouseover=function(){
   	    	for(var j=0;j<t_button3.length;j++){
   	    		neiron3[j].style.display="none";
   	    	    t_button3[j].className=""
   	    	}
   	    	neiron3[this.id].style.display="block";
   	    	this.className="ba"
   	    }
   }


//t_fenlei4部分

   var t_fenlei4=document.getElementById("t_fenlei4");
   var t_button4=t_fenlei4.getElementsByTagName("a");
   var neiron4=document.getElementsByName("neiron4");
   
   for(var i=0;i<t_button4.length;i++){
   	    t_button4[i].id=i;
   	    t_button4[i].onmouseover=function(){
   	    	for(var j=0;j<t_button4.length;j++){
   	    		neiron4[j].style.display="none";
   	    	    t_button4[j].className=""
   	    	}
   	    	neiron4[this.id].style.display="block";
   	    	this.className="ba"
   	    }
   }

//t_fenlei4部分

   var t_fenlei5=document.getElementById("t_fenlei5");
   var t_button5=t_fenlei5.getElementsByTagName("a");
   var neiron5=document.getElementsByName("neiron5");
   
   for(var i=0;i<t_button5.length;i++){
   	    t_button5[i].id=i;
   	    t_button5[i].onmouseover=function(){
   	    	for(var j=0;j<t_button5.length;j++){
   	    		neiron5[j].style.display="none";
   	    	    t_button5[j].className=""
   	    	}
   	    	neiron5[this.id].style.display="block";
   	    	this.className="ba"
   	    }
   }
//-------------------------------------------

//section_three部分
   var th_box=document.getElementById("sec_three_box");
   var th_sb=document.getElementById("threebutton");
   var th_span=th_sb.getElementsByTagName("span");
   var s_left1=document.getElementById("bt_left1");
   var s_right1=document.getElementById("bt_right1");
   var num2=0;
   var xinleft;
   
   
   s_left1.onclick=function(){
   	if(this.className=="bt"){
   		return;
   	}
   	num2--;
   	if(num2>=th_span.length){
   		num2=0;
   	}
    console.log(num2);
   	animaton(100);
   	threeshow();
   }
   s_right1.onclick=function(){
   	if(this.className=="bt"){
   		return;
   	}
   	num2++;
	if(num2>=th_span.length){
		num1=0;
	}
	console.log(num2);
   	animaton(-100);
   	threeshow();
   }
   

//section_five部分
//five_maxbox第一个--------------------------
   var five_box1=document.getElementById("five_box1");
   var five_sb1=document.getElementById("f_wrp_button1");
   var f_btn1=five_sb1.getElementsByTagName("span");
   var f_left1=document.getElementById("f_left1");
   var f_right1=document.getElementById("f_right1");
   var n1=0;
   var boxleft1;


   f_left1.onclick=function(){
	if(n1==0){
		n1=2;
	}else{
		n1-=1;
	}
   	PlayAnimation1(296);
   	btnshow1();
   }
   f_right1.onclick=function(){
   	n1++;
	if(n1>=f_btn1.length){
		n1=0;
	}
   	PlayAnimation1(-296);
   	btnshow1();
   }
   for(var i=0;i<f_btn1.length;i++){
   	   f_btn1[i].onclick=function(){
   	   	    var myindex=parseInt(this.getAttribute("index"));
   	   	    var offset=-296*(myindex-n1);
   	   	    PlayAnimation1(offset);
   	   	    n1=myindex;
   	   	    btnshow1();
   	   }
   }


//five_maxbox第二个--------------------------
   var five_box2=document.getElementById("five_box2");
   var five_sb2=document.getElementById("f_wrp_button2");
   var f_btn2=five_sb2.getElementsByTagName("span");
   var f_left2=document.getElementById("f_left2");
   var f_right2=document.getElementById("f_right2");
   var n2=0;
   var five_box2;


   f_left2.onclick=function(){
	if(n2==0){
		n2=3;
	}else{
		n2-=1;
	}
   	PlayAnimation2(296);
   	btnshow2();
   }
   f_right2.onclick=function(){
   	n2++;
	if(n2>=f_btn2.length){
		n2=0;
	}
   	PlayAnimation2(-296);
   	btnshow2();
   }
   for(var i=0;i<f_btn2.length;i++){
   	   f_btn2[i].onclick=function(){
   	   	    var myindex=parseInt(this.getAttribute("index"));
   	   	    var offset=-296*(myindex-n2);
   	   	    PlayAnimation2(offset);
   	   	    n2=myindex;
   	   	    btnshow2();
   	   }
     }


//five_maxbox第三个--------------------------
   var five_box3=document.getElementById("five_box3");
   var five_sb3=document.getElementById("f_wrp_button3");
   var f_btn3=five_sb3.getElementsByTagName("span");
   var f_left3=document.getElementById("f_left3");
   var f_right3=document.getElementById("f_right3");
   var n3=0;
   var boxleft3;


   f_left3.onclick=function(){
	if(n3==0){
		n3=2;
	}else{
		n3-=1;
	}
   	PlayAnimation3(296);
   	btnshow3();
   }
   f_right3.onclick=function(){
   	n3++;
	if(n3>=f_btn3.length){
		n3=0;
	}
   	PlayAnimation3(-296);
   	btnshow3();
   }
   for(var i=0;i<f_btn3.length;i++){
   	   f_btn3[i].onclick=function(){
   	   	    var myindex=parseInt(this.getAttribute("index"));
   	   	    var offset=-296*(myindex-n3);
   	   	    PlayAnimation3(offset);
   	   	    n3=myindex;
   	   	    btnshow3();
   	   }
   }


//five_maxbox第四个--------------------------
   var five_box4=document.getElementById("five_box4");
   var five_sb4=document.getElementById("f_wrp_button4");
   var f_btn4=five_sb4.getElementsByTagName("span");
   var f_left4=document.getElementById("f_left4");
   var f_right4=document.getElementById("f_right4");
   var n4=0;
   var five_box4;


   f_left4.onclick=function(){
	if(n4==0){
		n4=3;
	}else{
		n4-=1;
	}
   	PlayAnimation4(296);
   	btnshow4();
   }
   f_right4.onclick=function(){
   	n4++;
	if(n4>=f_btn4.length){
		n4=0;
	}
   	PlayAnimation4(-296);
   	btnshow4();
   }
   for(var i=0;i<f_btn4.length;i++){
   	   f_btn4[i].onclick=function(){
   	   	    var myindex=parseInt(this.getAttribute("index"));
   	   	    var offset=-296*(myindex-n4);
   	   	    PlayAnimation4(offset);
   	   	    n4=myindex;
   	   	    btnshow4();
   	   }
    }




//图片轮播方法-----------------------------
	function run(curindex){
		for(var j=0;j<button.length;j++){
				img[j].style.opacity=0;
			    button[j].className="";
			}
			img[curindex].style.opacity=1;
			button[curindex].className = "bg";
			index=curindex;
			num=curindex;
			
	}
	function buttonshow(){
		for(var j=0;j<button.length;j++){
				if(button[j].className=="bg"){
					button[j].className="";
					break;
				}
			}
		button[num].className="bg";
	}
	


//section_one部分方法---------------------------------------

	function animation(offset){
		newleft=parseInt(secbox.style.left)+offset;
		secbox.style.left=newleft+'%';
		if(newleft>0){
			secbox.style.left= -100 + '%' ;
		}
		if(newleft<-100){
			secbox.style.left= 0 + '%' ;
		}
	}
	function butshow(){
		for(var j=0;j<span.length;j++){
				if(span[j].className=="bt"){
					span[j].className="";
					break;
				}
			}
		span[num1].className="bt";
	}
	


//section_three部分方法---------------------------------------
	function animaton(offset){
		xinleft=parseInt(th_box.style.left)+offset;
		th_box.style.left=xinleft+'%';
		if(xinleft>0){
			th_box.style.left= 0 + '%' ;
		}
		if(xinleft<-100){
			th_box.style.left= -100 + '%' ;
		}
	}
	function threeshow(){
		for(var j=0;j<th_span.length;j++){
				if(th_span[j].className=="bt"){
					th_span[j].className="";
					break;
				}
			}
		th_span[num2].className="bt";
	}
	
	
	
//section_five部分方法---------------------------------------
//five_maxbox第一个方法
	function PlayAnimation1(offset){
		boxleft1=parseInt(five_box1.style.left)+offset;
		five_box1.style.left=boxleft1+'px';
		if(boxleft1>0){
			five_box1.style.left= -592 + 'px' ;
		}
		if(boxleft1<-592){
			five_box1.style.left= 0 + 'px' ;
		}
	}
	function btnshow1(){
		for(var j=0;j<f_btn1.length;j++){
				if(f_btn1[j].className=="bc"){
					f_btn1[j].className="";
					break;
				}
			}
		f_btn1[n1].className="bc";
	}
	
	
//five_maxbox第二个方法
    function PlayAnimation2(offset){
		boxleft2=parseInt(five_box2.style.left)+offset;
		five_box2.style.left=boxleft2+'px';
		if(boxleft2>0){
			five_box2.style.left= -888 + 'px' ;
		}
		if(boxleft2<-888){
			five_box2.style.left= 0 + 'px' ;
		}
	}
	function btnshow2(){
		for(var j=0;j<f_btn2.length;j++){
				if(f_btn2[j].className=="bc"){
					f_btn2[j].className="";
					break;
				}
			}
		f_btn2[n2].className="bc";
	}


//five_maxbox第三个方法
    function PlayAnimation3(offset){
		boxleft3=parseInt(five_box3.style.left)+offset;
		five_box3.style.left=boxleft3+'px';
		if(boxleft3>0){
			five_box3.style.left= -592 + 'px' ;
		}
		if(boxleft3<-592){
			five_box3.style.left= 0 + 'px' ;
		}
	}
	function btnshow3(){
		for(var j=0;j<f_btn3.length;j++){
				if(f_btn3[j].className=="bc"){
					f_btn3[j].className="";
					break;
				}
			}
		f_btn3[n3].className="bc";
	}
	
	
//five_maxbox第四个方法
    function PlayAnimation4(offset){
		boxleft4=parseInt(five_box4.style.left)+offset;
		five_box4.style.left=boxleft4+'px';
		if(boxleft4>0){
			five_box4.style.left= -888 + 'px' ;
		}
		if(boxleft4<-888){
			five_box4.style.left= 0 + 'px' ;
		}
	}
	function btnshow4(){
		for(var j=0;j<f_btn4.length;j++){
				if(f_btn4[j].className=="bc"){
					f_btn4[j].className="";
					break;
				}
			}
		f_btn4[n4].className="bc";
	}
	
}

$(function(){
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
