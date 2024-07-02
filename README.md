# Prevac

The **Prevac** is a real-time industrial safety system that uses a sophisticated network of IoT sensors for continuous temperature and pressure monitoring. The system provides an intuitive dashboard for monitoring, instant alerts in case of anomalies, detailed reports, and automatic shutdown in critical situations, ensuring compliance with regulatory standards.

### Features

- **Continuous Monitoring:** Track safety in real-time through an intuitive dashboard.
- **Instant Alerts:** Receive immediate notifications upon detecting anomalies.
- **Risk Reports:** Detailed reports on the presence of people in hazardous areas.
- **Regulatory Compliance:** Alignment with regulatory standards.

## Main Technologies

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

# Login credentials
- Administrator User:
  
Email: teste@prevac.com <br>
Password: stefani123

- Regular user:

Email: mariaeduarda@prevac.com <br>
Password: maria123
