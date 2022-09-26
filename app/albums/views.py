from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def home(request):
    return HttpResponse('<p>home veiw</p>')

def album_detail(request, album_id):
    return HttpResponse(f'<p>album_detail veiw with id {album_id} </p>')