from django.contrib import admin
from .models import Card, Link

models_list = [Card, Link]
admin.site.register(models_list)