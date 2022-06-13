const express = require('express')
const app = express()
require('./db/Config')
const dataModel = require('./db/data')
const cors = require('cors')
const user = require('./db/user')
// const objectId =  mongoose.Schema.Types.ObjectId

app.use(express.json())
app.use(cors())

app.post('/register', async (req,resp)=>{
    // console.log(req.body)
    const response = await dataModel.create({data:req.body.inputData})
    // const result  = await response.save()
    // console.log(response)
    resp.send(response)
})
app.get('/', async (req,resp)=>{
    const response = await dataModel.find()
    if(response.length >0){
        resp.send(response)
    }else{
        resp.send({result:"No item found"})
    }
})
app.put('/update/:id', async (req,resp)=>{
    const response = await dataModel.updateOne(
        {_id:req.params.id},
        {
            $set:{data:req.body.inputData}
        }
    )
    resp.send(response)
})
app.delete('/delete/:id', async (req,resp) => {
    console.log(req.params.id)
    const result = await dataModel.deleteOne({_id : req.params.id})
    resp.send(result)
    // resp.status(200).json({message: "delted successfully"})
})




// =====user api============

app.post('/signup', async (req,resp) => { 
    const response = await user.create(req.body)
    resp.send(response)
})
app.post('/login', async (req,resp) => { 
    const response = await user.findOne(req.body).select("-password")
    if(response){
        resp.send(response)
    }else{
        resp.send({"Result":"No user found"})
    }
})

app.listen(5000)