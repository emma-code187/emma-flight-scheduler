from django.db import models
from django.utils import timezone

class Flight(models.Model):
	airliner = models.CharField(max_length=32)
	flight_no = models.CharField(max_length=32, default='#')
	trip_type = models.CharField(max_length=32, default='#')
	airport = models.CharField(max_length=32)
	location = models.CharField(max_length=32)
	description = models.TextField(max_length=320)
	depart_date = models.DateTimeField(max_length=32, default=timezone.now)
	destination = models.CharField(max_length=32)
	seat_capacity = models.IntegerField(default=200)

	