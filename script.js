const btn = document.querySelectorAll('button');
let resultCalc = document.querySelector('.result-calc');
let resultText = document.querySelector('.result-text');
let btnID = null;
let btnClass = null;
let btnText = null;
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = null;
let operatorText = null;
let operators = false;
let equal = false;

btn.forEach(button => {
    button.addEventListener('click', () => {
        btnID = button.id;
        btnClass = button.className;
        btnText = button.textContent;
        console.log(btnID);

        if (btnID==='operate') {            
            operatorBtn();
        } else if (btnID==='num') {
            numberBtn();
        } else if (btnID==='special') {
            specialBtn();
        }
    });
});

function numberBtn() {
    if (resultText.textContent==0) {
        resultText.textContent = btnText;
    } else {
        resultText.textContent = resultText.textContent.concat(btnText);
    }
    // if (operators==true) {
        num2 = Number(resultText.textContent)
    // }
    //  else {
    //     num1 = Number(resultText.textContent);
    // }
    
    console.log(resultText.textContent);
    console.log(typeof(resultText.textContent));
    console.log(num1);
    console.log(num2);
}

function operatorBtn() {
    if (operators==true) {
        btnID = 'special';
        btnClass = 'equals';
        specialBtn();
    } else {
        operators = true;
        operator = btnClass;
        operatorText = btnText;
        num1 = Number(resultText.textContent);
        resultCalc.textContent = num1 + btnText;
        console.log(num1);
        console.log(num2);
    }
}

function specialBtn() {
    if (btnClass==='clear') {
        resultCalc.textContent = null;
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
            resultCalc.textContent = num1 + operatorText + num2 + btnText;
            resultText.textContent = result;
            console.log(operator);
            console.log(typeof(num1));
            console.log(typeof(num2));
            console.log(resultText.textContent);
            console.log(typeof(resultText.textContent));
            operators = false;
            equal = true;
            num1 = Number(result);
            console.log(num1);
            console.log(num2);
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
