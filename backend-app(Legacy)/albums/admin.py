from django.contrib import admin
from .models import Publisher, Artist, Album, Song
# Register your models here.
#admin.site.register(Publisher)
#admin.site.register(Artist)
#admin.site.register(Album)
#admin.site.register(Song)

@admin.register(Publisher)
class Publisher(admin.ModelAdmin):
    list_display = ['id', 'name', 'date_founded']

@admin.register(Artist)
class Artist(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name']

@admin.register(Album)
class Album(admin.ModelAdmin):
    list_display = ['id', 'title', 'artist', 'release_date']

@admin.register(Song)
class Song(admin.ModelAdmin):
    list_display = ['id', 'title', 'artist', 'album', 'length']