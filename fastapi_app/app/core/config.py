from pydantic import BaseModel

class LoginBody(BaseModel):
    role: str
    email: str
    password: str
 