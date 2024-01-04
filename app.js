import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;

app.get("/", (req, res) =>{
    res.render("landing-page.ejs");
})

app.get("/create", (req, res) => {
    res.render("create-blog.ejs");
})

app.post("/submit", (req,res) => {
    console.log(req.body["blogTitle"]);
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server started to listen on port ${port}`);
})