var display = document.querySelector("#display");

var buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        switch (buttons[i].innerHTML) {
            case 'C':
                display.innerHTML = "";
                break;
            case '←':
                display.innerHTML = display.innerHTML.slice(0, -1);
                break;
            case '=':
                try {
                    if (eval(display.innerHTML) != undefined) display.innerHTML = eval(display.innerHTML);
                    else display.innerHTML = 0;
                }
                catch {
                    display.innerHTML = 0;
                }
                break;
            default:
                display.innerHTML += buttons[i].innerHTML;
                break;
        }
    });
}