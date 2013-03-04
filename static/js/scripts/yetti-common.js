/**
 * Yetti Common loaded helpers
 * NOTE: Loaded always, after jQuery initiated
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
var Yetti_Common = (function ($) {

	// Disable function as you don't need em.
	function load() {
	
		externalLink();
		clickable();
	}
	
	// open links in new window if rel="external" is set
	function externalLink() {
	
		$('a[rel="external"]').click(function (e) {
		
			e.preventDefault();		
			window.open($(this).attr('href'));
		});
	}
	
	function clickable() {
	
		$("body").delegate(".clickable-blank", "click", function(event) {
			
			event.preventDefault();
			window.open($(this).find("a").attr("href"));
		});
		
		$("body").delegate(".clickable", "click", function(event) {
			
			event.preventDefault();
			window.location = $(this).find("a").attr("href");
		});		
	}

	return {
	
		init: load
	};

}(jQuery)).init();