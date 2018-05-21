window.addEventListener("load", function() {

	var nodes = document.querySelectorAll(".opening");
	
	for(var i = 0; i < nodes.length; i++) {

		var words = nodes[i].innerText.split(" ");

		var html = "";
		
		for(var j = 0; j < words.length; j++) {

			html += "<span>"+words[j]+"</span>"
		}

		nodes[i].innerHTML = html;
	}
});