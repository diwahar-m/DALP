# Copyright (C) 2021-2022 Intel Corporation
#
# SPDX-License-Identifier: MIT


from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=150, default='Annotator')

    def __str__(self):
        return self.category