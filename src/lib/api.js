// Simple local, in-memory store
// We're not going to save this data anywhere,
//    but we'd like the app to leverage some sessionable caching...
// This is storing HN collections by their endpoint
// These are just arrays of IDs for fetching items later
//    e.g. [1, 2, 3, 4, 5, ...]
const store = {};

// Normalize mapping over a slice of IDs and fetching the item data...
const _mapItems = (items, offset, amount) => {
  return items.slice(offset, offset + amount).map((id) => {
    return api.getItem(id);
  });
};

// HN API not the "greatest" to work with as stated:
// "We know, what works great locally in memory isn't so hot over the network."
// "Many of the awkward things are just the way HN works internally."
// True story, but as also stated you CAN get to anything with a little work...
const api = {
  // No real reason for 25 other than this was the minimally requested amount (doc)
  // For new stories the HN API will return up to 500 IDs we can keep in the store
  // Jobs up to 200 but expectedly we see much less than that...
  perPage: 25,

  // Since fetching collections like `newstories` returns an array of IDs we need to do work...
  // This method makes sure the data flowing into the app has actual items, not just IDs
  // Adding "force" argument to streamline methods like `seed`
  getItems(endpoint, offset = 0, amount = api.perPage, force = false) {
    if (store[endpoint] && !force) {
      return Promise.all(_mapItems(store[endpoint], offset, amount));

    } else {
      return fetch(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`)
        .then((res) => res.json())
        .then((json) => {
          store[endpoint] = json;

          return Promise.all(_mapItems(json, offset, amount));
        });
    }
  },

  // I'm using Promise.all() with getItems to resolve a set of item fetches
  getItem(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json());
  },
};

export default api;