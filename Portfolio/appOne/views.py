from django.shortcuts import render

# Create your views here.
def index(request):
    my_dict = {'key1': "value1", 'key2': "value2", 'key3': "value3"}
    return render(request, 'appOne/home.html', context=my_dict)
