import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
          <Route exact path="/">
                <Home></Home>
          </Route>
    </Switch>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
