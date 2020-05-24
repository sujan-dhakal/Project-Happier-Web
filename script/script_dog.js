function displayDog(){								//function to display random dog from Dog REST API
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {					//AJAX
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("dog").src=
			JSON.parse(this.responseText).message;
		}
	};
	xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
	xhttp.send();
}

document.getElementById("more").addEventListener("click", displayDog);