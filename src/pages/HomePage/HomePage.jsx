import React from 'react'
import Header from '../../layout/header/Header'
import HomePageHero from '../../containers/homepage-hero/HomePageHero'
import HomePageCategories from '../../components/homepage-categories/HomePageCategories'
import RecommendationsContainer from '../../containers/recommendations-container/RecommendationsContainer'

function HomePage() {
  return (
    <div className='homa--page--container'>
        <Header/>
        <HomePageHero/>
        <HomePageCategories/>
        <RecommendationsContainer/>

        
    </div>
  )
}

export default HomePage