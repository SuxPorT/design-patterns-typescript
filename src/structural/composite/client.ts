import { ProductComposite } from "./products/product-composite";
import { ProductLeaf } from "./products/product-leaf";

const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tShirt = new ProductLeaf('Camiseta', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tShirt);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
