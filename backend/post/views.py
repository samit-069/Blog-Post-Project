from .serializers import Post_Serializer, Register_Serializer, User_Serializer
from .models import Post
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User

# Create your views here.
class Post_Get_Create(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = Post_Serializer

    def perform_create(self, serializer):
        serializer.save(author = self.request.user)

class Post_Update_Delete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = Post_Serializer

class UserRegister(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Register_Serializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data= request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        refresh = RefreshToken.for_user(user)

        return Response({
            "user": User_Serializer(user).data,
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        },status=status.HTTP_201_CREATED)