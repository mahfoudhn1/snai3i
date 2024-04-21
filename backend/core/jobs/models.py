from django.db import models
import uuid
from django.utils import timezone
from django.contrib.auth.models import User
from clients.models import Client

JOB_CHOICES = {
    ("PT", "PART TIME"),
    ("FL", "FULL TIME"),
}  


default_user = User.objects.get(pk=1)
class Jobs(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable= False
    )
    
    client = models.ForeignKey(User, on_delete=models.CASCADE , default= default_user)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=500)
    company = models.CharField(max_length=200)
    sallery = models.IntegerField()
    type = models.CharField(
        max_length = 3,
        choices= JOB_CHOICES,
        default= 'FL'
    )
    post_date = models.DateTimeField(
        auto_now_add=True
    )