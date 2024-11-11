from django.urls import path
from .views import (
    get_images_with_query,
    get_images,
    store_form_data,
    get_images_of_editors_choice,
    get_images_by_downloads,
    get_date
)

urlpatterns = [
    path("get-images-with-query/", get_images_with_query, name="get images with query"),
    path("get-images/", get_images, name="get images"),
    path("store-form-data/", store_form_data, name="store form data"),
    path("get-images-of-editors-choice/",get_images_of_editors_choice,name='get images of editors choice'),
    path("get-images-by-downloads/",get_images_by_downloads,name="get images by downloads"),
    path('get-date/',get_date,name='get date'),
]
