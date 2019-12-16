from django.urls import path
from . import views

app_name = 'appOne'

urlpatterns = [
    path('', views.index, name='index'),
]