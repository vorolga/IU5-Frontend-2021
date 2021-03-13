/**
 * Напишите функцию capitalize(str),
 * которая вернет строку str, в которой каждое слово начинается с заглавной буквы.
 * Примеры:
 * 'я вижу солнце' -> 'Я Вижу Солнце'
 * 'я Вижу солнце' -> 'Я Вижу Солнце'
 */
function capitalize(str) {
    let STR_ARR = str.split(' ').map(item =>
        item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    return STR_ARR.join(' ')
}

module.exports = capitalize;