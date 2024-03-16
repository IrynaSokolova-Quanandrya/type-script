/**
 * БАЗОВІ ТИПИ
 * - string, number, null, undefined, any, unknown
 * - множинні типи з type composition
 */
const userName = 'Poly';
/**
 * UNKNOWN
 */
// let id: unknown;
// id = 10;
// id = '10';
/**
 * Кастомні типи з Type (назва з великої букви)
 * - ідентифікатор з type composition
 * - стан з union - коли ми говоримо, що змінна або аргумент може містити кілька типів
 */
// type ArrNum = [number, number, number]
// const coords: readonly ArrNum = [50.12547, 30.458796]
// // coords.push(15.5565656)
// const rgb: number[] = [255, 0, 0]
/**
 * СКЛАДНІ ТИПИ
 * 1. type[] або Array<number>
 *  - readonly - унеможливлює використання методів масиву
 *              чи його зміну
 *  - tuple на прикладі масив координат `[number, number]`
 * 2. type як опис об'єктів або коли є перелік сталих значень
 */
const temps = [30, 25, 18, 27];
const notification = 'error';
const userId = 5;
const taskId = "f54d878e12";
const config = {
    selector: '#plugin-1',
    perPage: 2,
    statrtIndex: 0,
    draggable: false
};
const employees = {
    poly: 5,
    kiwi: 10,
    mango: 15,
    ajax: 50
};
/**
 * ENUM (перераховування)
 * - перераховуємо розмір піци
 * - дефолтні значення
 * - кастомні значення
 */
var PizzaSize;
(function (PizzaSize) {
    PizzaSize["Small"] = "s";
    PizzaSize["Medium"] = "m";
    PizzaSize["Large"] = "50sm";
})(PizzaSize || (PizzaSize = {}));
console.log(PizzaSize.Large);
PizzaSize.Medium;
const order = {
    size: PizzaSize.Large,
    quantity: 5
};
const fnA = function (param1, param2) {
    return param1 + param2;
};
const fnB = (param1, param2, ...restParams) => {
    return param1 + param2;
};
fnA(5, 5);
fnB(10, 10);
// const pizza = {
//     size: 'large',
//     toppings: ['souse', 'mushrooms'],
//     logSize() {
//         console.log(this.size);
//     },
//     getSize() {
//         return this.size
//     },
//     addtopping(topping) {
//         this.toppings.push(topping)
//     }
// }
//# sourceMappingURL=index.js.map