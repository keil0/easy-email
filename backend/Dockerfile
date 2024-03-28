# Étape de construction
FROM node:18 as build-stage

WORKDIR /app

# Copie des fichiers de dépendance
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig.json ./

# Installation des dépendances avec yarn
RUN yarn install

# Copie des sources de l'application
COPY src ./src

# Compilation de l'application TypeScript
RUN yarn build

# Étape de production
FROM node:18-slim

WORKDIR /app

# Définition de la variable d'environnement JWT_SECRET
ARG JWT_SECRET
ENV JWT_SECRET=$JWT_SECRET

# Installation de pm2 globalement avec yarn
RUN yarn global add pm2

# Copie des fichiers de dépendance (sans les devDependencies)
COPY package*.json ./
COPY yarn.lock ./

# Installation des dépendances de production avec yarn
RUN yarn install --production

# Copie des fichiers de construction depuis l'étape de build
COPY --from=build-stage /app/dist ./dist

# Expose le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application avec pm2-runtime
CMD ["pm2-runtime", "dist/app.js"]
