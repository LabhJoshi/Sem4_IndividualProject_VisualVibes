from django.db import models

class FormData(models.Model):
    fullname=models.CharField(max_length=500)
    number=models.IntegerField()
    email=models.CharField(max_length=500)
    address=models.TextField()
    date=models.DateField()
    days=models.IntegerField()
    occasion=models.CharField(max_length=200,null=True,blank=True)