/**
 * БАЗОВІ ТИПИ
 * - string, number, null, undefined, any, object, unknown
 * - множинні типи з type composition
 */

const userName: string = 'Poly';
/**
 * UNKNOWN
 */
let id: unknown;

id = 10;
id = '10';

/**
 * Кастомні типи з Type (назва з великої букви)
 * - ідентифікатор з type composition
 * - стан з union - коли ми говоримо, що змінна або аргумент може містити кілька типів
 */

// const coords: number[] = [50.12547, 30.458796]
// const rgb: [number, number, number] = [255, 0, 0]




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

const userId = 5;
const taskId = "f54d878e12"

const coords = [50.12547, 30.458796]

/**
 * Типізація об'єктів
 * - конструкція 'interface'
 * - необов'язкові поля з 'key?: value'
 * - readonly з 'readonly key: value'
 * - як прописати об'єкт з невідомою кількістю властивостей '[key: string]: number'
 * - приклад роботи type inference на робітниках при переборі Object.entries()
 * - optional params in type
 */

const config = {
    selector: '#plugin-1',
    perPage: 2,
    statrtIndex: 0,
    draggable: false
}

const employees = {
    poly: 5,
    kiwi: 10,
    mango: 15
}

/**
 * ENUM (перераховування)
 * - перераховуємо розмір піци
 * - дефолтні значення
 * - кастомні значення
 */

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

