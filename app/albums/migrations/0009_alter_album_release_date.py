# Generated by Django 4.0 on 2022-09-26 19:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('albums', '0008_remove_album_submission_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='album',
            name='release_date',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
    ]
