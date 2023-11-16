import requests
import json
from dotenv import load_dotenv
import os


load_dotenv()

token = os.getenv("GITHUB_TOKEN")
username = "brianrabern"
url = f"https://api.github.com/users/{username}/repos"

headers = {"Authorization": f"token {token}"}
response = requests.get(url, headers=headers)

if response.status_code == 200:
    repos = response.json()

    with open("github_repos.json", "w") as json_file:
        json.dump(repos, json_file, indent=2)

    print("GitHub repositories data written to github_repos.json")
else:
    print("Failed to retrieve data.")
    print(response.text)
