import React from 'react'

function CategoryCard({eachCategory}) {

    console.log(eachCategory)
  

    const totalQuantity = eachCategory.products.reduce(
        (acc, product) => acc + product.quantity_available,
        0
      );
  
  return (
    <div>
        <img src={eachCategory.products[0].image} alt="Prod image" />
        <h3>{eachCategory.name}</h3>
        <p>{totalQuantity} Products</p>
    </div>
  )
}

export default CategoryCard