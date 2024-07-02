# Prevac

- Instruções para criar o banco de dados localmente
- Intruções para rodar o projeto
- Instruções para logar no sistema

## O que é o Prevac

O **Prevac** é um sistema de segurança industrial em tempo real, que utiliza uma rede sofisticada de sensores IoT para monitoramento contínuo de temperatura e pressão. O sistema fornece um painel intuitivo para monitoramento, alertas instantâneos em caso de anomalias, relatórios detalhados e desligamento automático em situações críticas, garantindo conformidade com normas regulamentadoras.

### Funcionalidades

- **Monitoramento Contínuo**: Acompanhe a segurança em tempo real através de um dashboard intuitivo.
- **Alertas Instantâneos**: Receba notificações imediatas ao detectar anomalias.
- **Relatórios de Risco**: Relatórios detalhados sobre a presença de pessoas em áreas de risco.
- **Conformidade Normativa**: Alinhamento com normas regulamentadoras.

## Tecnologias Principais

- **Python** v3.9.13
- **FastAPI** v0.97.0
- **React JS**
- **Node.js** v20.11.1
- **Docker** v20.11.1


## How to Run the Project

- To run the project, you need to have Docker Desktop installed on your machine.

<p><strong>Build the images and spin up the containers:</strong></p>

```
$ docker-compose up -d --build
```

<p><strong>Create a local database:</strong></p>

```
$ docker-compose exec backend aerich init -t src.database.config.TORTOISE_ORM
```
```
$ docker-compose exec backend aerich init-db
```

<p><strong>Remove the comments from the Dockerfile located at services/backend/Dockerfile and run the containers again</strong></p>

```
$ docker-compose up -d --build
```

<p><strong>Acesse http://localhost:3000 para visualizar no navegador o frontend.</strong></p>

<p><strong>Acesse http://localhost:5000/docs para visualizar no navegador a API.</strong></p>


## Models and Migrations

<p><strong>If you make changes to the model, run this command to update the database:</strong></p>

```
$ docker-compose exec backend aerich migrate
```
```
$ docker-compose exec backend aerich upgrade
```

# Credenciais de Login
- Usuário Administrador:
  
E-mail: teste@prevac.com <br>
Senha: stefani123

- Usuário Comum:

E-mail: mariaeduarda@prevac.com <br>
Senha: maria123
