from .models import Post, User
from rest_framework import serializers

class Post_Serializer (serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title','slug','author','body','created_at','updated_at']
        read_only_fields = ['id', 'slug', 'created_at']

class User_Serializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class Register_Serializer (serializers.ModelSerializer):

    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model= User
        fields = ['id','username', 'password', 'email']

        def create (self, validated_data):
            user = User.objects.create_user(
                username= validated_data['username'],
                email= validated_data('email', ''),
                password= validated_data['password']
            )
            return User