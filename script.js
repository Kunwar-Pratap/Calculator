let userInput = document.querySelector('.user-input');
let ansScr = document.querySelector('.ans-scr');
let clearScr = document.querySelector('#clearScr');
let backSpace = document.querySelector('#backSpace');
let ansEvaluate = document.querySelector('#ansEvaluate');
let buttons = document.querySelectorAll('button');

let answerEvaluate = [];

clearScr.addEventListener('click', () => {
    answerEvaluate = [''];
    ansScr.innerHTML = 0;
    userInput.className = 'user-input';
    ansScr.className = 'ans-scr';
    document.reload;
    userInput.style.display = 'block';
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!button.id.match("backSpace")) {
            answerEvaluate.push(button.value);
            userInput.innerHTML = answerEvaluate.join("");
        }
        if (button.classList.contains('num-btn')) {
            ansScr.innerHTML = eval(answerEvaluate.join(""));
        }
        if (button.id.match('backSpace')) {
            answerEvaluate.pop();
            userInput.innerHTML = answerEvaluate.join("");
            ansScr.innerHTML = eval(answerEvaluate.join(""));
        }
        if (button.id.match('ansEvaluate')) {
            userInput.className = 'ansScr';
            ansScr.className = 'userInput';
            ansScr.style.color = '#16FF00';
            ansScr.style.fontSize = '20px';
            userInput.style.display = 'none';
        }
        if (typeof eval(answerEvaluate.join("")) === 'undefined') {
            ansScr.innerHTML = 0;
        }
    });
});