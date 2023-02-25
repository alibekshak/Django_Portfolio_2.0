from django.shortcuts import render
from .models import Contact

def index(request):
    if request.method == "POST":
        name = request.POST.get("user_name")
        email = request.POST.get("user_email")
        msg = request.POST.get("user_text")

        form = Contact(name=name, email=email, msg=msg)
        form.save()
    return render(request, 'index.html')
    