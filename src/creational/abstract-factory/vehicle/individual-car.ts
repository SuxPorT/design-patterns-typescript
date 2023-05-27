import { Vehicle } from "../../factory-method/vehicle/vehicle";
import { Customer } from "../customer/customer";

export class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) { }
  stop(): void {
    throw new Error("Method not implemented.");
  }

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`,
    );
  }
}
