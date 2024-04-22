from rest_framework import serializers
from jobs.models import Job
# Create your views here.


class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = 'all'