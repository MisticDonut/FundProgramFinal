//little something i wipped together quick

//first creates a function called stat and creates the depended variable x
function stat(x){
	//next the array allRolls is created to hold all rolls 
	var allRolls = []
	
	//now we begin the 6 rolles for each stat
	for(var ic = 0; ic < 6; ic++){
		
		//the die array is created to hold the 4 die rolled
		var die = [ 0, 0, 0, 0]		
		
		//next we make each roll
		for(var i = 0; i < 4; i++){
			die[i] = Math.round(Math.random() * (x - 1 ) + 1)
		};
	
		die.sort()
		die.reverse()
		die.pop()
	
		allRolls[ic] = die[0] + die[1] + die[2]
		
	};
		
		document.getElementById("roll").innerHTML = allRolls;
	
};