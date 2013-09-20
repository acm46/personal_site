$(document).ready(function(){
	$('a').smoothScroll();

	function abso() {

        $('#intro').css({
            width: $(window).width(),
            height: $(window).height()-70
        });
        $('.newsect').css({
            width: $(window).width(),
            height: $(window).height()
        });

    }

    $(window).resize(function() {
        abso();         
    });

    abso();

});