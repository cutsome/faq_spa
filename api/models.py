from datetime import datetime

from django.db import models


class Category(models.Model):
	name = models.CharField(max_length=50)

	def __str__(self) -> str:
		return self.name

class Article(models.Model):
	title    = models.CharField(max_length=50)
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	image    = models.ImageField(blank=True)
	body     = models.TextField()
	creator  = models.CharField(max_length=100)
	updater  = models.CharField(max_length=100, blank=True)
	created  = models.DateTimeField(default=datetime.now())
	updated  = models.DateTimeField(auto_now=True)

	def __str__(self) -> str:
		return self.title

	class Meta:
		ordering = ['title']

class Faq(models.Model):
	type = models.CharField(max_length=30)
	question = models.TextField()
	answer = models.TextField()
	contrib = models.CharField(max_length=10)
	created = models.DateTimeField(default=datetime.now())
	updated = models.DateTimeField(auto_now=True)

	def __str__(self) -> str:
		return self.question
