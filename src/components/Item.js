import { formatDate } from '../utils';
import { Animate } from './Animation';
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as ExLinkIcon } from '../assets/external-link.svg';

export default function Item({item}) {
  return (
    <li className="punxy__item">
      <Animate>
        <div className="punxy__meta">{formatDate(item.time)}</div>
        <div className="punxy__title">
          <a href={item.url || `https://news.ycombinator.com/item?id=${item.id}`} target="_blank" rel="noreferrer">
            {item.title}
            <div className="-i">
              <ExLinkIcon />
            </div>
          </a>
        </div>
        <div className="punxy__meta">
          <span className="punxy__attr -ul">
            by: <strong>@{item.by}</strong> / score: <strong>{item.score}</strong>
          </span>
        </div>
      </Animate>
    </li>
  );
}
