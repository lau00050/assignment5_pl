$('#submit-btn').click(function() {
	event.preventDefault()
	var city = $('#city-type').val()
	if (city === 'NYC' || city === 'New York City') {
		$('body').css('background-image','url(images/nyc.jpg)')
	} else if (city === 'SF' || city === 'San Francisco') {
		$('body').css('background-image','url(images/sf.jpg)')
	} else if (city === 'LA' || city === 'Los Angeles')	{
		$('body').css('background-image','url(images/la.jpg)')
	} else if (city === 'ATX' || city === 'Austin') {
		$('body').css('background-image','url(images/austin.jpg)')
	} else {
		$('body').css('background-image','url(images/sydney.jpg)')
	}
})
