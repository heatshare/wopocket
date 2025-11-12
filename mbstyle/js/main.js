$(document).ready(function(){
	$("#totop").click(function(){
		$('body,html').animate({scrollTop:0},0);
		if($('#sitenav').is(':hidden')){
				$('#sitenav').show();
				}else{
				$('#sitenav').hide();
				}
		return false;
	});
});