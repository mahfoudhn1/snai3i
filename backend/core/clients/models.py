from django.db import models
# from  django.contrib.auth.models import AbstractSet
from django.contrib.auth.models import User

import uuid
from django.db.models import Avg


# Client main model

CLIENT_TYPE = {
    ("FR", "FREELANCE"),
    ("CO", "COMPANY"),

}

class Client(models.Model):
    
    id = models.UUIDField(
            primary_key=True,
            default=uuid.uuid4,
            editable=False
        )
    class Meta:
        verbose_name_plural = "Clients"
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    type = models.CharField(
        max_length = 20,
        choices = CLIENT_TYPE,
        default = 'FR'
        )
    
    
    def average_rating(self) -> float:
        return Rating.objects.filter(client=self).aggregate(Avg("rating"))["rating__avg"] or 0


    def __str__(self):
        return f'{self.id}'

# Rating model

class Rating(models.Model):

    rating = models.IntegerField(default=0)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.rating}"