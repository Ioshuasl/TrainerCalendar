import { Treino } from "./treinoteste.js";


export function evento(titulo, data, horaInicio, horaTermino, descricao, qtdTreinos) {

    if (qtdTreinos === null || qtdTreinos === 1) {
        qtdTreinos = 1
    }

    let dataInicio = new Date(data)

    let treinos = []

    const intervaloDeDias = 7;

    let contagemDeTreinos = 0

    while (contagemDeTreinos < qtdTreinos) {
        
        let treino = new Treino(titulo, new Date(dataInicio), horaInicio, horaTermino, descricao)
        treinos.push(treino)
        dataInicio.setDate(dataInicio.getDate() + intervaloDeDias)
        contagemDeTreinos++;

    }
    return treinos
}