import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;
var blogs = [];


app.get("/", (req, res) =>{
    res.render("landing-page.ejs", {blogs: blogs});
})

app.get("/create", (req, res) => {
    res.render("create-blog.ejs");
})

app.get("/:id", (req,res) => {
    res.render("blog.ejs",{blogData: blogs[req.params.id]});
})

app.post("/submit", (req,res) => {
    const currentBlog = new blog(req.body["blogAuthor"],req.body["blogTitle"],req.body["blogContent"]);
    blogs.push(currentBlog);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server started to listen on port ${port}`);
})

class blog {
    constructor (author, title, content){
        this.author = author;
        this.title = title;
        this.content = content;
    }
}