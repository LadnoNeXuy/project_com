from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('products/<slug:slug>/', views.product_detail, name='product_detail'),
    path('cart/', views.cart_view, name='cart'),

]
