from django.db import models
from datetime import datetime


class Contact(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, verbose_name="Имя")
    email = models.EmailField(max_length=100, verbose_name="Почта")
    msg = models.TextField(verbose_name="Сообщение")
    dateTime = models.DateTimeField(default=datetime.now(), blank=True)

    def __str__(self) -> str:
        return f"Вы получили сообщение: {self.name} | {self.email}"
    

    class Meta:
        verbose_name = "Контакт"
        verbose_name_plural = "Контакты"
        