const btn = document.querySelectorAll('button');
let resultCalc = document.querySelector('.result-calc');
let resultText = document.querySelector('.result-text');
let btnID = null;
let btnClass = null;
let btnText = null;
let numClick = 0;
let operatorClick = 0;
let dotClick = 0;
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = null;
let operatorTmp = null;
let operatorText = null;
let operators = false;
let equal = false;

btn.forEach(button => {
    button.addEventListener('click', () => {
        btnID = button.id;
        btnClass = button.className;
        btnText = button.textContent;

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
    if (numClick>0 || dotClick>0) {
        resultText.textContent = resultText.textContent.concat(btnText);
    } else if (resultText.textContent==0 || operators==true) {
        resultText.textContent = btnText;
    }

    if (operators==true) {
        num2 = Number(resultText.textContent)
    }
    
    numClick+=1;
    operatorClick = 0;
}

function operatorBtn() {
    numClick = 0;
    dotClick = 0;
    operatorTmp = btnClass;

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
    }

    operatorClick+=1;
    operator = operatorTmp;
    operatorText = btnText;
}

function specialBtn() {
    if (btnClass==='clear') {
        resultCalc.textContent = null;
        resultText.textContent = 0;       
        btnID = null;
        btnClass = null;
        btnText = null;
        numClick = 0;
        operatorClick = 0;
        dotClick = 0;
        num1 = 0;
        num2 = 0;
        result = 0;
        operator = null;
        operatorTmp = null;
        operatorText = null;
        operators = false;
        equal = false;
    } else if (btnClass==='equals') {
        numClick = 0;
        if (operators==true) {
            operate(num1, operator, num2);
            if (operatorClick>0) {
                resultCalc.textContent = result + btnText;
            } else {
                resultCalc.textContent = num1 + operatorText + num2 + btnText;
            }
            resultText.textContent = result;
            equal = true;
            num1 = Number(result);
        }

        dotClick = 0;
    } else if (btnClass==='dot') {
        numClick = 0;
        if (dotClick>0) {
            return;
        }

        resultText.textContent = Number(resultText.textContent) + btnText;
        dotClick+=1;
    } else if (btnClass==='back') {
        if (resultText.textContent===0) {
            return;
        }
        
        let lastCalc = '';
        (resultCalc.textContent===' ') 
        ? lastCalc = resultCalc.textContent : lastCalc = resultCalc.textContent.at(-1);

        if (lastCalc===' ' || numClick>0) {
            if (resultText.textContent.length===1) {
                resultText.textContent = '';
            } else {
                resultText.textContent = resultText.textContent.slice(0,-1);
            }
        } else {
            resultCalc.textContent = resultCalc.textContent.slice(0,-1);
            (lastCalc==='=') ? equal = false : operators = false;
        }
        
        if (Number(resultText.textContent) % 1 === 0) {
            dotClick = 0;
        }

        numClick+=1;
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
    }
}
