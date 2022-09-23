/*
	WEB 303 Assignment 1 - jQuery
	{Diya Khanal}
*/

$(document).ready(function(){
	
	$('input#yearly-salary,input#percent').on('keyup',function(){
		let sal = $('input#yearly-salary').val();
		let per = $('input#percent').val();
		let total= (sal * per)/100;
		$('#amount').html('$' + total.toFixed(2));
	});
	
});