import "./styles.css";
import { Switch, Route } from "react-router-dom";


// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"
export default function App() {


  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Newitem} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>

    </div>
  );
}
