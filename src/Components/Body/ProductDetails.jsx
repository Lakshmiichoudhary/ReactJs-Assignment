import React from 'react'

const ProductDetails = ({ product }) => {
 
  return (
    <div className="md:flex justify-center mt-3">
      <h1 className='md:mt-7 mt-3 mx-6 md:mx-0'>{product.id}</h1>
      <div className='md:mt-20 w-36 mx-24 md:mx-0'>
        <img src={product.imageUrl} alt='productImage'/>
        <h3 className='p-2 text-center'>{product.imgname}</h3>
      </div>
      <div className='p-2 ml-5 md:w-4/12 mt-6'>
      <h1>{product.productName}</h1>
      <p>{product.description}</p>
      <h2 className='font-bold'>Main highlights</h2>
      <ul>
        {product.highlights.map((highlight, index) => (
          <li className='mt-2 mx-5' key={index}>{highlight}</li>
        ))}
      </ul>
      {product.moreFeature && product.moreFeature.length > 0 &&  (
          <>
            <h2 className='text-xl'>Why do we love it</h2>
            <ul>
              {product.moreFeature.map((feature, index) => (
                <li className='mt-2' key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className='md:mt-9 mt-3 ml-24'>
      <p className='mx-16 font-bold text-2xl'>{product.rating} </p>
      <h1 className='mx-9 mt-2'>Exceptional</h1>
      <button className='p-2 w-44 rounded-md bg-blue-500 md:mt-28 mt-3 text-white'>View</button>
      </div>
    </div>
  );
};

export default ProductDetails
