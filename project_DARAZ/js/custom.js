 /**********************
    slide owl-carousel
 **********************/
$(document).ready(function(){
  $('.slide-aective').owlCarousel({
    items:1,
     autoplay:true,
      smartSpeed:700,
      loop:true
})
});

 /**********************
    categoryall owl-carousel
 **********************/
$(document).ready(function(){
  $('.phonetablet').owlCarousel({
    items:1,
      dots:false,
      nav:true,
     autoplay:true,
      navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
      smartSpeed:700,
      loop:true
})
});

 /**********************
    panjabisall owl-carousel
 **********************/
$(document).ready(function(){
  $('.panjabiactive').owlCarousel({
    items:4,
      dots:false,
      nav:true,
      navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
      smartSpeed:700,
      loop:true
})
});