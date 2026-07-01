from ..config import settings
from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
from ..models.matters import Matter
from typing import List

async def get_matters(client: AsyncOAuth2Client)->List[Matter]:
    response = await client.get(f"{settings.time_base_url}/matters")
    return [Matter(**r) for r in response.json()]