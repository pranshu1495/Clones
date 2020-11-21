import React,{useEffect} from "react"
import './App.css';
import Header from './components/Header'
import Checkout from './components/Checkout'
import Home from './components/Home'
import Login from './components/Login'
import Payment from './components/Payment'
import {auth} from './firebase'
import {useStateValue} from './components/StateProvider'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise=loadStripe('pk_test_51Ho97RK1v1bO5IVX59lxV6O2FwhEMLXHhIX3euEpPjfXvHecRSLkVioLDz2Rlyffw2HkgsFiFE0mTl13iLrBfbra005eIsftct');
function App() {
  const[{},dispatch]=useStateValue();
  //listener who keep the track of who have signed in
  useEffect(() => {
    //will only runs once when the app component loads.
    auth.onAuthStateChanged(authUser=>{
      console.log('The user is >>> ',authUser);
      if(authUser){
        //the user just logged in/ the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })       //it refires the code whenever we login or logout
  }, [])
  return (
    //BEM Convention
    <Router>
    <div className="app">
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
      <Header />
      <Checkout />
      </Route>
      <Route path="/payment">
      <Header />
      <Elements stripe={promise}>
      <Payment />
      </Elements>
      </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
