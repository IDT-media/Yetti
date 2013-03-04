/**
 * Yetti Toggle loader
 *
 * Toggle "active" class on elements with class "toggle".
 *
 * IDT Media Team
 * hi@i-do-this.com
 *
 * Tapio Löytty, <tapsa@orange-media.fi>
 * Web: www.orange-media.fi
 *
 * Goran Ilic, <uniqu3e@gmail.com>
 * Web: www.ich-mach-das.at
 *
 */
var Yetti_Toggle = (function ($) {

	function load() {
	
		$('.idt-toggle').each(function () {
		
			$(this).click(function () {

				var toggle = $(this)

				toggle.siblings().removeClass('active');
				toggle.toggleClass('active');
				
			});
		});

		$(document).click(function (event) {

			var $target = $(event.target);

			if (!$target.parent().hasClass("toggle")) {
				$(".toggle").removeClass('active');
			}
		});
	}

	return {
	
		init: load
	};

}(jQuery)).init();