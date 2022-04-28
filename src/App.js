import {
  Route,
  Outlet,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navi from './components/Navi';
import routes from './routes';
import './styles/App.scss';

const themes = routes.map(r => r.label);

function useTheme() {
  const location = useLocation();

  useEffect(() => {
    if (location) {
      themes.forEach(theme => document.body.classList.remove(theme));
      let theme = location.pathname.replace(/\//g, '');
      if (theme === '') theme = 'new';
      document.body.classList.add(theme);
    }
  });
};

function Layout() {
  useTheme(); 

  return (
    <>
      <Header />
      <Navi />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, label, Component }) => {
            return <Route key={label} path={path} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
