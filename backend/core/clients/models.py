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


# technology mastered model

class Technology(TimeStampedModel, 
        	ActivatorModel,
            models.Model):
    id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
        )
    name = models.CharField(max_length=255, null=True) 
    degree = models.BooleanField(default = False)

    class Meta:
        verbose_name_plural = "Technologies"
    
    def __str__(self) -> str:
        return self.name

# profision model

class Profision(TimeStampedModel, 
        	ActivatorModel,
            models.Model):
    
    id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
        )
        
    class Meta:
        verbose_name_plural = "Profisions"
    name = models.CharField(max_length=500)
    years_of_experience = models.IntegerField()
    technologies = models.ForeignKey("clients.Technology", verbose_name=("Technologies"), on_delete=models.CASCADE, blank=True, null=True)



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
    profision = models.ForeignKey("clients.Profision", verbose_name=("Profisions"), on_delete=models.CASCADE)
    avalibility = models.BooleanField(default=True)
    phone_number = models.IntegerField(null=True)
    
    
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