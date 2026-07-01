from ..config import settings
from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
import httpx #type: ignore

async def get_matters(client: AsyncOAuth2Client)->dict:
    response = await client.get(f"{settings.time_base_url}/matters")
    return response.json()