// # Importaciones
import express from "express";
import dairyRouter from "./routes/diaries";

const app = express();
app.use(express.json()); //* Middleware para obtener request

const PORT = 3000;

app.get("/ping", (_req, res) => {
    console.log("someone ping here!");
    res.send("pong");
});

app.use("/api/diaries", dairyRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(`Local: http://localhost:${PORT}`);
});
