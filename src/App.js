import './styles/App.scss';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { makeId, formatDate } from './lib/utils';
import { withStories, withJobs } from './lib/api';

function Logo() {
  const html = {
    __html: `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 139.8 32" style="enable-background:new 0 0 139.8 32;" xml:space="preserve">
        <g>
          <path d="M47.3,4.9c-1.2,0-2.2,0.3-3,0.8c-0.9,0.6-1.6,1.4-2.1,2.5V5.3h-5.1V32h5.1V21.9c0.6,1.1,1.3,1.9,2.2,2.4
            c0.8,0.5,1.7,0.8,2.8,0.8c2.3,0,4.1-0.9,5.3-2.6c1.2-1.7,1.9-4.3,1.9-7.5c0-3.2-0.6-5.7-1.8-7.5C51.2,5.8,49.5,4.9,47.3,4.9z
            M48.3,19.4c-0.6,1.1-1.5,1.6-2.6,1.6s-1.9-0.5-2.6-1.6c-0.6-1.1-0.9-2.5-0.9-4.4c0-1.9,0.3-3.3,0.9-4.4C43.8,9.5,44.6,9,45.7,9
            s1.9,0.5,2.6,1.6c0.6,1.1,0.9,2.5,0.9,4.4C49.2,16.8,48.9,18.3,48.3,19.4z"/>
          <path d="M69,16.4c0,1.4-0.3,2.6-0.8,3.4c-0.5,0.8-1.2,1.2-2.1,1.2c-0.9,0-1.6-0.3-1.9-0.9c-0.4-0.6-0.6-1.6-0.6-3V5.3h-5.1v12.6
            c0,2.4,0.5,4.2,1.4,5.4c0.9,1.2,2.3,1.8,4.2,1.8c1.2,0,2.2-0.3,3.1-0.9c0.9-0.6,1.5-1.4,1.8-2.5v2.9h5.1V5.3H69V16.4z"/>
          <path d="M90,4.9c-1.2,0-2.3,0.3-3.1,0.9c-0.9,0.6-1.5,1.4-1.8,2.5V5.3H80v19.3h5.1v-11c0-1.4,0.3-2.6,0.8-3.4C86.4,9.4,87.1,9,88,9
            c0.9,0,1.5,0.3,1.9,0.9c0.4,0.6,0.6,1.6,0.6,3v11.7h5.1V12.1c0-2.4-0.5-4.2-1.4-5.4C93.3,5.5,91.9,4.9,90,4.9z"/>
          <polygon points="118,5.3 112.1,5.3 108.9,11.1 105.7,5.3 99.8,5.3 106.4,14.6 99.2,24.7 105.1,24.7 108.9,18.2 112.7,24.7
            118.6,24.7 111.5,14.6 	"/>
          <path d="M134.5,5.3l-4.2,12.5l-4.4-12.5h-5.3l7.3,18.7l-0.4,1c-0.5,1.3-1,2.1-1.5,2.4c-0.5,0.3-1.2,0.5-2.3,0.5h-2.1V32h4.2
            c1.4,0,2.5-0.4,3.5-1.3c0.9-0.8,1.8-2.2,2.4-4l8-21.4H134.5z"/>
          <path d="M15.9,0C7.1,0,0,7.1,0,15.9c0,8.8,7.1,15.9,15.9,15.9s15.9-7.1,15.9-15.9C31.9,7.1,24.7,0,15.9,0z M12.7,21.1
            c0.4,0.4,0.4,1,0,1.4c-0.2,0.2-0.4,0.3-0.7,0.3s-0.5-0.1-0.7-0.3l-5.8-5.8c-0.4-0.4-0.4-1,0-1.4l5.8-5.8c0.4-0.4,1-0.4,1.4,0
            s0.4,1,0,1.4l-5.1,5.1L12.7,21.1z M26.3,16.6l-5.8,5.8c-0.2,0.2-0.4,0.3-0.7,0.3c-0.2,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4
            l5.1-5.1l-5.1-5.1c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l5.8,5.8C26.7,15.6,26.7,16.2,26.3,16.6z"/>
        </g>
      </svg>
    `
  };

  return (
    <div dangerouslySetInnerHTML={html}></div>
  );
}

function ExLinkIcon() {
  const html = {
    __html: `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
        <g>
          <path d="M16,10c-0.6,0-1,0.4-1,1v6c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h6c0.6,0,1-0.4,1-1S9.6,3,9,3H3
            C1.3,3,0,4.3,0,6v11c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3v-6C17,10.4,16.6,10,16,10z"/>
          <path d="M19.9,0.6c-0.1-0.2-0.3-0.4-0.5-0.5C19.3,0,19.1,0,19,0h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.6l-9.3,9.3c-0.4,0.4-0.4,1,0,1.4
            C7.5,12.9,7.7,13,8,13s0.5-0.1,0.7-0.3L18,3.4V7c0,0.6,0.4,1,1,1s1-0.4,1-1V1C20,0.9,20,0.7,19.9,0.6z"/>
        </g>
      </svg>
    `
  };

  return (
    <div className="-i" dangerouslySetInnerHTML={html}></div>
  );
}

function Header() {
  return (
    <header className="punxy__header">
      <Link to="/" className="punxy__logo">
        <Logo />
      </Link>
      <div className="punxy__user">
        {/* you are always anonymous! */}
        howdy, <strong>{makeId()}</strong>
      </div>
    </header>
  );
}

function Navi() {
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

function Masthead(props) {
  return (
    <div className="punxy__mast">
      {props.children}
    </div>
  );
}

function Controls() {
  return (
    <div className="punxy__ctrl">
      <ul className="-ul">
        <li>time</li>
        <li>&nbsp;/&nbsp;</li>
        <li>score</li>
        <li>&nbsp;/&nbsp;</li>
        <li>author</li>
        <li>&nbsp;|&nbsp;</li>
        <li>polling: no</li>
      </ul>
    </div>
  );
}

function Button(props) {
  return (
    <button className="punxy__btn">
      {props.children}
    </button>
  );
}

function Loading() {
  return (
    <div className="punxy__load">
      <div>Intercepting global hacker networks...</div>
    </div>
  );
}

function Item({item}) {
  return (
    <li className="punxy__item">
      <div className="punxy__meta">{formatDate(item.time)}</div>
      <div className="punxy__title">
        <a href={item.url} target="_blank" rel="noreferrer">
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

function List({items}) {
  return (
    <ul className="punxy__list">
      {items.map((item) => {
        return <Item key={item.id} item={item} />
      })}
    </ul>
  );
}

function Feed({data}) {
  return data ? (
    <div className="punxy__feed">
      <Controls />
      <List items={data} />
      <Button>more, i must see more!</Button>
    </div>
  ) : (
    <Loading />
  );
}

const NewsFeed = withStories(Feed);
const JobsFeed = withJobs(Feed);

function News() {
  useEffect(() => {
    document.body.classList.remove('is-jobs');
  });

  return (
    <>
      <Masthead>
        <h1>your proxy to what the “hackers” call “news” and the latest <Link to="/jobs">freelance nets</Link>.</h1>
      </Masthead>
      <NewsFeed />
    </>
  );
}

function Jobs() {
  useEffect(() => {
    document.body.classList.add('is-jobs');
  });

  return (
    <>
      <Masthead>
        <h1>fancy yourself a freelancer with illusions standing? look no further.</h1>
      </Masthead>
      <JobsFeed />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="punxy">
        <Header />
        <Navi />
        <Switch>
          <Route exact path="/">
            <News />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
