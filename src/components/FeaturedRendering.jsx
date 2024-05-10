import React, { useEffect, useState } from 'react'
import Data from '../assets/Data.json'
import FeatureCard from './FeatureCard'

function FeaturedRendering() {

    const [featuredAccumulate, setfeaturedAccumulate] = useState([])

    useEffect(() => {
      setfeaturedAccumulate(Data.categories)
    }, [])
    
  return (
    <div className=''>
    <h1>Features</h1>
    <div className='flex gap-5 flex-wrap'>
    {
      featuredAccumulate.map((elem,idx)=>(
        <FeatureCard eachFeature = {elem} key = {idx}/>
      ))
     }
    </div>
     
  </div>
  )
}

export default FeaturedRendering