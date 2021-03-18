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