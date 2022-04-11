import { Product } from "../model/productModel.js"

// Find with Filters
// by adding regular expressions search can be possible via same api

export const getAllProducts = async (req,res)=>{
    const rejex = req.query.slug!="all" ? new RegExp(req.query.slug,'i') : "all"
    const queryObj = {...req.query,slug:rejex}
    for(let key in queryObj ){
        if(queryObj[key]==="all"){
            delete queryObj[key]
        }
    }
    console.log(queryObj);
    const products = await Product.find(queryObj)
    res.status(200).json(products)
}




// Better API
export const createProduct = async (req,res)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}


//search API
export const searcProducts =async(req,res)=>{
    const rejex = new RegExp(req.params.name,'i')
    const searchedItems = await Product.find({name:rejex})
    res.status(200).json(searchedItems)
}
