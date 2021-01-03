from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from .views import ArticleViewSet, CategoryViewSet, FaqViewSet

router = routers.DefaultRouter()
router.register('articles'  , ArticleViewSet)
router.register('categories', CategoryViewSet)
router.register('faqs', FaqViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
