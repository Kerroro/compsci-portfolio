//This section defines the buttons, and the inputs. What the number inputs are, the button to calculate, the answer, the display, and the dropdown menue.
var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
//This section tells what to do when the button "doMath" is clicked. It says that it is a dropdown value, meaning that when clicked it will prompt a dropdown, and defines each of the different equations, and what the result is.
function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "^"){
        answer = Math.pow(input1.value, input2.value)
        display.innerHTML = answer;
    }

}