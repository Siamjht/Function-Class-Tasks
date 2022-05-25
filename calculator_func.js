function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
const div = function (x, y) {
    return x / y;
}
const mul = function gun(x, y) {
    return x * y;
}

function calculator(x,y,func) {
    let result = func(x, y);
    console.log(result);
}

calculator(25, 5, mul);



// let array = [add, sub, div, mul];
// for (let i of array) {
//     let result = i(15, 3);
//     console.log(result);

//     // console.log(array[i](15,3));
// }

// const calculator = {
//     jog: add,
//     vag: div,
//     gun: mul
// };
