const Task = require('data.task');
const { List, Map } = require('immutable-ext');

const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
});

const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: `Box(${x})`
});

const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: `Box(${x})`
});

const fromNullable = x =>
    x != null ? Right(x) : Left(null);


const res1 = Box('squirrels')
    .map(s => s.substr(5))
    .map(s => s.toUpperCase());

const res2 = Box('squirrels')
    .map(s => s.substr(5).toUpperCase());

console.log(res1, res2);
