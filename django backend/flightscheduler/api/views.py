from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from flightscheduler.api.serializers import UserSerializer, GroupSerializer, FlightSerializer, FlightMiniSerializer
from flightscheduler.api.models import Flight
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    
class FlightViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
   
    def list(self, request, *args, **kwargs):
    	flights = Flight.objects.all()
    	serializers = FlightMiniSerializer(flights, many=True)
    	return Response(serializers.data)

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

