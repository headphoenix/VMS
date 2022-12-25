// convert from one currency to another in a given amount

import { getRate } from './rates';  // import getRate function from rates.js            
export const convertCurrency = (amount, from, to) => {
  const rate = getRate(from, to);
  return amount * rate;
}       


// reverse a string

export const reverseString = (str) => {
  return str.split('').reverse().join('');
}   