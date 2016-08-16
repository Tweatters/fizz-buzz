var giveNumber = prompt("choose a number between 1 and 100", "0");
var num = parseInt(giveNumber);
	
function taylorsBuzz() {


        for (var i  =1; i <= num; i++) {
            var current = ''

			if (i % 1 != 0) {
				current = alert("please enter a whole number!")
			}
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

