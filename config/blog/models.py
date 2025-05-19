from django.db import models
from django.contrib.auth.models import User

class Brand(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    logo = models.ImageField(upload_to='brands/', blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)  # вместо model
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    # остальные поля как в предыдущем примере
    
    def __str__(self):
        return f"{self.brand.name} {self.title}"