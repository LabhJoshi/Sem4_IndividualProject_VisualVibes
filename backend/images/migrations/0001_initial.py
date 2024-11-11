# Generated by Django 5.1.1 on 2024-09-25 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FormData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fullname', models.CharField(max_length=500)),
                ('number', models.IntegerField()),
                ('email', models.CharField(max_length=500)),
                ('address', models.TextField()),
                ('date', models.DateField()),
                ('days', models.IntegerField()),
            ],
        ),
    ]