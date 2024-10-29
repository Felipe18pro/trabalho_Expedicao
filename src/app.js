import connectDB from "./config/db.js";
import express from "express";
import explorerRouter from "./router/explorerRoute.js";
import speciesRouter from "./router/speciesRoute.js";
import expeditionRouter from "./router/expeditionRoute.js";

const app = express();
app.use(express.json());

connectDB();

app.use('/explorador', explorerRouter);
app.use('/especies', speciesRouter);
app.use('/expedicao', expeditionRouter);

const PORT = 3000; 
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));