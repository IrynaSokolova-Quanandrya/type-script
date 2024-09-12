/**
 * Примітиви
 * Виявлення помилок
 * any
 * composes (|)
*/

let name: string = 'John';
let age: number = 15;
const isOnline: boolean = true;
// const userProgress: null = null;
// let level: undefined = undefined;
console.log(name);

const userId: string | number = 1;
const playerId: string | number = 'khjhg5124scknchg';

type UserObj = {
    name: string,
    lastName: string,
    isOnline: boolean
}

const user: UserObj = {
    name: 'Ira',
    lastName: 'Lee',
    isOnline: false
}

/**
 * СКЛАДНІ ТИПИ
 * 1. type[] або Array<number>
 *  - readonly - унеможливлює використання методів масиву 
 *              чи його зміну 
 *  - tuple на прикладі масив координат `[number, number]`
 * 2. type як опис об'єктів або коли є перелік сталих значень
 */

const numbers: number[] = [1, 2, 3, 4];
numbers.push(10)
console.log(numbers);
// const arr = [...numbers]
// arr.push()

// Tuple
const coord: [number, number] = [31.55454, 54.15415]
const entries: [string, boolean] = ['isOnline', false]
const rgb: [number, number, number] = [255, 0, 255]




/**
 * Кастомні типи з Type
 * - ідентифікатор з type composition 
 * - кастомний union (коли у змінної може бути лише первне значення)
 * - composition - number | string
 * - tuple - [number, number]
 * - union - 'request' | 'success' | "error"
 */
type Alert = 'request' | 'success' | "error"
const alert: Alert = 'request'

function calcNumb(numbers:number[]):number {
    return numbers
        .reduce((acc, number) => {
            acc + number
            return acc
        }, 0)
}

calcNumb(numbers)

/**
 * Типізація об'єктів
 * - конструкція 'interface'
 * - необов'язкові поля з 'key?: value'
 * - readonly з 'readonly key: value'
 * - як прописати об'єкт з невідомою кількістю властивостей '[key: string]: number'
 * - приклад роботи type inference на робітниках при переборі Object.entries()
 * - optional params in type
 */

const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    dnd: false,
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };


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


