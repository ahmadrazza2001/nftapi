const express = require("express");
const morgan = require("morgan");

const nftsRouter = require("./routes/nftsRoute");
const userRouter = require("./routes/usersRoute");

const app = express();
app.use(express.json());

/*if(process.env.NODE_ENV === "development"){
  app.use(morgan("dev"));
}*/
app.use(morgan("dev"));

//Serving template
app.use(express.static(`${__dirname}/nft-data/img`))

//Custom Middle ware
app.use((req, res, next) => {
  console.log("middle ware function");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/nfts", nftsRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;