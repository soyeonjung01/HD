$(function(){

  //mediaQuery
  let mediaQueryMobile = window.matchMedia("screen and (min-device-width: 320px) and (max-device-width: 600px)");
  let mediaQueryTablet = window.matchMedia("screen and (min-device-width: 601px) and (max-device-width: 768px)");
  let mediaQueryLowPC = window.matchMedia("screen and (min-device-width: 769px) and (max-device-width: 1024px)");
  let mediaQueryHighPC = window.matchMedia("screen and (min-device-width: 1025px)");
  let mediaQueryMaxPC = window.matchMedia("screen and (min-device-width: 1920px)");


  // fullpage ------------------------------------------------------------
  let windowWidth = $(window).width();

  $('.fullpage').fullpage({
    navigation: windowWidth >= 769 ? true : false,
    afterLoad: function (origin, destination, direction) {
      if (destination.index === 0) {
        $('.top_btn').fadeOut(200)
      } else {
        $('.top_btn').fadeIn(200)
      }
      if (windowWidth >= 1025) {
        $('header .header_inner .hamburder_white').hide()
        $('header .header_inner .hamburder_black').hide()
        $('header').css({height: 0})

        if(destination.index === 0 || destination.index === 1 || destination.index === 2 || destination.index === 3) {
          // header
          $('header .header_inner .logo_white').show()
          $('header .header_inner .logo_black').hide()
          $('header .header_inner .language_pc li').css({color: '#eee'})
          $('header .header_inner .language_pc li.on').css({color: 'white'})
          $('header .header_inner .hamburder_box .lnb').css({color: 'white'})

          // header_hover
          $('header .header_inner .hamburder_box .lnb').hover(
            function () {
              $('header').css({backgroundColor: 'white'})
              $('header').animate({height: 460},500)
              $('header .header_inner .language_pc li').css({color: '#999'})
              $('header .header_inner .language_pc li.on').css({color: '#444'})
              $('header .header_inner .hamburder_box .lnb').css({color: '#222'})
              $('header .header_inner .logo_white').hide()
              $('header .header_inner .logo_black').show()
              $('header .header_inner .hamburder_box .lnb .seb_menu_box').fadeIn()
            },
            function () {
              $('header').stop().css({backgroundColor: 'transparent', height: 0})
              $('header .header_inner .language_pc li').css({color: '#eee'})
              $('header .header_inner .language_pc li.on').css({color: 'white'})
              $('header .header_inner .hamburder_box .lnb').css({color: 'white'})
              $('header .header_inner .logo_white').show()
              $('header .header_inner .logo_black').hide()
              $('header .header_inner .hamburder_box .lnb .seb_menu_box').stop().hide()
            }
          )

          // top_btn
          $('.top_btn').css({border: '1px solid #eee'})
          $('.top_btn .top_btn_white_img').show()
          $('.top_btn .top_btn_black_img').hide()
        }
        if (destination.index === 4) {
          // top_btn
          $('.top_btn').css({border: '1px solid #444'})
          $('.top_btn .top_btn_white_img').hide()
          $('.top_btn .top_btn_black_img').show()
        }
        if (destination.index === 4 || destination.index === 5) {
          // header
          $('header .header_inner .logo_white').hide()
          $('header .header_inner .logo_black').show()
          $('header .header_inner .language_pc li').css({color: '#999'})
          $('header .header_inner .language_pc li.on').css({color: '#444'})
          $('header .header_inner .hamburder_box .lnb').css({color: '#222'})

          // header_hover
          $('header .header_inner .hamburder_box .lnb').hover(
            function () {
              $('header').css({backgroundColor: 'white'})
              $('header').animate({height: 460},500)
              $('header .header_inner .language_pc li').css({color: '#999'})
              $('header .header_inner .language_pc li.on').css({color: '#444'})
              $('header .header_inner .hamburder_box .lnb').css({color: '#222'})
              $('header .header_inner .logo_white').hide()
              $('header .header_inner .logo_black').show()
              $('header .header_inner .hamburder_box .lnb .seb_menu_box').slideDown()
            },
            function () {
              $('header').css({backgroundColor: 'transparent', height: 0})
              $('header .header_inner .language_pc li').css({color: '#999'})
              $('header .header_inner .language_pc li.on').css({color: '#444'})
              $('header .header_inner .hamburder_box .lnb').css({color: '#222'})
              $('header .header_inner .logo_white').hide()
              $('header .header_inner .logo_black').show()
              $('header .header_inner .hamburder_box .lnb .seb_menu_box').stop().hide()
            }
          )
          if (destination.index === 5) {
            // top_btn
            $('.top_btn').css({border: '1px solid #eee'})
            $('.top_btn .top_btn_white_img').show()
            $('.top_btn .top_btn_black_img').hide()
          }
        }
      } 

      if (windowWidth >= 769) {
          if (destination.index === 4) {
          $('#fp-nav ul li a span').css({background: '#999'})
          $('#fp-nav ul li a.active span').css({backgroundColor: '#0c274b'})
          $('#fp-nav ul li a.active').addClass('changed')
        } else if (destination.index === 5) {
          $('#fp-nav ul li a span').css({background: '#eee'})
          $('#fp-nav ul li a.active span').css({backgroundColor: 'white'})
          $('#fp-nav ul li a.active').removeClass('changed')
        } else {
          $('#fp-nav ul li a span').css({background: '#eee'})
          $('#fp-nav ul li a.active span').css({backgroundColor: 'white'})
          $('#fp-nav ul li a.active').removeClass('changed')
        } 
      } 

      if (windowWidth < 1025) {
        if(destination.index === 1 || destination.index === 2 || destination.index === 3) {
          $('header .header_inner .logo_white').show()
          $('header .header_inner .logo_black').hide()
          $('header .header_inner .hamburder_white').show()
          $('header .header_inner .hamburder_black').hide()
        }
        if(destination.index === 4 || destination.index === 5) {
          $('header .header_inner .logo_white').hide()
          $('header .header_inner .logo_black').show()
          $('header .header_inner .hamburder_white').hide()
          $('header .header_inner .hamburder_black').show()
        }
      } 
      
      if (windowWidth < 769) {
        if(destination.index === 5) {
          $('header .header_inner .logo_white').show()
          $('header .header_inner .logo_black').hide()
          $('header .header_inner .hamburder_white').show()
          $('header .header_inner .hamburder_black').hide()
        }
      }

      if (destination.index === 1) {
        $('.industries .section_title').stop().animate({top: 0, opacity: 1}, 500)
        $('.industries .section_text').stop().delay(300).animate({top: 0, opacity: 1}, 500)
        $('.industries .industries_box .industries_01').stop().delay(700).animate({opacity: 1}, 300)
        $('.industries .industries_box .industries_02').stop().delay(1000).animate({opacity: 1}, 300)
        $('.industries .industries_box .industries_03').stop().delay(1300).animate({opacity: 1}, 300)
        $('.industries .industries_box .industries_04').stop().delay(1600).animate({opacity: 1}, 300)
      }

      if (destination.index === 2) {
        $('.business ul .business_01 .business_text').animate({opacity: 1}, 300)
      }


      if (destination.index === 3) {
        let sustain = $('.sustainability ul .sustain_box')
        let sustainBtn = $('.sustainability .sustain_tab .sustain_btn ul li')
        let sustainIndex = 0
        let intervalId
      
        function switchTab() {
          sustainIndex = (sustainIndex + 1) % 5
      
          sustainBtn.removeClass('checked')
          sustainBtn.eq(sustainIndex).addClass('checked')
      
          sustain.removeClass('on')
          sustain.eq(sustainIndex).addClass('on')
        }
      
        function handleButtonClick() {
          clearInterval(intervalId)
      
          sustainIndex = $(this).index()
      
          sustainBtn.removeClass('checked')
          sustainBtn.eq(sustainIndex).addClass('checked')
      
          sustain.removeClass('on')
          sustain.eq(sustainIndex).addClass('on')
      
          intervalId = setInterval(switchTab, 4000)
        }
        clearInterval(intervalId)
        sustainBtn.click(handleButtonClick)
        // intervalId = setInterval(switchTab, 4000)
      }
      
      if (destination.index === 4) {
        $('.media .section_title').stop().animate({top: 0, opacity: 1}, 500)
        $('.media .section_text').stop().delay(300).animate({top: 0, opacity: 1}, 500)
        $('.media .media_tap li').stop().delay(600).animate({top: 0, opacity: 1}, 300)
        $('.media .media_box .medai_list').stop().delay(800).animate({top: 0, opacity: 1}, 300)
        $('.media .slick-dots').stop().delay(1000).animate({top: 0, opacity: 1}, 300)
      }

      if (destination.index === 5) {
        $('.jops .section_title').stop().animate({top: 0, opacity: 1}, 500)
        $('.jops .section_text').stop().delay(300).animate({top: 0, opacity: 1}, 500)
        $('.jops .jops_box').stop().delay(600).animate({top: 0, opacity: 1}, 500)
        $('.jops .jops_metapo li:nth-child(1)').stop().delay(900).animate({top: 0, opacity: 1}, 300)
        $('.jops .jops_metapo li:nth-child(2)').stop().delay(1000).animate({top: 0, opacity: 1}, 300)
        $('.jops .jops_metapo li:nth-child(3)').stop().delay(1100).animate({top: 0, opacity: 1}, 300)
        $('.jops .jops_metapo li:nth-child(4)').stop().delay(1200).animate({top: 0, opacity: 1}, 300)
      }

      if (destination.index === 6) {
        $('header').fadeOut()
        $('#fp-nav').fadeOut()
      } else {
        $('header').fadeIn()
        $('#fp-nav').fadeIn()
      }
    }
  });


  // top_btn ------------------------------------------------------------
  $('.top_btn').click(function () {
    $.fn.fullpage.moveTo(1, 1); 
  })

      
  // hamburder_btn ------------------------------------------------------------

  let hamOpen = $('header .hamburder_open')
  let hamClose = $('header .hamburder_box .hamburder_close')
  let hamBoxOuter = $('header .hamburder_box_outer')
  let hamBox = $('header .hamburder_box')

  let mainMenu = $('header .lnb .main_menu .main_menu_tab')
  let menuDown = $('header .lnb .main_menu .main_menu_tab .down')
  let menuUp = $('header .lnb .main_menu .main_menu_tab .up')

  if(mediaQueryMobile.matches || mediaQueryTablet.matches || mediaQueryLowPC.matches) {
    
    hamOpen.click(function(){
      hamBoxOuter.fadeIn()
      hamBox.animate({right : 0,}, 300)
  
      mainMenu.removeClass('on')
      menuDown.show()
      menuUp.hide()
      $('.seb_menu_box').hide()
  
      $('body').on('scroll touchmove mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    })
    
    hamClose.click(function(){
      hamBoxOuter.fadeOut()
      $('body').off('scroll touchmove mousewheel');
      if(mediaQueryMobile.matches) {hamBox.animate ({right: -220},300)}
      if(mediaQueryTablet.matches) {hamBox.animate ({right: -300},300)}
      if(mediaQueryLowPC.matches) {hamBox.animate ({right: -390},300)}
    })
    hamBoxOuter.click(function(){
      hamBoxOuter.fadeOut()
      $('body').off('scroll touchmove mousewheel');
      if(mediaQueryMobile.matches) {hamBox.animate ({right: -220},300)}
      if(mediaQueryTablet.matches) {hamBox.animate ({right: -300},300)}
      if(mediaQueryLowPC.matches) {hamBox.animate ({right: -390},300)}
    })
    
    mainMenu.click(function(){
      if($(this).hasClass('on')) {
        $(this).removeClass('on')
        $(this).children('.down').show()
        $(this).children('.up').hide()
        $(this).next().slideUp(400)
      } else {
        mainMenu.removeClass('on')
        $(this).addClass('on')
    
        menuDown.show()
        menuUp.hide()
        $(this).children('.down').hide()
        $(this).children('.up').show()
    
        $('.seb_menu_box').slideUp(400)
        $(this).next().slideDown(400)
      }
    })
  }

  if(mediaQueryHighPC.matches) {
    
    let languageKor = $('header .header_inner .language_pc li:nth-child(1)');
    let languageEng = $('header .header_inner .language_pc li:nth-child(2)');

    languageKor.click(function() {
      languageKor.addClass('on')
      languageEng.removeClass('on')
    })
    
    languageEng.click(function() {
      languageEng.addClass('on')
      languageKor.removeClass('on')
    })
  }


  // intro ------------------------------------------------------------

  let bullet = ['인류의 미래를 개척합니다', '지속가능한 세상을 만듭니다', '행복한 사회를 만듭니다']
  let swiper = $('.fullpage .intro')
  let intro = new Swiper('.mySwiper', {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    autoplay: { delay: 10000 },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>"
      },
    },
    breakpoints: {
      601: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '&nbsp;' + (bullet[index]) + "</span>"
          },
        },
      },
    },
  });

  // industries ------------------------------------------------------------

  let industries = $('.industries .industries_box li')
  if(mediaQueryMobile.matches) {
  } else {
    $(industries).hover(
      function() {
        $(this).find('.industries_content .none').slideDown(500)
      }, 
      function() {
        $(this).find('.industries_content .none').slideUp(500)
    })
  }

  // business ------------------------------------------------------------

  if(mediaQueryMobile.matches || mediaQueryTablet.matches){
    $('.business_slick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow : '.prev',
      nextArrow : '.next',
    });
  }

  if(mediaQueryLowPC.matches || mediaQueryHighPC.matches){
    businessBox = $('.business ul .business_box')
    businessOff = $('.business ul .business_off')

    businessBox.click(function(){
      if ($(this).hasClass('business_off')){
        $(this).children('.business_text').hide()
        $(this).children('.business_text').delay(300).fadeIn(500)
      }

      $(businessBox).animate({width: '140px'}, 500)
      $(businessBox).addClass('business_off')
      $(businessBox).removeClass('business_on')
      
      $(this).addClass('business_on')
      $(this).removeClass('business_off')
    })
  }
  
  //sustainability ------------------------------------------------------------

  


  // media ------------------------------------------------------------

  $('.media_slick').slick({
    rows: 1,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots : true,
    arrows : false,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          rows: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  let mediaTap = $('.fullpage .media .media_tap li')
  let mediaBox = $('.fullpage .media .media_box')
  let newsBox = $('.fullpage .media .news_box')

  newsBox.show()
  mediaTap.click(function(){
    index = $(this).index()
    mediaTap.removeClass('checked')
    mediaTap.eq(index).addClass('checked')

    mediaBox.hide()
    mediaBox.eq(index).show()
    $('.media_slick').slick('setPosition'); 
  })


  // jops ------------------------------------------------------------

  let jopsUp = $('.jops .jops_inner .jops_content_box .jops_btn_up')
  let jopsDown = $('.jops .jops_inner .jops_content_box .jops_btn_down')


  jopsUp.click(function(){
    let jopsListBox = $(this).siblings('.jops_list_container').find('.jops_list_box');
    let currentTop = parseInt(jopsListBox.css('top'));
    
    if(currentTop < 0){
      if (mediaQueryMaxPC.matches){
        jopsListBox.css('top', currentTop + 46)
      } else {
        jopsListBox.css('top', currentTop + 43)
      }
    }
  })
  
  jopsDown.click(function(){
    let jopsListBox = $(this).siblings('.jops_list_container').find('.jops_list_box');
    let currentTop = parseInt(jopsListBox.css('top'));

    if(currentTop > -92){
      if (mediaQueryMaxPC.matches){
        jopsListBox.css('top', currentTop - 46)
      } else {
        jopsListBox.css('top', currentTop - 43)
      }
    }
  })

  let jopsMetapo = $('.jops .jops_metapo li')

  jopsMetapo.hover(
    function() {
      $(this).find('.metapo_on').show()
      $(this).find('.metapo_off').stop().hide()
    },
    function() {
      $(this).find('.metapo_on').stop().hide()
      $(this).find('.metapo_off').show()
    }
  )
  
})//jQuery