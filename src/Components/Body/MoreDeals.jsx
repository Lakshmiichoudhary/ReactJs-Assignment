import React from 'react';

const MoreDeals = () => {
  
  const deals = [
    {
      id: "01",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
      name: 'Webbuilder 1',
      description: 'Computer Modern classic with Wix support',
      originalPrice: 49.96,
      discountedPrice: 39.96,
      discount: '20% Off',
      timeLimited: true,
    },
    {
        id: "02",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
        name: 'Webbuilder 1',
        description: 'Computer Modern classic with Wix support',
        originalPrice: 49.96,
        discountedPrice: 39.96,
        discount: '20% Off',
        timeLimited: true,
    },
    {
        id: "03",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
        name: 'Webbuilder 1',
        description: 'Computer Modern classic with Wix support',
        originalPrice: 49.96,
        discountedPrice: 39.96,
        discount: '20% Off',
        timeLimited: true,
      },  
    
  ];

  return (
    <div className='p-2 md:mx-44 mx-10'>
      <h2 className='font-bold mt-2 md:m-4 md:text-xl'>Related Deals You Might Like For</h2>
      <div>
      <ul className='md:flex md:justify-between md:ml-28'>
        {deals.map(deal => (
          <li key={deal.id}>
            <img className='p-2 w-24 ml-16 mt-4' src={deal.image} alt='image'/>
            <div className='flex text-blue-500 p-2'>
                <p>{deal.discount}</p>
                {deal.timeLimited && <p className='mx-4'>Limited time offer</p>}
            </div>
            <p className='p-2 ml-11 font-bold'>{deal.name}</p>
            <p className='p-2 w-60'>{deal.description}</p>
            <p className='font-bold p-2'>Original Price: ${deal.originalPrice}</p>
            <p className='font-bold p-2'>Discounted Price: ${deal.discountedPrice}</p>
            <button className='p-2 w-60 text-white rounded-md bg-blue-500'>view Deals</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default MoreDeals;

