import { useEffect, useState } from 'react';

const store = {
  items: {},
};

const api = {
  getItems(endpoint, amount = 25) {
    if (store[endpoint]) {
      const items = store[endpoint].slice(0, amount).map((id) => {
        return api.getItem(id);
      });

      return Promise.all(items);

    } else {
      return fetch(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`)
        .then((res) => res.json())
        .then((json) => {
          store[endpoint] = json;

          const items = json.slice(0, amount).map((id) => {
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
export function withStories(WrappedComponent) {
  return ({...props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const result = await api.getItems('newstories');
        setData(result);
      }

      fetchData();
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export function withJobs(WrappedComponent) {
  return ({...props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        const result = await api.getItems('jobstories');
        setData(result);
      }

      fetchData();
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export default api;