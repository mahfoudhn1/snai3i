from django.urls import path, include
from django.contrib import admin
from rest_framework import routers
from clients import views as core_views
from jobs.views import JobsList
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenRefreshView


router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
    path('login/', core_views.MyObtainTokenPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view()),
    path('register/', core_views.RegisterView.as_view()),
    path('jobs/', JobsList.as_view()),
    
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



