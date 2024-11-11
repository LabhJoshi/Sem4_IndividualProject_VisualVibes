from django.urls import path
from .views import register_view,get_email,get_username,verify_password

urlpatterns = [
    path('register/', register_view, name='register'),
    path('get-email/',get_email,name='get email'),
    path('get-username/',get_username,name='get username'),
    path('verify_password/',verify_password,name='verify password'),
]
