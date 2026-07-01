from fastapi import FastAPI, Depends 
from .services.connection import get_oauth2_token
from .services.timekeepers import get_timekeepers
from .services.clients import get_clients
from .services.matters import get_matters
from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
from typing import Annotated
app = FastAPI()

@app.get("/")
async def root():
	return {"message":"Hello World"}

@app.get("/timekeepers")
async def timekeepers(client: Annotated[AsyncOAuth2Client, Depends(get_oauth2_token)]):
	return await get_timekeepers(client) 

@app.get("/clients")
async def matters(client: Annotated[AsyncOAuth2Client, Depends(get_oauth2_token)]):
	return await get_matters(client) 

@app.get("/matters")
async def clients(client: Annotated[AsyncOAuth2Client, Depends(get_oauth2_token)]):
	return await get_clients(client) 
