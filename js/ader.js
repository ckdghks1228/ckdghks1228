


$(function () {
    
      
   
    
    
       // mobile / tablet footer 열닫 
    $(".fot1 dt a").click(function(){
        if ($(this).next().is(":visible"))
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/plus.png");
        }else{

        $(".fot1 p, .sv").stop().slideUp(500);
        $(".fot1 dt a").children("img").attr("src","img/plus.png");
        $(this).next().stop().slideDown(500);
        $(this).find("img").attr("src","img/minusb.png");
    }
    
    });


    $(".web1 li a").click(function(){
        $(".subbox").slideToggle();
    });


// 서브 메뉴 열닫
    $(".ham > a").click(function(){
        if ($(this).next().is(":visible"))
        {
            $(this).next().stop().slideUp(500);
            $(this).children("img").attr("src","img/plusw.png");
        }else{

        $(".sub").stop().slideUp(500);
        $(".ham > a").children("img").attr("src","img/plusw.png");
        $(this).next().stop().slideDown(500);
        $(this).find("img").attr("src","img/minus.png");
    }
    });


    /*모바일 태블릿 햄버거 토글*/
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.hammenu').toggleClass('open');
       });  

var burger = $('.hamburger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
});
  

$(function () {

    $('.coll').waypoint(function () {
        $('.coll').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    $('h3').waypoint(function () {
        $('h3').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('h4').waypoint(function () {
        $('h4').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('h5').waypoint(function () {
        $('h5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.sig').waypoint(function () {
        $('.sig').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });

    $('#menu').waypoint(function () {
        $('#menu').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    $('.top2').waypoint(function () {
        $('.top2').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.bottom2').waypoint(function () {
        $('.bottom2').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.abc2 p').waypoint(function () {
        $('.abc2 p').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });



    /* 클릭 할때마다 부드럽게 이동 */
    const mainimg = $(".mainimg > section")
    const menu = $("#menu>li")
    menu.on('click', function (event) {
        event.preventDefault();

        const tg = $(this);
        const i = tg.index();

        const mainimg_section = mainimg.eq(i);
        const menu_li = mainimg_section.offset().top+5;

        $("html, body").stop().animate({
            scrollTop: menu_li
        }, "slow");

        $("#menu>li").removeClass("on")
        $(this).addClass("on")
    });

    /* 스크롤 할때마다 */
    $(window).scroll(function () {
        const sct = $(window).scrollTop();
        mainimg.each(function () {
            const tg1 = $(this);
            const i = tg1.index();
            if (tg1.position().top <= sct) {
                menu.removeClass("on");
                menu.eq(i).addClass("on");
            }

        })
    });
});
});