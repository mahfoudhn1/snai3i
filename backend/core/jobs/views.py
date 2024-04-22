from rest_framework.response import Response
from rest_framework.views import APIView , status
from .models import Job
from .serializer import JobsSerializer

class JobsList(APIView):

    jobs = Job.objects.all()

    def get(self, request):

        serializer = JobsSerializer(self.jobs, many=True)
        return Response(serializer.data)
    

    def post(self, request):
        serializer = JobsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)