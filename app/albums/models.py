
from django.db import models

class Publisher(models.Model):
    name = models.CharField(max_length=40, blank=True)
    date_founded = models.CharField(max_length=4,blank=True)

    def __str__(self):
        return self.name, self.date_founded

class Artist(models.Model):
    first_name = models.CharField(max_length=35)
    last_name = models.CharField(max_length=40, blank=True)
    birthdate = models.DateField(blank=True)

    def __str__(self):
        return self.first_name, self.last_name, self.birthdate

class Album(models.Model):
    title = models.CharField(max_length=100)
    matrix = models.CharField(max_length=20, blank=True)
    release_date = models.DateField(blank=True)
    country_of_pressing = models.CharField(max_length=40, blank=True)
    submission_date = models.DateTimeField()
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE)

    def __str__(self):
        return self.title, self.matrix, self.release_date, self.country_of_pressing, self.artist, self.publisher

class Song(models.Model):
    title = models.CharField(max_length=15)
    length = models.CharField(max_length=15, blank=True) #maybe later I'll try duration field instead?
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)

    def __str__(self):
        return self.title, self.length, self.artist, self.album
    






