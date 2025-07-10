import {Schema,model} from 'mongoose';

const shopSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique : true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique : true
    },
    image:{
        type: String,
        default: 'https://placehold.co/300'
    },
    product:[{
        type: Schema.Types.ObjectId,
        ref: 'Product',
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})


 const Shop = model("Shop",shopSchema)
export default Shop;