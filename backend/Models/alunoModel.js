import { DataTypes } from "sequelize";
import sequelize from "../Config/database.js";

// Define o modelo Aluno
const Aluno = sequelize.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dataNasc: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  tableName: 'alunos',  // Mapeia para a tabela 'alunos' no banco
  timestamps: true,     // Adiciona colunas de createdAt e updatedAt
});

export default Aluno;