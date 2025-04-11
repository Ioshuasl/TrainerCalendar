# 🏋️‍♂️ Trainer Calendar

**Trainer Calendar** é uma agenda digital desenvolvida para personal trainers que buscam mais praticidade e organização no seu dia a dia. Com ela, é possível gerenciar alunos, treinos, datas e horários de forma simples e eficiente — tudo na palma da mão!

---

## ⚙️ Funcionalidades

- 📌 **Criar Aluno**: Cadastro de novos alunos no sistema  
- 📋 **Listar Alunos**: Exibe todos os alunos cadastrados  
- ✏️ **Atualizar Aluno**: Atualiza os dados de um aluno específico  
- ❌ **Deletar Aluno**: Remove um aluno do sistema  

- 🏋️‍♂️ **Criar Treino**: Cadastro de treinos individuais e sequenciais automatizados para semanas futuras  
- 📅 **Listar Treinos**: Mostra todos os treinos cadastrados de todos os alunos, podendo ser de acordo com data, ou de acordo com o aluno também
- 🔄 **Atualizar Treino**: Edita os detalhes de um treino específico  
- 🗑️ **Deletar Treino**: Exclui um treino e, se desejar, todos os treinos posteriores  

---

## 📁 Estrutura de Pastas

```bash
/src             #código principal da aplicação
	/controllers   #funções de controle de rotas
	/models        #modelos de dados do banco de dados
	/routes        #Definição de rotas da API
	/config        #Configuração para sincronizar a API com o banco de dados
/docs            #Documentação do projeto
/tests           #Testes automatizados
```


---

## 🛠️ Tecnologias Utilizadas

- **JavaScript**
- **Node.js**
- **Express.js**
- **Sequelize**
- **PostgreSQL**
- **Docker**

---

## 🚀 Rodando Localmente

### 1. Clone o repositório:

```bash
git clone https://github.com/Ioshuasl/TrainerCalendar.git
```

### 2. Instalar as dependencias

```bash
npm install
```

### 3. Instalar o docker e rodar o seguinte
```bash
docker run --name appteste -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres
```

### 4. Inicializando o servidor

```bash
node index.js
```
