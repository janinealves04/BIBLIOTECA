
import express from "express";

//express se torna responsavel pelo manejamento do servidor
const app = express();
//middleware: usado para executar a requisição e converte para json
app.use(express.json()); 


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

app.post ("/livros", (req, res) => {
        livros.push(req.body); //objeto requisição que é recebio na função app.post
        res.status(201).send("Livro cadastrado com sucesso");//criar algo com sucesso 201

    })


export default app;