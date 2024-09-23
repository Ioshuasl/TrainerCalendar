import { Aluno } from "./alunoteste.js";

export class GerenciadorAlunos{
    constructor(){
        this.alunos = []
    }

    adicionarAluno(nome, dataNasc, email){
        const aluno = new Aluno(nome,dataNasc, email)
        this.alunos.push(aluno)
        console.log("aluno adicionado")
        return aluno
    }

    mostrarTreinosAluno(index){

        let listaTreinos = []

        this.alunos[index].treinos.forEach((treino,index) => {
            let objetoTreino = {
                indice: index,
                titulo: treino.titulo,
                data: treino.data,
                Inicio: treino.horaInicio,
                Termino: treino.horaTermino,
                descricao: treino.descricao
            }

            listaTreinos.push(objetoTreino)
        })
        return listaTreinos
    }

    getAlunos(){

        let listaAlunos = []
        this.alunos.forEach((aluno, index) => {

                let oAluno = {
                    indice: index,
                    nome: aluno.nome,
                    dataDeNascimento: aluno.dataNasc,
                    email: aluno.email
                }

                listaAlunos.push(oAluno)
        })
        return listaAlunos

    }

    encontrarAluno(nome){
        return this.alunos.findIndex(aluno => aluno.nome === nome)
    }

    getCompromissoHoje() {
        let data = new Date()
        let compromissos = [];

        this.alunos.forEach(aluno => {
            const temTreinoNoDia = aluno.treinos.findIndex(treino => treino.data.toLocaleDateString() === data.toLocaleDateString());
            let objetoAluno = Object()

            if (temTreinoNoDia >= 0) {
                objetoAluno = {
                    nome: aluno.nome,
                    titulo: aluno.treinos[temTreinoNoDia].titulo,
                    data: aluno.treinos[temTreinoNoDia].data.toLocaleDateString(),
                    horario: `${aluno.treinos[temTreinoNoDia].horaInicio} - ${aluno.treinos[temTreinoNoDia].horaTermino}`,
                    descricao: aluno.treinos[temTreinoNoDia].descricao
                }
                compromissos.push(objetoAluno)
            }

        });

        return compromissos

    }

    getCompromissoDia(dataQualquer) {
        let dataEspecifica = new Date(dataQualquer)
        let compromissos = [];

        this.alunos.forEach(aluno => {
            const temTreinoNoDia = aluno.treinos.findIndex(treino => treino.data.toLocaleDateString() === dataEspecifica.toLocaleDateString());
            let objetoAluno = Object()

            if (temTreinoNoDia >= 0) {
                objetoAluno = {
                    nome: aluno.nome,
                    titulo: aluno.treinos[temTreinoNoDia].titulo,
                    data: aluno.treinos[temTreinoNoDia].data.toLocaleDateString(),
                    horario: `${aluno.treinos[temTreinoNoDia].horaInicio} - ${aluno.treinos[temTreinoNoDia].horaTermino}`,
                    descricao: aluno.treinos[temTreinoNoDia].descricao
                }
                compromissos.push(objetoAluno)
            }

        });

        return compromissos

    }

    removerAluno(index){
        return this.alunos.splice(index,1)
    }

    removerTreinosPorTitulo(indexAluno, titulo){        
        return this.alunos[indexAluno].removerListaTreino(titulo)
    }
}

export default new GerenciadorAlunos()