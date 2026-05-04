// JavaScript Document
$(function(){
  /* 베스트북 슬라이더 */
  var mySlider=$("#best_bg ul").bxSlider({
      mode:"horizontal",   //수평(horizontal) 방향으로 이동합니다.
        speed:500,   //이동 속도(500 : 0.5초)
        pager:false,   //페이징 표시를 제어(false:숨김, true:노출)합니다.
        moveSlides:15,   //이동 슬라이드 수입니다. 
        slideWidth:125,   //슬라이드 폭입니다. 
        minSlides:5,   //최소 노출 슬라이드 수입니다. 
        maxSlides:5,   //최대 노출 슬라이드 수입니다.
        slideMargin:30,   //슬라이드 간의 간격입니다.
        auto:true,   //자동 슬라이드 여부(true : 자동, false:수동)를 설정합니다.
        autoHover:true,   //마우스 오버 시 자동 정지시킵니다.
        controls:false   //이전 , 다음 버튼을 숨깁니다(true: 노출, false:숨김)
  });

  $(".prev_btn").on("click",function(){   //[이전]버튼을 눌렀을 때 이벤트 핸들러의 실행문을 실행
  mySlider.goToPrevSlide();   //슬라이드를 한 단계 이전으로 이동합니다.
  return false;   //<a> 태그의 링크를 차단합니다.
  });

  $(".next_btn").on("click",function(){   //[다음]버튼을 눌렀을 때 이벤트 핸들러의 실행문을 실행
  mySlider.goToNextSlide();   //슬라이드를 한 단계 다음으로 이동합니다.
  return false;   //<a>태그의 링크를 차단합니다. 
  });
});  