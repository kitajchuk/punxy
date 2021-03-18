import ExLinkIcon from './ExLinkIcon';
import { formatDate } from '../lib/utils';
import { withAnimate } from '../lib/animate';

function Item({item}) {
  return (
    <li className="punxy__item">
      <div className="punxy__meta">{formatDate(item.time)}</div>
      <div className="punxy__title">
        <a href={item.url || `https://news.ycombinator.com/item?id=${item.id}`} target="_blank" rel="noreferrer">
          {item.title}
          <ExLinkIcon />
        </a>
      </div>
      <div className="punxy__meta">
        <span className="punxy__attr -ul">
          by: <strong>@{item.by}</strong> / score: <strong>{item.score}</strong>
        </span>
      </div>
    </li>
  );
}

export default withAnimate(Item);