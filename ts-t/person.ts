class Person{
  name:string;

  constructor(name:string){
    this.name = name;
  }
  sayHi(){
    console.log(`hi ${this.name}`);
  }
}

export default Person;

const person = new Person('Lee');