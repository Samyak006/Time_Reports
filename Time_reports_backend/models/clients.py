from pydantic import BaseModel

class Client(BaseModel):
    clientId: str
    name: str
