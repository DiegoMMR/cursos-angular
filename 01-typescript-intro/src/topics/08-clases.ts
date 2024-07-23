export class Person {
    constructor(
        public name:string,
        private address: string = 'No Address'
    ) {}
}

export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        
    }
}

const tony = new Person('Tony', 'New York')
const iroman = new Hero('Iroman', 45, 'Tony', tony)

console.log(iroman)