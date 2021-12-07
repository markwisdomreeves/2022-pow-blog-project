const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const dbConnect = require("./config/db/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

// Routes
const userRoutes = require("./routes/usersRoute");
const postRoute = require("./routes/postRoute");
const commentRoutes = require("./routes/commentRoute");
const emailMsgRoute = require("./routes/emailMsgRoute");
const categoryRoute = require("./routes/categoryRoute");

const app = express();

//DB
dbConnect();

//Middleware
app.use(express.json());

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

//cors
app.use(cors());

//Users route
app.use("/api/users", userRoutes);

//Post route
app.use("/api/posts", postRoute);

//comment routes
app.use("/api/comments", commentRoutes);

//email msg
app.use("/api/email", emailMsgRoute);

//category route
app.use("/api/category", categoryRoute);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

//err handler
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));

