import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { loadItems, refreshItems } from '../store/actions';
import { selectItems, selectStatus } from '../store/selectors';
import Controls from './Controls';
import Button from './Button';
import Loading from './Loading';
import List from './List';
import Modal from './Modal';

export default function Feed({endpoint}) {
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
  const [loadText, setLoadText] = useState(
    status === 'refreshing' 
      ? `refreshing ${endpoint}...` 
      : `fetching latest ${endpoint}`
  );

  // Track when we're refreshing the datas...
  const [refreshing, setRefreshing] = useState(false);

  // Playful, randomized button text...
  let buttonText;

  if (status === 'loading') {
    buttonText = `fetching more ${endpoint}...';

  } else if (status === `endofline_${endpoint}`) {
    buttonText = 'end of line. try refreshing...';

  } else {
    buttonText = 'get more';
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

  const onRefresh = () => {
    if (status === 'loading') {
      return;
    }

    setRefreshing(true);
  };

  const onAbort = () => {
    setRefreshing(false);
  };

  const onConfirm = () => {
    if (status === 'loading' || status === 'refreshing') {
      return;
    }

    setLoadText(`refreshing ${endpoint}...`);
    setRefreshing(false);

    dispatch(refreshItems({
      endpoint,
    }));
  };

  useEffect(() => {
    if (!items.length) {
      dispatch(loadItems({
        endpoint,
      }));
    }
  }, [items, dispatch, endpoint]);

  return (
    <main className="punxy__feed">
      {(items.length && status !== 'refreshing') ? (
        <>
          <Controls active={ctrl} ctrlHandler={onControl} refreshHandler={onRefresh} />
          <List items={items} ctrl={ctrl} sort={sort} />
          <Button handler={onButton}>{buttonText}</Button>
        </>
      ) : (
        <Loading>{loadText}</Loading>
      )}
      {refreshing && <Modal abortHandler={onAbort} confirmHandler={onConfirm} />}
    </main>
  );
}
