import AppController from "../Controller/appController.js";
import express from "express"

const router = express.Router()

router.get('/getAlunos', async (req,res) => {
    
    try {
        const alunos = await AppController.getAlunos()
        return res.json(alunos)
    } catch (error) {
        return res.json(error)
    }
})

router.post('/addAluno', async (req,res) => {
    const {nome, dataNasc, email} = req.body

    try {
        const aluno = await AppController.createAluno({nome,dataNasc,email})       
        return res.json(aluno)
    } catch (error) {
        return res.json(error)
    }
})

router.put('/updateAluno', (req,res) => {
    const {aluno_id, nome, dataNasc, email} = req.body

    const aluno = AppController.updateAluno(aluno_id,(nome,dataNasc,email))
    return res.json(aluno)
})

router.delete('/deleteAluno/:id', async (req,res) => {
    const {id} = req.params

    try {
        const alunoDeleted = await AppController.deleteAluno(id)
        return res.json(alunoDeleted)        
    } catch (error) {
        return res.json(error)
    }

})

router.post('/addTreino', async (req,res) => {
    const { titulo,data,horaInicio,horaTermino,descricao,qtdTreinos,aluno_id } = req.body

    console.log(req.body)

    try {
        const treino = await AppController.createTreino(titulo,data,horaInicio,horaTermino,descricao,qtdTreinos,aluno_id)
        return res.json(treino)
    } catch (error) {
        return res.json(error)
    }
})

router.get('/treinosAluno/:id', async (req,res) =>{
    const {id} = req.params

    try {
        const treinos = await AppController.getTreinosAluno(id)
        return res.json(treinos)
    } catch (error) {
        return res.json(error)
    }
})

router.get('/treinoId/:id', async (req,res) =>{
    const {id} = req.params

    try {
        const treino = await AppController.getTreinoId(id)
        return res.json(treino)
    } catch (error) {
        return res.json(error)
    }
})

router.delete('/deleteTreino/:id', async (req,res) =>{
    const {id} = req.params

    try {
        const treinoDeleted = await AppController.deleteTreino(id)
        return res.json(treinoDeleted)        
    } catch (error) {
        return res.json(error)
    }
})
export default router