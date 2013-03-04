/**
 * Yetti Colorbox loader
 *
 * Performs data abstraction for jQuery Colorbox plugin by Jack Moore
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
var Yetti_ColorBox = (function ($) {

	function load() {
	
		$('.colorbox').each(function() {
		
			var data = $(this).data();
			$(this).find('.colorbox-item').colorbox({

				transition: data.colorboxTransition,
				speed: data.colorboxSpeed,
				width: data.colorboxWidth,
				height: data.colorboxHeight,
				inline: data.colorboxInline,
				href: data.colorboxHref,
				iframe: data.colorboxIframe,
			});
		});	
	}

	return {
	
		init: load
	};

}(jQuery)).init();