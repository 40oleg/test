$('.main-slick-slider').slick(
    {
        prevArrow: $('.arrow-prev'),
        nextArrow: $('.arrow-next'),
        slidesToShow: 3,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2, 
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
    }
);