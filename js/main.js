$('#submit-btn').click(function() {
	event.preventDefault()

	var city = $('#city-type').val().toLowerCase()
	//turn all user input in capital letters to lowercase

	if (city === 'nyc' || city === 'new york city') {
		$('body').css('background-image','url(images/nyc.jpg)')
	} else if (city === 'sf' || city === 'san francisco') {
		$('body').css('background-image','url(images/sf.jpg)')
	} else if (city === 'la' || city === 'los angeles')	{
		$('body').css('background-image','url(images/la.jpg)')
	} else if (city === 'atx' || city === 'austin') {
		$('body').css('background-image','url(images/austin.jpg)')
	} else if (city === 'syd' || city === 'sydney') {
		$('body').css('background-image','url(images/sydney.jpg)')
	} else {
		$('body').css('background-image','url(images/citipix_skyline.jpg)')
	}

	var city = $('#city-type').val('')
	//after a user successfully types in a city, reset the input box value to nothing
})
