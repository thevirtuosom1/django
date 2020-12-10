from django.shortcuts import render
from .models import prices	
# Create your views here.
def Prices(request):
	
	PR=prices.objects.all()


	return render(request, 'prices.html', {'prices':PR})


def details(request):
	
	PR=prices.objects.all()


	return render(request, 'form_test.html', {'prices':PR})