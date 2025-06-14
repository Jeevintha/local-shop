import {Schema,model} from 'mongoose';

const shopSchema = new Schema({
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
        ref: 'Product',
        required: true
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


 const Shop = model("Shop",shopSchema)
export default Shop;