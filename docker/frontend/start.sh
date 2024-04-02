#!/bin/sh

# Remplacez les variables d'environnement dans le fichier de configuration Nginx
envsubst '$DOMAIN_NAME,$BACKEND_DOCKER_URI' < /etc/nginx/conf.d/custom_nginx.conf.template > /etc/nginx/conf.d/default.conf

# Exécutez Nginx
nginx -g 'daemon off;'