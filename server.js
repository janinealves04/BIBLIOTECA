//import http from "http";

import app from "./src/app.js";

//definição de porta
const PORT = 3000;

//criação de rotas
const rotas = {
    "/": "Curso de express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rota autores"
}

//criação de servidor
/* const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"}); //define cabeçalho http com codigo 200(ok), que informa o conteudo.
    //res.end("Curso de Node.js");
    res.end(rotas[req.url]); 
});
 */


//inicializando o servidor
app.listen(PORT, () => {
    console.log("Servidor escutando!");
});