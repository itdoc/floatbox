(function( $ ){
	$.fn.floatbox = function( halign, valign ) {     
		return this.each(function(){
			var $this = $(this);
			$this.css({'position':'absolute'});
			$(document).scroll(function reposition(e) {
                if(halign=="left"){
					$this.css({
						'left':$(document).scrollLeft()
					});
				}else if(halign=="right"){
					$this.css({
						'left':$(document).scrollLeft()+$(window).width()-$this.width()
					});
				}else if(halign=="center"){
					$this.css({
						'left':$(document).scrollLeft()+($(window).width()-$this.width())/2
					});
				}
		  
				if(valign=="top"){
					$this.css({
						'top':$(document).scrollTop()
					});
				}else if(valign=="bottom"){
					$this.css({
						'top':$(document).scrollTop()+$(window).height()-$this.height()
					});
				}else if(valign=="middle"){
					$this.css({
						'top':$(document).scrollTop()+($(window).height()-$this.height())/2
					});
				}
            });					
   		});
	};
})( jQuery );
