from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from .models import Album, Publisher, Artist, Song
import random
# Create your views here.
def home(request):
    #return HttpResponse('<p>home veiw</p>')
    return render(request, 'home.html')


def all_publishers(request):
    try:
        publishers = Publisher.objects.all().order_by('name')
    except Publisher.DoesNotExist:
        raise Http404('Publisher not found')
    return render(request, 'publisher_all.html',{
        'publishers': publishers
    })

def publisher_detail(request, publisher_id):
    try:
        publisher = Publisher.objects.get(id=publisher_id)
        albums = Album.objects.all()#I'd like to fix this later (retrieveing 'all' instead of just what I need)
        songs = Song.objects.all()
    except Publisher.DoesNotExist:
        raise Http404('Publisher does not exist')
    return render(request, 'publisher_detail.html', {
        'publisher': publisher,
        'albums': albums,
        'songs': songs,
    })

def all_artists(request):
    try:
        artists = Artist.objects.all().order_by('first_name')
    except Artist.DoesNotExist:
        raise Http404('Artist not found')
    return render(request, 'artist_all.html', {
        'artists': artists,
    })

def artist_detail(request, artist_id):
    try:
        artist = Artist.objects.get(id=artist_id)
        albums = Album.objects.all()
        songs = Song.objects.all()
    except Artist.DoesNotExist:
        raise Http404('Artist not found')
    return render(request, 'artist_detail.html', {
        'artist': artist,
        'albums': albums,
        'songs' : songs,
    })

def all_albums(request):

    try:
        albums = Album.objects.all().order_by('title')
    except Album.DoesNotExist:
        raise Http404('Album not Found')
    return render(request, 'all_albums.html', {
        'albums': albums,
    })


def album_detail(request, album_id):
    try:
        album = Album.objects.get(id=album_id)
        songs = Song.objects.all
        publisher = Publisher.objects.all()
    except Album.DoesNotExist:
        raise Http404('Album not Found')
    return render(request, 'album_detail.html', {
        'album': album,
        'songs': songs,
        'publisher': publisher,
    })

def random_album_detail(request):
    max_albums = len(Album.objects.all())
    album_id = random.randint(1, max_albums)
    try:
    
        album = Album.objects.get(id=album_id)
        songs = Song.objects.all
        publisher = Publisher.objects.all()
    except Album.DoesNotExist:
        raise Http404('Album not Found')
    return render(request, 'random_album_detail.html', {
        'album': album,
        'songs': songs,
        'publisher': publisher,
    })

def song_all(request):
    try:
        songs = Song.objects.all().order_by('title')
    except Song.DoesNotExist:
        raise Http404('Song not found')
    return render(request, 'song_all.html', {
        'songs': songs
    })

def song_detail(request, song_id):
    try:
        song = Song.objects.get(id=song_id)
    except Song.DoesNotExist:
        raise Http404('Song not found')
    return render(request, 'song_detail.html', {
        'song': song
    })

def statistics(request):
    try:
        songs_amount = len(Song.objects.all())
        albums_amount = len(Album.objects.all())
        publishers_amount = len(Publisher.objects.all())
        artists_amount = len(Artist.objects.all())
        albums_us = len(Album.objects.filter(country_of_pressing = "US"))
        albums_can = len(Album.objects.filter(country_of_pressing = "Canada"))
        albums_mex = len(Album.objects.filter(country_of_pressing = "Mexico"))
        albums_eur = len(Album.objects.filter(country_of_pressing  = "Europe"))
        albums_fr = len(Album.objects.filter(country_of_pressing  = "France"))
        albums_uk = len(Album.objects.filter(country_of_pressing  = "UK"))
    except Song.DoesNotExist:
        raise Http404('data not found')
    return render(request, 'statistics.html', {
        'songs_amount': songs_amount,
        'albums_amount': albums_amount,
        'publishers_amount': publishers_amount,
        'artists_amount': artists_amount,
        'albums_us': albums_us,
        'albums_can': albums_can,
        'albums_mex': albums_mex,
        'albums_eur': albums_eur,
        'albums_fr': albums_fr,
        'albums_uk': albums_uk


    })