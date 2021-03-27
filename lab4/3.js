/**
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(str) {
    if (str.charAt(0) === '') {
        return '';
    }
    let arr ='';
    arr += str[0];
    let len = 1;
    str.slice(1).split('').forEach((item, index, str) => {
        if (item === str[index - 1] || index === 0 && item === arr[0]) {
            len++;
        } else {
            if (len !== 1) {
                arr += len;
                len = 1;
            }
            arr += item;
        }
    });
    if (len !== 1) {
        arr += len;
    }

    return arr;
}

module.exports = rle;
