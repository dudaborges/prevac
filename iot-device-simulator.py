import requests
import random
import time

def generate_data():
    url = 'http://localhost:5000/create'

    pressure_value = random.randint(999, 1022)  
    temperature_value = random.randint(29, 52)

    new_data = {
        "pressure": pressure_value,
        "temperature": temperature_value,
    }

    response = requests.post(url, json=new_data)

    if response.status_code == 200:
        print(f"Requisição enviada com sucesso! Valor de pressão: {pressure_value}. Valor de temperatura: {temperature_value}")
    else:
        print(f"Falha na requisição: {response.status_code} - {response.text}")


for i in range(2):
    time.sleep(1)
    generate_data()
    
