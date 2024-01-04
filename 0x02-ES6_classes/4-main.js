import Pricing from './4-pricing';
import Currency from './3-currency';

const euro = new Currency('EUR', 'Euro');
const p = new Pricing(100, euro);

console.log(p);
console.log(p.displayFullPrice());  // Output: 100 Euro (EUR)

const conversionRate = 1.2;
const convertedPrice = Pricing.convertPrice(p.amount, conversionRate);
console.log(`Converted Price: ${convertedPrice}`);
