const app = require("./api/server/server");
const { static, json, urlencoded } = require("express");
const path = require("path");
const routes = require("./api/routes");
const helmet = require("helmet");

app.use(helmet());
app.use(urlencoded({extended: true}));
app.use(json());
app.use(static(path.resolve(__dirname, '../','dist')));
app.use('/api/v1/', routes);