$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  dots: false,
  nav: false,
  navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
      // margin: 20
    }
  }
});