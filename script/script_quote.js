function displayQuote(){								
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {					
		if (this.readyState == 4 && this.status == 200) {
			var obj = JSON.parse(this.responseText);
			var quote = obj.quote.quoteText;
			var author = obj.quote.quoteAuthor;
			document.getElementById("content").innerHTML=quote;
			document.getElementById("author").innerHTML=author;
		}
	};

	const url= "https://quote-garden.herokuapp.com/api/v2/quotes/random";
	xhttp.open("GET", url, true);
	xhttp.send(null);
}

document.getElementById("more").addEventListener("click", displayQuote);