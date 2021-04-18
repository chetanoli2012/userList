import Login from "./components/Login";
import Contacts from "./components/Contacts";
import { useStateValue } from './Stateprovider.js';
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        <Switch>
          {!user ?
            <>
              <Redirect exact from="/" to="/login" />
              <Route exact path="/login">
                <Login />
              </Route>
            </>
            : (
              <>
                <Redirect exact from="/" to="/home" />
                <Route exact path="/home">
                  <Header />
                  <Contacts />
                </Route>
              </>
            )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
