import mongoose from 'mongoose'

const modelsSchema = new mongoose.Schema({
    property: {
        type:String,
    },
    property: {
        type:Number,
    },
    property: {
        type:Boolean,
    }
})

export default mongoose.model('Schema', modelsSchema)