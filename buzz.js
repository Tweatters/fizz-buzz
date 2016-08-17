

var giveNumber = prompt("choose a number between 1 and 100", "0");
var num = parseInt(giveNumber);
	
	if (isNaN(num)) {
		alert("You must enter a number.");
		location.reload();
	}

	else if (giveNumber % 1 !== 0) {
		alert("You must enter a whole number");
		location.reload();
	}

	else {
		taylorsBuzz(num);
	}
function taylorsBuzz() {


        for (var i  =1; i <= num; i++) {
            var current = ''

			if (i % 3 === 0) {
				current+='Fizz'
			}
			if (i % 5 === 0) {
				current+='Buzz'
			}

			
            console.log((current||i) + "\n ")
		}
	}

taylorsBuzz();
console.log(num)	

	//make fizz buzz without using if and for loop but just using plain old javascript functions

