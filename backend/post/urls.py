from django.urls import path
from .views import Post_Get_Create, Post_Update_Delete
urlpatterns = [
    path('', Post_Get_Create.as_view(), name='post-list-create'),
    path('<slug:slug>/', Post_Update_Delete.as_view(), name='post-update-delete'),
]
