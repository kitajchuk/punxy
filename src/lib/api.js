import { useEffect, useState } from 'react';

const store = {
  items: {},
};

const api = {
  perPage: 25,

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

// HOCs
// https://reactjs.org/docs/higher-order-components.html
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