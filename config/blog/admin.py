from django.contrib import admin
from .models import Brand, Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'price',)
    list_filter = ('brand',)
    search_fields = ('name', 'description')
    prepopulated_fields = {'slug': ('name',)}

admin.site.register(Brand)
admin.site.register(Product, ProductAdmin)