/*

My Custom JS
============

Author:  Simran Narang
Updated: June 2018
*/

$(function(){
	$('#alertMe').click(function(e){
		e.preventDefault();
		$('#successAlert').slideDown();
	});

	$('a.pop').click(function(e){
		e.preventDefault();
	});
	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();
});