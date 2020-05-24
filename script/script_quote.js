function displayQuote(){								
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {					
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			var quote = obj.contents.quotes[0].quote;
			var author = obj.contents.quotes[0].author;
			document.getElementById("content").innerHTML=quote;
			document.getElementById("author").innerHTML=author;
		}
	};

	const url= "https://quotes.rest/qod?language=en";
	xhttp.open("GET", url, true);
	xhttp.send(null);
}

document.getElementById("more").addEventListener("click", displayQuote);

