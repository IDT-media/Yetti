/**
 * Yetti Lazy Load loader
 *
 * Performs data abstraction for jQuery Lazy Load plugin by Mika Tuupola
 *
 * Usage:
 *
 *	<div class="lazyload" 
 *		data-lazyload-effect="fadeIn" 
 *		data-lazyload-treshold="500" 
 *		data-lazyload-event="mouseover" 
 *		data-lazyload-skip-invisible="true
 *	">
 *	... Images here ...
 *	</div>
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
var Yetti_LazyLoad = (function ($) {

	function load() {
	
		$('.lazyload').each(function() {
		
			var data = $(this).data();
			$(this).find('img').show().lazyload({
			
				effect: data.lazyloadEffect,
				treshold: data.lazyloadTreshold,
				event: data.lazyloadEvent,
				skip_invisible: data.lazyloadSkipInvisible
			});
			
		}).trigger('scroll');	
	}

	return {
	
		init: load
	};

}(jQuery)).init();