const Sequelize = require("sequelize");
const { user, blogPost } = require("./models");

var cors = require('cors');

const express = require("express");
const PORT = 3001;

const app = express();
app.use(express.json())
app.use(cors());

//get posts
app.get("/posts", async (req, res) => {
  const posts = await blogPost.findAll();
  res.json(posts);
});

//add blog post
app.post("/addBlog", async (req, res) => {
  // req.body contains an Object with firstName, lastName, email
  const { title, blog, catagory, userId } = req.body;
  const newPost = await blogPost.create({
    title,
    blog,
    catagory,
    userId,
  });
  res.json({
    id: newPost.id,
  });
});

//search single post
app.get("/posts/:blogpostsId", (req,res) => {
  const post = await blogPost.req.params
  res.json(post)
})



app.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`);
});
