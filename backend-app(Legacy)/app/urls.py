"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from albums import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),

    #publisher urls
    path('publishers/<int:publisher_id>/', views.publisher_detail, name='publisher_detail'),
    path('publishers/all', views.all_publishers, name='all_publishers'),

    #artist urls
    path('artists/<int:artist_id>/', views.artist_detail, name='artist_detail'),
    path('artists/all', views.all_artists, name='all_artists'),

    #album urls
    path('albums/<int:album_id>/', views.album_detail, name='albums_detail'),
    path('albums/random/', views.random_album_detail, name='random_album_detail'),
    path('albums/all', views.all_albums, name='all_albums'),

    #song urls
    path('songs/<int:song_id>/', views.song_detail, name='song_detail'),
    path('songs/all', views.song_all, name='all_songs'),

    #Statistics Url
    path('statistics', views.statistics, name = "statistics"),

    #Search Url
    path('search_results', views.search_results, name = "search_results")

    #add more later
]
