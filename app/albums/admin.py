from django.contrib import admin
from .models import Publisher, Artist, Album, Song
# Register your models here.
admin.site.register(Publisher)
admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Song)