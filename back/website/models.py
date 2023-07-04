from django.db import models

class Link(models.Model):
    name = models.CharField(max_length=100)
    url = models.CharField(max_length=100)

class Card(models.Model):
    top = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    bottom = models.CharField(max_length=100)

