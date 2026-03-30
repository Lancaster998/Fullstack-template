import mongoose from 'mongoose'

const connectDB = async (url) => {
    try{
        await mongoose.connect(url)
        console.log('Connected to MongoDB');
    }catch(error){
        console.log('MongoDB Connection Error:', error);
        
    }
}
export default connectDB