
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
    


    
    
    
//page6 slide
var jssor_1_options = {
              $Idle: 2000,
              $SlideEasing: $Jease$.$InOutSine,
              $DragOrientation: 3,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $SpacingX: 16,
                $SpacingY: 16
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_100", jssor_1_options);
           
            jssor_1_slider.$Elmt.style.margin = "";

            var MAX_WIDTH = 3000;
            var MAX_HEIGHT = 3000;
            var MAX_BLEEDING = 1;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var originalWidth = jssor_1_slider.$OriginalWidth();
                    var originalHeight = jssor_1_slider.$OriginalHeight();

                    var containerHeight = containerElement.clientHeight || originalHeight;

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                    var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

                    //scale the slider to expected size
                    jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

                    //position slider at center in vertical orientation
                    jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";

                    //position slider at center in horizontal orientation
                    jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            function OnOrientationChange() {
                ScaleSlider();
                window.setTimeout(ScaleSlider, 800);
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", OnOrientationChange);
            /*#endregion responsive code end*/    
        
    /* gnb_r li on */
	$(window).on("scroll",function(){	
	
		//변수 ht에 현재 브라우저의 넓이값 저장
		var ht = $(window).height();
		
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll = $(window).scrollTop();
						
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			};
		}								
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
   
    
/*여기에 북슬라이드 놓는거 아님*/
    
    

});//function end 










