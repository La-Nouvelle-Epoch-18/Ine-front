FROM node:lts-alpine

# installe un simple serveur http pour servir un contenu statique
RUN npm install -g http-server

# définit le dossier 'app' comme dossier de travail
WORKDIR /usr/src/app

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY dist .

EXPOSE 8080
CMD [ "http-server" ]
