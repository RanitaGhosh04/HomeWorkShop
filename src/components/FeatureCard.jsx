import React from 'react'

function FeatureCard({eachFeature}) {
  return (
    <div>
        <img src={eachFeature.products[1].image} alt="FeaturedImg" />
        <h1>{eachFeature.products[1].name}</h1>
        <h1>{eachFeature.products[1].rating}</h1>
    </div>
  )
}

export default FeatureCard