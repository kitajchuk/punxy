import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { loadItems, seedItems } from '../store/actions';
import { selectItems, selectStatus } from '../store/selectors';
import { randoText } from '../utils';
import Controls from './Controls';
import Button from './Button';
import Loading from './Loading';
import List from './List';
import Modal from './Modal';

export default function Feed({endpoint, loading1, loading2}) {
  // State from the redux store
  const items = useSelector(selectItems(endpoint));
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  // Local state for the component...
  
  // Default active control is `time`
  const [ctrl, setCtrl] = useState('time');

  // Default active sort is `hi-lo`
  const [sort, setSort] = useState('hi-lo');

  // Contextual load texts
  const [loadText, setLoadText] = useState(status === 'seeding' ? 'seeding network blocks...' : loading1);

  // Track when we're seeding the datas...
  const [seeding, setSeeding] = useState(false);

  // Playful, randomized button text...
  let buttonText;

  if (status === 'loading') {
    buttonText = 'querying new data blocks...';

  } else if (status === `endofline_${endpoint}`) {
    buttonText = 'end of line. try seeding...';

  } else {
    buttonText = randoText();
  }

  const onControl = (ctrl) => {
    setCtrl(ctrl);

    // time and score are hi-lo
    // author is lo-hi as in alpha
    setSort(ctrl === 'by' ? 'lo-hi' : 'hi-lo');
  };

  const onButton = () => {
    if (status === 'loading') {
      return;
    }

    dispatch(loadItems({
      endpoint,
    }));
  };

  const onSeed = () => {
    if (status === 'loading') {
      return;
    }

    setSeeding(true);
  };

  const onAbort = () => {
    setSeeding(false);
  };

  const onConfirm = () => {
    if (status === 'loading' || status === 'seeding') {
      return;
    }

    setLoadText('seeding network blocks...');
    setSeeding(false);

    dispatch(seedItems({
      endpoint,
    }));
  };

  useEffect(() => {
    if (!items.length) {
      setTimeout(() => {
        setLoadText(loading2);
      }, 1000);
      setTimeout(() => {
        dispatch(loadItems({
          endpoint,
        }));
      }, 2000);
    }
  }, [items, dispatch, endpoint, loading2]);

  return (
    <div className="punxy__feed">
      {(items.length && status !== 'seeding') ? (
        <>
          <Controls active={ctrl} ctrlHandler={onControl} seedHandler={onSeed} />
          <List items={items} ctrl={ctrl} sort={sort} />
          <Button handler={onButton}>{buttonText}</Button>
        </>
      ) : (
        <Loading>{loadText}</Loading>
      )}
      {seeding && <Modal abortHandler={onAbort} confirmHandler={onConfirm} />}
    </div>
  );
}