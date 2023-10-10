import React from 'react'
import Header from '../../layout/header/Header'
import Hero from '../../containers/hero/Hero'
import ProductContainer from '../../containers/product-container/ProductContainer'
import OrderForm from '../../containers/orderform/OrderForm'

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