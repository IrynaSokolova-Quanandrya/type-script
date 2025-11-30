/**
 * Generics
 * */
// 1. Створюють загальні функції, класи, що можуть працювати з різними вхідними типами і збрерігати типізацію
function identity(arg) {
    return arg;
}
let output1 = identity("myString");
let output2 = identity(100);
// Завдання для студентів
//  Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.
// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log(numbers); // [5, 4, 3, 2, 1]
// let strings = reverse<string>(["a", "b", "c", "d"]);
// console.log(strings); // ["d", "c", "b", "a"]
/**
 * extends та keyof
 */
function lengthOfObject(param) {
    return param.length;
}
lengthOfObject([10, 11, 12, 13]);
lengthOfObject('Hello world!');
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
const getProperty = (obj, key) => {
    return obj[key];
};
let studentName = getProperty(student, "name");
console.log(studentName); // "John"
const todo1 = {
    title: "Learn TypeScript",
    description: "Study the basics of TypeScript",
    completed: false,
};
function updateTodo(todo, fieldsToUpdate) {
    return { ...todo, ...fieldsToUpdate };
}
const todo2 = updateTodo(todo1, {
    completed: true,
});
const johnSummary = {
    name: "John",
    age: 30,
};
// Це спрацює, тому що 'address' не є частиною типу 'PersonSummary'
const invalidPerson = {
    name: "Anna",
    age: 25,
    // address: "123 Main St"  // Помилка тут
};
const john = {
    name: "John",
    age: 30,
    //   address: "123 Main St" // Ця властивість тут не допустима
};
const database = {
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
//# sourceMappingURL=generics.js.map