import Treino from "./treinoModel.js"

const treino = {
    titulo: "Treino B",
    data: new Date("2024-09-16"),
    horaInicio: "08:00",
    horaTermino: "09:00",
    descricao: "Treino de força",
    aluno_id: 1
}

//await Treino.bulkCreate(treinos)

async function criarTreinos(titulo, data, horaInicio, horaTermino, descricao, qtdTreinos,aluno_id){
    data = new Date(data)
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
}

//criarTreinos("peito","2024,09,25","09:00","10:00","supino",4,1)

await Treino.findAll({where: Treino.aluno_id = 1})