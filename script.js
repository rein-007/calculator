const btn = document.querySelectorAll('button');
// const num = document.querySelectorAll('#num');
// const operator = document.querySelectorAll('#operate');
// const special = document.querySelectorAll('#special');
let btnClick = '';
let btnClass = '';
let btnText = '';
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
        btnText = button.textContent;
        console.log(btnClick);
        if (btnClick==='operate') {
            if (operators==true) {
                resultText.textContent = result;
                btnClick = 'special';
                btnClass = 'equals';
                specialBtn();
            } else {
                operators = true;
                operator = btnClass;
            }
        } else if (btnClick==='num') {
            // console.log(btnText);
            if (resultText.textContent==0) {
                resultText.textContent = btnText;
            } else {
                resultText.textContent = resultText.textContent.concat(btnText);
            }
            (operators==true || equal==true) ? num2 = Number(resultText.textContent) : num1 = Number(resultText.textContent);
            if (equal==true) {
                resultText.textContent = btnText;
            }
            // result = resultText.textContent;
            equal = false;
            operators = false;
            console.log(resultText.textContent);
            console.log(typeof(resultText.textContent));
        } else if (btnClick==='special') {
            specialBtn();
        }
    });
});

function specialBtn () {
    if (btnClass==='clear') {
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
            num1 = Number(result);
        }
    }
}

function operate(num1, operator, num2) {
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