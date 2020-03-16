"use strict"
//##########################################################################################################################################
// ---------------------------------------------------- CONTENU CARTE ---------------------------------------------------------------------
//##########################################################################################################################################

let mc1 = `Création d’un site web ayant comme thème \"les animaux fantastiques\" dans le cadre de la 1ère année de licence informatique.
			Le site web devait être crée uniquement en HTML5/CSS3 pur (pas d’utilisation de librairies ou de frameworks). `;
let mc2 =  `Application personnelle de gestion/réservation de livres, DVD et CD, démarrée en février 2020 dans le cadre de l’apprentissage du PHP,
			de Bootstrap, de jQuery, de la structure MVC en web et la mise en place d’une base de donnée.`
let mc3 = `Création d’un mini-jeu  \"Memory\" dans le cadre de la L1 informatique. Le mini-jeu devait être crée uniquement en JavaScript pur
			(pas d’utilisation de librairies ou de frameworks), avec le moins d’HTML possible (apprentissage de la manipulation du DOM).`;
let mc4 = `Création d’un jeu de plateau \"Ricochet Robots\" dans le cadre de la L2 informatique. Le jeu devait être crée
			en Java, avec utilisation d’une interface graphique (utilisation de JavaFX), le but étant de coder un algorithme
			de recherche de chemin (A*)`;
let mc5 = `Création d’un mini-jeu \"le Taquin\" dans le cadre de la L2 informatique. Le mini-jeu devait être crée en Java,
			avec utilisation d’une interface graphique (utilisation de Swing), et avec obligation d’utiliser la structure MVC. ` ;
let mc6 = 	`Création d’une mini-application en ligne de commande qui, selon des contraintes émises dans un fichier,
			générait un emploi du temps. Conçue dans le cadre de la L2 informatique, le Java étant imposé. `;

//##########################################################################################################################################
// ---------------------------------------------------- CONTENU MODAL ---------------------------------------------------------------------
//##########################################################################################################################################

//---------------------------------------------- Projet1  ---------------------------------------------- Liputhia OK
let text1 = `Dans le cadre du premier semestre de la première année de licence informatique, il nous a été demandé de créer un site web abordant le thème des "animaux fantastiques".
 			Il nous a été demandé de concevoir un site web, en utilisant uniquement du HTML et CSS, la présentation du site étant libre.`;
let obj1 =  `<p>
					<ul>
						<li>Travail en autonomie</li>
						<li>Implémentation d'un menu de navigation</li>
						<li>Utilisation de sélecteurs avancés en CSS</li>
						<li>Avoir un site s'adaptant à diverses tailles de navigateur (site responsive)</li>
					</ul>
				</p>
				`;
let compTra1 = `<p>Création d'un premier site web en HTML/CSS</p>`;
//---------------------------------------------- Projet2  ---------------------------------------------- Livrairy
let text2 = `Projet personnel démarré en février 2020 dans le cadre de l'apprentissage de plusieurs librairies/frameworks en web. Livr'airy est une application de réservation/gestion
 		de livres, films DVD et CD.`;
let obj2 = `<p> L'objectif de cette application est de: </p>
			<ul>
				<li>Avoir une partie utilisateur, qui peut se connecter, chercher et réserver des achats</li>
				<li>Avoir une partie administrateur qui peut voir l'état de ses stocks avec une alerte dans le cas où les stocks se rapprochent de la rupture de stocks.</li>
				<li>Possibilité pour l'administrateur de commander de nouveau des articles </li>
				<li>Possiblilité pour l'administrateur d'ajouter, supprimer des articles dans la base de donnée dirrectement sur le site</li>
			</ul>`;
let compTra2 =  `<p>L'objectif principal de cet application était de mettre en pratique les différents langages/frameworks/librairies vues de manière autodidacte, avec notament:</p>
				<ul>
					<li>Mise en place du MVC pour le web</li>
					<li>Mise en pratique de PHP, jQuery, Bootstrap</li>
					<li>Manipulation de base de données</li>
					<li>Amélioration: mise en pratique de React.js</li>
				</ul>
				`;

//---------------------------------------------- Projet3  ---------------------------------------------- Memory OK
let text3 = `Dans le cadre du second semestre de la première année de licence informatique, il nous a été demandé de reproduire le jeu "Memory"en JavaScript, sans librairies ni
 frameworks, avec le moins de code HTML. `;
let obj3 = `Les objectifs attendus étaient les suivants:
			<ul>
				<li>Génération des cartes</li>
				<li>Implémentation d’un mélangeur suivant l'algorithme de Fisher-Yates</li>
				<li>Retournement des cartes</li>
				<li>Sauvegarde d'une partie</li>
				<li>Chargement de la partie après fermeture du navigateur</li>
			</ul>`;
let compTra3 =  `<ul>
					<li>Manipulation du DOM</li>
					<li>Mise en pratique dans un mini-jeu le JavaScript</li>
				</ul>`;

//---------------------------------------------- Projet4  ---------------------------------------------- ricochet robots OK
let text4 = `Dans le cadre du second semestre de la deuxième année de licence informatique, il nous a été demandé de concevoir un projet parmi une liste de projets.
			 Nous avons choisi le solveur de Ricochet Robots. Le Ricochet Robots est à la base un jeu de société. Le but de ce jeu est de trouver en moins
			 d'une minute la séquence de mouvement qui permettra à un robot donné (parmi quatre) d'atteindre un objectif désigné sur une case du plateau de jeu.
			 Cependant, les robots ne peuvent que se déplacer en ligne droite jusqu'à rencontrer un obstacle.`;

let obj4 = `<p>
			Le but de ce projet est de développer un programme permettant de trouver une solution optimale pour toute situation du jeu. La conception de ce projet se fera en plusieurs temps:
				<ul>
					<li>Le développement du moteur du jeu suivant les règles du Ricochet Robots </li>
					<li>Implantation d'un algorithme de résolution naïf, appelé A*. </li>
					<li>Proposer des méthodes d'optimisation de l'algorithme, par soucis de complexité pour être résolu dans de bonnes conditions (ex: utilisation des tables de transposition). </li>
					<li> Réalisation d'une interface graphique. </li>
				</ul>
			</p>
			`;
let compTra4 =  `<ul>
					<li>Travail en groupe</li>
					<li>Conception d'un jeu de bout en bout</li>
					<li>Utilisation d'outils de travail en groupe (Git, Trello,...)</li>
					<li>Conception d'algorithmes</li>
					<li>Réflexion UI/UX design</li>
				</ul>`;

//---------------------------------------------- Projet5  ---------------------------------------------- Taquin OK
let text5 = `Dans le cadre du second semestre de la deuxième année de licence informatique, il nous a été demandé de concevoir une application de jeu appelé « le Taquin ». Il s'agit d'un jeu de puzzle, constitué par un rectangle dans
				lequel se trouve des lettres de l'alphabet, des chiffres ou encore des bouts d’images pouvant glisser les unes sur les autres. Une des cases est vide. Le but consiste à former une
				image comme dans un puzzle. `;
let obj5 = `<ul>
					<li>Avoir une bonne architecture logicielle</li>
					<li>Bonne qualité du code</li>
					<li>Mise en œuvre du MVC</li>
					<li>Bonne ergonomie, design agréable</li>
					<li>Jouable en ligne de commande</li>
					<li>Mélange du puzzle avant que la partie soit lancée, par glissage aléatoire des pièces un nombre de fois suffisant (pour que le puzzle soit possible).</li>
				</ul>`
let compTra5 =  `<ul>
					<li>Travail de groupe</li>
					<li>Utilisation d'outils de travail en groupe (SVN, Trello,...)</li>
					<li>Application du design pattern MVC</li>
					<li>Réflexion UX/UI</li>
					<li>Prise en main de Swing</li>
				</ul>`

//---------------------------------------------- Projet6  ---------------------------------------------- EDT OK
let text6 = `Dans de cadre du premier semestre de la deuxième année de licence informatique, on nous a demandé de concevoir une petite application Java en groupe de 5 personnes . En utilisant les lignes de commande, elle devait être capable de
			prendre en entrée des fichiers décrivant, d'une part, des activités et événements à planifier, et d'autre part
			des contraintes entre ces activités, et de calculer, sur une période de temps donnée, un emploi du temps
			comprenant toutes les activités à planifier et respectant toutes les contraintes.`;
let obj6 = `
			<p>L'application devra :
				<ul>
					<li>Être exécutable </li>
					<li>Prendre en argument au minimum un fichier décrivant les activités et un fichier décrivant des contraintes de précédence </li>
					<li>Prendre en argument (optionnellement) un fichier décrivant des contraintes de type « meet » et des contraintes de type « max span » </li>
					<li>Calculer un emploi du temps respectant les contraintes de précédence </li>
					<li>Afficher l'emploi du temps calculé (ou annoncer qu'aucun ne peut satisfaire les contraintes de précédence) </li>
					<li>Annoncer s'il satisfait toutes les contraintes et sinon, combien de contraintes sont satisfaites/violées.</li>
				</ul>
			<p>
			`;
let compTra6 = `<p>
					<ul>
						<li>Travail en groupe </li>
						<li>Conception d'une application de bout en bout</li>
						<li>Utilisation d'outils de travail en groupe (Git, Trello,...)</li>
						<li>Application de la POO</li>
					</ul>
				</p>
				`;

//##########################################################################################################################################
// ------------------------------------------------------ TEMPLATES -----------------------------------------------------------------------
//##########################################################################################################################################

//---------------------------------------------- Template de Carte ----------------------------------------------
let cardTemplate = `
					<div class="card blog-post m-2" style="width: 20rem; border: none;">
						<img class="card-img-top" v-bind:src="img" alt="Card image cap" width="100%"  height="220px"/>
						<div class="card-body">
							<div class="mb-2">
								<span class="badge badge-light p-1">{{ langage }}</span>
								<span class="badge badge-light p-1">{{ techno1 }}</span>
								<span class="badge badge-light p-1">{{ techno2 }}</span>
							</div>
							<h5 class="card-title text-secondary font-weight-bold">{{ title }}</h5>
							<p class="card-text">{{ mini_content }}</p>
						</div>
						<div class="card-footer">
							<a href="#" class="btn btn-link m-1" data-toggle="modal" :data-target="'#project' + number">En savoir plus</a>
							<a v-bind:href="link" class="btn btn-link m-1">Lien du projet</a>
						</div>
					</div>
					`
//---------------------------------------------- Template du modal ----------------------------------------------
let modalTemplate = `
					<div class="modal fade" :id="'project' + number" tabindex="-1" role="dialog" aria-badgeledby="exampleModalCenterTitle" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">{{ title }}</h5>
									<button type="button" class="close" data-dismiss="modal" aria-badge="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body ancrer_contenu">
									<h5>Présentation</h5>
									<p>{{ content }}</p>
									<h5>Objectifs</h5>
									<span v-html="objectif"></span>
									<h5>Compétences travaillées</h5>
									<span v-html="competence_tra"></span>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Retour</button>
								</div>
							</div>
						</div>
					</div>
					`
