import './styles/App.scss';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/Header';
import Navi from './components/Navi';
import Masthead from './components/Masthead';
import { NewsFeed, JobsFeed } from './components/Feed';

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
