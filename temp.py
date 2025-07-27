import requests
import json

url = 'https://dummyjson.com/auth/login'
payload = {
    "username": "emilys",
    "password": "emilyspass",
    "expiresInMins": 30
}
headers = {
    "Content-Type": "application/json"
}

try:
    response = requests.post(url, json=payload, headers=headers)
    response.raise_for_status()
    data = response.json()

    # ✅ Save data to local file
    with open("login_response.json", "w") as file:
        json.dump(data, file, indent=4)

    print("Response saved to 'login_response.json'")
except requests.exceptions.RequestException as e:
    print("Error:", e)