"use strict";
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
const statusFilters = {
    all: "all",
    active: "active",
    completed: "completed",
};
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


//Описуємо інтерфейс піцци
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