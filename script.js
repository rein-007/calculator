const btn = document.querySelectorAll('button');
// const num = document.querySelectorAll('#num');
// const operator = document.querySelectorAll('#operate');
// const special = document.querySelectorAll('#special');
let btnClick = '';
let btnClass = '';
let resultText = document.querySelector('.result-text');
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = '';
let operators = false;
let equal = false;

btn.forEach((button) => {
    button.addEventListener('click', () => {
        btnClick = button.id;
        btnClass = button.className;
        console.log(btnClick);
        if (btnClick==='operate') {
            resultText.textContent = result;
            if (operators==true) {
                btnClick = 'special';
                btnClass = 'equals';
            }
            operators = true;
            operator = button.className;
        } else if (btnClick==='num') {
            console.log(button.textContent);
            if (resultText.textContent==0) {
                result = Number(button.textContent);
            } else {
                result = Number(resultText.textContent.concat(button.textContent));
            }
            (operators==true) ? num2 = Number(resultText.textContent) : num1 = Number(resultText.textContent);
            if (equal==true) {
                resultText.textContent = 0;
            }
            equal = false;
        } else if (btnClick==='special') {
            if (button.className==='clear') {
                resultText.textContent = 0;
                num1 = 0;
                num2 = 0;
                result = 0;
                operators = false;
                equal = false;
            } else if (btnClass==='equals') {
                if (operators==true) {
                    // const calc = new operate();
                    operate(num1, operator, num2);
                    resultText.textContent = result;
                    console.log(operator);
                    console.log(typeof(num1));
                    console.log(typeof(num2));
                    console.log(resultText.textContent);
                    console.log(typeof(resultText.textContent));
                    operators = false;
                    equal = true;
                    num1 = Number(resultText.textContent);
                }
            }
        }
    });
});

function operate(num1, operator, num2) {
    // if (operator==='add') {
    // const add = function (num1, num2) {
        // return num1 + num2;
    // };
    // }

    // const subtract = function (num1, num2) {
    //     return num1 - num2;
    // };

    // const multiply = function (array) {
    //     return num1 * num2;
    // };

    // const divide = function (array) {
    //     return num1 / num2;
    // };
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
        default:
            alert('No operator selected!');
    }
}
