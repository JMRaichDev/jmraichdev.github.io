var container = document.getElementById("container");


//Standard syntax
document.querySelector('.progress-value').addEventListener("animationend", function end(){ // Listener : "end of progress-bar animation"
	$( ".progress" ).remove(); // Destoy progress-bar-div element


	var mainText = document.createElement("H1");
	mainText.innerHTML = "Dev by <span>JMimosa#2495</span>";
	mainText.className = "shadowSpan hoverScale timeTransform";
	container.appendChild(mainText);


	var descText = document.createElement("H2");
	descText.innerHTML = "Add <span>JMimosa's bot</span> to your discord server (redirect)";
	descText.className = "linkToBot shadowSpan resizeContent hoverScale timeTransform";
	container.appendChild(descText);

	descText.addEventListener('click', function(){ 
		var win = window.open('https://discord.com/api/oauth2/authorize?client_id=765627731995000872&permissions=309488914&scope=bot', '_blank');
		if (win) {
			win.focus();
		} else {
			alert('Please allow popups for this website');
		}
	}, false);


	var iframe = document.createElement("IFRAME");
	iframe.className = "resizeContent hoverScale timeTransform";
	iframe.src = "https://github-readme-stats.vercel.app/api?username=JMimosaDev&count_private=true&show_icons=true&title_color=922cc9&icon_color=922cc9&bg_color=ffffff";
	container.appendChild(iframe);
});


