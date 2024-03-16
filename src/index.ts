/**
 * БАЗОВІ ТИПИ
 * - string, number, null, undefined, any, unknown
 * - множинні типи з type composition
 */

const userName: string = 'Poly';
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

const temps = [30, 25, 18, 27]

/**
 * Кастомні типи з Type
 * - ідентифікатор з type composition 
 * - кастомний union
 */
 
// composition - number | string
// tuple - [number, number]
// union - 'request' | 'success' | "error"


type ID = number | string;
type Alert = 'request' | 'success' | 'error';

const notification: Alert = 'error';

const userId: ID = 5;
const taskId: ID = "f54d878e12"

// const coords = [50.12547, 30.458796]

/**
 * Типізація об'єктів
 * - конструкція 'interface'
 * - необов'язкові поля з 'key?: value'
 * - readonly з 'readonly key: value'
 * - як прописати об'єкт з невідомою кількістю властивостей '[key: string]: number'
 * - приклад роботи type inference на робітниках при переборі Object.entries()
 * - optional params in type
 */

interface PlagConfig{
    readonly selector: string | number,
    perPage?: number,
    statrtIndex?: number,
    draggable?: boolean
}

const config: PlagConfig = {
    selector: '#plugin-1',
    perPage: 2,
    statrtIndex: 0,
    draggable: false
}

interface EmplMoney{
    [employe: string]: number
}

const employees = {
    poly: 5,
    kiwi: 10,
    mango: 15,
    ajax: 50
}

/**
 * ENUM (перераховування)
 * - перераховуємо розмір піци
 * - дефолтні значення
 * - кастомні значення
 */

enum PizzaSize {
    Small = 's',
    Medium = 'm',
    Large = '50sm'
}

console.log(PizzaSize.Large);
PizzaSize.Medium

const order = {
    size: PizzaSize.Large,
    quantity: 5
}



// enum PizzaSize {
//     Small = 's',
//     Medium,
//     Large

// }
// console.log(PizzaSize.Large);


/**
 * ФУНКЦІЇ
 * - типізація параметрів
 * - необов'язкові параметри param?: number
 * - rest параметри
 * - return type 
 * - VOID - коли функція нічого не повертає
 * - типізація підпису (створення) функції через тип type FnA = (a:number)=>number
 * - типізація методів
 * - key: ()=> type
 * - key?(): type
 */
type SumFnA = (a: number, b: number, c?: number[])=>void | number
    
    
const fnA: SumFnA = function (param1, param2) {
    return param1 + param2 
}
const fnB: SumFnA = (param1, param2, ...restParams) => {
    return param1 + param2;
}



fnA(5, 5)

fnB(10, 10)

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

