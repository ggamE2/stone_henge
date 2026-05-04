
$(function(){

  

    
 

//MENU
$(".gnb>li").on("mouseover",function(){
$(this).find(".subm").stop().slideDown();
$(".gnb_back").stop().slideDown(); 
$(".header").css("background","pink");      
});  
$(".gnb>li").on("mouseleave",function(){
$(this).find(".subm").stop().slideUp();
$(".gnb_back").stop().slideUp();
$(".header").css("background","transparent");    
}); 
    
    
    
    
});//function end 










