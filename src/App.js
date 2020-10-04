import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import Header from "./Header/Header";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";
import Orders from "./Orders/Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe('pk_test_51HS7u5LJq9m6wEGfznTk9sgtcS2Tbq1WrGr7IcbN1dfhmycCoKGkZHKZpxOC3iKKnCjxP0ACtuOdqSyjxTkQKzCy00ftRSTwyJ');

function App() {
  
  const [{ user }, dispatch] = useStateValue();
  // useEffect - piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // The user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // The user is logged out...

        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })

    return () => {
      // Any clean-up operations go here;
      unsubscribe();
    }

  }, []);
  console.log(' USER IS >>>> ', user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path ="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* WE NEED REACT-ROUTER */
}

{
  /* localhost.com/ */
}

{
  /* localhost.com/checkout */
}

{
  /* localhost.com/login */
}

    
export default App;
