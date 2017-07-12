  jQuery(".fancybox-close").click(function() {
      $('.youtube-iframe').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
      });
    });
