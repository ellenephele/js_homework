//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

function ans(arg1, arg2, arg3) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(arg1 + arg2 + arg3 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    switch (event) {
        case 1:
            answers.push([arg1, arg2]);
            break;
        case 2:
            answers.push([arg1, arg3]);
            break;
        case -1:
            answers.push([arg1, 'Вышли из игры']);
            break;
    }
    return event;
}

switch (ans(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в 1 окне ввели 1 то открываем серию окон - окно 2
        switch (ans(works.b00, works.b1, works.b2)) {
            case 1: // Второе действие, если во 2 окне ввели 1, то переходим на 4 окно
            case 2: // если ввели 2, то переходим на 4 окно
                ans(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;

    case 2: // Первое действие  - если в 1 окне ввели 2 то открываем серию окон - окно 3
        switch (ans(works.c00, works.c1, works.c2)) {
            case 1: // Второе действие, если во 2 окне ввели 1, то переходим на 4 окно
            case 2: // если ввели 2, то переходим на 4 окно
                ans(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;

    case -1: // Первое действие 
        break;

    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(answers);
var step = +prompt('Введите номер хода');
console.log(step);
var stepHistory = 'В ходе номер' + step + ' ' + answers[step - 1][0] + 'Ваш выбор' + answers[step - 1][1];
alert(stepHistory);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

