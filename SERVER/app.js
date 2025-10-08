// const express=require('express');
// const mongoose=require('mongoose');
// const path=require('node:path')

// const app=express();

// const port=5000;

// app.get('/',(req,res)=>{
//     // res.send('welcome server');
//     res.sendFile(__dirname,'index.html');

// })
// console.log(__dirname,'index.html');

// mongoose.connect('mongodb://localhost:27017',{
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
// }).then(()=>{
//     console.log("mongodb is connect")
// })
// const schema=mongoose.Schema;

// const dataschema=new schema({
//     name:String,
//     email:String,
//     message:String,
// });
// const data = mongoose.model('Data',dataschema);
// app.post("/submit",(req,res)=>{
//     const {name,email,message}=req.body;
//     const newdata=new Data({
//         name,
//         email,
//         message,
//     });
//     newdata.save();
// })
// app.listen(port,()=>{
//     console.log(`server is runnng at port ${port}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 5000;

// Body parser middleware (built-in, no need for body-parser package)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, JS, images) from root folder
app.use(express.static(path.join(__dirname, '..')));

// Route to serve login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'login.html'));
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourDB', {
    useNewUrlParser: true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Mongoose schema & model
const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const Data = mongoose.model('Data', dataSchema);

// Form submission route
app.post("/submit", (req, res) => {
    const { name, email, password } = req.body;
    console.log("Form submitted:", { name, email, password }); // logs in terminal

    const newData = new Data({ name, email, password });

    newData.save()

    res.redirect('/');
        // .then(() => {
        //     console.log("Data saved in MongoDB:", newData);
        //     res.send("Registration successful!"); // stops browser spinning
        // })
        // .catch(err => {
        //     console.error("Error saving data:", err);
        //     res.status(500).send("Error saving data");
        // });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
