require('dotenv').config();
const express = require("express");
const app = express()
const port = process.env.PORT || 3000;
const webpack  =  require ( "webpack" );
const middleware  =  require ( "webpack-dev-middleware" );
const webpackConfig = require("../../../webpack.config");
const compiler = webpack(webpackConfig);

app.use(middleware(compiler));

app.listen(port, () => {
  return console.log("Server is listening on port: ", port);
});

module.exports = app;