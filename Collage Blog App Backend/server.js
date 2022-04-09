const express = require('express'),
        mongoose = require('mongoose')
const app = express()
const port = 3000
require('dotenv').config();

// For parsing application/json
app.use(express.json());
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    // res.status(200).send(tasks)
    res.send({
        msg: "Server is running fine....."
    })
})


// Auth
const {signUp} = require('./controllers/AuthControllers')

app.post('/signup',signUp);



const MONGODB_URI = process.env.MONGO_URI;
// console.log(MONGODB_URI)
mongoose.connect(
    MONGODB_URI
)
.then(result => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log('Server Started at port '+ port)
    })
}).catch(err => {
    console.log(err);
})




// blog
// REST API
// app.get("/blogs") => will return collection of blogs
// app.post("/blogs") => will add a new blog
// app.get("/blogs/:blogId") => will return blog with id equals blogId
// app.put("/blogs/:blogId") => will edit blog with id equals blogId
// app.delete("/blogs/:blogId") => will delete blog with id equals blogId

// app.get("/comments") => will return comments of single blog
// app.post("/comments") => will add a new comment on blog
// app.get("/comments/:commentsId") => will return blog with id equals commentsId
// app.put("/comments/:commentsId") => will edit blog with id equals commentsId
// app.delete("/comments/:commentsId") => will delete blog with id equals commentsId

// {
//     blogId, authorId, likes: [], comments: [] , sharesCount: 0, timeStamp, imgUrl
// }

// {
//     profilePicUrl, name, deg... , id, branch, year , regNo, 
// }

// jwt vs passportjs