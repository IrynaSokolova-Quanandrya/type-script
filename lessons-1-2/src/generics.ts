/**
 * Generics
 * */

// 1. Створюють загальні функції, класи, що можуть працювати з різними вхідними типами і збрерігати типізацію

function identity<T>(arg: T):T{
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// Завдання для студентів

//  Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log(numbers); // [5, 4, 3, 2, 1]

// let strings = reverse<string>(["a", "b", "c", "d"]);
// console.log(strings); // ["d", "c", "b", "a"]

/**
 * extends та keyof
 */ 

function lengthOfObject<T extends {length: number}>(param: T):number {
  return param.length;
}

lengthOfObject([10, 11, 12, 13])
lengthOfObject('Hello world!')
// lengthOfObject(5)
lengthOfObject({ name: "Earth", length: 10 }); // 10

// type obj = {
// name: string
//   length: number
// }

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.


const student = {
  name: "John",
  age: 25,
  groupNumber: 12,
};

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key]
}

let studentName = getProperty(student, "name");
console.log(studentName); // "John"

// let studentAddress = getProperty(student, "address");
// console.log(studentAddress); // undefined

/**
 * partial < T > - дозволяє вказати TS, що ми можемо передати не весь об'єкт, а
 * лише його частину
 */

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};
const todo1: Todo = {
  title: "Learn TypeScript",
  description: "Study the basics of TypeScript",
  completed: false,
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>){
  return { ...todo, ...fieldsToUpdate };
}

const todo2 = updateTodo(todo1, {
  completed: true,
});

// console.log(todo2);

/**
 * ReadOnly
 */

// type User = {
//   name: string;
//   age: number;
// };

// const john: Readonly<User> = {
//   name: "John",
//   age: 30,
// };

// john.age = 31; // Помилка: Неможливо змінити 'age', тому що воно є лише для читання.

// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6); // Помилка: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 0; // Помилка: Index signature in type 'readonly number[]' only permits reading.

/**
 * Pick<T, K> - дозволяє створити новий тип використовуючи вже існуючий, 
 * використавши лише властивості які нам потрібні
 */

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };
// type Person2 = {
//      name: string;
//   age: number;
// }

type PersonSummary = Pick<Person, "name" | "age">;

const johnSummary: PersonSummary = {
  name: "John",
  age: 30,
};

// Це спрацює, тому що 'address' не є частиною типу 'PersonSummary'
const invalidPerson: PersonSummary = {
    name: "Anna",
    age: 25,
    // address: "123 Main St"  // Помилка тут
};

/**
 * Omit<T, K> - працює навпаки від попереднього методу Pick, тобто видаляє 
 * властивості які не потрібні з наслідуваного типу 
 */

type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonWithoutAddress = Omit<Person, "address">;

const john: PersonWithoutAddress = {
  name: "John",
  age: 30,
//   address: "123 Main St" // Ця властивість тут не допустима
};


/**
 * Record<K, T> - використовується для створення довідників чи сталих колекцій 
 * які ніколи не будуть змінюватися
 */

type CityDatabase = Record<string, number>;

const database: CityDatabase = {
  Kyiv: 2884000,
  Kharkiv: 1441000,
  Odesa: 1015000,
};

// // Додаємо новий запис в базу даних, де ключ (ім'я міста) має тип string, а значення (населення) має тип number
database.Lviv = 721301;


// interface

// interface Person {
//   firstName: string;
//   lastName: string;
//   getFullName(): string;
// }

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// interface Movable {
//   speed: number;
//   move(): void;
// }

// class Car implements Movable {
//   speed: number;

//   constructor(speed: number) {
//     this.speed = speed;
//   }

//   move() {
//     console.log(`Car is moving at ${this.speed} km/h.`);
//   }
// }

// interface Example {
//   mandatoryProp: string;
//   optionalProp?: string;
// }

// interface Example {
//   readonly fixedProp: string;
// }

// interface Parent {
//   prop1: string;
// }

// interface Child extends Parent {
//   prop2: string;
// }



