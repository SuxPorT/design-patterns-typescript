import { Address } from "../interfaces/address";
import { Prototype } from "../interfaces/prototype";

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) { }

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((item) => item.clone());
    return newObj;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Bla bla bla';

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);

console.log();
console.log(person1);
console.log(person1.addresses);
