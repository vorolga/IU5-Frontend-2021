/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'B', to: 'A' },
    { from: 'Z', to: 'D' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"},
    { from: 'Z', to: 'D' },
]

 { from: 'L', to: 'M' },


 */

function makeRoute(arr) {
    let res = [];
    let stack = [];
    res.push(arr[0]);
    arr.slice(1).forEach(element => {
        if (res[res.length - 1].to === element.from) {
            res.push(element);
        } else {
            if (res[0].from === element.to) {
                res.unshift(element);
            } else {
                stack.push(element)
            }
        }
    });

    while (stack.length !== 0) {
        stack.forEach((element, index) => {
            if (res[res.length - 1].to === element.from) {
                res.push(element);
                stack.splice(index, 1);
            } else {
                if (res[0].from === element.to) {
                    res.unshift(element);
                    stack.splice(index, 1);
                }
            }
        });
    }

    return res;
}

module.exports = makeRoute;