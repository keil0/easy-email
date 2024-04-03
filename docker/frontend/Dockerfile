# Étape de construction
FROM node:18 as build-stage

WORKDIR /app

ENV YARN_CACHE_FOLDER=/app/.yarn-cache

COPY packages packages
COPY demo demo

WORKDIR /app/packages/easy-email-core
RUN yarn
RUN yarn build

WORKDIR /app/packages/easy-email-editor
RUN yarn
RUN yarn build

WORKDIR /app/packages/easy-email-extensions
RUN yarn
RUN yarn build

WORKDIR /app/demo
RUN yarn
RUN yarn build

# Étape de service
FROM nginx:stable-alpine as production-stage

# Copie les fichiers construits de l'étape précédente vers le dossier de service nginx
COPY --from=build-stage /app/demo/dist /usr/share/nginx/html

# Créer un répertoire pour stocker la configuration personnalisée
RUN mkdir -p /etc/nginx/conf.d

# Copier le fichier de configuration NGINX personnalisé dans l'image
COPY docker/frontend/nginx/custom_nginx.conf /etc/nginx/nginx.conf

# Expose le port 80 pour accéder à l'application
EXPOSE 80

# Démarre nginx
CMD ["nginx", "-g", "daemon off;"]
