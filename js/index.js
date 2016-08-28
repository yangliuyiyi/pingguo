
          $(function(){
              $('.nav-phone .nav-menu').on('click', function (e) {
                  e.preventDefault();
                  $(this).toggleClass('change');
                  if ($(this).hasClass('change')) {
                      $('body').css('overflow', 'hidden');
                      $('.nav-xy').slideDown(500);
                  } else {
                      $('body').css('overflow', 'inherit');
                      $('.nav-xy').slideUp(500);
                  }

              });
              $('.header .nav .search').on('click',function(e){
                  e.preventDefault();
                  $('.nav,.search-box,.text').addClass('searching');
                  $('.nav .bag').addClass('close');
                  $('.hui').addClass('show');
              });
              $('.header .nav .bag').on('click',function(e){
                  e.preventDefault();
                  $('.nav .bag').removeClass('close');
                  $('.nav,.search-box,.text').removeClass('searching');
                  $('.hui').removeClass('show');
              });
                  dul=$('.lie');

                  dul.on('click',function(){
                      $(this).find('.xyclose').toggleClass('chazhuan') ;
                      $(this).toggleClass("chuxian");
                  });
              var as=$('.banner-inner li');
              var lis=$('.pointer li');
              var width=$('.banner').width();
              var t=setInterval(moveL,2000);
              var num=0;
              var next=0;
              for(var i=0;i<as.length;i++){
                  if(i==0){
                      continue;
                  }
                  as.eq(i).offset({left:width});
                  lis.eq(i).removeClass('current');

              }

              function moveL(){
                  next++;
                  if(next>=4){
                      next=0;
                  }
                  as.eq(next).offset({left:width});
                  as.eq(num).animate({left:-width});
                  as.eq(next).animate({left:0});
                  num=next;
                  for(var j=0;j<lis.length;j++){
                      lis.eq(j).removeClass('current');
                  }
                  lis.eq(num).addClass('current')
              }
              function moveR(){
                  next--;
                  if(next<0){
                      next=3;
                  }
                  as.eq(next).offset({left:-width});
                  as.eq(num).animate({left:width});
                  as.eq(next).animate({left:0});
                  num=next;
                  for(var j=0;j<lis.length;j++){
                      lis.eq(j).removeClass('current');
                  }
                  lis.eq(num).addClass('current')
              }
              $('.rightbtn').on('click',function(){
                  moveL();
              })
              $('.leftbtn').on('click',function(){
                  moveR();
              })
              $('.banner').on("mouseover",function(){
                  clearInterval(t);
                  $('.leftbtn').css('display','block');
                  $('.rightbtn').css('display','block')
              })
              $('.banner').on("mouseout",function(){
                  t=setInterval(moveL,2000);
                  $('.leftbtn').css('display','none');
                  $('.rightbtn').css('display','none')
              })
          })
  