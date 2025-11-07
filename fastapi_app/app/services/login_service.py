from app.core.config import LoginBody
from fastapi.responses import JSONResponse

class UserLogin:
    def __init__(self):
        pass
    
    def check_login(self,request_body):
        response = {
            "status": "success",
            "message": "Logged in successfully",
            "data": {
                "role": request_body.role,
            }
        }
        return JSONResponse(content=response, status_code=200)