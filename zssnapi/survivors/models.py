from __future__ import unicode_literals
from django.db import models
from django.dispatch import receiver

class Survivor(models.Model):
    name = models.CharField(max_length=200)
    age = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Location(models.Model):
    survivor = models.OneToOneField(
        Survivor,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name='location'
    )
    lat = models.DecimalField(default=0, max_digits=7, decimal_places=4)
    lng = models.DecimalField(default=0, max_digits=7, decimal_places=4)

    def __str__(self):
        return self.survivor.name

class Items(models.Model):
    survivor = models.OneToOneField(
        Survivor,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name='items'
    )
    water = models.PositiveIntegerField(default=0);
    food = models.PositiveIntegerField(default=0);
    med = models.PositiveIntegerField(default=0);
    ammo = models.PositiveIntegerField(default=0);

    def __str__(self):
        return self.survivor.name

@receiver(models.signals.post_save, sender=Survivor)
def createSurvivorInventoryAndLocation(instance, created, raw, **kwargs):
    if created:
        location = Location(survivor=instance)
        items = Items(survivor=instance)
    else:
        location = instance.location
        items = instance.items
    location.save()
    items.save()
