import './styles/App.scss';
import Header from './components/Header';
import Navi from './components/Navi';
import News from './pages/News';
import Jobs from './pages/Jobs';
import About from './pages/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

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
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
