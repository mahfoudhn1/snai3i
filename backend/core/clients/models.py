from django.db import models
# from  django.contrib.auth.models import AbstractSet
from django.contrib.auth.models import User
from django_extensions.db.models import (
	TimeStampedModel, 
	ActivatorModel,
	TitleDescriptionModel
)
import uuid
from django.db.models import Avg


# Client main model

class Client(TimeStampedModel, 
        	ActivatorModel,
        	TitleDescriptionModel,
            models.Model):
    
    id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
        )
    class Meta:
        verbose_name_plural = "Clients"
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(verbose_name="Email")
 
    
    
    def average_rating(self) -> float:
        return Rating.objects.filter(client=self).aggregate(Avg("rating"))["rating__avg"] or 0


    def __str__(self):
        return f'{self.title}'

# Rating model

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(default=0)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.rating}"