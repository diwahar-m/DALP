# Generated by Django 3.2.18 on 2023-06-02 12:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iam', '0003_auto_20230602_1104'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='category',
            field=models.CharField(default='Annotator', max_length=150),
        ),
    ]
