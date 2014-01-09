/**
 * Yetti Loader
 *
 * Main script loader, featuring Modernizr.
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

 /*************************************************
 Configuration
**************************************************/
 
 var yetti_config = {
	'path':		'static'
};
 
/*************************************************
 Prevent console failure on several browsers
**************************************************/

(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/*************************************************
 Initialize all tests
**************************************************/

Modernizr.addTest({
	'loadcolorbox': jQuery('.colorbox').length > 0,
	'loadcycle': jQuery('.cycle-slideshow').length > 0,
	'loadlazyload': jQuery('.lazyload').length > 0,
	'loadmegamenu': jQuery('.megamenu').length > 0,
	'loadtoggle': jQuery('.toggle').length > 0,
	'loadajaxcontent': jQuery('.ajax-content').length > 0
});

/*************************************************
 Load all scripts
**************************************************/

Modernizr.load([
	// Load Colorbox
	{
		test: Modernizr.loadcolorbox,
		yep: [yetti_config.path + '/js/vendor/jquery.colorbox-min.js', yetti_config.path + '/js/scripts/yetti-colorbox.js']	
	},
	// Load Cycle
	{
		test: Modernizr.loadcycle,
		yep: '//malsup.github.com/jquery.cycle2.js',
		complete: function() {
		
			if (!window.jQuery.fn.cycle && Modernizr.loadcycle) {
				Modernizr.load(yetti_config.path + '/js/vendor/jquery.cycle2.min.js');
			}
		}
	},
	// Load Lazy Load
	{
		test: Modernizr.loadlazyload,
		yep: [yetti_config.path + '/js/vendor/jquery.lazyload.min.js', yetti_config.path + '/js/scripts/yetti-lazyload.js']	
	},				
	// Load Mega Menu
	{
		test: Modernizr.loadmegamenu,
		yep: yetti_config.path + '/js/scripts/yetti-megamenu.js'	
	},
	// Load Toggle
	{
		test: Modernizr.loadtoggle,
		yep: yetti_config.path + '/js/scripts/yetti-toggle.js'	
	},
	// Load AJAX Content
	{
		test: Modernizr.loadajaxcontent,
		yep: yetti_config.path + '/js/scripts/yetti-ajax-content.js'	
	},
	// Load Yetti common
	{
		load: yetti_config.path + '/js/scripts/yetti-common.js'
	}
]);