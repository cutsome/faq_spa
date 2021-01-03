from typing import Match

from rest_framework import serializers

from .models import Article, Category, Faq


class ArticleSerializer(serializers.ModelSerializer):
	class Meta:
		model  = Article
		fields = ['id', 'title', 'category', 'body', 'creator', 'updater']

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = '__all__'

class FaqSerializer(serializers.ModelSerializer):

	created = serializers.DateTimeField(format="%Y/%m/%d %H:%M", read_only=True)
	class Meta:
		model = Faq
		exclude = ('updated',)
		extra_kwargs = {
			'id': {'required': False},
			'type': {'required': False},
			'question': {'required': False},
			'answer': {'required': False},
			'contrib': {'required': False},
		}
