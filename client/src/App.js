import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Error404 from "./Components/error404/Error404";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/profile/:username" exact>
            <Profile />
          </Route>
          <Route path="/login" exact>
            {user ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/register" exact>
            {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="*" exact>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
