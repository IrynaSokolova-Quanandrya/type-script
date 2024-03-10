/**
 * БАЗОВІ ТИПИ
 */

/**
 * Кастомні типи з Type (назва з великої букви)
 * - ідентифікатор з type composition
 * - стан з union - коли ми говоримо, що змінна або аргумент може містити кілька типів
 */


const coords = [50.12547, 30.458796]
let union: string | number;
/**
 * СКЛАДНІ ТИПИ
 * 1. type[] або Array<number>
 *  - readonly - унеможливлює використання методів масиву 
 *              чи його зміну 
 *  - tuple на прикладі масив координат `[number, number]`
 * 2. type як опис об'єктів або коли є перелік сталих значень
 */

/**
 * Типізація об'єктів
 * - конструкція 'interface'
 * - необов'язкові поля з 'key?: value'
 * - readonly з 'readonly key: value'
 * - як прописати об'єкт з невідомою кількістю властивостей '[key: type]: type'
 * - приклад на робітниках при переборі Object.entries()
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
 * ANY
 */


/**
 * UNKNOWN
 */


/**
 * ENUM (перераховування)
 * - перераховуємо розмір піци
 * - дефолтні значення
 * - кастомні значення
 */


/**
 * UNION
 */





/**
 * ФУНКЦІЇ
 * - типізація параметрів
 * - необов'язкові параметри
 * - rest параметри
 * - return type 
 * - VOID
 * - типізація підпису (створення) функції через тип
 * - типізація методів
 * - key: ()=> type
 * - key(): type
 */

const pizza = {
    size: 'large',
    toppings: ['souse', 'mushrooms'],
    logSize() {
        console.log(this.size);
    },
    getSize() {
        return this.size
    },
    addtopping(topping) {
        this.toppings.push(topping)
    }
}

