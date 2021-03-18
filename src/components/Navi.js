import { NavLink } from 'react-router-dom';

export default function Navi() {
  return (
    <nav className="punxy__navi">
      <ul className="-ul">
        <li>
          <NavLink to="/" className="punxy__link" exact activeClassName="is-active">
            news
          </NavLink>
        </li>
        <li>&nbsp;/&nbsp;</li>
        <li>
          <NavLink to="/jobs" className="punxy__link" activeClassName="is-active">
            jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}