import logo from './assets/punxy_dark.svg';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import feather from 'feather-icons';
import { makeId, formatDate } from './lib/utils';
import { withStories, withJobs, withItem } from './lib/api';

function Header() {
  return (
    <header className="punxy__header">
      <Link to="/" className="punxy__logo">
        <img src={logo} alt="punxy" />
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
      <div>Cracking the code...</div>
    </div>
  );
}

function ExLinkIcon() {
  return (
    <div className="-i" dangerouslySetInnerHTML={{ __html: feather.icons['external-link'].toSvg()}}></div>
  );
}

function Item({id, data}) {
  return (
    <li className="punxy__item">
      <div className="punxy__meta">{data ? formatDate(data.time) : 'loading'}</div>
      <div className="punxy__title">
        <a href={data ? data.url : '#'} target="_blank">
          {data ? data.title : 'loading'}
          <ExLinkIcon />
        </a>
      </div>
      <div className="punxy__meta">
        <span className="punxy__attr -ul">
          {data ? (
            <>by: <strong>@{data.by}</strong> / score: <strong>{data.score}</strong></>
          ) : 
          'loading'
          }
        </span>
      </div>
    </li>
  );
}

const LiveItem = withItem(Item);

function List({items}) {
  return (
    <ul className="punxy__list">
      {items.map((id) => {
        return <LiveItem key={id} id={id} />
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
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
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
