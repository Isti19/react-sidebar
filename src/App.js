import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Reviews from './pages/Reviews';
import Report from './pages/Report';
import LogOut from './pages/LogOut';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/report" component={Report} />
          <Route path="/logOut" component={LogOut} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
