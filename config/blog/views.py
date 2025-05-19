from django.shortcuts import render, get_object_or_404
from .models import Product, Brand

def product_list(request):
    brands = Brand.objects.all()
    products = Product.objects.all()
    return render(request, 'blog/product_list.html', {'products': products, 'brands': brands})

def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    return render(request, 'blog/product_detail.html', {'product': product})

def cart_view(request):
    return render(request, 'blog/cart.html')    
