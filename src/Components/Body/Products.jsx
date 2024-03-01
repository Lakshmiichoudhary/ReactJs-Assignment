import React from 'react'
import ProductDetails from './ProductDetails'


const Products = () => {
    const products = [{
        id:"1",
        imgname: "Builder 1",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
        productName: "WixPro 72-Inch Responsive Website Builder",
        description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        rating: 9.8,
        highlights: [
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
        ]
      },
      {
        id:"2",
        imgname: "Builder",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
        productName: "SiteCraft 68-Inch Ultimate Web Design Studio-",
        description: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        rating: 9.5,
        highlights: [
          "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
        ]
      },
      {
        id:"3",
        imgname: "Builder 1",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
        productName: "WixPro 72-Inch Responsive Website Builder-",
        description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        rating: 9.3,
        highlights: [
          "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides"
        ]
      },
      {
        id:"4",
        imgname: "CDK",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjFEOlLdF-tpWLJfDmJ9N_L4TArvySCh17Mk6FcnKkQ&s",
        productName: "CDK Resposive Builder: ",
        description: "An extensive library of widgets and apps, and detailed step-by-step guides",
        rating: 9.1,
        highlights: [
          "[What You Get]:",
              "9.9 building responsive",
              "8.9 Cool",
              "8.9 Docs",
        ],
        moreFeature : [
            "Documentation",
            "Easy Use",
            "Out of box"]
      }
    ]

    return (
      <div>
          {products.map((product, index) => (
              <ProductDetails key={index} product={product} />
          ))}
      </div>
  );
}

export default Products
