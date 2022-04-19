let numberOfItems=3;

$('.col-md-4:lt('+numberOfItems+')').show();

$('#loadMore').click(function () {
    numberOfItems = numberOfItems+3;
    $('.col-md-4:lt('+numberOfItems+')').show();
    $('#loadMore').css("display", "block");
    
    if ($(".col-md-4:hidden").length == 0) {
        $('#loadMore').css('visibility', 'hidden');
    }
});

$('.scroll').on('click',function(e) {
	e.preventDefault();
	offset = 0;
	let target = this.hash;
	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
	$('html, body').stop().animate({
		'scrollTop': $(target).offset().top - offset
	}, 500, 'swing', function() {
	});
});


