
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
  $("html,body").stop().animate({"scrollTop":prev},1200);
			 			 
  }else if (delta < 0) {  
    var next = $(this).next().offset().top;
     $("html,body").stop().animate({"scrollTop":next},1200);           
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
    
    
//MENU
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

  
    

window.onload = function () {
	
	var target = $('.target');
	var zoom = target.data('zoom');
	
	$(".c1")
		.on('mousemove', magnify)
		.prepend("<div class='magnifier'></div>")
		.children('.magnifier').css({
			"background": "url('" + target.attr("src") + "') no-repeat",
			// 이미지를 zoom 배율만큼 확대해 배치한다.
			"background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
		});
	
	var magnifier = $('.magnifier');
	
	function magnify(e) {
	
		// 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
		var mouseX = e.pageX - $(this).offset().left;
		var mouseY = e.pageY - $(this).offset().top;
	
		// 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
		if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
			magnifier.fadeIn(100);
		} else {
			magnifier.fadeOut(100);
		}
	
		//돋보기가 존재할 때
		if (magnifier.is(":visible")) {
	
			// zoom으로 인해 확대된 이미지에 비례한 mouse 좌표를 얻는다.
			var rx = -(mouseX * zoom - magnifier.width() /2 );
			var ry = -(mouseY * zoom - magnifier.height() /2 );
	
			//돋보기를 마우스 위치에 따라 움직인다.
			//돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
			var px = mouseX - magnifier.width() / 2;
			var py = mouseY - magnifier.height() / 2;
	
			//적용
			magnifier.css({
				left: px,
				top: py,
				backgroundPosition: rx + "px " + ry + "px"
			});
		}
	}

};










