import React from 'react'
import Header from '../../layout/header/Header'

import OrderForm from '../../containers/orderform/OrderForm'
import Hero from '../../containers/orderform-hero/Hero'

function OrderPage() {
  return (
    <div>
        <Header />
        <Hero />
        <OrderForm />
    </div>
  )
}

export default OrderPage