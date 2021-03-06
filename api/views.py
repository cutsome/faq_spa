from django.shortcuts import render
from rest_framework import viewsets

from .models import Article, Category, Faq
from .serializers import (ArticleSerializer, CategorySerializer, Faq,
                          FaqSerializer)


class ArticleViewSet(viewsets.ModelViewSet):
	queryset         = Article.objects.all()
	serializer_class = ArticleSerializer

class CategoryViewSet(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer

class FaqViewSet(viewsets.ModelViewSet):
	queryset = Faq.objects.all()
	serializer_class = FaqSerializer
