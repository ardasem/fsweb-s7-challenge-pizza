import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import {useState} from 'react'

const App = () => {
  const [finalOrderState, setFinalOrderState] = useState({})

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/pizza">
          <OrderPage finalOrderState={finalOrderState} setFinalOrderState={setFinalOrderState} />
        </Route>
        <Route path="/success" >
          <SuccessPage finalOrderState={finalOrderState}/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
