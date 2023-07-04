from rest_framework import viewsets
from website.serializers import LinkSerializer, CardSerializer
from .models import Card, Link

class LinkViewSet(viewsets.ModelViewSet):
    serializer_class = LinkSerializer
    queryset = Link.objects.all()


class CardViewSet(viewsets.ModelViewSet):
    serializer_class = CardSerializer
    queryset = Card.objects.all()