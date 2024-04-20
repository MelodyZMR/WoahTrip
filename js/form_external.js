function submit() {
	alert("Signup successfully, our special agency will contact you shortly, thank you!");
}

function validateBD() {
	var birthdayInput = document.getElementById('birthday');
	var birthday = new Date(birthdayInput.value);
	var today = new Date();
	if (birthday >= today) {
		document.getElementById('birthdayError').style.display = 'block';
		birthdayInput.setCustomValidity('Birthday must be earlier than today');
	} else {
		document.getElementById('birthdayError').style.display = 'none';
		birthdayInput.setCustomValidity('');
	}
}

function validateTD() {
	var TStartDateInput = document.getElementById('TStartDate');
	var TEndDateInput = document.getElementById('TEndDate');	
	var TStartDate = new Date(TStartDateInput.value);
	var TEndDate = new Date(TEndDateInput.value);
	var today = new Date();
	
	if (TStartDate <= today || TEndDate <= today) {
		document.getElementById('tripDateError').style.display = 'block';
		TStartDateInput.setCustomValidity('Trip date must be later than today');
		TEndDateInput.setCustomValidity('Trip date must be later than today');
		} else if (TEndDate <= TStartDate) {
			document.getElementById('tripDateError').style.display = 'block';
			TStartDateInput.setCustomValidity('Trip ending date must be later than starting date');
			TEndDateInput.setCustomValidity('Trip ending date must be later than starting date');
		} else {
			document.getElementById('tripDateError').style.display = 'none';
			TStartDateInput.setCustomValidity('');
			TEndDateInput.setCustomValidity('');
	}
}
