   $( document ).ready(function() {
        var bgvid = document.getElementById('bgvid');
        var dashvid = document.getElementById('dashvid');

        setTimeout(function(){
          dashvid.play();
        }, 3000)
        
        var currentEnt  = findBootstrapEnvironment();
        if(currentEnt=='md' || currentEnt=='sm'){
           $('.carousel').carousel({ipad : true, interval :false });
        }else if(currentEnt=='lg'){
          $('.carousel').carousel({ipad : false, interval :false });
        }

        triggerModelvideo();

        $("body" ).on( "touchstart",function() {
          if(currentEnt=='md' || currentEnt=='sm'){
            bgvid.play();
          }
        });
   });

   function triggerModelvideo(){
        $(".see-now" ).on( "click",function() {
          $(".modal").modal('show');
          var vid = document.getElementById('modal-video');
          vid.play();
        });

        $(".close,.modal" ).on( "click",function() {
          var vid = document.getElementById('modal-video');
          vid.pause();
        });
   }

   function findBootstrapEnvironment() {
      var envs = ['xs', 'sm', 'md', 'lg'];

      $el = $('<div>');
      $el.appendTo($('body'));

      for (var i = envs.length - 1; i >= 0; i--) {
          var env = envs[i];

          $el.addClass('hidden-'+env);
          if ($el.is(':hidden')) {
              $el.remove();
              return env
          }
      };
  }