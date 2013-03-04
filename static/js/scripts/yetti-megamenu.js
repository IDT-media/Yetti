/**
 * Yetti MegaMenu loader
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
var Yetti_MegaMenu = (function ($) {

	function load() {
	
		var menuItem = $('ul#main-menu > li.parent');

		if (Modernizr.touch) {

			menuItem.each(function () {

				var currentItem = $(this);

				this.addEventListener('touchstart', function (e) {
					if (e.touches.length === 1) {
						e.stopPropagation();

						// toggle slide class for dropdown
						if (!currentItem.hasClass('slide')) {

							// prevent opening link on first touch
							if (e.target === this || e.target.parentNode === this) {
								e.preventDefault();
							}

							// hide open dropdowns
							menuItem.removeClass('slide');
							menuItem.not('.slide').children('div').hide();
							menuItem.not('.slide').children('div').css('z-index', '1');
							// show current touched dropdown
							currentItem.addClass('slide');
							currentItem.children('div').css('z-index', '9999').stop(true, true).slideDown(200);

							// hide dropdown on touch outside
							document.addEventListener('touchstart', closeDropdown = function (e) {
								e.stopPropagation();

								currentItem.removeClass('slide');
								currentItem.not('.slide').children('div').hide();
								currentItem.not('.slide').children('div').css('z-index', '1');
								document.removeEventListener('touchstart', closeDropdown);
							});
						}
					}
				}, false);
			});

		} else {

			menuItem.on('mouseenter mouseleave', function (event) {

				var currentItem = $(this);
				
				console.log(event.type);

				if (event.type == 'mouseenter') {
					currentItem.addClass('slide');
					currentItem.children('div').css('z-index', '9999').stop(true, true).show();
				} else {
					currentItem.removeClass('slide');
					if (!currentItem.hasClass('slide')) {

						$('.submenu').css('z-index', '1').stop(true, true).hide();
					}
				}
			});

		}
	}

	return {
	
		init: load
	};

}(jQuery)).init();