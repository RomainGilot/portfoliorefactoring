# Utiliser une image Node.js pour builder l'application
FROM node:18-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Build de l'application
RUN npm run build

# Utiliser une image nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers build de React vers le dossier nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port sur lequel l'application tournera
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]
