from platform import release
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

        #location data
        albums_us = len(Album.objects.filter(country_of_pressing = "US"))
        albums_can = len(Album.objects.filter(country_of_pressing = "Canada"))
        albums_mex = len(Album.objects.filter(country_of_pressing = "Mexico"))
        albums_fr = len(Album.objects.filter(country_of_pressing  = "France"))
        albums_uk = len(Album.objects.filter(country_of_pressing  = "UK"))
        albums_jp = len(Album.objects.filter(country_of_pressing  = "Japan"))
        albums_au = len(Album.objects.filter(country_of_pressing  = "Australia"))
        albums_other = len(Album.objects.filter().exclude(country_of_pressing  = "Australia").exclude(country_of_pressing  = "US").exclude(country_of_pressing  = "Japan").exclude(country_of_pressing  = "UK").exclude(country_of_pressing  = "France").exclude(country_of_pressing = "Mexico").exclude(country_of_pressing = "Canada"))

        #Album Decade Data
        albums_40s = len(Album.objects.filter(release_date__startswith = "194"))
        albums_50s = len(Album.objects.filter(release_date__startswith = "195"))
        albums_60s = len(Album.objects.filter(release_date__startswith = "196"))
        albums_70s = len(Album.objects.filter(release_date__startswith = "197"))
        albums_80s = len(Album.objects.filter(release_date__startswith = "198"))
        albums_90s = len(Album.objects.filter(release_date__startswith = "199"))
        albums_00s = len(Album.objects.filter(release_date__startswith = "200"))
        albums_10s = len(Album.objects.filter(release_date__startswith = "201"))
        albums_20s = len(Album.objects.filter(release_date__startswith = "202"))

        #Publisher Decade data
        publishers_1880s = len(Publisher.objects.filter(date_founded__startswith = "188"))
        publishers_1890s = len(Publisher.objects.filter(date_founded__startswith = "189"))
        publishers_1900s = len(Publisher.objects.filter(date_founded__startswith = "190"))
        publishers_1910s = len(Publisher.objects.filter(date_founded__startswith = "191"))
        publishers_1920s = len(Publisher.objects.filter(date_founded__startswith = "192"))
        publishers_30s = len(Publisher.objects.filter(date_founded__startswith = "193"))
        publishers_40s = len(Publisher.objects.filter(date_founded__startswith = "194"))
        publishers_50s = len(Publisher.objects.filter(date_founded__startswith = "195"))
        publishers_60s = len(Publisher.objects.filter(date_founded__startswith = "196"))
        publishers_70s = len(Publisher.objects.filter(date_founded__startswith = "197"))
        publishers_80s = len(Publisher.objects.filter(date_founded__startswith = "198"))
        publishers_90s = len(Publisher.objects.filter(date_founded__startswith = "199"))
        publishers_00s = len(Publisher.objects.filter(date_founded__startswith = "200"))
        publishers_10s = len(Publisher.objects.filter(date_founded__startswith = "201"))
        publishers_20s = len(Publisher.objects.filter(date_founded__startswith = "202"))

        #Song length data
        songs_length_under_minute = len(Song.objects.filter( length__startswith = "0").extra(where=["LENGTH(length) = 4"]))
        songs_length_one_to_two = len(Song.objects.filter( length__startswith = "1").extra(where=["LENGTH(length) = 4"]))
        songs_length_two_to_three = len(Song.objects.filter( length__startswith = "2").extra(where=["LENGTH(length) = 4"]))
        songs_length_three_to_four = len(Song.objects.filter( length__startswith = "3").extra(where=["LENGTH(length) = 4"]))
        songs_length_four_to_five = len(Song.objects.filter( length__startswith = "4").extra(where=["LENGTH(length) = 4"]))
        songs_length_five_to_six = len(Song.objects.filter( length__startswith = "5").extra(where=["LENGTH(length) = 4"]))
        songs_length_six_to_seven = len(Song.objects.filter( length__startswith = "6").extra(where=["LENGTH(length) = 4"]))
        songs_length_seven_to_eight = len(Song.objects.filter( length__startswith = "7").extra(where=["LENGTH(length) = 4"]))
        songs_length_eight_to_nine = len(Song.objects.filter( length__startswith = "8").extra(where=["LENGTH(length) = 4"]))
        songs_length_nine_to_ten = len(Song.objects.filter( length__startswith = "9").extra(where=["LENGTH(length) = 4"])) 
        songs_length_ten_to_twenty = len(Song.objects.filter( length__startswith = "1").extra(where=["LENGTH(length) = 5"]))
        songs_length_twenty_to_thirty = len(Song.objects.filter( length__startswith = "2").extra(where=["LENGTH(length) = 5"]))

        #Song Alphabet Data
        songs_a = len(Song.objects.filter(title__startswith = "a"))
        songs_b = len(Song.objects.filter(title__startswith = "b"))
        songs_c = len(Song.objects.filter(title__startswith = "c"))
        songs_d = len(Song.objects.filter(title__startswith = "d"))
        songs_e = len(Song.objects.filter(title__startswith = "e"))
        songs_f = len(Song.objects.filter(title__startswith = "f"))
        songs_g = len(Song.objects.filter(title__startswith = "g"))
        songs_h = len(Song.objects.filter(title__startswith = "h"))
        songs_i = len(Song.objects.filter(title__startswith = "i"))
        songs_j = len(Song.objects.filter(title__startswith = "j"))
        songs_k = len(Song.objects.filter(title__startswith = "k"))
        songs_l = len(Song.objects.filter(title__startswith = "l"))
        songs_m = len(Song.objects.filter(title__startswith = "m"))
        songs_n = len(Song.objects.filter(title__startswith = "n"))
        songs_o = len(Song.objects.filter(title__startswith = "o"))
        songs_p = len(Song.objects.filter(title__startswith = "p"))
        songs_q = len(Song.objects.filter(title__startswith = "q"))
        songs_r = len(Song.objects.filter(title__startswith = "r"))
        songs_s = len(Song.objects.filter(title__startswith = "s"))
        songs_t = len(Song.objects.filter(title__startswith = "t"))
        songs_u = len(Song.objects.filter(title__startswith = "u"))
        songs_v = len(Song.objects.filter(title__startswith = "v"))
        songs_w = len(Song.objects.filter(title__startswith = "w"))
        songs_x = len(Song.objects.filter(title__startswith = "x"))
        songs_y = len(Song.objects.filter(title__startswith = "y"))
        songs_z = len(Song.objects.filter(title__startswith = "z"))


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
        'albums_fr': albums_fr,
        'albums_uk': albums_uk,
        'albums_jp': albums_jp,
        'albums_au': albums_au,
        'albums_other': albums_other,
        'albums_40s': albums_40s,
        'albums_50s': albums_50s,
        'albums_60s': albums_60s,
        'albums_70s': albums_70s,
        'albums_80s': albums_80s,
        'albums_90s': albums_90s,
        'albums_00s': albums_00s,
        'albums_10s': albums_10s,
        'albums_20s': albums_20s,
        'publishers_1880s': publishers_1880s,
        'publishers_1890s': publishers_1890s,
        'publishers_1900s': publishers_1900s,
        'publishers_1910s': publishers_1910s,
        'publishers_1920s': publishers_1920s,
        'publishers_30s': publishers_30s,
        'publishers_40s': publishers_40s,
        'publishers_50s': publishers_50s,
        'publishers_60s': publishers_60s,
        'publishers_70s': publishers_70s,
        'publishers_80s': publishers_80s,
        'publishers_90s': publishers_90s,
        'publishers_00s': publishers_00s,
        'publishers_10s': publishers_10s,
        'publishers_20s': publishers_20s,
        'songs_length_under_minute': songs_length_under_minute,
        'songs_length_one_to_two': songs_length_one_to_two,
        'songs_length_two_to_three': songs_length_two_to_three,
        'songs_length_three_to_four': songs_length_three_to_four,
        'songs_length_four_to_five': songs_length_four_to_five,
        'songs_length_five_to_six': songs_length_five_to_six,
        'songs_length_six_to_seven': songs_length_six_to_seven,
        'songs_length_seven_to_eight': songs_length_seven_to_eight,
        'songs_length_eight_to_nine': songs_length_eight_to_nine,
        'songs_length_nine_to_ten': songs_length_nine_to_ten,
        'songs_length_ten_to_twenty': songs_length_ten_to_twenty,
        'songs_length_twenty_to_thirty': songs_length_twenty_to_thirty,
        'songs_a': songs_a,
        'songs_b': songs_b,
        'songs_c': songs_c,
        'songs_d': songs_d,
        'songs_e': songs_e,
        'songs_f': songs_f,
        'songs_g': songs_g,
        'songs_h': songs_h,
        'songs_i': songs_i,
        'songs_j': songs_j,
        'songs_k': songs_k,
        'songs_l': songs_l,
        'songs_m': songs_m,
        'songs_n': songs_n,
        'songs_o': songs_o,
        'songs_p': songs_p,
        'songs_q': songs_q,
        'songs_r': songs_r,
        'songs_s': songs_s,
        'songs_t': songs_t,
        'songs_u': songs_u,
        'songs_v': songs_v,
        'songs_w': songs_w,
        'songs_x': songs_x,
        'songs_y': songs_y,
        'songs_z': songs_z


    })