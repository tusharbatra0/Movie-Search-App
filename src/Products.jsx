import React from 'react';

function Products({ title, price }) {
  return (
    <div className='product'>
      <h2>{title}</h2>
      <h4>{price}</h4>
    </div>
  );
}

export default Products;