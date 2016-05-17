$(document).ready(function(){
   $("#buttonMore").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#aboutt").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

$(document).ready(function(){
   $("#hom").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#home").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

$(document).ready(function(){
   $("#ab").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#aboutt").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

$(document).ready(function(){
   $("#ren").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#render").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

$(document).ready(function(){
   $("#co").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#constrr").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});


$(document).ready(function(){
   $("#con").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $("#conta").offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
});

var h = $(window).height();
$(window).scroll(function(){
	if ( ($(this).scrollTop()+h) >= $("#render").offset().top) {
    $("#img1").css('animation-name', 'fades');
    $("#img1").css('animation-duration', '1.5s');
    $("#img1").css('animation-delay', '1s');
    $("#img1").css('animation-fill-mode', 'forwards');

    $("#img2").css('animation-name', 'fades');
    $("#img2").css('animation-duration', '1.5s');
    $("#img2").css('animation-delay', '0.s');
    $("#img2").css('animation-fill-mode', 'forwards');

    $("#img3").css('animation-name', 'fades');
    $("#img3").css('animation-duration', '1.5s');
    $("#img3").css('animation-delay', '1s');
    $("#img3").css('animation-fill-mode', 'forwards');

    $("#img4").css('animation-name', 'fades');
    $("#img4").css('animation-duration', '1.5s');
    $("#img4").css('animation-delay', '0.s');
    $("#img4").css('animation-fill-mode', 'forwards');

    $("#img5").css('animation-name', 'fades');
    $("#img5").css('animation-duration', '1.5s');
    $("#img5").css('animation-delay', '1s');
    $("#img5").css('animation-fill-mode', 'forwards');

    $("#img6").css('animation-name', 'fades');
    $("#img6").css('animation-duration', '1.5s');
    $("#img6").css('animation-delay', '0.s');
    $("#img6").css('animation-fill-mode', 'forwards');

    $("#img7").css('animation-name', 'fades');
    $("#img7").css('animation-duration', '1.5s');
    $("#img7").css('animation-delay', '1s');
    $("#img7").css('animation-fill-mode', 'forwards');

    $("#text").css('animation-name', 'fades');
    $("#text").css('animation-duration', '1.5s');
    $("#text").css('animation-delay', '1s');
    $("#text").css('animation-fill-mode', 'forwards');
  }
})

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.nav').addClass("sticky");
  }
  else{
    $('.nav').removeClass("sticky");
  }
});
