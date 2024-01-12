const express = require("express");
const app = express();
const db = require("./Connection")
const bodyParser = require("body-parser");
const CORS = require ("cors")
app.use(CORS());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post("/signup", async(req,res)=>{
  
    const { name, mail, password, role } = req.body;
    console.log("hi")
    console.log(name,mail,password,role)
    try{
        const items = await db.promise().query("insert into users (name,role,password,mail,wallet) values(?,?,?,?,?)", [name,role,password,mail,0]);
        res.send("success") 
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.post("/login", async(req,res)=>{
  
    const { mail,password } = req.body;
   console.log(mail,password)
    
    try{
        const users = await db.promise().query("select * from users where mail=?  and password=?",[mail,password]);
        res.json(users) 
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.post("/alter", async(req,res)=>{
  
    const { id,point } = req.body;
  console.log(id,point)
    
    try{
        const users = await db.promise().query("select * from users where id=?",[id]);
        console.log(users.length)
        if(users[0].length==0){
            res.send("nope")
        }
        else{
            console.log(users)
        const update = await db.promise().query("UPDATE users SET wallet = ? WHERE id = ?", [Number(point), id]);

        res.send("success") 
        }
        
    }
    catch(err){
        res.status(500).send(err)
    }

    
})
app.post("/add", async(req,res)=>{
  
    const { inr,wallet } = req.body;
    console.log(wallet,inr)
    try{
        const users = await db.promise().query("UPDATE current SET inr = '?',  wallet= '?'WHERE id = 1;",[inr,wallet]);
        res.json(users) 
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.post("/retrive", async(req,res)=>{
    const { id } = req.body;
    console.log(id)
    try{
      const users = await db.promise().query("select * from users where id=? ",[id]);
    //   const curr = await db.promise().query("select * from current where id=1 ");
     
    //   let inr=curr[0].inr;
    //   let wallet=curr[0].wallet;
    //   let value=users[0].wallet
    //   console.log(curr[0],wallet,value)
    
    //   console.log(obj)
    // //   res.json({
    //     inr:inr,
    //     wallet:wallet,
    //     value:value
    //   })
    res.send(users)
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.post("/buy", async(req,res)=>{
  
    const { update,id,item,rate } = req.body;
    console.log(id)
    try{
      const users = await db.promise().query("UPDATE users SET wallet = ? WHERE id = ?", [update, id]);
      const update1 = await db.promise().query("INSERT INTO trans (item, rate, userid) VALUES (?, ?, ?)", [item,rate,id]);
      console.log(users[0])
      res.send("sucess") 
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.post("/trans", async(req,res)=>{
  
    const { id } = req.body;
    console.log(id)
    try{
      const users = await db.promise().query("select * from trans where userid=? ", [id]);
      console.log(users[0])
      res.send(users) 
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.post("/current", async(req,res)=>{
  
    
    console.log("cree")
    try{
      const users = await db.promise().query("select * from current where id=1 ");
      console.log(users)
      res.send(users) 
    }
    catch(err){
        res.status(500).send(err)
    }
    
})
app.get("/",(req,res)=>{

    res.send("Goood");

})





app.listen(5000,()=>{
    console.log("Server running in 5000")
})
