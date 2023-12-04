
function firstLetterName(name) {
    if (name.length > 0) {
        var firstLetter = name[0].toUpperCase();
        alert(`The name ${name} starts with the letter ${firstLetter}`);
    } else {
        alert("Please provide a non-empty name.");
    }
}


function divisibleByTwo(number) {
    return number % 2 === 0;
}

function largestNum(arr) {
    if (arr.length > 0) {
        var largest = arr[0];

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }

        return largest;
    } else {
        return null;
    }
}


firstLetterName("John");
var result1 = divisibleByTwo(10);
console.log(`Is 10 divisible by two? ${result1}`);
var numbers = [5, 12, 8, 20, 3];
var result2 = largestNum(numbers);
console.log(`The largest number in the array is: ${result2}`);
