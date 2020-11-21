$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        //adaptiveHeight: true // включається адаптивна висота для слайдера, слейдер підлаштовується ПЛАВНО під найвищий слайд
                            // але для цього також потрібно додати в slick-track align-items: flex-start;
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: true, //only for PC
        swipe: true, //for Mobile\
        touchThreshould: 1,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth:false,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        asNavFor: '.sliderbig',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        mobileFirst: true,
        appendArrows: '.container-for-arrows',
        appendDots: '.container-for-arrows',
    });
})