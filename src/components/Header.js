import { getUser } from '../lib/api';
import { Link } from 'react-router-dom';
// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Logo } from '../assets/punxy.svg';

export default function Header() {
  return (
    <header className="punxy__header">
      <Link to="/" className="punxy__logo">
        <Logo />
      </Link>
      <div className="punxy__user">
        {/* you are always anonymous! */}
        howdy, <strong>{getUser()}</strong>
      </div>
    </header>
  );
}