DATABASES =  {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'tere_verde_db',
        'USER': 'user',
        'PASSWORD': '""',
        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'init_command': "SET sql_mode = 'STRICT_TRANS_TABLES'"
        }

 }

}