// Normalize mapping over a slice of IDs and fetching the item data...
const _mapItems = (items, offset, amount) => {
  return items.slice(offset, offset + amount).map((id) => {
    return getItem(id);
  });
};

// HN API not the "greatest" to work with as stated:
// "We know, what works great locally in memory isn't so hot over the network."
// "Many of the awkward things are just the way HN works internally."
// True story, but as also stated you CAN get to anything with a little work...

// No real reason for 25 other than this was the minimally requested amount (doc)
// For new stories the HN API will return up to 500 IDs we can keep in the store
// Jobs up to 200 but expectedly we see much less than that...
const perPage = 25;

export const getIds = async (endpoint) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`);
  return res.json();
};

export const getItems = async (ids, offset = 0, amount = perPage) => {
  const items = await Promise.all(_mapItems(ids, offset, amount));
  return items;
};

export const getItem = (id) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => res.json());
};