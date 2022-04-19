import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectUser } from '../store/selectors';
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../assets/punxy.svg';

export default function Header() {
  const user = useSelector(selectUser);

  return (
    <header className="punxy__header">
      <Link to="/" className="punxy__logo" title="punxy">
        <Logo />
      </Link>
      <div className="punxy__user">
        howdy, <strong>{user}</strong>
      </div>
    </header>
  );
}