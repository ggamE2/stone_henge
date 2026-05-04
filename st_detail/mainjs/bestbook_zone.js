// JavaScript Document
$(function(){
 
 /* 베스트북 슬라이더 */
  var mySlider=$("#page2 .cont1 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:190,
        minSlides:4,
        maxSlides:4,
        slideMargin:12,
        autoHover:true,
        controls:false
  });

  $("#page2 .prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $("#page2 .next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });     


  
 });    //function end
 
 
 
 
 
 
 