$(document).ready(function() {
// функцию скролла привязать к окну браузера
    $(window).scroll(function(){
        
    // distanceTop = (высота: от начала страницы до эл-та #last) -
        //- высота окна браузера
        var distanceTop = $('#last').offset().top - $(window).height();
        // если величина прокрутки больше distanceTop 
            if  ($(window).scrollTop() > distanceTop){
                $('#slidebox').animate({'left':'0px'},300);
            }
        });
        //связываем  function() с событием click для эл-та  .close 
        $('.close').bind('click',function(){
        $('#slidebox').remove();
    });

    
   $('a[href="#services"]').on('click', function(e) {
      var id = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 500);
      return false;
    });
});