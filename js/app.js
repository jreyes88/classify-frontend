$( "#headerSubmit" ).click(function() {
	var headerText = $(".headerText").val();
	var subheaderText = $(".subheaderText").val();
  $( "#wireframe").append( $( "<h3 class='wireframeHeader'>" + headerText + "</h3>"));
  $( "#wireframe").append( $( "<h5 class='wireframeHeader'>" + subheaderText + "</h5>"));
});

$( "#calendarSubmit" ).click(function() {
	var iframeCalendar = $(".iframeCalendar").val();
  $( "#wireframe").append( $( iframeCalendar));
});

$( "#mediaSubmit" ).click(function() {
	var youtubeLink = $(".youtubeLink").val();
  $( "#wireframe").append( $(youtubeLink));
});

$( "#textSubmit" ).click(function() {
    var wireframeText = ($("textarea#textarea1").val());
    console.log(wireframeText);
  $( "#wireframe").append( $('<p>' + wireframeText + '</p>'));
});

$( "#photoSubmit" ).click(function() {
  var wireframePhoto1 = $(".image1").val();
  var wireframePhoto2 = $('.image2').val();
  var wireframePhoto3 = $('.image3').val();
  var wireframePhoto4 = $('.image4').val();
  var wireframePhoto5 = $('.image5').val();
  // $( "#wireframe").append( $( "<img src='" + wireframePhoto1 + "' class='wireframePhoto'>"));
  $('#wireframe').append($('<div class="carousel"><a class="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></a><a class="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></a><a class="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></a><a class="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></a><a class="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></a></div>'));
  });