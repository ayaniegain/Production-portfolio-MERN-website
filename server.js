const express = require("express");
const cors = require("cors");
const path =require("path")

//rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());


//static files access

app.use(express.static(path.join(__dirname,"./client/build")))

//routers
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

//ports
const PORT = process.env.PORT || 8000;

//listen

app.listen(PORT, () => {
  console.log("listen in PORT ||", PORT);
});
