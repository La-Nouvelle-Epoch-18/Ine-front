<p align="center"><img width="100" src="https://avatars0.githubusercontent.com/u/58552280?s=200&v=4" alt="La Nouvelle Epoch"></p>

<h1 align="center">Projet Nuit de l'INFO 2019</h1>

<p align="center">
Ce projet à été réaliser lors de la Nuit de l'Info 2019  
</p>

<p align="center">
<a href="nouvelle-epoch.mff.dev">nouvelle-epoch.mff.dev</a>
</p>

# Principe du projet

Le projet fonctionne sur la base du partage de connaissances entre les différents étudiants, chaque étudiant peut visionner des offres sur le site web et voter pour celles-ci. Certaines offres sont permanentes (APL, Bourses, ...) tandis que d'autres sont temporaires (collocation, appartement libre, ...). Les services universitaires peuvent proposer leurs propres offres tout comme un utilisateur normal, mais disposent en plus d'un profil qui leurs permettent de communiquer via un de leurs flux rss.

# Architecture

### Front VueJS [[projet](https://github.com/La-Nouvelle-Epoch-18/Ine-front)]

Le site web est réalisé en VueJS Typescript.

Image docker:  [https://hub.docker.com/u/nouvelle0epoch/lne-](https://hub.docker.com/u/nouvelle0epoch/lne-front)

### Microservice Authentification [[projet](https://github.com/La-Nouvelle-Epoch-18/lne-user)]

Technologies: GO + PostgreSQL

Le microservice d'authentification génére et valide les tokens JWT pour la connection et l'inscription des utilisateurs.

Image docker:  [https://hub.docker.com/u/nouvelle0epoch/lne-user](https://hub.docker.com/u/nouvelle0epoch/lne-user)

### Microservice Posts [[projet](https://github.com/La-Nouvelle-Epoch-18/lne-posts)]

Technologies: Typescript + Express + PostgreSQL

Le microservice des posts permet de créer, modifier ou visionner des posts.

Image docker:  [https://hub.docker.com/u/nouvelle0epoch/lne-posts](https://hub.docker.com/u/nouvelle0epoch/lne-posts)

### Microservice Channel [[projet](https://github.com/La-Nouvelle-Epoch-18/lne-channel)]

Technologies: Javascript + MongoDB

Le microservice de channel fédére les différents flux de communications des services universitaires pour une communication directe avec les utilisateurs du site.

Image docker:  [https://hub.docker.com/u/nouvelle0epoch/lne-channel](https://hub.docker.com/u/nouvelle0epoch/lne-channel)

# Documentation

Les documentations des différents projets sont disponibles [à cette adresse](https://github.com/La-Nouvelle-Epoch-18/lne-doc)

# Crédits

Amine Hilaly | Kévin Baumeyer | Robin Biechy | Yohann Jolain | Sébastien Erfani
