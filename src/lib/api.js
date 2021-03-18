import { useEffect, useState } from 'react';
import { makeId } from './utils';

// Simple local, in-memory store
// We're not going to save this data anywhere,
//    but we'd like the app to leverage some sessionable caching...
// Items are indexed by their ID and collections by their endpoints.
const store = {
  items: {},
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
  getItems(endpoint, offset = 0, amount = api.perPage) {
    if (store[endpoint]) {
      const items = store[endpoint].slice(offset, offset + amount).map((id) => {
        return api.getItem(id);
      });

      return Promise.all(items);

    } else {
      return fetch(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`)
        .then((res) => res.json())
        .then((json) => {
          store[endpoint] = json;

          const items = json.slice(offset, offset + amount).map((id) => {
            return api.getItem(id);
          });

          return Promise.all(items);
        });
    }
  },

  // I'm using Promise.all() with getItems to resolve a set of item fetches
  // This method will either serve live or from our store but will still use a Promise for stored data
  getItem(id) {
    if (store.items[id]) {
      return new Promise((resolve) => {
        resolve(store.items[id]);
      });

    } else {
      return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        .then((res) => res.json())
        .then((json) => {
          store.items[id] = json;
          return json;
        });
    }
  }
};

// Persist the mock user ID for a client session
// The storytelling here is that you are always anonymous
//    for each new transaction you make to the app...
// returns something like `punk110100110`
export function getUser() {
  if (!store.user) {
    store.user = makeId();
  }

  return store.user;
}

// HOCs
// https://reactjs.org/docs/higher-order-components.html
// This wraps a feed component and ensures an initial data set flows into the app
// It passes along any additional props, the data and the endpoint for fetching more data later
export function withHackers(endpoint, WrappedComponent) {
  return ({...props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const result = await api.getItems(endpoint);
        setData(result);
      }

      fetchData();
    }, []);

    return <WrappedComponent data={data} endpoint={endpoint} {...props} />;
  };
}

export default api;