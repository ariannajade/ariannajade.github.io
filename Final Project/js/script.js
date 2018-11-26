$('nav a').hide().removeClass('.dropdown');
$('#vi-lab').hover(
	function() {
		$('div', this).stop().slideDown(100);
	},
	function() {
		$('div', this).stop().slideUp(100);
	}
	);

/* $('#vi-lab').hover()

function dropDown() {
	$('.dropdown').slideDown(100);
}

function() {
	$('.dropdown').stop().slideUp(100);
} */

