(function ($) {
  Drupal.behaviors.anchorFix = {
    attach: function (context, settings) {
      var isScrollFix = false;
      var el = document.getElementById('hold');
      if (el) {
        $(el).scroll(function() {
          if (!isScrollFix) {//don't copy our own scroll event onto document
            isScrollFix = true;
            var scrollTo = this.scrollTop;
            this.scrollTop = 0;
            window.scroll(0, scrollTo);
          } else {
            isScrollFix = false;
          }
        });
      }
    }
  };
})(jQuery);
