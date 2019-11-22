import { Schema ,model} from "mongoose";
const groupSchema=new Schema({
    groupname:{
        type:String,
        required:true,
    },
    members:{
        type:[{type: Schema.Types.ObjectId, ref: 'User'}]
    }
}, { timestamps: true })
module.exports = model('Group', groupSchema);