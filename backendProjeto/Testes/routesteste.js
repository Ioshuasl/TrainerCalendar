import express from "express"
import GerenciadorAlunos from "./controllerteste.js"

const routes = express()

routes.get('/alunos', (req,res) => {
    return res.json(GerenciadorAlunos.getAlunos())
})

routes.get('/all', (req,res) => {
    return res.json(GerenciadorAlunos.alunos)
})

routes.get('/mostrarTreinoAluno/:id', (req,res) => {

    const {id} = req.params
    const listaTreinos = GerenciadorAlunos.mostrarTreinosAluno(id)

    return res.json({listaTreinos})
})

routes.get('/getCompromissoHoje', (req,res) => {

    const treinosHoje = GerenciadorAlunos.getCompromissoHoje()

    return res.json(treinosHoje)
})

routes.get('/getCompromissoDia/:dataQualquer' , (req,res) => {
    const {dataQualquer} = req.params 

    const treinosDia = GerenciadorAlunos.getCompromissoDia(dataQualquer)

    return res.json(treinosDia)

})

routes.post('/addAluno', (req, res) => {
    const { nome, dataNasc, email } = req.body;

    if (!nome || !dataNasc || !email) {
        return res.status(200).json({ message: 'Todos os campos são obrigatórios: nome, dataNasc, email.' });
    }

    const newAluno = GerenciadorAlunos.adicionarAluno(nome, dataNasc, email);
    
    if (newAluno) {
        return res.status(201).json({
            aluno: newAluno,
            message: 'Aluno criado com sucesso!'
        }); 
    } else {
        return res.status(500).json({ message: 'Erro ao criar o aluno.' });
    }

});

routes.post('/addTreino/:id', (req,res) => {
    const { titulo,data,horaInicio,horaTermino, descricao, qtdTreinos } = req.body
    const { id } = req.params

    const newTreino = GerenciadorAlunos.alunos[id].adicionarTreino(titulo,data,horaInicio,horaTermino, descricao, qtdTreinos)

    if (newTreino) {
        return res.status(201).json({
            message: 'treino criado com sucesso',
            treino: newTreino
        })
    } else {
        return res.status(500).json({ message: 'Erro ao criar treino '})
    }
})

routes.delete('/deleteAluno/:id', (req,res) =>{
    const {id} = req.params

    const deleteAluno = GerenciadorAlunos.removerAluno(id)

    return res.json(deleteAluno)
})

routes.delete('/deleteTreinoAluno/:id/:tituloTreino', (req,res) => {
    const {id,tituloTreino} = req.params

    const deleteTreinoAluno = GerenciadorAlunos.alunos[id].removerListaTreino(tituloTreino)

    return res.json(deleteTreinoAluno)
})


export default routes