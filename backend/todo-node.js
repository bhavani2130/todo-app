let express= require("express");
let cors=require("cors");
let mongoose = require("mongoose");
let ap=express();
ap.use(cors());
ap.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/todo")
.then (()=>{
    console.log("mongodb connected")
})
.catch((err)=>{
    console.log(err);
})

let todoschema = new mongoose.Schema({
    task:String
})
let todo=mongoose.model("Todo",todoschema)

ap.get("/todo",async(req,res)=>{
    let data = await todo.find();
   res.json(data);
})

ap.post("/todo",async(req,res)=>{
    await todo.create({task:req.body.task})
    res.send("task added")
})
ap.delete("/todo/:id",async(req,res)=>{
    await todo.findByIdAndDelete(req.params.id)
    res.send("deleted")
})

ap.put("/todo/:id", async(req,res)=>{
    let upd=await todo.findByIdAndUpdate(
        req.params.id,
        {task:req.body.task},
        {new:true}
    )
    res.send(upd);
})

ap.listen(3000,()=>{
    console.log("server started");
})