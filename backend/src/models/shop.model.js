import {Schema,model} from 'mongoose';

const shopSchema = Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    product:[{
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    }]
})

 const Shop = model("Shop",shopSchema)
export default Shop;