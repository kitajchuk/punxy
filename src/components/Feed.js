import { useState, useEffect, useRef } from 'react';
import api, { withHackers } from '../lib/api';
import { randoText } from '../lib/utils';
import Controls from './Controls';
import Button from './Button';
import Loading from './Loading';
import List from './List';
import Modal from './Modal';

function Feed({data, endpoint}) {
  // Default active control is `time`
  const [ctrl, setCtrl] = useState('time');

  // Default active sort is `hi-lo`
  const [sort, setSort] = useState('hi-lo');

  // Playful, randomized button texts...
  const [text, setText] = useState(randoText());
  const [loadText, setLoadText] = useState('intercepting global hacker networks...');

  // List items to be manipulated (sort, add, etc...)
  const [items, setItems] = useState(data);

  // Track when we're seeding the datas...
  const [seeding, setSeeding] = useState(false);

  // Default offset is ZERO and will increment by api.perPage
  const offsetRef = useRef(0);

  // Track when we're loading more datas...
  const loadingRef = useRef(false);
  const endoflineRef = useRef(false);

  useEffect(() => {
    if (data && !items && !loadingRef.current) {
      // Playful and contextual delay on feed render
      setTimeout(() => {
        setLoadText('streaming the latest transactions...');
      }, 1000);
      setTimeout(() => {
        setItems(data);
      }, 2000);
    }
  }, [data, items]);

  const onControl = (ctrl) => {
    setCtrl(ctrl);

    // time and score are hi-lo
    // author is lo-hi as in alpha
    setSort(ctrl === 'by' ? 'lo-hi' : 'hi-lo');
  };

  const onSeed = (seed) => {
    if (loadingRef.current) {
      return;
    }

    loadingRef.current = true;

    setSeeding(true);
  };

  const onAbort = () => {
    setSeeding(() => {
      loadingRef.current = false;
      return false;
    });
    
  };

  const onConfirm = () => {
    setLoadText('seeding peer transactions...');
    setSeeding(false);
    setItems(null);

    api.seed(endpoint).then((json) => {
      // More async hack! for the theatrical nature of things...
      setTimeout(() => {
        setLoadText('receiving transactions from peers...');
      }, 1000);
      setTimeout(() => {
        setItems(() => {
          offsetRef.current = 0;
          loadingRef.current = false;
          return json;
        });
      }, 3000);
    });
  };

  const onButton = () => {
    if (loadingRef.current || endoflineRef.current) {
      return;
    }

    loadingRef.current = true;
    offsetRef.current += api.perPage;

    setText('crunching more bytes...');

    api.getItems(endpoint, offsetRef.current).then((json) => {
      // End of line, bub
      if (!json.length) {
        // This will disable the button handler
        //    and make sure we can still `seed` for more...
        loadingRef.current = false;
        endoflineRef.current = true;
        setText('the cyber wave has crashed...');

      } else {
        // Another async hack!
        // For this app I really want enough time to read the texts...
        // Even if the API response is quick, or we're loading from store,
        //    we want the experience to "feel" like there's some loading/waiting
        setTimeout(() => {
          setItems((currItems) => {
            const newItems = currItems.concat(json);
            loadingRef.current = false;
            setText(randoText());
            return newItems;
          });
        }, 1000);
      }
    });
  };

  return (
    <div className="punxy__feed">
      {items ? (
        <>
          <Controls active={ctrl} ctrlHandler={onControl} seedHandler={onSeed} />
          <List items={items} ctrl={ctrl} sort={sort} />
          <Button handler={onButton}>{text}</Button>
        </>
      ) : (
        <Loading>{loadText}</Loading>
      )}
      {seeding && <Modal abortHandler={onAbort} confirmHandler={onConfirm} />}
    </div>
  );
}

const NewsFeed = withHackers('newstories', Feed);
const JobsFeed = withHackers('jobstories', Feed);

export {
  NewsFeed,
  JobsFeed,
}