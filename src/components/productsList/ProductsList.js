import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchProducts} from './productsListSlice';

const ProductsList = () => {
  const {products, productsLoadingStatus} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(fetchProducts());

   // eslint-disable-next-line
  }, []);

  if(productsLoadingStatus === 'loading'){
    return <p>Loading...</p>
  } else if(productsLoadingStatus === 'error'){
    return <p>Oops error</p>
  }


  const renderProducts = (arr) => {
    console.log(arr);
    if(arr.length === 0){
      return <p>No items found!</p>
    }

    // return arr.map(({id, title}) => {
    //   return <p key={id}>{title}</p>
      
    // })
  }

  const elements = renderProducts(products)

  return (
    <div>
      {/* {elements} */}
      
    </div>
  )
}

export default ProductsList