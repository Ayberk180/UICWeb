import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer'
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import  Home  from './pages/HomePage/Home';
import  Staff  from './pages/Staff/Staff';
import  Services  from './pages/Services/Services';
import  Contact  from './pages/Contact/Contact';
import  Donate  from './pages/Donation/Donate';
import Funeral from './pages/Services/Funeral/Funeral';
import Marriage from './pages/Services/Marriage/Marriage';
import Memorial from './pages/Services/Memorial/Memorial';
import Studies from './pages/Services/Studies/Studies';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <ScrollToTop />
        <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path='/Staff' component={Staff} />
           <Route exact path='/Services' component={Services} />
           <Route exact path='/Contact' component={Contact} />        
           <Route exact path='/Donate' component={Donate} />  
           <Route exact path='/Services/Funeral' component={Funeral} />
           <Route exact path='/Services/Marriage' component={Marriage} />
           <Route exact path='/Services/Memorial' component={Memorial} />
           <Route exact path='/Services/Studies' component={Studies} />      
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};



ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
