import express from 'express'
import {prismaClient} from './db'

export const app = express();
app.use(express.json());

app.post('/sum',async (req:any,res:any)=>{
    const a = req.body.a;
    const b = req.body.b;

    if (a>100000 || b>100000){
        return res.status(422).json({
        message:'Sorry we do not support nig numbers'
    })
    }

   
    const result = a+b;
    const request = await prismaClient.request.create({
        data:{
            a:1,
            b:1,
            answer:result,
            type:"ADD"
        }
    })
    console.log("The result is",result);
    res.status(200).json({answer:result,id:request.id})
})
