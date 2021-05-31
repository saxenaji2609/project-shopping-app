import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {Clothes} from './Components/Clothes';
import {Crockery} from './Components/Crockery';
import {Shoe} from './Components/Shoe';
import {Gagets} from './Components/Gagets';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/">
     
     <Header/>
      <img src="/images/windowimg.png" class="img-fluid" id="img" alt="Home Page"></img>
      <Footer/>
          </Route>
          <Route exact path="/crockery">
          <Header/>
            <Crockery />
            <Footer/>
          </Route>
          <Route exact path="/clothes">
          <Header/>
            <Clothes />
            <Footer/>
          </Route> 
          <Route exact path="/gagets">
          <Header/>
            <Gagets />
            <Footer/>
          </Route><Route exact path="/shoe">
          <Header/>
            <Shoe />
            <Footer/>
          </Route>
         </Switch>
          </Router>
    </div>
  );
}

export default App;