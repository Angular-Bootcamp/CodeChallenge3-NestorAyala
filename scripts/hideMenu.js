$(document).ready(function() {
$(function(){
  $('#showPhoneNav').click(function() {
    $("#myNav").slideToggle('normal',function(){ //Shows Nav area
	if ($('#myNav').is(':hidden')) {
		$('#showPhoneNav').text('');
	} else {
		$('#showPhoneNav').text('');
	} //end of if
	}); //end of slidetoggle
  }); //end of myNav
}); //end showPhoneNav
}); //end of ready