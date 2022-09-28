from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import Album, Publisher, Artist, Song
# Create your views here.
def home(request):
    #return HttpResponse('<p>home veiw</p>')
    return render(request, 'home.html')


def all_publishers(request):
    try:
        publishers = Publisher.objects.all()
    except Publisher.DoesNotExist:
        raise Http404('Publisher not found')
    return render(request, 'publisher_all.html',{
        'publishers': publishers
    })

def publisher_detail(request, publisher_id):
    try:
        publisher = Publisher.objects.get(id=publisher_id)
        albums = Album.objects.all()
    except Publisher.DoesNotExist:
        raise Http404('Publisher does not exist')
    return render(request, 'publisher_detail.html', {
        'publisher': publisher,
        'albums': albums
    })

def all_artists(request):
    try:
        artists = Artist.objects.all()
    except Artist.DoesNotExist:
        raise Http404('Artist not found')
    return render(request, 'artist_all.html', {
        'artists': artists,
    })

def artist_detail(request, artist_id):
    try:
        artist = Artist.objects.get(id=artist_id)
        albums = Album.objects.all()
        songs = Song.objects.all
    except Artist.DoesNotExist:
        raise Http404('Artist not found')
    return render(request, 'artist_detail.html', {
        'artist': artist,
        'albums': albums,
        'songs' : songs,
    })

def all_albums(request):

    try:
        albums = Album.objects.all()
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

def song_all(request):
    try:
        songs = Song.objects.all()
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