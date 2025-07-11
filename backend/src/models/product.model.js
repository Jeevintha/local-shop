import {Schema,model} from "mongoose";

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description :{
        type : String
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required : true
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true, 
    }
})

const Product = model("Product", productSchema)
export default Product;