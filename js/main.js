$(document).ready(function() {
    var posY1 = $('#main .section1').offset().top;
    var posY2 = $('#main .section2').offset().top;
    var posY4 = $('#main .section4').offset().top;
    
    
    $('.profile_box .btn_fix').on('click', function() {
        $('#main .section1 .section1_inner .profile_box').toggleClass('on');
        console.log('click');
    });
    
    $('.aca_box .btn_fix').on('click', function() {
        $('#main .section1 .section1_inner .aca_box').toggleClass('on');
        console.log('click');
    });
    
    
    // 스크롤바 위치판단
    $(window).scroll(function() {
//        console.log($(this).scrollTop());
        var scrollY = $(this).scrollTop();
        
        if ( scrollY > 1063) {
//            console.log('dddd');
            $('#main .section1 .section1_inner .profile_box').removeClass('on');
            $('#main .section1 .section1_inner .aca_box').removeClass('on');
        }
    });
    
    $(window).scroll(function() {
        // 스크롤바 위쪽의 문서전체에서의 위치이며 스크롤한 양
//        console.log($(this).scrollTop());
        var scrollY = $(this).scrollTop();
        
        if (scrollY >= 600 && scrollY < 700) {
//            console.log('dddd');
            $('#main .section2 .section2_inner .box.skills_box ul li').removeClass('on');
        } else if (scrollY >= 700 && scrollY < posY2) {
//            console.log('fff');
            $('#main .section2 .section2_inner .box.skills_box ul li').addClass('on');
        } else if (scrollY >= 1200 && scrollY < posY4) {
//            console.log('안녕');
            $('#main .section2 .section2_inner .box.skills_box ul li').removeClass('on');
        }
    });
    
});