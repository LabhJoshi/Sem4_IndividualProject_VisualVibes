from rest_framework.serializers import ModelSerializer
from .models import FormData

class FormDataSerializer(ModelSerializer):
    class Meta:
        model=FormData
        fields=['fullname','number','email','address','date','days','occasion']