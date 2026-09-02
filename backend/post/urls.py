from django.urls import path
from .views import Post_Get_Create, Post_Update_Delete, UserRegister
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
#Auth endpoints
    path('register/', UserRegister.as_view(), name= 'register'),
    path('login/', TokenObtainPairView.as_view(), name= 'login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
#Post endpoints
    path('', Post_Get_Create.as_view(), name='post-list-create'),
    path('<slug:slug>/', Post_Update_Delete.as_view(), name='post-update-delete'),

]
