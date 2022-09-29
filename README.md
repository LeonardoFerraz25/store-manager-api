
# Store Manager API

API RESTful desenvolvida utilizando a arquitetura MSC (model-service-controller).

A API desenvolvida é um sistema de gerenciamento de vendas no formato dropshipping em que é possível criar, visualizar, deletar e atualizar produtos e vendas. utilizando o banco de dados MySQL para a gestão de dados. Além disso, utilizando docker-compose para a orquestração de containers do node e mysql.


## Instalação

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório
```sh
git clone git@github.com:LeonardoFerraz25/store-manager-api.git
```

### 2 - Rode os containers executando o comando abaixo na pasta raiz da aplicação
```sh
docker-compose up -d
```

### 3 - Execute os scripts SQL para criar o banco de dados

Conecte ao servidor MySQL rodando na porta 3306 usando um cliente MySQL de sua preferência. 

Utilize as suas credenciais Altere o `.env-exaple` para `.env` com suas variaveis de configuração do banco de dados.


Então, no cliente, execute os scripts que estão nos arquivos `migration.sql` e `seed.sql`.

### 4 - Rode o comando para abrir o terminal do container store_manager
```sh
docker exec -it store_manager bash
```

### 5 - No terminal do container, installe as dependências e execute a aplicação

Instalando dependências:
```sh
npm install
```

Executando aplicação:
```sh
npm start
```
