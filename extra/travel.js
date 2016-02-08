$(document).ready(function () {
    $('.nav-tabs').on('shown.bs.tab',function(){google.maps.event.trigger(window,'resize',{});})

    var SA_locations = [
	    ['Valparaiso, Chile', -33.044161, -71.615769,],

	    ['Parque Nacional Tores del Paine', -50.942323, -73.406761,],

	    ['Isla San Cristobal, Galapagos', -0.861457, -89.435007,],

	    ['Quito, Ecuador', -0.184433, -78.486662,],

	    ['La Paz, Bolivia', -16.493226, -68.120867,],

	    ['San Juan, Puerto Rico', 18.433201, -66.069499,],

	    ['Cotopaxi, Ecuador', -0.815270, -78.934127,],

	    ['Salar de Uyuni, Bolivia', -20.467690, -66.837818,]
	];
	    

	var europe_locations = [
	    ['Zermatt, Switzerland', 46.002868, 7.734564,],
	    ['Cinque Terre, Italy', 44.099525, 9.738126,],
	    ['Florence, Italy', 43.793243, 11.241653,],
	    ['Venice, Italy', 45.443546, 12.323034,],
	    ['Athens, Greece', 37.988199, 23.724177,],
	    ['Sofia, Bulgaria', 42.700605, 23.312445,],
	    ];

	var map;
		function initialize(){

			var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]

			var center = {lat: 13, lng: -23};
			var mapOptions = {
				div: '#travel-map',
				zoom: 2,
				center: center,
				mapTypeId: 'Styled',
			};
			map = new google.maps.Map(document.getElementById("travel-map"), mapOptions);
			map.se

			var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
    		map.mapTypes.set('Styled', styledMapType);

			var infowindow = new google.maps.InfoWindow();
    		var marker, i;

    		var clark = new google.maps.LatLng(42.250826, -71.822280);
			var acton = new google.maps.LatLng(42.476295, -71.482373);

			var footprint = 'http://www.chesterattractions.org.uk/wp-content/plugins/post-google-map/markers/lightblue.png';
			var footblue = 'http://www.data4nr.net/images/marker_blue.png';
			var house = 'https://mt.googleapis.com/vt/icon/name=icons/onion/112-purple.png';
			/*var school = 'https://docs.google.com/uc?export=download&id=0B1021HT3npbQNEQxLTJZTTVQa3c';*/

			for (i = 0; i < SA_locations.length; i++) {  
		        	var SA_marker = new google.maps.Marker({
		            position: new google.maps.LatLng(SA_locations[i][1], SA_locations[i][2]),
		            map: map,
		            icon: footprint,
		            optimized: false,
		        });

		        google.maps.event.addListener(SA_marker, 'click', (function(SA_marker, i) {
		            return function() {
		                var content=SA_locations[i][0];
		                home_infowindow.close()
		                infowindow.setContent(content);
		                infowindow.open(map, SA_marker);
				            }
				        })(SA_marker, i));
		    };
		        
		    for (i = 0; i < europe_locations.length; i++) {  
		        	marker = new google.maps.Marker({
		            position: new google.maps.LatLng(europe_locations[i][1], europe_locations[i][2]),
		            map: map,
		            icon: footblue,
		            optimized: false,
		        });

		         google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		                var content=europe_locations[i][0];
		                home_infowindow.close()
		                infowindow.setContent(content);
		                infowindow.open(map, marker);
				            }
				        })(marker, i));
		    };
				
			var homecontent = 'Home: Acton, MA';

			var home = new google.maps.Marker({
			    position: acton,
			    map: map,
			    title: 'Acton, MA',
			    icon: house,
			    optimized: false,
			    });

			var home_infowindow = new google.maps.InfoWindow({
      			content: homecontent,
  				});

				google.maps.event.addListener(home, 'click', function() {
		                home_infowindow.open(map,home);
  					});
			};


google.maps.event.addDomListener(window, 'load', initialize);

});