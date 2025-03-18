
import express from "express";

//express se torna responsavel pelo manejamento do servidor
const app = express();

//simulação de base de dados(array de objetos)
const livros = [
    {
        id : 1,
        titulo: "Senhor dos Anéis"

    },
    {
        id: 2,
        titulo: "O hobbit"
    }

]

//rotas:
//executando conjunto de funções express. 

app.get("/", (req, res) => {
    res.status(200).send("curso de node.js");
});


app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});



export default app;