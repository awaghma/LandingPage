   $( document ).ready(function() {
        var bgvid = document.getElementById('bgvid');
        var dashvid = document.getElementById('dashvid');
        
        var currentEnt  = findBootstrapEnvironment();
        if(currentEnt=='md'){
           $('.carousel').carousel({ipad : true, interval :false });
        }else if(currentEnt=='lg'){
          $('.carousel').carousel({ipad : false, interval :false });
        }

        triggerModelvideo();

        $("body" ).on( "touchstart",function() {
          bgvid.play();
        });

        $(".play-first" ).on( "click",function() {
          $(this).hide();
          dashvid.play();
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