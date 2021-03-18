import { useEffect, useState } from 'react';

const api = {
  getItems(endpoint, amount = 25) {
    return fetch(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`)
      .then((res) => res.json())
      .then((json) => {
        return json.slice(0, amount);
      });
  },

  getItem(id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then((res) => res.json());
  }
};

// HOCs
// https://reactjs.org/docs/higher-order-components.html
export function withStories(WrappedComponent) {
  return ({...props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      api.getItems('newstories').then((result) => {
        setData(result);
      });
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export function withJobs(WrappedComponent) {
  return ({...props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      api.getItems('jobstories').then((result) => {
        setData(result);
      });
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export function withItem(WrappedComponent) {
  return ({...props}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      api.getItem(props.id).then((result) => {
        setData(result);
      });
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
}

export default api;