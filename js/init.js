if (screen.width > 768) {
  var headerHeightFp = "60px";
}

$(window).on("load", function () {
  //$("#section-loading").css("transform", "translateY(-100%)");

  setTimeout(function () {
    $(".header").addClass("animated fadeInDown");
  }, 400);

  setTimeout(function () {
    $(".cookies").addClass("active");
  }, 1000);

  //Home Slider
  $(".homeSliderOwl").owlCarousel({
    //animateOut: "animate__fadeOut",
    animateIn: "animate__fadeInUp",
    loop: false,
    rewind: true,
    margin: 50,
    nav: false,
    dots: false,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 7000,
    onInitialized: counter, //When the plugin has initialized.
    onTranslated: counter,
    smartSpeed: 1000,
    fluidSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  function counter(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#ind").html(item);
    $("#tot").html(items);
  }

  var homeSliderOwl = $(".homeSliderOwl");
  homeSliderOwl.owlCarousel();

  $(".homeSliderOwl-showcase-controls").click(function () {
    homeSliderOwl.trigger("next.owl.carousel");

    var runArrow = $(".homeSliderOwl .owl-item.active .item").attr(
      "data-active"
    );
    if (
      $(".homeSliderOwl-showcase-controls .circle-wrapper1").hasClass("run")
    ) {
      $(".homeSliderOwl-showcase-controls .circle-wrapper1").removeClass("run");
    }
    setTimeout(function () {
      $(".homeSliderOwl-showcase-controls .circle-wrapper1").addClass("run");
    }, 10);
  });

  homeSliderOwl.on("changed.owl.carousel", function (event) {
    var runArrow = $(".homeSliderOwl .owl-item.active .item").attr(
      "data-active"
    );
    if (
      $(".homeSliderOwl-showcase-controls .circle-wrapper1").hasClass("run")
    ) {
      $(".homeSliderOwl-showcase-controls .circle-wrapper1").removeClass("run");
    }
    setTimeout(function () {
      $(".homeSliderOwl-showcase-controls .circle-wrapper1").addClass("run");
    }, 10);
  });

  setTimeout(function () {
    $(".ag-loader").css("transform", "translateY(-100%)");
  });
});

$(document).ready(function () {
  $("#searchbtn").click(function () {
    var search = $("#searchBox").val();
    if (search != "") {
      window.location.href = "/?s=" + search;
    }
  });

  $("#searchbtnse").click(function () {
    var search = $("#searchBoxse").val();
    if (search != "") {
      window.location.href = "/?s=" + search;
    }
  });

  $(".searchheader").bind("enterKey", function (e) {
    if ($(this).val() != "") {
      window.location.href = "/?s=" + $(this).val();
    }
  });

  $(".searchheader").keyup(function (e) {
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    }
  });

  $(".searchtext").bind("enterKey", function (e) {
    if ($(this).val() != "") {
      window.location.href = "/?s=" + $(this).val();
    }
  });

  $(".searchtext").keyup(function (e) {
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    }
  });

  //aos
  // AOS.init();

  // var agcount = 0;
  // var agcounter = setInterval(() => {
  // 	if (agcount < 101) {
  // 		$(".agcount").text(agcount + "%");
  // 		$(".loader-2").css("height", agcount + "%");
  // 		agcount++;
  // 	} else {
  // 		clearInterval(agcounter);
  // 	}
  // }, 30);

  $(".search, .m-search").click(function () {
    $(".searchParent").toggle();
  });

  $(".dropdown-toggle").click(function (e) {
    if ($(document).width() > 768) {
      e.preventDefault();

      var url = $(this).attr("href");

      if (url !== "#") {
        window.location.href = url;
      }
    }
  });

  $(".menuToggle").click(function () {
    $(this).text(function (i, text) {
      return text === "Close" ? "Menu" : "Close";
    });

    $(".mobileMenu").toggleClass("active");
  });

  //fullpage js initialize
  $("#fullpage").fullpage({
    //anchors: ["businessphilosophy"],
    responsiveWidth: 1199,
    paddingTop: headerHeightFp,
    scrollBar: false,
    autoScrolling: false,
    fitToSection: false,
    scrollingSpeed: 1000,
    // onLeave: function (index, nextIndex, direction) {
    // 	var leavingSection = $(this);

    // 	//after leaving section 1
    // 	if (index == 1 && direction == "down") {
    // 		$(".header").addClass("whiteHeader");
    // 	}
    // },
  });

  $("#moveTo").click(function () {
    $.fn.fullpage.moveTo(2);
  });

  // Add whiteHeader class to header on scroll
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 0) {
      $("#header").addClass("whiteHeader");
    } else {
      $("#header").removeClass("whiteHeader");
    }
  });

  $(".view2").on("inview", function (event, isInView) {
    if (isInView) {
      $(".circle-wrapper2").addClass("run");

      // setInterval(function(){
      //     // Update the label with the counter value (and increment it)
      //     $("#label").html(++counter);
      // },1000);

      // var Timer;
      // setTimeout(function() {
      //     Timer = setInterval(function () {

      //         $nextPanel = $('.panel-default.active').next();

      //         $('.panel-default.active').removeClass('active');
      //         $('.panel-collapse').removeClass('in');
      //         $(".circle-wrapper2").removeClass("run");
      //         $nextPanel .addClass('active');

      //         $('.panel-default.active .panel-collapse').addClass('in');

      //         setTimeout(function(){
      //             $(".circle-wrapper2").addClass("run");
      //         }, 100);
      //     }, 7000);
      // }, 1000, 3);

      // setTimeout(function(){

      // }, 7000);
    }
  });

  if ($(".section").hasClass("active")) {
    setTimeout(function () {
      $(".mainContent").addClass("active");
    }, 500);
  }

  //Business Philosphy Accordian
  $(".collapse").on("hidden.bs.collapse", function () {
    $(this).parent("div").removeClass("active");
    $(".homeSliderOwl-showcase-controls .circle-wrapper2").removeClass("run");

    if (
      $(".homeSliderOwl-showcase-controls .circle-wrapper2").hasClass("run")
    ) {
      $(".homeSliderOwl-showcase-controls .circle-wrapper2").removeClass("run");
    }
  });

  $(".collapse").on("shown.bs.collapse", function () {
    $(this).parent("div").addClass("active");
    var arrownext = $(".panel.panel-default.active").attr("data-next");
    var databg = $(".panel.panel-default.active").attr("data-bg");
    console.log(arrownext);
    console.log(databg);
    //$(".changeBg").attr("src", databg);
    $("#showcase-controls2").click(function () {
      $(this).attr("href", arrownext);
    });

    $(".homeSliderOwl-showcase-controls .circle-wrapper2").addClass("run");
  });

  // Business Segmets
  $(".privateEquitySlider, .creditSlider, .impactEquitySlider").owlCarousel({
    animateOut: "animate__fadeOut",
    animateIn: "animate__fadeIn",
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    items: 1,
    URLhashListener: true,
    autoplay: false,
    lazyLoad: true,
    responsive: {
      0: {
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
      },
      600: {
        dots: false,
      },
      1000: {
        dots: false,
      },
    },
  });

  var privateEquitySliderOwl = $(".privateEquitySlider");
  privateEquitySliderOwl.owlCarousel();

  privateEquitySliderOwl.on("changed.owl.carousel", function (event) {
    $(".mobileHashnav ul li").removeClass("activeHash");
    $(".mobileHashnav ul li").next().addClass("activeHash");
  });

  /* Tabs */
  var tabs = $(".tabs");
  var selector = $(".tabs").find("a").length;
  //var selector = $(".tabs").find(".selector");
  var activeItem = tabs.find(".active");
  var activeWidth = activeItem.innerWidth();
  $(".selector").css({
    left: activeItem.position.left + "px",
    width: activeWidth + "px",
  });

  $(".tabs").on("click", "a", function (e) {
    e.preventDefault();
    $(".tabs a").removeClass("active");
    $(this).addClass("active");
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
      left: itemPos.left + "px",
      width: activeWidth + "px",
    });

    var activeDataTabs = $(".tabs a.active").attr("data-petitle");
    var activeDataDesc = $(".tabs a.active").attr("data-peDescription");
    $(".bs-content-left h3").html(activeDataTabs);
    $(".bs-content-left p").html(activeDataDesc);

    var getClass = $(this).attr("data-tabs");
    console.log(getClass);

    $(".bsSliderBox").css({ opacity: "0", "z-index": "0" });
    $(getClass).css({ opacity: "1", "z-index": "1" });
  });

  var liHashNav = $(".hashNav");
  var liActiveItem = liHashNav.find(".active");

  $(".hashNav-Arrow").css({
    top: liActiveItem.position.top + "px",
  });

  $(".hashNav").on("click", "a", function (e) {
    //e.preventDefault();
    var liItempos = $(this).position();

    $(".hashNav-Arrow").css({
      top: liItempos.top + "px",
    });
  });

  $(".hashNav li").click(function () {
    $(".hashNav li").removeClass("act");
    $(this).addClass("act");
  });

  //testimonials
  $(".testimonialsSlider").owlCarousel({
    loop: false,
    margin: 150,
    nav: false,
    dots: false,
    smartSpeed: 1000,
    fluidSpeed: 1000,
    onInitialized: counter2, //When the plugin has initialized.
    onTranslated: counter2,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        margin: 100,
        stagePadding: 150,
      },
    },
  });

  $(".testimonialsHomeSlider")
    .owlCarousel({
      loop: false,
      rewind: true,
      margin: 0,
      nav: false,
      dots: false,
      lazyLoad: true,
      // smartSpeed: 1000,
      // fluidSpeed: 1000,
      onInitialized: counterNew, //When the plugin has initialized.
      onTranslated: counterNew,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    })
    .on("dragged.owl.carousel", function (event) {
      var testimonialsContent = $(
        ".testimonialsHomeSlider .owl-item.active .item"
      ).data();

      $(".testimonialsHome-left h2").html(testimonialsContent.heading);
      $(".t-content").html(testimonialsContent.content);
      $(".company-logo img").attr("src", testimonialsContent.complogo);
      $(".person-name").html(testimonialsContent.name);
      $(".person-profile").html(testimonialsContent.post);
    });

  function counterNew(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#indNew1").html(item);
    $("#totNew1").html(items);
  }

  var testimonialsHomeSliderOwl = $(".testimonialsHomeSlider");
  testimonialsHomeSliderOwl.owlCarousel();

  $("#rightArrow-new").click(function () {
    testimonialsHomeSliderOwl.trigger("next.owl.carousel");

    var testimonialsContent = $(
      ".testimonialsHomeSlider .owl-item.active .item"
    ).data();

    $(".testimonialsHome-left h2").html(testimonialsContent.heading);
    $(".t-content").html(testimonialsContent.content);
    $(".company-logo img").attr("src", testimonialsContent.complogo);
    $(".person-name").html(testimonialsContent.name);
    $(".person-profile").html(testimonialsContent.post);
  });

  $("#leftArrow-new").click(function () {
    testimonialsHomeSliderOwl.trigger("prev.owl.carousel");

    var testimonialsContent = $(
      ".testimonialsHomeSlider .owl-item.active .item"
    ).data();

    $(".testimonialsHome-left h2").html(testimonialsContent.heading);
    $(".t-content").html(testimonialsContent.content);
    $(".company-logo img").attr("src", testimonialsContent.complogo);
    $(".person-name").html(testimonialsContent.name);
    $(".person-profile").html(testimonialsContent.post);
  });

  // testimonialsHomeSliderOwl.on("changed.owl.carousel", function (event) {
  // 	//console.log("changed");

  // 	var testimonialsContent = $(
  // 		".testimonialsHomeSlider .owl-item.active .item"
  // 	).data();

  // 	$(".testimonialsHome-left h2").html(testimonialsContent.heading);
  // 	$(".t-content").html(testimonialsContent.content);
  // 	$(".company-logo img").attr("src", testimonialsContent.complogo);
  // 	$(".person-name").html(testimonialsContent.name);
  // 	$(".person-profile").html(testimonialsContent.post);
  // });

  function counter2(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#ind1").html(item);
    $("#tot1").html(items);
  }

  var testimonialsSliderOwl = $(".testimonialsSlider");
  testimonialsSliderOwl.owlCarousel();

  $("#leftArrow").click(function () {
    testimonialsSliderOwl.trigger("prev.owl.carousel");

    var title = $(".testimonialsSlider .owl-item.active .item").attr(
      "data-title"
    );
    var comments = $(".testimonialsSlider .owl-item.active .item").attr(
      "data-para"
    );
    var name = $(".testimonialsSlider .owl-item.active .item").attr(
      "data-name"
    );
    $(".testiTitle").html(title);
    $(".comments").html(comments);
    $(".personName p").html(name);
  });

  $("#rightArrow").click(function () {
    testimonialsSliderOwl.trigger("next.owl.carousel");

    var title = $(".testimonialsSlider .owl-item.active .item").attr(
      "data-title"
    );
    var comments = $(".testimonialsSlider .owl-item.active .item").attr(
      "data-para"
    );
    var name = $(".testimonialsSlider .owl-item.active .item").attr(
      "data-name"
    );
    $(".testiTitle").html(title);
    $(".comments").html(comments);
    $(".personName p").html(name);
  });

  // Case Studies
  $(".caseStudiesSlider")
    .owlCarousel({
      stagePadding: 250,
      loop: false,
      rewind: true,
      margin: 0,
      nav: false,
      dots: false,
      center: true,
      lazyLoad: true,
      // smartSpeed: 1000,
      // fluidSpeed: 1000,
      onInitialized: counter3, //When the plugin has initialized.
      onTranslated: counter3,
      startPosition: 0,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
        },
        600: {
          items: 1,
          stagePadding: 0,
        },
        1000: {
          items: 1,
        },
        1900: {
          items: 1,
          stagePadding: 450,
        },
      },
    })
    .on("dragged.owl.carousel", function (event) {
      //console.log('event : ',event.relatedTarget['_drag']['direction'])
      var getTheme = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-theme"
      );
      var getImg = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-img"
      );
      var getTag = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-tag"
      );
      var mcolorline = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-colorline"
      );
      var mheading = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-mheading"
      );
      var mpara = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-mpara"
      );
      var cimg = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-cimg"
      );
      var caseid = $(".caseStudiesSlider .owl-item.active .item").attr(
        "data-caseid"
      );
      console.log(caseid);
      $(".sliderContent-slider").css("background-color", getTheme);
      if (getImg && getImg !== "") {
        $(".mainImg").attr("src", getImg);
      } else {
        $(".mainImg").attr("src", "images/fallback.png"); // Use your fallback image path
      }
      $(".tags").css("background-color", getTheme);
      $(".tags").text(getTag);
      //$(".colorLine").css("color", getTheme);
      $(".colorLine").text(mcolorline);
      $(".m-heading").text(mheading);
      $(".m-para").text(mpara);
      $(".cmimg").attr("src", cimg);
      $(".viewCaseStudyPopup").attr("id", caseid);
    });

  function counter3(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#ind3").html(item);
    $("#tot3").html(items);
  }

  var caseStudiesSliderOwl = $(".caseStudiesSlider");
  caseStudiesSliderOwl.owlCarousel();

  $(".caseStudies #leftArrow").click(function () {
    caseStudiesSliderOwl.trigger("prev.owl.carousel");

    var getTheme = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-theme"
    );
    var getImg = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-img"
    );
    var getTag = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-tag"
    );
    var mcolorline = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-colorline"
    );
    var mheading = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-mheading"
    );
    var mpara = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-mpara"
    );
    var cimg = $(".caseStudiesSlider .owl-item.active .item").attr("data-cimg");
    var caseid = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-caseid"
    );
    $(".sliderContent-slider").css("background-color", getTheme);
    if (getImg && getImg !== "") {
      $(".mainImg").attr("src", getImg);
    } else {
      $(".mainImg").attr("src", "images/fallback.png"); // Use your fallback image path
    }
    $(".tags").css("background-color", getTheme);
    $(".tags").text(getTag);
    //$(".colorLine").css("color", getTheme);
    $(".colorLine").text(mcolorline);
    $(".m-heading").text(mheading);
    $(".m-para").text(mpara);
    $(".cmimg").attr("src", cimg);
    $(".viewCaseStudyPopup").attr("id", caseid);
  });

  $(".caseStudies #rightArrow").click(function () {
    caseStudiesSliderOwl.trigger("next.owl.carousel");

    var getTheme = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-theme"
    );
    var getImg = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-img"
    );
    var getTag = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-tag"
    );
    var mcolorline = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-colorline"
    );
    var mheading = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-mheading"
    );
    var mpara = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-mpara"
    );
    var cimg = $(".caseStudiesSlider .owl-item.active .item").attr("data-cimg");
    var caseid = $(".caseStudiesSlider .owl-item.active .item").attr(
      "data-caseid"
    );
    $(".sliderContent-slider").css("background-color", getTheme);
    if (getImg && getImg !== "") {
      $(".mainImg").attr("src", getImg);
    } else {
      $(".mainImg").attr("src", "images/fallback.png"); // Use your fallback image path
    }
    $(".tags").css("background-color", getTheme);
    $(".tags").text(getTag);
    //$(".colorLine").css("color", getTheme);
    $(".colorLine").text(mcolorline);
    $(".m-heading").text(mheading);
    $(".m-para").text(mpara);
    $(".cmimg").attr("src", cimg);
    $(".viewCaseStudyPopup").attr("id", caseid);
  });

  var csPopupInnerHeight = $(".csPopupInner").outerHeight(true);
  var csPopupHeaderHeight = $(".csPopupHeader").outerHeight(true);
  var csPopupContentHeight = csPopupInnerHeight - csPopupHeaderHeight;

  $(".csPopupContent").css("height", csPopupContentHeight - 30);

  $(".close-cspopup").click(function () {});

  $("");
  //infocus
  $(".infocusSlider").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    onInitialized: counter4, //When the plugin has initialized.
    onTranslated: counter4,
  });

  function counter4(event) {
    var element = event.target; // DOM element, in this example .owl-carousel
    var items = event.item.count; // Number of items
    var item = event.item.index + 1; // Position of the current item

    // it loop is true then reset counter from 1
    if (item > items) {
      item = item - items;
    }
    $("#ind4").html(item);
    $("#tot4").html(items);
  }

  var infocusSliderOwl = $(".infocusSlider");
  infocusSliderOwl.owlCarousel();

  $(".inFocus #leftArrow").click(function () {
    infocusSliderOwl.trigger("prev.owl.carousel");
  });

  $(".inFocus #rightArrow").click(function () {
    infocusSliderOwl.trigger("next.owl.carousel");
  });

  $(".csPopupContent ul").mCustomScrollbar();

  $(".PopSearch ul li").click(function () {
    $(".searchParent").hide();
  });
});
