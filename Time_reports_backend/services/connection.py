from authlib.integrations.httpx_client import AsyncOAuth2Client #type: ignore
from ..config import Settings, settings

async def get_oauth2_token():
    client = AsyncOAuth2Client(
        client_id=settings.client_id
        ,client_secret=settings.client_secret
        ,token_endpoint=settings.access_token_url
    )
    await client.fetch_token(grant_type="client_credentials")
    try:
        yield client
    finally:
        await client.aclose()


# class Connection:
#     def __init__(self, settings:Settings):    
#         self.token_url = settings.access_token_url
#         self.client_id = settings.client_id
#         self.client_secret = settings.client_secret

#     async def init_client(self):
#         if not self.client:
#             async with AsyncOAuth2Client(
#                 client_id=settings.client_id
#                 ,client_secret=settings.client_secret
#                 ,token_endpoint=settings.access_token_url
#         )    as client:
#                 token = await client.fetch_token(grant_type="client_credentials")
#                 yield token
