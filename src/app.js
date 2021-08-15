const app = require("./server");
const { static, json } = require("express");
const path = require("path");
const userRoutes = require("./api/contents/users/routes");
const rankingRoutes = require("./api/contents/ranking/routes");
const helmet = require("helmet");

app.use(helmet());
app.use(json());
app.use(static(path.resolve(__dirname, '../','public')));
app.use('/api/v1/user/', userRoutes);
app.use('/api/v1/score/', rankingRoutes);