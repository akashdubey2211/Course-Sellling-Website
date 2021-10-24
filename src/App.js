 import './styles/rest.css'
 import React , { Fragment } from 'react'
 import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './styles/cta-Top.css'
// import './App.css';
import Landing from '../src/pages/landing'
import Header from './components/header/Header';
import Auth from './pages/Auth';
import Footer from './components/footer/Footer';
import Product from './pages/Product';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import About from './components/about/About'



function App() {
  return (
    <frameElement> 
      <Router>
        <Header />
        <div className="page-container">

        <Switch>
        <Route exact path ='/auth'>
          <Auth />
          </Route>
          <Route exact path ='/about'>
          <About />
          </Route>
          <Route exact path="/contact">
               <Contact />
              </Route>
          <Route exact path ='/product'>
         <Product />
          </Route>
          <Route exact path ='/'>
          <Landing/>
          </Route>
          
        </Switch>
        </div>
     
        <Footer />
      
        </Router>
       
    </frameElement>
  )

  
}

export default App;
