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


const baseUrl = "/api/products"

app.get(`${baseUrl}`,controller.getAll);
app.post(`${baseUrl}`,controller.create);
app.put(`${baseUrl}/:product_id`,controller.update)
app.delete(`${baseUrl}/:product_id`,controller.delete);



const PORT = process.env.PORT || 4020;
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))
