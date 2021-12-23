import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Error404 from "./Components/error404/Error404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile/:username" exact>
            <Profile />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
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
