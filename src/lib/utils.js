import { format } from 'date-fns';

export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // UNIX time from HN...
  return format(date, 'MM.dd.yyyy kk.mm.ss');
}

// Modified from this example:
// https://medium.com/@weberzt/how-to-create-a-random-id-in-javascript-e92b39fedaef
export function makeId(num = 12) {
  let id = "";
  let chars = "01";
  for (let i = 0; i < num; ++i) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `user${id}`;
}

export function sortLoHi(key, items) {
  return items.sort((a, b) => {
    // Move "a" up the stack
    if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) {
      return -1;
    }

    // Bump "a" down the stack
    if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) {
      return 1;
    }

    // "a" and "b" must be equal
    return 0;
  });
}

export function sortHiLo(key, items) {
  return sortLoHi(key, items).reverse();
}

// Randomized button text...
const texts = [
  'more, i must see more!',
  'you gotta be kidding me...',
  'hit me again',
  'ya know yer gonna do it',
  'come on, one more hit',
  'one more dose of mediocrity, please',
  'tempting...i might do it...',
  'mmk, i guess so',
];

export function randoText() {
  return texts[Math.floor(Math.random() * texts.length)];
}