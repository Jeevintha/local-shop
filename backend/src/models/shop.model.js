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
        type: String,
        required: true
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