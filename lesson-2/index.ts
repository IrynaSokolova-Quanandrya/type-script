
// let age: unknown;

// age = 15;
// age = '15';

// age.length

/**
 * Типізація об'єктів
 * - конструкція 'interface'
 * - необов'язкові поля з 'key?: value'
 * - readonly з 'readonly key: value'
 * - як прописати об'єкт з невідомою кількістю властивостей '[key: string]: number'
 * - приклад роботи type inference на робітниках при переборі Object.entries()
 * - optional params in type
 */

interface IStats {  
    followers: number,
    views: number,
    likes: number,  
}

interface IProfileConfig {
  readonly name: string,
  tag: string,
  dnd?: boolean,
  location: string,
  avatar: string,
  stats: IStats,
  getName: () => string,
  // showavatar: ()=>void,
  showAvatar(): void,
  changeLocation: (newlocation: string)=>void
}

const profile: IProfileConfig = {
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
  getName() {
      return this.name
  },
  showAvatar() {
    console.log(this.avatar);
  },
  changeLocation(newlocation) {
    this.location = newlocation
  }
};

interface Students {
  [name:string]: number
}

const students: Students = {
  poly: 10,
  kiwi: 9,
  ajax: 5,
  john: 8
}



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

enum PizzaSize {
  small = 's',
  medium = 'm',
  large = 'l',
}
  
interface IPizza {
  size: 'small' | 'medium' | 'large',
  toppings: string[], // додає скільки завгодно додатків
  logSize: () => void,
  getSize: () => string,
  addTopping: (topping: string) => void
}

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