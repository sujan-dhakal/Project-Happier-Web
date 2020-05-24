function displayCat(){								
	var xhttp = new XMLHttpRequest();
	var apikey = "c32fe060-cce3-462a-9674-09d23fa77b30";
	xhttp.onreadystatechange = function() {					
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			document.getElementById("cat").src=obj[0].url
		}
	};

	var url= "https://api.thecatapi.com/v1/images/search?format=json";
	xhttp.open("GET", url, true);
	xhttp.setRequestHeader("x-api-key", apikey);
	xhttp.send();
}

document.getElementById("more").addEventListener("click", displayCat);