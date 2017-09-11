var _ = require('ramda');
var accounting = require('accounting');

// Тестовые данные
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
];

// Упражнение 1:
// ============
// используйте _.compose() для того чтобы переписать функцию снизу. Подсказка: _.prop() каррируемая.
/*
var isLastInStock = function(cars) {
    var last_car = _.last(cars);
    return _.prop('in_stock', last_car);
};
*/

const isLastInStock = _.compose(_.prop('in_stock'), _.last);


// Упражнение 2:
// ============
// используйте _.compose(), _.prop() and _.head() чтобы получить название первой машины
var nameOfFirstCar = _.compose(_.prop('name'), _.head);


// Упражнение 3:
// ============
// используйте функцию _average для того чтобы отрефакторить averageDollarValue с помощью композиции
/*
 var averageDollarValue = function(cars) {
 var dollar_values = _.map(function(c) { return c.dollar_value; }, cars);
 return _average(dollar_values);
 };
 */
var _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- оставьте эту функцию

const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));

// Упражнение 4:
// ============
// Напишите функцию: sanitizeNames() используя композицию которая возвращает список имён в нижнем регистре и заменяя все пробелы на _, пример: sanitizeNames(["Hello World"]) //=> ["hello_world"].

var _underscore = _.replace(/\W+/g, '_'); //<-- не изменяйте эту функцию

const sanitizeNames = _.map(_.compose(_underscore, _.toLower, _.prop('name')));


// Бонус 1:
// ============
// Отрефакторьте availablePrices с помощью композиции.

var availablePrices1 = function(cars) {
    var available_cars = _.filter(_.prop('in_stock'), cars);
    return available_cars.map(function(x){
        return accounting.formatMoney(x.dollar_value);
    }).join(', ');
};


const formatPrices = _.compose(accounting.formatMoney, _.prop('dollar_value'));

const availablePrices = _.compose(_.join(', '), _.map(formatPrices), _.filter(_.prop('in_stock')));

// Бонус 2:
// ============
// Отрефакторьте в стиле отсутствия ссылок. Подсказка: вы можете использовать _.flip()
/*
var fastestCar1 = function(cars) {
    var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
    var fastest = _.last(sorted);
    return fastest.name + ' is the fastest';
};
*/

const append = _.flip(_.concat);

const fastestCar = _.compose(
    append(' is the fastest'),
    _.prop('name'),
    _.last,
    _.sortBy(_.prop('horsepower'))
);
