from ..config import settings
from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
from ..models.clients import Client
from typing import List

async def get_clients(client: AsyncOAuth2Client)->List[Client]:
    response = await client.get(f"{settings.time_base_url}/clients")
    return [Client(**r) for r in response.json()]