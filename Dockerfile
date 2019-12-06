FROM node:lts-alpine

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

# définit le dossier 'app' comme dossier de travail
WORKDIR /usr/src/app

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# installe les dépendances du projet
RUN npm install --only=production

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY dist dist

EXPOSE 8080
CMD [ "http-server", "dist" ]
