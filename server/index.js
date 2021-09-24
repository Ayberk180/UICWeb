const express = require('express');
const App = express();
const cors = require("cors");
const db = require("./models")

App.use(express.json());
App.use(cors());

//Routers
const postRouter = require('./routes/posts');
App.use("/posts", postRouter);

db.sequelize.sync().then( () => {
    App.listen(3001, () => {
        console.log("Server Running on port 3001");
    });
});
