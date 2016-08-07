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
  $( "#wireframe").append( $( "<p class='wireframeText'>Vestibulum ante ipsizzle check out this izzle faucibizzle yo luctus et gangster posuere owned Curae; Yippiyo dolizzle. Bow wow wow faucibizzle. Brizzle pharetra blandizzle quizzle. Fo shizzle rutrizzle aliquizzle shizzle my nizzle crocodizzle. Phat facilisizzle. Break yo neck, yall sizzle cool, venenatis eu, scelerisque you son of a bizzle, blandizzle ac, magna.</p>"));
});

$( "#photoSubmit" ).click(function() {
  $( "#wireframe").append( $( "<img src='images/carousel.png' class='wireframePhoto'>"));
});