
var validateEmail = new Event('validate-email-event');
document.addEventListener('validate-email-event', validateEmails);

var email = document.getElementById("email");

email.addEventListener('change', function(){
	document.dispatchEvent(validateEmail);
}, false);


 function validateEmails() {
	filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if( email.value == ''){
		email.className -= ' succeed';
		email.className -= ' invalid';
	}
	else {

		if (filter.test(email.value)) {
			email.className -= ' invalid';
			email.className += ' succeed';  
		}
		else
		{
			email.className -= ' succeed';
			email.className += ' invalid';
		}
	}
}





var validatePassword = new Event('validate-password-event');
document.addEventListener('validate-password-event', validatePasswords);

var passwordFirst = document.getElementById('password');
var passwordValidate = document.getElementById('passwordRepet');

passwordValidate.addEventListener('change', function(){
	document.dispatchEvent(validatePassword);
},false);


function validatePasswords() {
	if (passwordValidate.value == ""){
		passwordValidate.className -= ' invalid';
		passwordValidate.className -= ' succeed';
	}
	else {
		if (passwordFirst.value == passwordValidate.value ) {
			passwordValidate.className -= ' invalid';
			passwordValidate.className += ' succeed';
		}
		else {
			passwordValidate.className -= ' succeed';
			passwordValidate.className += ' invalid';
		}
	}
}

var validatePhone = new Event('validate-phone-event');
document.addEventListener('validate-phone-event', validatePhones);

var phone = document.getElementById('phone');

phone.addEventListener('change', function(){
	document.dispatchEvent(validatePhone);
},false);

function validatePhones() {
	filter = /^[(]{0,1}[0-9]{4}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{3}$/;
	if ( phone.value == "" ) {
		phone.className += ' invalid';
		phone.className -= ' succeed';
	}
	else {
		if ( filter.test(phone.value) ){
			phone.className -= ' invalid';
			phone.className += ' succeed';
		}
		else {
			phone.className -= ' succeed';
			phone.className += ' invalid';
			
		}
	}
}


var validateSubmit = new Event('validate-submit-event');
document.addEventListener('validate-submit-event', validateSubmits);

var submitButton = document.getElementById('submit');
var address = document.getElementById('address');
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');

submitButton.addEventListener('click',function(){
	console.log('submit');
	document.dispatchEvent(validateSubmit);
},false);

function validateSubmits() {
	if (phone.value == "") {
		phone.className += ' invalid';
	}
	else {
		validatePhones();
	}
	if ( email.value == "" ){
		email.className -= ' succeed';
		email.className += ' invalid';
	}
	else {
		validateEmails();
	}
	if (passwordFirst.value == ""){
		passwordFirst.className -= ' succeed';
		passwordFirst.className += ' invalid';
	}
	else {
		passwordFirst.className += ' succeed';
	}
	if ( passwordValidate.value == "") {
		passwordValidate.className -= ' succeed';
		passwordValidate.className += ' invalid';
	}
	else {
		validatePasswords();
	}
	if ( address.value == ""){
		address.className -= ' succeed';
		address.className += ' invalid';
	}
	else {
		address.className += ' succeed';
	}
	if ( firstName.value == "" ){
		firstName.className -= ' succeed';
		firstName.className += ' invalid';
	}
	else {
		firstName.className += ' succeed';
	}
	if ( lastName.value == "" ){
		lastName.className -= ' succeed';
		lastName.className += ' invalid';
	}
	else {
		lastName.className += ' succeed';
	}
}



