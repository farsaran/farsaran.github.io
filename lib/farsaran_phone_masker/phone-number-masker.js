/**
 * This script is loaded to all pages. (actually used in the contact page)
 * Hides phone numbers, and shows it on click.
 * Styled in phone-number-masker.css
 */
(function($) {
  $(function() {
    // get current day of week, hour
    var now = new Date();
    var current_hour = now.getHours();
    var current_dow = now.toLocaleString('en-us', {weekday: 'long'});

    // check if we are in business hours/days
    var business_hour = false;
    if (current_dow == 'Friday') {
      business_hour = false;
    }
    else if (current_dow == 'Thursday') {
      business_hour = ((current_hour >= 8) && (current_hour <= 12));
    }
    else {
      business_hour = ((current_hour >= 8) && (current_hour <= 14));
    }

    //console.warn(business_hour);

    $('.phone-number-masker').each(function(i, pnm) {
      var $pnm = $(pnm);
      var hidden_part = $pnm.find('.hidden-part');
      var visible_part = $pnm.find('.visible-part');
      var pnm_desc = $pnm.find('.pnm-desc');

      hidden_part.hide();

      var pnm_button = $('<span class="pnm-button">');
      pnm_button.text('برای نمایش شماره تماس کلیک کنید.');
      pnm_button.insertAfter(hidden_part);

      pnm_button.click(function() {
        pnm_desc.slideToggle(300);
      });

      pnm_desc.find('.i-dont-agree').click(function() {
        pnm_desc.slideUp(300);
      });

      pnm_desc.find('.i-agree').click(function() {
        //if (business_hour) {
        pnm_desc.slideUp(300);
        pnm_button.hide();
        hidden_part.show().removeClass('hidden-part').addClass('hidden-part-accepted');;
        visible_part.removeClass('visible-part').addClass('visible-part-accepted');
        //}
        //else {
        //  pnm_desc.slideUp(300, function() {
        //    alert('با توجه به اینکه اکنون در ساعت اداری نیستیم، شماره تماس نمایش داده نمیشود. لطفا در ساعات اداری مجددا مراجعه فرمایید!');
        //  });
        //}
      });

    });
  });
})(jQuery);
