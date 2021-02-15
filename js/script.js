const TxtElement = ["Mahasiswa" , "Web Developer", "Dreamer", "Planner"];
let TxtIndex = 0;
let count = 0;
let words = "";
let CurrentTxt = "";

(function ngetik(){


	CurrentTxt = TxtElement[count];
	words = CurrentTxt.slice(0, ++TxtIndex)
	console.log(words);
	document.querySelector(".efek-ngetik").textContent = words;
	setTimeout(ngetik, 500);

	if(CurrentTxt.length == words.length){
		count++;
		TxtIndex=0;
	}

	if(count == TxtElement.length){
		count = 0;
	}

})();
