# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-06-26 18:40
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('survivors', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location_lat', models.DecimalField(decimal_places=4, max_digits=7, verbose_name='Latitude')),
                ('location_lng', models.DecimalField(decimal_places=4, max_digits=7, verbose_name='Longitude')),
                ('survivor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='survivors.Survivor')),
            ],
        ),
    ]
