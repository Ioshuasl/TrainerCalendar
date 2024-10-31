##Sobre o projeto
Estou desenvolvendo uma agenda para personal trainers com o intuito de terem mais praticidade durante seu dia a dia, poder ter cada aluno, cada treino, data e horário na palma de sua mão

##Estrutura de pastas
/src             #código principal da aplicação
	/controllers   #funções de controle de rotas
	/models        #modelos de dados do banco de dados
	/routes        #Definição de rotas da API
	/config        #Configuração para sincronizar a API com o banco de dados
/docs            #Documentação do projeto
/tests           #Testes automatizados

##Tecnologias utilizadas
- JavaScript
- Node.js
- Express.js
- Sequelize
- PostgreSQL
- Docker

##Rodando localmente

Clonar o repositório:
git clone https://github.com/Ioshuasl/TrainerCalendar.git

##Instalar as dependencias
npm init
(se não tiver o arquivo package.json)

npm install express

npm install pg

npm install sequelize pg

docker run --name appteste -e POSTGRES_PASSWORD=1234 -d -p 5432:5432 postgres

Inicializando o servidor
node index.js

##Funcionalidades
- Criar aluno: cadastra um novo aluno dentro do sistema
- Listar alunos: mostrar todos os alunos cadastrados dentro do sistema
- Atualizar aluno: atualiza o aluno que desejar
-Deletar aluno: deleta o aluno dentro do sistema
- Criar treinos: cadastra treinos para os alunos dentro do sistema, nessa funcionalidade também tem a função de criar treinos posteriores para as próximas semanas
- Listar treinos: mostrar todos os treinos de todos os alunos cadastrados no sistema
- Atualizar treino: atualiza o treino que desejar
- Deletar treino: deleta o treino dentro do sistema e se quiser também deleta os treinos posteriores a esses
