import { BrowserRouter, Switch, Route } from 'react-router-dom';


// Pages
import Home from "./pages/Home/Home";
import Newitem from "./pages/Newitem/Newitem"
export default function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={Newitem} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}
