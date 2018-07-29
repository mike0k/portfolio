var siteData = $('#siteData');
var map = [];

/*$(function(){

    if($('.map').length > 0) {
        $('.map').each(function(){
            initMap($(this));
        });
    }

});*/


function initMap(container) {
    var lat = siteData.data('lat'),
        lng = siteData.data('lng');

    if(typeof lat !== 'undefined' && typeof lng !== 'undefined'){

        map['latlng'] = new google.maps.LatLng(lat,lng);
        var mapOptions = {
            zoom: 6,
            center: map['latlng'],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            panControl: false,
            navigationControl: false,
            streetViewControl: false,
            gestureHandling: 'cooperative',

            // Google Map Style
            styles: [{"featureType": "poi", "elementType": "labels.text.fill", "stylers": [{"color": "#747474"}, {"lightness": "23"}]}, {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#f38eb0"}]
            }, {"featureType": "poi.government", "elementType": "geometry.fill", "stylers": [{"color": "#ced7db"}]}, {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffa5a8"}]
            }, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#c7e5c8"}]}, {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#d6cbc7"}]
            }, {"featureType": "poi.school", "elementType": "geometry.fill", "stylers": [{"color": "#c4c9e8"}]}, {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#b1eaf1"}]
            }, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": "100"}]}, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}, {"lightness": "100"}]
            }, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffd4a5"}]}, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffe9d2"}]
            }, {"featureType": "road.local", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{"weight": "3.00"}]
            }, {"featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{"weight": "0.30"}]}, {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [{"visibility": "on"}]
            }, {"featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{"color": "#747474"}, {"lightness": "36"}]}, {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#e9e5dc"}, {"lightness": "30"}]
            }, {"featureType": "transit.line", "elementType": "geometry", "stylers": [{"visibility": "on"}, {"lightness": "100"}]}, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"color": "#d2e7f7"}]
            }]
        };

        map['map'] = new google.maps.Map(container[0],mapOptions);

        var markers = container.data('marker');
        map['marker'] = {};
        for(var key in markers){
            var marker = markers[key];
            console.log(marker);
            map['marker'][key] = new google.maps.Marker({
                position: new google.maps.LatLng(marker.lat,marker.lng),
                map: map['map']
            });
        }

    }
}