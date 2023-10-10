import React from "react";
import { Switch, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage/OrderPage";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/pizza">
          <OrderPage />
        </Route>
        <Route path="/success" >
          <OrderPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
