
function startCalc() {
    let firstNumber = prompt("type first number", "0");
    let secondNumber = prompt("type second number", "0");
    let operation = prompt("type operation", "+");

    switch (operation) {
        case "+":
            document.getElementById("result").innerHTML =
                firstNumber + " " + operation + " " + secondNumber + " = " +
                sum(firstNumber, secondNumber);
            break;
        case "-":
            document.getElementById("result").innerHTML =
                firstNumber + " " + operation + " " + secondNumber + " = " +
                diff(firstNumber, secondNumber);
            break;
        case "*":
            document.getElementById("result").innerHTML =
                firstNumber + " " + operation + " " + secondNumber + " = " +
                mult(firstNumber, secondNumber);
            break;
        case "/":
            document.getElementById("result").innerHTML =
                firstNumber + " " + operation + " " + secondNumber + " = " +
                div(firstNumber, secondNumber);
            break;
        default:
            break;
    }
}

function sum(a, b) {
    if (a != null && b != null) {
        return Number(a) + Number(b);
    }
}

function mult(a, b) {
    if (a != null && b != null) {
        return Number(a) * Number(b);
    }
}

function div(a, b) {
    if (a != null && b != null) {
        return Number(a) / Number(b);
    }
}

function diff(a, b) {
    if (a != null && b != null) {
        return Number(a) - Number(b);
    }
}
