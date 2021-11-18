import "./App.css";
import { Login } from "./components/login/login";
import { Profile } from "./components/profile/profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />  
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}


export default App;
