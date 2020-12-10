from django.shortcuts import render
from .models import clients	
# Create your views here.

	
# Create your views here.
def agencies(request):
	cl=clients.objects.all()
	

	

	return render(request, 'agencies.html',{'client':cl})

