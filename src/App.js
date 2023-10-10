import React from "react";
import { Switch, Route } from "react-router-dom";
import OrderPage from "./pages/OrderPage/OrderPage";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <OrderPage />
        </Route>
        <Route path="/pizza">
          <OrderPage />
        </Route>
        <Route path="/success">
          <OrderPage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
