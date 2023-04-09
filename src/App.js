import React from 'react';

import Product from './Product';
import './Style.css';

// don't change the Component name "App"
export default function App() {
    const products=[
        {title:'Product 1',price:"10",description:'First product'},
         {title:'Product 2',price:"20",description:'Second product'}];
    return (
        
        <div>
        <h2>My Demo Shop
        </h2>
          <Product t={products[0].title} p={products[0].price} d={products[0].description}/>  
           <Product t={products[1].title} p={products[1].price} d={products[1].description}/>
        </div>
    );
}