from dotenv import find_dotenv, load_dotenv
load_dotenv(find_dotenv('.env'))

import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
  model="text-davinci-003", 
  prompt="say hello", 
  temperature=0, 
  max_tokens=7
)

print(response)