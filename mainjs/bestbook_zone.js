// JavaScript Document
$(function(){
 
 /* 베스트북 슬라이더 */
  var mySlider3=$("#page3 .cont1 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:270,
        minSlides:3,
        maxSlides:3,
        slideMargin:10,
        autoHover:true,
        controls:false
  });

  $("#page3 .prev_btn2").on("click",function(){
  mySlider3.goToPrevSlide();
  return false;
  });

  $("#page3 .next_btn2").on("click",function(){
  mySlider3.goToNextSlide();
  return false;
  });     


  
 });    //function end
 
 
 
 
 
 
 