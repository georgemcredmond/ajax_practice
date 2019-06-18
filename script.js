"use strict";

/* USE FIREFOX FOR THIS PROJECT as Chrome will not allow a cross-origin request through without http or https protocol */


// 1. Create a new XMLHttpRequest object
var myRequest = new XMLHttpRequest();

// 2. Open the request and pass the HTTP method name and the resource as parameters

myRequest.open('GET', 'surprise.html');

//3. write a funtion that runs anytime the state of the AJAX request changes

myRequest.onreadystatechange = function() {
	//4. check if the request has a readyState of 4 which indicates the server has responded (complete)
	if(myRequest.readyState === 4) {
		document.getElementById('ajax-content').innerHTML = myRequest.responseText;
	}
}

// 5. Write a function to call within the page when the button is clicked
function sendTheAJAX() {
	myRequest.send();
	document.getElementById('reveal').style.display = 'none';
}