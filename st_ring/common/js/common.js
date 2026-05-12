$(function(){
    
  
 
$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 200 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".header").css("background","rgba(255,255,255,0.6)");          
      }else{
          $(".header").css("background","transparent");		  
      }
 });    
    


//메뉴
let gnb = document.querySelectorAll('.gnb > li')
let sub = document.querySelectorAll('.subm')
let nav_bg = document.querySelector('.gnb_back')

//헤더
let header_bg = document.querySelector('.header') /*header_menu는 적용 안됨*/ 
let nav_a = document.querySelectorAll('.gnb > li > a')
console.log(header_bg, nav_a)



//마우스 올릴때 서브 보이기 - 개별
gnb.forEach(function(t,i){
    //console.log(t,i)
    t.addEventListener('mouseover',function(){

          // 다른 서브메뉴 닫기
        sub.forEach(function(s){
            s.style.height = '0px';
            s.style.transition = 'none'; // transition 제거
        });

       // 현재 마우스 오버된 메뉴에 대응하는 서브메뉴 보이기
        sub[i].style.height = '170px'
        sub[i].style.transition = "height 0.3s linear, opacity 0.3s ease-in-out"; // transition 효과 조합
        sub[i].style.opacity = '1'; // opacity 효과 추가
        nav_bg.style.height = '180px'
        header_bg.style.backgroundColor = 'rgba(255,255,255,0.6)'
    })
})



//마우스 내릴 때 서브 가리기
gnb.forEach(function(t,i){
    //console.log(t,i)
    t.addEventListener('mouseout',function(){
        sub[i].style.height = '0px'
        nav_bg.style.height = '0px'
        nav_bg.style.borderTop = '0px solid #eee'
    })

})



 //MENU
/* $(".gnb>li").on("mouseover",function(){
    $(".header").css("background","rgba(255,255,255,0.6)");          
});  

$(".gnb>li").on("mouseleave",function(){
    $(".header").css("background","transparent");    
}); */
    



    
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