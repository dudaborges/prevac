# Prevac

- INSTRUÇÕES PARA LOGAR NO SISTEMA NO FINAL DA PÁGINA.

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


## Como Executar o Projeto com Docker

<p><strong>Build the images:</strong></p>

```
$ docker build -t backend . 
```

> Path: services/backend

```
$ docker build -t frontend . 
```

> Path: services/frontend

<p><strong>Spin up the container:</strong></p>

```
$ docker run -d -p 5000:5000 --name backend backend
```

```
$ docker run -d -p 3000:3000 --name frontend frontend
```

## Como Executar o Projeto com Docker-Compose

<p><strong>Build the image and spin up the container:</strong></p>

```
$ docker-compose up -d --build
```

## Running the Project Locally

<p><strong>Create your virtual environment:</strong></p>

```
$ python -m venv my_venv
```
<p><strong>Activate your virtual environment:</strong></p>
<p><i>Windows</i></p>

```
$ ./my_venv/Scripts/Activate
```

<p><i>Linux or macOS</i></p>

```
$ source my_venv/bin/activate
```

<p><strong>Install the dependencies</strong></p>

```
$ pip install -r services/requirements.txt
```
<p><strong>Run the project:</strong></p>

```
$ uvicorn src.main:app --reload --host 0.0.0.0 --port 5000
```
> Path: services/backend/

## Models and Migrations
<p><strong>To create a local database:</strong></p>
<p> first, delete the "migrations" folder and the "pyproject.toml" file </p>

```
$ docker-compose exec backend aerich init -t src.database.config.TORTOISE_ORM
```
```
$ docker-compose exec backend aerich init-db
```

<p><strong>If you make changes to the model, run this command to update the database:</strong></p>

```
$ docker-compose exec backend aerich migrate
```
```
$ docker-compose exec backend aerich upgrade
```

# Instruções para o Frontend
 Passos para Executar o Frontend:
 
 1. Navegue até a pasta onde está o frontend:
```
cd prevac/services/frontend
```
2. Instale as dependências:
```
npm install
```
3. Instale o Firebase:
```
npm i firebase
```
4. Inicie o servidor de desenvolvimento:
 ```
npm start
```
- Acesse http://localhost:3000 para visualizar no navegador.

# Credenciais de Login
- Usuário Administrador:
  
E-mail: teste@prevac.com <br>
Senha: stefani123

- Usuário Comum:

E-mail: mariaeduarda@prevac.com <br>
Senha: maria123
