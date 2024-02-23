import os
from django.core.wsgi import get_wsgi_application

# Set the environment variable to indicate that this is a WSGI application
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myproject.settings')

# Load the Django application
application = get_wsgi_application()
