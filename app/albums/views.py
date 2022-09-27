from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import Album, Publisher, Artist
# Create your views here.
def home(request):
    #return HttpResponse('<p>home veiw</p>')
    return render(request, 'home.html')


def all_publishers(request):
    try:
        publisher = Publisher.objects.all()
    except Publisher.DoesNotExist:
        raise Http404('Publisher not found')
    return render(request, 'publisher_all.html',{
        'publisher': publisher
    })

def publisher_detail(request, publisher_id):
    try:
        publisher = Publisher.objects.get(id=publisher_id)
    except Publisher.DoesNotExist:
        raise Http404('Publisher does not exist')
    return render(request, 'publisher_detail.html', {
        'publisher': publisher,
    })

def all_artists(request):
    try:
        artist = Artist.objects.all()
    except Artist.DoesNotExist:
        raise Http404('Artist not found')
    return render(request, 'artist_all.html', {
        'artist': artist,
    })

def artist_detail(request, artist_id):
    try:
        artist = Artist.objects.get(id=artist_id)
    except Artist.DoesNotExist:
        raise Http404('Artist not found')
    return render(request, 'artist_detail.html', {
        'artist': artist,
    })

def all_albums(request):

    try:
        album = Album.objects.all()
    except Album.DoesNotExist:
        raise Http404('Album not Found')
    return render(request, 'all_albums.html', {
        'album': album,
    })


def album_detail(request, album_id):
    try:
        album = Album.objects.get(id=album_id)
    except Album.DoesNotExist:
        raise Http404('Album not Found')
    return render(request, 'album_detail.html', {
        'album': album,
    })
