# Generated by Django 4.1.7 on 2023-03-05 14:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0002_alter_contact_datetime"),
    ]

    operations = [
        migrations.AlterField(
            model_name="contact",
            name="dateTime",
            field=models.DateTimeField(
                blank=True, default=datetime.datetime(2023, 3, 5, 20, 52, 2, 458776)
            ),
        ),
    ]
