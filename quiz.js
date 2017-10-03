var pizza = 0;
var chicken = 0;
var taco = 0;
var salad = 0;
var steak = 0;
var cheeseburger = 0;
var stew = 0;

function workThru(num) {
  var x = document.getElementById("sel"+num);
    var choice = x.options[x.selectedIndex].value;
    if (choice === "pizza") {
	  pizza += 1;
    } else if (choice === "chicken") {
	  chicken += 1;
    } else if (choice === "salad") {
	  salad += 1;
    } else if (choice === "steak") {
	  steak += 1;
	} else if (choice === "taco") {
	  taco += 1;
	} else if (choice === "cheeseburger") {
	  cheeseburger += 1;
	} else {
	  stew = stew;
	}
}

document.getElementById("Enter0").onclick=function() {
 workThru(0);
  
}

document.getElementById("Enter1").onclick=function() {
 workThru(1);
  
}

document.getElementById("Enter2").onclick=function() {
 workThru(2);
  
}

document.getElementById("Enter3").onclick=function() {
 workThru(3);
  
}

document.getElementById("Enter4").onclick=function() {
 workThru(4);
  
}

document.getElementById("Enter5").onclick=function() {
 workThru(5);
  
}

document.getElementById("Enter6").onclick=function() {
 workThru(6);
  
}






document.getElementById("results").onclick=function() {
	if(pizza > taco && pizza > salad && pizza > steak && pizza > cheeseburger && pizza > chicken) {
	    window.open("pizza.html");
	} else if(chicken > taco && chicken > salad && chicken > steak && chicken > cheeseburger && chicken > pizza) { 
	    window.open("chicken.html");
	} else if(taco > pizza && taco > salad && taco > steak && taco > cheeseburger && taco > chicken) {
		window.open("taco.html")
	} else if(salad > taco && salad > pizza && salad > steak && salad > cheeseburger && salad > chicken) {
		window.open("salad.html");
	} else if(cheeseburger > taco && cheeseburger > salad && cheeseburger > steak && cheeseburger > pizza && cheeseburger > chicken) {
		window.open("cheeseburger.html");
	} else if(steak > taco && steak > salad && steak > pizza && steak > cheeseburger && steak > chicken) {
		window.open("steak.html");
	} else {
		window.open("stew.html");
	}
				
  }
	
