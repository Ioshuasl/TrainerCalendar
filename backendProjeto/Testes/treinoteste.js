import { evento } from "./eventoteste.js"

export class Treino{
    constructor(titulo,data,horaInicio,horaTermino, descricao, qtdTreinos){
        this.titulo = titulo
        this.data = data
        this.horaInicio = horaInicio
        this.horaTermino = horaTermino
        this.descricao = descricao
    }




    chamarEvento(titulo, data, horaInicio, horaTermino, descricao, qtdTreinos){
        this.treinos = evento(titulo, data, horaInicio, horaTermino, descricao, qtdTreinos)
        return this.treinos
    }

    getTreinos(){
        this.treinos.forEach((treino, index) => {
            console.log(`Treino ${index + 1}:`);
            console.log(`Título: ${treino.titulo}`);
            console.log(`Data: ${treino.data}`);
            console.log(`Hora Início: ${treino.horaInicio}`);
            console.log(`Hora Término: ${treino.horaTermino}`);
            console.log(`Quantidade de Treinos: ${treino.qtdTreinos}`);
            console.log(`Descrição: ${treino.descricao}`);
            console.log('----------------------------');
        })
    }
}

//let treino1 = new Treino('peito','2024,09,5','09:00','10:00',10,'supino...')
//treino1.chamarEvento('peito','2024,09,5','09:00','10:00',10,'supino...')
//console.table(treino1.treinos)
//console.log(treino1.treinos.length)