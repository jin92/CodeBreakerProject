let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value=='' || attempt.value =='') {
    	setHiddenFields();
    	//console.log(attempt.value);
    	 //console.log(answer.value);
    }
//setMessage("Guesses must be exactly 4 characters long.");
  //  validateInput('222');
    if(!validateInput(input.value)){
    	return false;
    } else {
    	attempt.value++;
    	//typeof 
    	//console.log(answer.value);
    	//let result = getResults(input.value);
    	if(getResults(input.value)) {
    		setMessage("You Win! :)");
    		showAnswer(true);
    		showReplay();
    	} else {
    		if(attempt.value>=10) {
    			setMessage("You Lose! :(");
    			showAnswer(false);
    			showReplay();
    		}
    		else {
    			setMessage("Incorrect, try again.");
    		}
    	} 
    }
}

//implement new functions here
function setHiddenFields() {
	answer.value= Math.floor(Math.random() * 10000).toString();
	attempt.value = 0;
	//console.log(attempt.value);
	//answer = answer;
	while(answer.value.length<4) {
		answer.value = '0'+answer.value;
	}
}

function setMessage(message) {
	document.getElementById('message').innerHTML=message;
}

function validateInput(value) {
	if(value.length==4) {
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
	
}

function getResults(input) {
	let count = 0;
	let results = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
	for(let i=0;i<input.length;i++) {
		let find = answer.value.indexOf(input[i]);
		if(input[i]==answer.value[i]){
			results = results + '<span class="glyphicon glyphicon-ok"></span>';
			count ++;
		} else if(find==-1) {
			results = results + '<span class="glyphicon glyphicon-remove"></span>';
		} else {
			results = results + '<span class="glyphicon glyphicon-transfer"></span>';
		}
	}
	results = results + '</div></div>';
	//console.log(results);
	//console.log(count);
	document.getElementById('results').innerHTML=results;
	if(count==4){
		return true;
	} else {
		return false;
	}

}

function showAnswer(status) {
	let code = document.getElementById('code');
	if(status) {
		code.className +=" success";	
	} else {
		code.className +=" failure";
	}
	code.innerHTML=answer.value;
}

function showReplay() {
	document.getElementById('guessing-div').style.display='none';
	document.getElementById('replay-div').style.display='block';
}
	
