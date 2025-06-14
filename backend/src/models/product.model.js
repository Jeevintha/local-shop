import {Schema,model} from mongoose;

const productSchema = Schema({
    name: {
        type: String,
        required: true
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
    stock: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const Product = model("Product", productSchema)
export default Product;