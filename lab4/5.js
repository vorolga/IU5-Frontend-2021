/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
    let arr = [];
    str.split('').forEach(item => {
        if (item === '(' || item === '[' || item === '<') {
            arr.push(item);
        } else {
            if (item === ')') {
                if (arr[arr.length - 1] === '(') {
                    arr.pop();
                } else {
                    return false;
                }
            } else {
                if (item === ']') {
                    if (arr[arr.length - 1] === '[') {
                        arr.pop();
                    } else {
                        return false;
                    }
                } else {
                    if (item === '>') {
                        if (arr[arr.length - 1] === '<') {
                            arr.pop();
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
    );

    return arr.length === 0;

}

module.exports = checkBrackets;
