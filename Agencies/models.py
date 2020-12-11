from django.db import models
from django.core.files.storage import FileSystemStorage

fs = FileSystemStorage(location='/media/pics')
# Create your models here.
class clients(models.Model):
	img= models.ImageField(storage=fs)
