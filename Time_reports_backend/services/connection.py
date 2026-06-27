from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
from ..config import settings


class Connection:
    def __init__(self):    
        self.token_url = settings.access_token_url
        self.client_id = settings.client_id
        self.client_secret = settings.client_secret

    async def authorize(self):
        # Initialize Authlib's custom async client wrapper
        async with AsyncOAuth2Client(self.client_id, self.client_secret) as client:
            # Fetch and manage the token internally
            await client.fetch_token(self.token_url, grant_type="client_credentials")
            return client
        