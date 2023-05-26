export class Address {
  constructor(public street: string, public number: number) { }

  clone(): Address {
    return new Address(this.street, this.number);
  }
}
