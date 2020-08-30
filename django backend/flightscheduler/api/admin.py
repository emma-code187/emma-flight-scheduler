from django.contrib import admin
from .models import Flight


class FlightAdmin(admin.ModelAdmin):
	list_display = ('airliner', 'airport', 'depart_date', 'destination')
	list_filter = ['airport']
	search_fields = ['airliner', 'airport']
		
admin.site.register(Flight, FlightAdmin)
