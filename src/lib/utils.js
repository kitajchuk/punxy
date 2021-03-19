import { format } from 'date-fns';

// Simple date formatting to match my design spec
// Multiply by 1000 since HN is UNIX time for stamps...
export function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return format(date, 'MM.dd.yyyy kk.mm.ss');
}

// Modified from this example:
// https://medium.com/@weberzt/how-to-create-a-random-id-in-javascript-e92b39fedaef
// Not a bad little sample script I found on the NETS :P
// Reworked a bit to meet my own design spec for this app :)
export function makeId(num = 9) {
  let id = "";
  let chars = "01";
  for (let i = 0; i < num; ++i) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `punk${id}`;
}

// This app uses sorting for the feed: time, score and author (by)
// Two of those three keys need to sort hi-lo, while author is lo-hi alpha
// Nothing special here, pretty much the working MDN example for sort
// I opted to implement lo-hi and just reverse that result for hi-lo
//    but you could obviously go either way you like, doesn't matter.
// I'm also useing toString().toLowerCase() to normalize the data keys
//    being referenced since time/score are int and author is a string.
// This allows me to pass in the source array with the variable key
//    and get the results I want regardless of the key's original type.
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

// Reverse it...
export function sortHiLo(key, items) {
  return sortLoHi(key, items).reverse();
}

// Randomized button text...
// This was also to meet my design spec
// I wanted to have an array of phrases for the load more button on the feed
// You could really go to town with this
// An enhancement would be to ensure the same value is never returned twice in a row!
const _texts = [
  'more, i must see more!',
  'you gotta be kidding me...',
  'hit me again',
  'ya know yer gonna do it',
  'come on, one more hit',
  'one more dose of mediocrity, please',
  'tempting...i might do it...',
  'mmk, i guess so',
];

// The private random text indexer...
function _randoText() {
  return _texts[Math.floor(Math.random() * _texts.length)];
}

// A scoped global "last text" value concept...
let _text = _randoText();

// Gets that rando text string...
// Ensures it's different than the last one.
export function randoText() {
  let text = _randoText();

  while (text === _text) {
    text = text = _randoText();
  }

  // Store new value as "last text" value
  _text = text;

  return text;
}