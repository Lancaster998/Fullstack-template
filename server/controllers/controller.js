import modelSchema from '../models/model.js'

export const controller = async (req,res) => {
    const {prop, prop2} = req.body

    
    if(prop){
        res.status(200).json()
    }else{
        res.json({err: 'errors is catched'})
    }
}