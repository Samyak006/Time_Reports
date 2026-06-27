from .connection import Connection
from ..config import settings
async def getTimekeepers():
    conn = await Connection.authorize()
    response = await conn.get(settings.time_base_url+"timekeepers")
    return response.json()