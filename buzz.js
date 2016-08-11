$(document).ready(function() {
	
	var list = $("ul")
	

function taylorsBuzz() {
		for (var i  =1; i <=100; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				list.append("<li>Fizz Buzz!</li>");
			}
			else if (i % 3 === 0) {
				list.append("<li>Fizz</li>");
			}
			else if (i % 5 === 0) {
				list.append("<li>Buzz</li>");
			}
			else 
				list.append("<li>" + i + "</li>");
		}
	}
taylorsBuzz();
	
});
	

/**
$(document).ready(function() {
    
    var inputNumber = parseInt(prompt("Enter a number to FizzBuzz."));
    if (isNaN(inputNumber)) {
        alert("Please enter a number.");
    }
    else if (inputNumber % 1 !== 0) {
        alert("Enter a whole number.");
    }
    else {
        fizzbuzz(inputNumber);
    }
function fizzbuzz() {
    for (var i = 1; i <= inputNumber; i++) {
    
        if (i % 5 === 0 && i % 3 === 0) {
            $("body").append('FizzBuzz');
        }
        else if (i % 5 === 0) {
            $("body").append('Buzz');
        }
        else if (i % 3 === 0) {
            $("body").append('Fizz');
        }
        else {
            $("body").append(i);
        }
        $("body").append("<br>");
    };
}
});

**/
