import express from "express"
import sequelize from "./Config/database.js";
import router from "./Routes/routes.js";

const app = express()
const PORT = 5172;

try {
    await sequelize.authenticate(); //verifica a conexão com o banco de dados
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    await sequelize.sync(); // Sincroniza os modelos com o banco de dados
    console.log("Modelos sincronizados com sucesso!");
} catch (error) {
    console.error("Falha ao conectar com o banco de dados:", error);
}

app.use(express.json());
app.use(router)

app.get('/', (req,res)=> {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta <http://localhost>:${PORT}`)
})