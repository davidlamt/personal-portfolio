/*
	Overflow by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {

		// Full screen header?
        fullScreenHeader: true,

	};

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1080px)',
		narrow: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		if (skel.vars.touch) {

			$body.addClass('is-scroll');

		}

		// Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            $body.removeClass('is-loading');

            // Center the images inside of the outer container
            $('.right-image').css('right', -(($('.right-image').width() - $('.right-image-container').width()) / 2));
            $('.left-image').css('right', -(($('.left-image').width() - $('.left-image-container').width()) / 2));
        });

		// CSS polyfills (IE<9).
        if (skel.vars.IEVersion < 9)
            $(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
        $('form').placeholder();

		// Prioritize "important" elements on mobile.
        skel.on('+mobile -mobile', function() {
            $.prioritize(
                '.important\\28 mobile\\29',
                skel.breakpoint('mobile').active
            );
        });

		// Scrolly links.
        $('.scrolly-middle').scrolly({
            speed: 1000,
            anchor: 'middle'
        });

        $('.scrolly').scrolly({
            speed: 1000,
            offset: function() { return (skel.breakpoint('mobile').active ? 70 : 190); }
        });

		// Full screen header.
        if (settings.fullScreenHeader) {

            var $header = $('#header');

            if ($header.length > 0) {

                var $header_header = $header.find('header');

                $window
                    .on('resize.overflow_fsh', function() {

                        if (skel.breakpoint('mobile').active)
                            $header.css('padding', '');
                        else {

                            var p = Math.max(192, ($window.height() - $header_header.outerHeight()) / 2);
                            $header.css('padding', p + 'px 0 ' + p + 'px 0');

                        }

                    })
                    .trigger('resize.overflow_fsh');

                $window.load(function() {
                    $window.trigger('resize.overflow_fsh');
                });

            }

        }

	});

})(jQuery);