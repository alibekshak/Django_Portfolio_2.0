# Generated by Django 4.1.7 on 2023-02-25 11:18

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='dateTime',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2023, 2, 25, 17, 18, 8, 147112)),
        ),
    ]
