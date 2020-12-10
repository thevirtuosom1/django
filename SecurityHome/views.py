from django.shortcuts import render
from .models import clients	
# Create your views here.
def index(request):
	
	cl=clients.objects.all()
	


	return render(request, 'index.html',{'client':cl})