from django.db import models

# Create your models here.
class clients(models.Model):
	img= models.ImageField(upload_to='pics')
