from platform import release
from django.db import models

class Publisher(models.Model):
    name = models.CharField(max_length=40, blank=True)
    date_founded = models.DateField(blank=True)

class Artist(models.Model):
    first_name = models.CharField(max_length=35)
    last_name = models.CharField(max_length=40, blank=True)
    birthdate = models.DateField(blank=True)

class Album(models.Model):
    title = models.CharField(max_length=100)
    matrix = models.CharField(max_length=20, blank=True)
    release_date = models.DateField(blank=True)
    country_of_pressing = models.CharField(max_length=40, blank=True)
    submission_date = models.DateTimeField()
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)

class Song(models.Model):
    title = models.CharField(max_length=15)
    length = models.CharField(max_length=15, blank=True) #maybe later I'll try duration field instead?
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    






