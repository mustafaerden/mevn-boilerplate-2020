import Express from "express";
import Mongoose from "mongoose";
import config from "@config/index";
import v1Router from "@routes";
import path from "path";

// For serving client side inside the Server side;
import Webpack from "webpack";
import WebpackConfig from "../webpack.config";
import WebpackHotMiddleware from "webpack-hot-middleware";
import WebpackDevMiddleware from "webpack-dev-middleware";

Mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Mongoose Connected");
  })
  .catch(err => console.log("Mongoose Connection Failed"));

const app = Express();

// For serving client side inside Server side; when we write npm run dev, client will be launched too
const compiler = Webpack(WebpackConfig);
app.use(
  WebpackDevMiddleware(compiler, {
    hot: true,
    publicPath: WebpackConfig.output.publicPath
  })
);
app.use(WebpackHotMiddleware(compiler));

// Route;
app.use(v1Router);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.listen(5000, () => {
  console.log("Server Started");
});
