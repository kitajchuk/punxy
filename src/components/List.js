import Item from './Item';

export default function List({items}) {
  // HN can return `null` for items in some cases...
  // Not sure why, since they have the idea of `deleted` and `dead`...
  // Either way, this ensures we only look at good items for the feed...
  const _items = items.filter((item) => {
    return item !== null;
  });

  return (
    <ul className="punxy__list">
      {_items.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </ul>
  );
}