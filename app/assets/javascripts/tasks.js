// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('turbolinks:load', function(){
	console.log("The Doc is loading ", new Date());
	$('#task_name').focus();
	$('#save').click(function(evt){
		evt.preventDefault();
		console.log("Clicked");
	    $('.edit_form').submit();
	});
});