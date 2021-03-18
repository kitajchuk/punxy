import Item from './Item';
import { sortLoHi, sortHiLo } from '../lib/utils';

export default function List({items, ctrl, sort}) {
  // HN can return `null` for items in some cases...
  // Not sure why, since they have the idea of `deleted` and `dead`...
  // Either way, this ensures we only look at good items for the feed...
  let _items = items.filter((item) => {
    return item !== null;
  });

  if (sort === 'hi-lo') {
    _items = sortHiLo(ctrl, _items);
  } else {
    _items = sortLoHi(ctrl, _items);
  }

  return (
    <ul className="punxy__list">
      {_items.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </ul>
  );
}