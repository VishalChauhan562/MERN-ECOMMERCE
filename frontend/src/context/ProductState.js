import { useReducer, useState } from "react";
import ProductContext from "./ProductContext";

const reducer = (state,action)=>{
  switch (action.type){
    case 'FETCH_REQUEST' : 
    return {...state,loading:true};
    case 'FETCH_SUCCESS' :
      return {...state, products: action.payload, loading:false};
    case 'FETCH_FAIL':
    return {...state,loading:false, error: action.payload};
    default:
      return state;
  }
}


export const ProductState = (props) => {

  const [{products,error,loading},dispatch] = useReducer(reducer,{
    loading:true,
    products:[],
    error: ""
  })

  const [filter,setFilter] = useState({
    category:"all",
    rating:"all",
    price:"all",
    slug:"all"
  })

  return (
    <ProductContext.Provider value={{products,error,loading,dispatch,filter,setFilter}}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState