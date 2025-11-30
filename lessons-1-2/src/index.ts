/**
 * БАЗОВІ ТИПИ
 * - string, number, null, undefined, any, unknown
 * - множинні типи з type composition
 */

let userName: string = 'Student';
const age: number = 15;
const isActive: boolean = true;

const numbers: number[] = [10, 12, 1]
numbers.push(5)

let str: unknown = 5 
str = '5'
str.toFixed()

type Track = {
    name: string,
    rating: number,
    isPopular: boolean
}

const track: Track = {
    name: 'Track1',
    rating: 3,
    isPopular: true
}


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



/**
 * Кастомні типи з Type
 * - ідентифікатор з type composition 
 * - кастомний union
 */
 
// composition - number | string
// tuple - [number, number]
// union - 'request' | 'success' | "error"


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

const employees: EmplMoney = {
    poly: 5,
    kiwi: 10,
    mango: 15
}

const entries = Object.entries(employees)
//[['poly', 5],['kiwi', 10],['mango', 15]]

for (const [name, value] of entries) {
    console.log(name, value);
}

/**
 * ENUM (перераховування)
 * - перераховуємо розмір піци
 * - дефолтні значення
 * - кастомні значення
 */

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


