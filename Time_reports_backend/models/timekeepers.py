from pydantic import BaseModel

class Timekeeper(BaseModel):
    timekeeperId: str
    name: str
    endDate: str | None = None