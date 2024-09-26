import { where } from "sequelize";
import Treino from "./Models/treinoModel.js";

async function verificarTreino(data,horaInicio,horaTermino) {

    data = new Date(data)

    const novoTreino = {
        data: data,
        horaInicio: horaInicio,
        horaTermino: horaTermino
    }
    const verificarDia = await Treino.findOne({where: {data:novoTreino.data}})

    if (verificarDia) {
        return {message: "encontrado",verificarDia}
    } else {
        return {message: "não encontrado"}
    }
}
verificarTreino("2024,09,16","08:00","09:00")