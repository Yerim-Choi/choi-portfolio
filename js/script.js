// 모든 옵션이 들어간 바닐라 JS 예시
$(document).ready(function () {
  $("#fullpage").fullpage({
    //이동
    menu: "#menu",
    lockAnchors: false,
    //   anchors: ["home", "intro", "experience", "project", "more", "thankyou"],
    navigation: true,
    navigationPosition: "right",
    //   navigationTooltips: ["firstSlide", "secondSlide"],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: "bottom",

    //스크롤
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //접근성
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //디자인
    controlArrows: true,
    verticalCentered: true,
    //   sectionsColor: [
    //     "#DEE8F9",
    //     "#F7F7F9",
    //     "#E8ECF3",
    //     "#FFFFFF",
    //     "#F7F7F7",
    //     "#ECF1F4",
    //   ],
    paddingTop: "3em",
    paddingBottom: "10px",
    fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //맞춤 선택자
    sectionSelector: ".section",
    slideSelector: ".slide",

    lazyLoading: true,

    //사건(이벤트)
    onLeave: function (origin, destination, direction) {},
    afterLoad: function (origin, destination, direction) {},
    afterRender: function () {},
    afterResize: function (width, height) {},
    afterReBuild: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (section, origin, destination, direction) {},
    onSlideLeave: function (section, origin, destination, direction) {},
  });

  // 슬라이드
  $(function () {
    $(".slider-wrap").slick({
      slide: "div", //슬라이드 되어야 할 태그
      infinite: true, //무한 반복 옵션
      slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
      slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
      speed: 700, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows: true, // 옆으로 이동하는 화살표 표시 여부
      dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
      autoplay: false, // 자동 스크롤 사용 여부
      autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover: true, // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
      vertical: false, // 세로 방향 슬라이드 옵션
      prevArrow: "<button type='button' class='slick-prev'></button>",
      nextArrow: "<button type='button' class='slick-next'></button>",
      draggable: true, //드래그 가능 여부
      customPaging: function (slider, i) {
        return `${i + 1} / ${slider.slideCount}`;
      },
      responsive: [
        // 반응형 웹 구현 옵션
        {
          breakpoint: 960, //화면 사이즈 960px
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768, //화면 사이즈 768px
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  // paging
  $(".slider-wrap").bind("DOMSubtreeModified", function () {
    var prev = $("div.slick-active").prev(),
      current = $("div").find(".slick-active");
    current.addClass("on").siblings().removeClass("on");
    prev.addClass("prev").siblings().removeClass("prev");
  });

  // //다음
  // var nextBtn = $(".slick-next"),
  //   nowSlider = $(".slick-current");
  // nextBtn.on("click", function () {
  //   console.log("다음");
  //   nowSlider.addClass("sss");
  // });
});
