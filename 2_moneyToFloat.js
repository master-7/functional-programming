const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
});

const moneyToFloat = str =>
    Box(str)
    .map(s => s.replace(/\$/, ''))
    .map(r => parseFloat(r));

const percentToFloat = str =>
    Box(str)
    .map(s => s.replace(/%/, ''))
    .map(r => parseFloat(r))
    .map(number => number * 0.01);

const applyDiscount = (price, discount) =>
    moneyToFloat(price)
        .fold(
            cost =>
                percentToFloat(discount)
                    .fold(saving => cost - cost * saving));

const result = applyDiscount('5$', '20%');

console.log(result);
