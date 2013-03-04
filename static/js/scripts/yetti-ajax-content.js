/**
 * Yetti AJAX Content
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
var Yetti_AJAXContent = (function ($) {

	function load() {
	
		$('#content-items').on('click', 'a', function(e){
			
			e.preventDefault();
			
			if(!$('#content-items').hasClass('ajax-loading')) {
			
				var url = $(this).attr('href');
				
				$('#content-items a').removeClass('active');
				$(this).addClass('active');
						
				jQuery.ajax({
					type: "GET",
					url: url,
					async: true,
					dataType: "html",
					beforeSend: function() {
						
						$('#content-items').addClass('idt-ajax-loading');
						$('#loader').empty().append("<div class='idt-ajax-load-indicator'></div>");
					},
					error: function(jqXHR, textStatus, errorThrown) {
						
						alert("Sorry. There was an AJAX error: " + textStatus);
					},			
					success: function(data) {
						
						var mydata = $('#loader', data).html();
						$('#loader').html(mydata);
					},
					complete: function() {
						
						$('#content-items').removeClass('idt-ajax-loading');
						$('.idt-ajax-load-indicator').remove();
					}		
				});
			}
		});
	}

	return {
	
		init: load
	};

}(jQuery)).init();