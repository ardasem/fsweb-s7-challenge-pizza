import React from 'react'
import Header from '../../layout/header/Header'
import HomePageHero from '../../containers/homepage-hero/HomePageHero'
import HomePageCategories from '../../components/homepage-categories/HomePageCategories'
import RecommendationsContainer from '../../containers/recommendations-container/RecommendationsContainer'
import FoodsContainer from '../../containers/foods-container/FoodsContainer'
import Footer from '../../layout/footer/Footer'

function HomePage() {
  return (
    <div className='homa--page--container'>
        <Header/>
        <HomePageHero/>
        <HomePageCategories food={'YENİ! Kore'}/>
        <RecommendationsContainer/>
        <FoodsContainer />
        <Footer />

        
    </div>
  )
}

export default HomePage