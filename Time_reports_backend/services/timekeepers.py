from ..config import settings
from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
from ..models.timekeepers import Timekeeper
from typing import List

async def get_timekeepers(client: AsyncOAuth2Client)->List[Timekeeper]:
    response = await client.get(f"{settings.time_base_url}/timekeeper")
    return [Timekeeper(**r) for r in response.json()]