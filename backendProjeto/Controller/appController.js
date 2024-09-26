import { where } from "sequelize";
import Aluno from "../Models/alunoModel.js"
import Treino from "../Models/treinoModel.js";


class AppController {

    async createAluno(nome,dataNasc,email){
        const aluno = await Aluno.create(nome,dataNasc,email)
        return { message: "Aluno adicionado com sucesso", aluno}
    }

    async getAlunos(){
        const alunos = await Aluno.findAll()
        return alunos
    }

    async updateAluno(id,updatedData){
        await Aluno.update(updatedData, {where: { id }})
        return {message: "Aluno atualizado com sucesso"}
    }

    async deleteAluno(id){
        await Aluno.destroy({ where: {id}})
        return { message: "Aluno excluído com sucesso"}
    }

    async createTreino(titulo, data, horaInicio, horaTermino, descricao, qtdTreinos,aluno_id){
        
        data = new Date(data)
        titulo.toString().toLowerCase()

        const verificarTreino = await Treino.findOne({where: {
            data:data,
            horaInicio: horaInicio,
            horaTermino: horaTermino
        }})

        if (verificarTreino) {
            return {erro: "já existe treino para essa data",verificarTreino}
        }

        const intervaloDeDias = 7;
        let contagemDeTreinos = 0
    
        let treinos = []
    
        while (contagemDeTreinos < qtdTreinos) {
            let treino = {
                titulo: titulo,
                data: new Date(data),
                horaInicio: horaInicio,
                horaTermino: horaTermino,
                descricao: descricao,
                aluno_id: aluno_id
            }
            treinos.push(treino)
            data.setDate(data.getDate() + intervaloDeDias)
            contagemDeTreinos++
        }
    
        await Treino.bulkCreate(treinos)
        return {message: `${qtdTreinos} treinos criados com sucesso!`, treinos}
    }

    async getTreinoId(id){
        const treino = await Treino.findByPk(id)
        return treino
    }

    async getTreinosAluno(aluno_id){
        const treinos = await Treino.findAll({
            where: {aluno_id}
        })
        return treinos
    }

    async getTreinosData(data){
        const treinos = Treino.findAll({
            where: {data},
            include: [Aluno]
        })

        return treinos
    }

    async getTreinosHoje(){
        let hoje = new Date()

        const treinos = Treino.findAll({
            where: {data: hoje},
            include: [Aluno]
        })

        return treinos
    }

    async updateTreino(id,treinoData){
        await Treino.update(treinoData, {where: {id}})
        return {message: "Treino atualizado com sucesso"}
    }

    async deleteTreino(id){
        await Treino.destroy({where: {id}})
        return {message: "Treino removido com sucesso"}
    }

    async deleteTreinoAlunoIdByTitulo(titulo,aluno_id){

        await Treino.destroy({where:{
            aluno_id:aluno_id,
            titulo:titulo
        }})
        return {message: `Treinos de ${titulo} removidos com sucesso`}
    }
}


export default new AppController()