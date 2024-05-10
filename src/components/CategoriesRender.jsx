import React, { useEffect, useState } from 'react'
import Data from '../assets/Data.json'
import CategoryCard from './CategoryCard'

function CategoriesRender() {

  const [categories, setcategories] = useState([])

  useEffect(() => {
   setcategories(Data.categories)
  }, [])
  
  return (
    <div className=''>
      <h1>Categories</h1>
      <div className='flex gap-5 flex-wrap'>
      {
        categories.map((elem,idx)=>(
          <CategoryCard eachCategory = {elem} key = {idx}/>
        ))
       }
      </div>
       
    </div>
  )
}

export default CategoriesRender