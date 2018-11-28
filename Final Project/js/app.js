/* 

$('#vi-lab').hover()

function dropDownLow() {
	$('#vi-lab, dropdown').slideDown(100);
}

function() {
	$('#vi-lab, dropdown').stop().slideUp(100);
} 

*/ 

/* $('.searchicon').click(handleClick) 

function handleClick() {
	$('.search').
} */

$(document).ready(function() {
	$('button').hover(function(){
		$(this).css('background-color', 'rgb(226, 68, 77)', 'border-color', 'rgb(226, 68, 77)');
	}, function() {
		$(this).css('background-color', 'black', 'border-color', 'black');
	})
	
})

/* $(document).ready(function(){
	$('.searchicon').click(function(){
		$(this).fadeOut();
	});
}); */
