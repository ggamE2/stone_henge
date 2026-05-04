
$(function(){


var ht = $(window).height();		
$("section").height(ht);
	
$(window).on("resize",function(){
  var ht = $(window).height();	
  $("section").height(ht);
});    
    
  
//section위에서 마우스 휠을 움직이면
$("section").on("mousewheel",function(event,delta){    
		
if (delta > 0) {  
  var prev = $(this).prev().offset().top;
  $("html,body").stop().animate({"scrollTop":prev},800);
			 			 
  }else if (delta < 0) {  
    var next = $(this).next().offset().top;
     $("html,body").stop().animate({"scrollTop":next},800);           
  }
          
 });
    
 
$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
var num = $(this).scrollTop();  // 스크롤값을 가져온다.
if( num > 200 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
$(".header").css("background","rgba(255,255,255,0.6)");          
}else{
$(".header").css("background","transparent");		  
}
});  
    
    
//menu
$(".gnb>li").on("mouseover",function(){
$(this).find(".subm").stop().slideDown();
$(".gnb_back").stop().slideDown(); 
$(".header").css("background","rgba(255,255,255,0.6)");      
});  
$(".gnb>li").on("mouseleave",function(){
$(this).find(".subm").stop().slideUp();
$(".gnb_back").stop().slideUp();
$(".header").css("background","transparent");    
});      

       
    /* 베스트아이템*/
  var mySlider1=$(".page1_slide ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:3,
        slideWidth:400,
        minSlides:3,
        maxSlides:3,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".p_btn1").on("click",function(){
  mySlider1.goToPrevSlide();
  return false;
  });

  $(".n_btn1").on("click",function(){
  mySlider1.goToNextSlide();
  return false;
  });
    
    
    
        
 var mySlider2=$(".page2_slide ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:3,
        slideWidth:400,
        minSlides:3,
        maxSlides:3,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn2").on("click",function(){
  mySlider2.goToPrevSlide();
  return false;
  });

  $(".next_btn2").on("click",function(){
  mySlider2.goToNextSlide();
  return false;
  });
    
 
    
    
 var mySlider3=$(".page3_slide ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:3,
        slideWidth:400,
        minSlides:3,
        maxSlides:3,
        slideMargin:0,
        auto:true,
        autoHover:true,
        controls:false
  });

  $(".prev_btn3").on("click",function(){
  mySlider3.goToPrevSlide();
  return false;
  });

  $(".next_btn3").on("click",function(){
  mySlider3.goToNextSlide();
  return false;
  });    
    
    
 //search    
$(".search_bar").on("click",function(){
$(".search_box").slideToggle(300);   
$(".header").css("background","rgba(255,255,255,0.6)");     
});   

//user
$(".user").on("click",function(){
$(".user_in").fadeIn(); 
});
$(".user_in .close").on("click",function(){
$(".user_in").fadeOut();    
});
   
    
    
    
});//function end 











