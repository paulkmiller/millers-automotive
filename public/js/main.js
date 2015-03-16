/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// Services API Section
$('.services-button').on('click', function(e){
  e.preventDefault();

  var make = $(this).attr('data-info');
  var html = ""
  var url = "https://api.edmunds.com/api/vehicle/v2/" + make + "/models?fmt=json&api_key=4qrx8smuux5gssn9nahunxc3"

  $.get(url, function(data) {
    var modelsArray = data.models
    var namesArray = []
    for (var i = 0; i < modelsArray.length; i++){
      namesArray.push(modelsArray[i].name)
    }

    var uniqueNames = []    
    $.each(namesArray, function(i, el){
      if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    $(".services-content").html('');
    html += "<table class='servicelist'>"
    for (var i = 0; i < uniqueNames.length; i+=3) {
      var results = "<tr><td>" + uniqueNames[i] + "</td>" + "<td>" + uniqueNames[i+1] + "</td>" + "<td>" + uniqueNames[i+2] + "</td></tr>"
      html += results
    };

    $(".services-content").append(html);
    html += "</table>"
  });
});

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(38.8951, -77.0367),
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        styles: [{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 29
          }, {
            "weight": 0.2
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 18
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 16
          }]
        }, {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 21
          }]
        }, {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "visibility": "on"
          }, {
            "color": "#000000"
          }, {
            "lightness": 16
          }]
        }, {
          "elementType": "labels.text.fill",
          "stylers": [{
            "saturation": 36
          }, {
            "color": "#000000"
          }, {
            "lightness": 40
          }]
        }, {
          "elementType": "labels.icon",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 19
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 20
          }]
        }, {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#000000"
          }, {
            "lightness": 17
          }, {
            "weight": 1.2
          }]
        }]
      };

    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var myLatLng = new google.maps.LatLng(38.8951, -77.0367);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
    });
  }
