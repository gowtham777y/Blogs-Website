import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.render("landing-page.ejs");
})

app.listen(port, () => {
    console.log(`Server started to listen on port ${port}`);
})