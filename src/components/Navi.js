import { NavLink } from 'react-router-dom';
import routes from '../routes'

export default function Navi() {
  return (
    <nav className="punxy__navi">
      <ul className="-ul">
        {routes.map(({ path, label }) => {
          return (
            <li key={label}>
              <NavLink to={path} className={({isActive}) => `punxy__link${isActive ? ' is-active' : ''}`}>
                {label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
