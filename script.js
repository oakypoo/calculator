const plusins = document.querySelector('.js-plus');
const inputins = document.querySelector('.js-input');

const Add = (cipars1, cipars2) => {
    return cipars1 + cipars2
}

const Subtract = (cipars1, cipars2) => {
    return cipars1 - cipars2
}

const Multiply = (cipars1, cipars2) => {
    return cipars1 * cipars2
}

const Divide = (cipars1, cipars2) => {
    return cipars1 / cipars2
}

console.log (Divide(69,420))

plusins.addEventListener("click", () =>(
    console.log("mani nospieda")
))