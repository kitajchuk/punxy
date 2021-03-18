import { useState, useEffect, useRef } from 'react';
import api, { withHackers } from '../lib/api';
import { randoText } from '../lib/utils';
import Controls from './Controls';
import Button from './Button';
import Loading from './Loading';
import List from './List';

function Feed({data, endpoint}) {
  // Default active control is `time`
  const [ctrl, setCtrl] = useState('time');

  // Default active sort is `hi-lo`
  const [sort, setSort] = useState('hi-lo');

  // Playful, randomized button texts...
  const [text, setText] = useState(randoText());

  // List items to be manipulated (sort, add, etc...)
  const [items, setItems] = useState(data);

  // Default offset is ZERO and will increment by api.perPage
  const offsetRef = useRef(0);

  // Track when we're loading more datas...
  const loadingRef = useRef(false);

  useEffect(() => {
    if (data && !items) {
      setItems(data);
      console.log('data set items');
    }
  }, [data, items]);

  const onControl = (ctrl) => {
    setCtrl(ctrl);

    // time and score are hi-lo
    // author is lo-hi as in alpha
    setSort(ctrl === 'by' ? 'lo-hi' : 'hi-lo');
  };

  const onButton = () => {
    if (loadingRef.current) {
      return;
    }

    loadingRef.current = true;
    offsetRef.current += api.perPage;

    setText('Fetching more bytes...');

    api.getItems(endpoint, offsetRef.current).then((json) => {
      // End of line, bub
      if (!json.length) {
        // This will disable the button handler
        loadingRef.current = true;
        setText('Our probes show no more signs of life out there...');

      } else {
        setItems((currItems) => {
          const newItems = currItems.concat(json);
          loadingRef.current = false;
          setText(randoText());
          return newItems;
        });
      }
    });
  };

  return (
    <div className="punxy__feed">
      {items ? (
        <>
          <Controls active={ctrl} handler={onControl} />
          <List items={items} ctrl={ctrl} sort={sort} />
          <Button handler={onButton}>{text}</Button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const NewsFeed = withHackers('newstories', Feed);
const JobsFeed = withHackers('jobstories', Feed);

export {
  NewsFeed,
  JobsFeed,
}