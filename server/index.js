const bodyParser = require('body-parser')
const { default: mongoose } = require('mongoose')
const cors = require('cors');

durl = "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"

express  = require('express')
app  = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
mongoose.connect("mongodb+srv://abhii123:abhi123@mernapp.oucv3.mongodb.net/tree4me",()=>{
console.log("db connected");
})
userSchema = new mongoose.Schema({
    username :String,
    email  : String,
    treePoints:{
        type: Number,default:1500,
    },
    badges :{type : Number, default:0},

    userId:String,
    profilePic :{ 
        type :String,default:"https://res.cloudinary.com/sidd293/image/upload/v1677647581/TREE4ME/proimage_uxbdvg.png"},

})
User = mongoose.model("user",userSchema);
app.post("/login",(req,res)=>{
// console.log(req.body);

User.findOne({email:req.body.email}).then(e=>{
    if(e)
    {

        res.send(e);
    return ;
    }

    user = new User({
        username: req.body.displayName,
        email : req.body.email,
        profilePic : req.body.photoUrl,
        userId : req.body.displayName.slice(0,4)+Math.floor(Math.random()*1000),

    });
    user.save().then(r=>{console.log(r);res.send(r)}).catch(e=>{
        console.log(e);
        });
}).catch(e=>{
    console.log(e)
})
// res.send("logged in");

}
)

app.get("/allusers",async (req,res)=>{
    let pt  = ""
     if(req.query.q.length==0)
     str = ""
     else str = req.query.q;
   try {
      pt = new RegExp(`${str}`,'i')
   }catch{
   res.status(500).json({
     success: false 
   })
   return;
   }
   
     
    console.log(pt);
     users = await User.find({
   $or:[
    { userId:pt},{email:pt}
   ]
     })
     res.send(users);
    //  res.status(200).json({
    //    success : true,
    //     users
    //  })
   }


)

app.post("/newUser",(req,res)=>{

    user = new User(req.body);
    user.save().then(e=>{
res.send("user created successfully");

    });
})
plantSchema = new mongoose.Schema({
    name:{type:String, required: true},
    user:{type:String},
    type: {type: String , required: true},

    location: {type : String, default:"dehradun"},
    status :{type : String, default: "healthy"},
    age: {type :Number , default: 0},
    photoUrl:{type: String , default : durl},
    likes:{type:Array,default:[]},
})
Plant = mongoose.model("plant",plantSchema);
app.get("/",(r,e)=>{
    e.send("serverrunning")
})
app.get('/getAllPlants/',(req,res)=>{
    Plant.find().then(r=>{
        res.send(r);
    }).catch(e=>{
        res.send(e);
    })
})
app.get("/getAllPlants/:id",(req,res)=>{
    console.log(req.params.id);
Plant.find({user:req.params.id}).then(r=>{
    res.send(r);
}).catch(e=>{
    res.send(e);
});
});
app.post("/login2/:id",(req,res)=>{
    console.log(req.params.id);
    User.findOne({userId:req.params.id}).then(r=>{
        console.log(r);
        res.send(r)
    });
})

app.post("/likePlant/:plantid",(req,res)=>{
    Plant.findByIdAndUpdate(req.params.plantid,{$push:{likes:req.query.user}}).then(r=>{
        res.send(r);
    }).catch(e=>{
        res.send(e);
    })
})
app.post("/addPlant/:id",(req,res)=>{
    plant = new Plant({name:req.body.name,user:req.params.id,type:req.body.type,location:req.body.location,photoUrl:req.body.photoUrl});
   
    User.findOneAndUpdate({userId:req.params.id},{treePoints:parseInt(req.body.treePoints)}).then(re=>{
        console.log("plantadded");
        plant.save().then(e=>{
            res.send("plant Added");
        })
       

    }).catch(e=>{
        console.log(e);
    })
   
    
})
app.listen(8080,()=>{
console.log("application started on localhost 8080");
})