from json import JSONDecodeError
from django.http import JsonResponse

from clients.models import Profision, Technology
from .serializer import ProfisionSerilizer, RegisterSerializer, ClientSerlizer,MyTokenObtainPairSerializer, TechnologySerializer
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from rest_framework import views, status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response


class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(views.APIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

    def post(self, request):  
        try:
            data = request.data
            serializer = RegisterSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)


class TechnologyView(views.APIView):
    permission_classes = (AllowAny,)
    serializer_class = TechnologySerializer
    
    def post(self, request):
        try:
            data = request.data
            serializer = TechnologySerializer(data = data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)
    def get(self, request):
        queryset = Technology.objects.all()
        serializer = TechnologySerializer(queryset, many=True)
        
        return Response(data = serializer.data)
        


class ProfissionView(views.APIView):
    
    permission_classes = (AllowAny,)
    serializer_class = ProfisionSerilizer
    


    def post(self, request):
        try:
            data =  JSONParser().parse(request)
            serializer = ProfisionSerilizer(data = data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)
    def get(self, request):
        queryset = Profision.objects.all()

        serializer = ProfisionSerilizer(queryset, many=True)
        return Response( data = serializer.data)
       

class ClientAPIView(views.APIView):

    serializer_class = ClientSerlizer
    def get_serializer_context(self):
        return {    
            'request': self.request,
            'format': self.format_kwarg,
            'view': self
        }

    def get_serializer(self, *args, **kwargs):
        kwargs['context'] = self.get_serializer_context()
        return self.serializer_class(*args, **kwargs)

    def post(self, request):
        try:
            data = JSONParser().parse(request)
            serializer = ClientSerlizer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except JSONDecodeError:
            return JsonResponse({"result": "error","message": "Json decoding error"}, status= 400)