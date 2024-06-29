from fastapi import FastAPI
from src.database.register import register_tortoise 
from src.database.config import TORTOISE_ORM  
from tortoise import Tortoise
from src.routes import data_iot
from fastapi.middleware.cors import CORSMiddleware

Tortoise.init_models(["src.database.models"], "models")  

app = FastAPI()

app.add_middleware(
 CORSMiddleware,
 allow_methods=["*"],
 allow_headers=["*"],
 allow_credentials=True,
 allow_origins=["http://localhost:3000"]
)

app.include_router(data_iot.router)

register_tortoise(app, config=TORTOISE_ORM, generate_schemas=False)

@app.get("/")
def home():
    return "Hello, World!"