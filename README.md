# Prevac 

## Main Technologies
<ul>
	<li>Python v3.9.13</li>
	<li>Fastapi v0.97.0</li>
	<li>React JS</li>
	<li>Node v20.11.1</li>
</ul>

## How to execute the project with Docker container

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

## How to execute the project with docker-compose

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