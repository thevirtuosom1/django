from django.urls import path
from . import views


urlpatterns = [
	path('', views.Prices , name='Prices'),
	path('details', views.details , name='details'),
]