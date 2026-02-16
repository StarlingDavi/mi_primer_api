import express from "express";

const port = process.env?.port || 3000;
const app = express();

app.listen(port => {
    console.log(`API ejecutandose en el puerto ${port}`)
})