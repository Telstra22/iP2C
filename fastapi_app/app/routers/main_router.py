from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from app.core.config import LoginBody
from app.services.login_service import UserLogin

router = APIRouter(prefix="/api")

@router.get("/")
def get_users():
    return {"users":"all users"}

@router.get("/{user_id}")
def get_user(user_id: int):
    return {"users":"particular user"}

@router.post("/login")
def create_item(payload: LoginBody):
    login_obj = UserLogin()
    return login_obj.check_login(payload)
