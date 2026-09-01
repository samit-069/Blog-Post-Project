from .serializers import Post_Serializer
from .models import Post
from rest_framework import generics

# Create your views here.
class Post_Get_Create(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = Post_Serializer

    def perform_create(self, serializer):
        serializer.save(author = self.request.user)

class Post_Update_Delete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = Post_Serializer


