function Init(){
	//prompts and gets the players name
	var player = prompt("Hi, im here to help you build your character. What's your name?");

	//prompts and gets the player character's name
	var name = prompt("well " + player + " let us begin. What is your characters Name")
		
	//prompts and gets race name
	var race = prompt("Next " + player + ", what your race?")
	
	alert("Now Roll 4d6 (d6 - 6 sided die) and subtract the lowest die. record the options and well applay them to your stats. if you do not have dice with you look for the file die.html")
	
	//initalizes the alility scores and modifiers
	var abil = []
	var mods = []
	var title = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
	
	//gathers the data of what players rolled on there dice 
	for(var i = 0; abil.length < 6; i++){
		abil[i] = Number(prompt("What did you roll for your " + title[i] + " ability score?", 10))
		
	};
	
	//swtich checks the race and adds to the ability scores accordingly 
	switch(race){
		case "Hill Dwarf":
		case "hill dwarf":
		case "Hill dwarf":
		case "hill Dwarf":
			race = "Hill Dwarf"
			abil[3] += 2
			abil[5] += 1
			break;

		case "mountain dwarf":
		case "Mountain Darf":
		case "Mountain dwarf":
		case "mountain dward":
			race = "Mountain Dwarf"
			abil[3] += 2
			abil[1] += 2
			break;

		case "dwarf":
		case "Dwarf":
			race = "Dwarf"
			abil[3] += 2
			break;
			
		case "hight elf":
		case "hight Elf":
		case "Hight Elf":
		case "Hight elf":
			race = "High Elf"
			abil[2] += 2
			abil[4] += 1
			break;

		case "Wood Elf":
		case "Wood elf":
		case "wood Elf":
		case "wood elf":
			race = "Wood Elf"
			abil[2] += 2
			abil[5] += 1
			break;

		
		case "Dark Elf":
		case "dark Elf":
		case "Dark elf":
		case "dark elf":
			race = "Dark Elf"
			abil[2] += 2
			abil[6] += 2
			break;

		case "Elf":
		case "elf":
			race = "Elf"
			abil[2] += 2
			break;
			
		case "Lightfoot Halfling":
		case "lightfoot halfling":
		case "Lightfoot halfling":
		case "lightfoot Halfling":
			race = "Lightfoot Halfling"
			abil[2] += 2
			abil[6] += 1
			break;

		case "Stout Halfling":
		case "stout halfling":
		case "Stout halfling":
		case "stout Halfling":
			race = "Stout Halfling"
			abil[2] += 2
			abil[3] += 1
			break;

		case "Halfling":
		case "halfling":
			race = "Halfling"
			abil[2] += 2
			break;
		
		case "Dragonborn":
		case "dragonborn":
			race = "Dragonborn"
			abil[2] += 2
			abil[6] += 1
			break;
			
		case "Human":
		case "human":
			race = "Human"
			abil[1] += 1
			abil[2] += 1
			abil[3] += 1
			abil[4] += 1
			abil[5] += 1
			abil[6] += 1
			break;
			
		case "Forest gnome":
		case "forest Gnome":
		case "forest gnome":
		case "Forest Gnome":
		race = "Forest Gnome"
			abil[4] += 2
			abil[2] += 1
			break;

		case "Rock Gnome":
		case "rock gnome":
		case "Rock gnome":
		case "rock Gnome":
			race = "Rock Gnome"
			abil[4] += 2
			abil[3] += 1
			break;
		
		case "Gnome":
		case "gnome":
			race = "Gnome"
			abil[4] += 2
			break;
			
		case "Half-Elf":
		case "half-elf":
		case "Half-elf":
		case "half-Elf":
		case "Half Elf":
		case "half elf":
		case "Half elf":
		case "half Elf":
		case "HalfElf":
		case "halfelf":
		case "Halfelf":
		case "halfElf":
			race = "Half-Elf"
			abil[6] += 2
			abil[2] += 1
			abil[1] += 1
			break;
		
		case "Half-Orc":
		case "half-orc":
		case "Half-orc":
		case "half-Orc":
		case "Half Orc":
		case "half orc":
		case "Half orc":
		case "half Orc":
		case "HalfOrc":
		case "halforc":
		case "Halforc":
		case "halfOrc":
			race = "Half-Orc"
			abil[1] += 2
			abil[3] += 1
			break;
		
		case "Tiefling":
		case "tiefling":
			race = "Tiefling"
			abil[4] += 2
			abil[6] += 1
			break;
			
		default:
			alert("This is not a valide race. No Racial modifiers will be applied")
	}
	
	//displays player name then race
	document.write("<h1>" + name + "</h1><h2> Race: " + race + "</h2>")
	
	//dose the math and adds it to the modifiers array, along with wrtting the general stats for the player
	for(var ic = 0; ic < 6; ic++){
		mods[ic] = Math.floor((abil[ic]-10) / 2)
		document.write("<p>" + title[ic] + " is " + abil[ic] + " ")
		document.write(title[ic] + " Mod is + " + mods[ic] + "</p>")
		
	};
};
