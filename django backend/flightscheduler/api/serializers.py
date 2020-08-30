from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Flight
from rest_framework.response import Response

class FlightSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Flight
		fields = ['id', 'airliner', 'airport', 'flight_no', 'trip_type', 'location', 'description', 'depart_date', 'destination', 'seat_capacity',]
		
class FlightMiniSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = Flight
		fields = ['id', 'airliner', 'flight_no', 'trip_type',]
		
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

		
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']