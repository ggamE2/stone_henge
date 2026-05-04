$(function(){
    
  

//MENU
$(".gnb>li").on("mouseover",function(){
$(this).find(".subm").stop().slideDown(300);
$(".gnb_back").stop().fadeIn(); 
$(".header").css("background","rgba(255,255,255,0.6)");      
});  
$(".gnb>li").on("mouseleave",function(){
$(this).find(".subm").stop().slideUp(300);
$(".gnb_back").stop().fadeOut();
$(".header").css("background","transparent");    
}); 


    
// left_menu
$(".ic_menu").on("click",function(){
 $(".left_menu").stop().animate({marginLeft:"300px"},400);     
});
$(".close").on("click",function(){
 $(".left_menu").stop().animate({marginLeft:"0px"},400);     
});    
        
$(".gnb3>li").on("mouseover focus",function(){
 $(this).find(".subm").stop().slideDown();
});
$(".gnb3>li").on("mouseleave blur",function(){
 $(this).find(".subm").stop().slideUp();
});    
        
    
 });    