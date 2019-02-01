const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const controller = require("./controllers/controller");

const app = express();

require("dotenv").config();
app.use(bodyParser.json());

massive(
    process.env.CONNECTION_STRING
).then(db=>{
    app.set("db",db);
    console.log("Connected to db");

}).catch(err=>console.log(err))



app.get("/api/products",controller.getAll);
app.post("/api/products",controller.create);
app.put(`/api/products/:product_id`,controller.update)
app.delete(`/api/products/:product_id`,controller.delete);



const SERVER_PORT = process.env.SERVER_PORT || 4020;
app.listen(SERVER_PORT, ()=>console.log(`Server is running on port ${SERVER_PORT}`))
