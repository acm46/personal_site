$(document).ready(function(){
	$('a').smoothScroll();

	function abso() {

        $('.newsect').css({
            width: $(window).width(),
            height: $(window).height()-70
        });

    }

    $(window).resize(function() {
        abso();         
    });

    abso();

});