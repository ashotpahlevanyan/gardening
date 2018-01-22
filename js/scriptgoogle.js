$(document).ready(function() {
	// --- script for submenu category dropdown button --- //
	
	//google map integration
	function initialize() {
	var map_canvas = document.getElementById('mapCanvas');
		var map_options = {
			center: new google.maps.LatLng(40.682581,-73.980682),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_canvas, map_options)
	}
	google.maps.event.addDomListener(window, 'load', initialize);

	//end of google map integration
});
