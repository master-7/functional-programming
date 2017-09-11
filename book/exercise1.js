import _ from 'ramda'

// Упражнение 1
//==============
// Проведите рефакторинг и избавьтесь от всех аргументов путём частичного применения функции.
/*
var words = function(str) {
    return _.split(' ', str);
};
*/

const words = _.split(' ');

const wordsArray = _.map(words);

// Упражнение 2
//==============
// Проведите рефакторинг и избавьтесь от всех аргументов путём частичного применения функции.
/*
var filterQs = function(xs) {
    return _.filter(function(x){ return match(/q/i, x);  }, xs);
};
*/

const filterQs = _.filter(match(/q/i));

// Упражнение 3
//==============
// Воспользуйтесь функцией _keepHighest чтобы отрефакторить функцию max.
// Функция max не должна принимать аргументов.
/*
// Не меняйте:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// Проведите рефакторинг:
var max = function(xs) {
    return _.reduce(function(acc, x){
        return _keepHighest(acc, x);
    }, -Infinity, xs);
};
*/

const _keepHighest = (x, y) => x >= y ? x : y;

const max = _.reduce(_keepHighest, -Infinity);


// Бонус 1:
// ============
// оберните метод slice так, чтобы он стал функциональным и каррируемым
// //[1,2,3].slice(0, 2)
/*
var slice = undefined;
*/

const slice = _.curry((start, end, xs) => xs.slice(start, end));


// Бонус 2:
// ============
// используйте метод slice, чтобы объявить функцию "take", которая возвращает n первых символов строки. Сделайте её каррируемой
// var take = undefined;
// Пример: для значений "Something", n = 4, функция должна вернуть "Some"

const take = slice(0);

