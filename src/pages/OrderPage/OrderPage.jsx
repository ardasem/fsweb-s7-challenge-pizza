import React from 'react'
import Header from '../../layout/header/Header'

import OrderForm from '../../containers/orderform/OrderForm'
import Hero from '../../containers/orderform-hero/Hero'
import Footer from '../../layout/footer/Footer'

function OrderPage(props) {
const {setFinalOrderState} =props;

  return (
    <div>
        <Header />
        <Hero />
        <OrderForm setFinalOrderState={setFinalOrderState} />
        <Footer />
    </div>
  )
}

export default OrderPage