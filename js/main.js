$(document).ready(function() {
    $('.open_close_btn').each(function() {
      
        var count = 1;
          $(this).click(function(){
             count++;
             if(count%2==0){
                  $('.nav_mobile').css({'transform':'translateX(-100%)'});
               
                  $('.btn_nav span:nth-child(1)').css({'transform':'rotate('+45+'deg) translate('+20+'px,'+17+'px)'});
                 $('.btn_nav span:nth-child(2)').css({'opacity':'0'});
                 $('.btn_nav span:nth-child(3)').css({'transform':'rotate(-'+45+'deg) translate('+20+'px,-'+17+'px)'});
             }else{    
                 $('.nav_mobile').css({'transform':'translateX(0%)'});
                   
                 $('.btn_nav span:nth-child(1)').css({'transform':'rotate('+0+'deg) translate('+0+'px,'+0+'px)'});
                 $('.btn_nav span:nth-child(2)').css({'opacity':'1'});
                 $('.btn_nav span:nth-child(3)').css({'transform':'rotate(-'+0+'deg) translate('+0+'px,-'+0+'px)'});
                
             }
          });//click
    });//each
    
    
    $(window).scroll(function(){
    var scrlW = $(this).scrollTop();
        $('.skills').css('transform','translateY(-'+scrlW/1.5+'%)');
        $('.h1').css('transform','translateY('+scrlW/3+'%)');
        /*-------up_btn---------*/
        var UpOnOffset = $('#a1').offset().top;
        if(scrlW >= UpOnOffset){
          $('.up_btn').css('display','block');
        }else{$('.up_btn').css('display','');}
        
    });//scroll
      
    $('.nav').on('click','a', function(e){
      e.preventDefault();
      var id = $(this).attr('href'),
          top = $(id).offset().top;
      $('body, html').animate({scrollTop:top},700);    
      
    });
    
});//ready