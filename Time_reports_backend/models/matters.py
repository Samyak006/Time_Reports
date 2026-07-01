from pydantic import BaseModel

class Matter(BaseModel):
    matterId: str
    clientId: str
    name: str
    