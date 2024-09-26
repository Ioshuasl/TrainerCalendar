import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";
import Aluno from "./alunoModel.js";

// Define o modelo Aluno
const Treino = sequelize.define('Treino', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horaInicio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horaTermino: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  aluno_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Aluno,
        key: 'id',
    },
    allowNull: false
  }
}, {
  tableName: 'treinos',  // Mapeia para a tabela 'alunos' no banco
  timestamps: true,
});

Treino.belongsTo(Aluno, {foreignKey: 'aluno_id'})

export default Treino;


