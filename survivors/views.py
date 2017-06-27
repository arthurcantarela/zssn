from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import Survivor

def index(request):
    template = loader.get_template('index.html')
    context = {
        'survivors': Survivor.objects.order_by('name')
    }
    return HttpResponse(template.render(context, request))
    # survivorsList = Survivor.objects.order_by('name')
    # template = loader.get_template('survivors/index.html')
    # context = {
    #     'survivorsList': survivorsList
    # }
    # return HttpResponse(template.render(context, request))
