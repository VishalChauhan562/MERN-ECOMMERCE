import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios'
import ProductContext from '../context/ProductContext';


// going


function HomeScreen() {
  const {products,error,loading,dispatch,filter,setFilter} = useContext(ProductContext)

  useEffect(()=>{
    const fetchProducts = async ()=>{
      dispatch({type:'FETCH_REQUEST'})
      try{
        const productList = await axios.get(`api/v1/products?category=${filter.category}&price=${filter.price}&rating=${filter.rating}&slug=${filter.slug}`)
        dispatch({type:'FETCH_SUCCESS',payload:productList.data}) 
      }
      catch(err){
        dispatch({type:'FETCH_FAIL',payload:err})
      }
    
    }
    fetchProducts()
  },[])

  return ( 

    <div>
      <h1>Featured Products</h1>
      <div className="products">
      {loading ? (<h1>Loading....</h1>) : error ? (<h1>Error</h1>) :

      ( products.map((product) => (
          <div className="product" key={product.slug}>
            <Link   to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link style={{color:"white"}} to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        )))
    
       }

     
      </div>
    </div>

  );
}
export default HomeScreen;
