"use strict"
let positionPresentation = $("#Presentation").offset();
let hauteurNavBar = $("nav").outerHeight();
let vitesseAnnim = 1000;

$(document).ready(function() {
	gestionNavBar();

	//Gestion du caroussel
	$(".date").click(function() {
		$("#carouselContent").carousel($(this).data("slideTo"));
	});

	$('#carouselContent').on('slide.bs.carousel', function (event) {
		$(".date[data-slide-to="+event.from+"]").removeClass("btn-secondary");
		$(".date[data-slide-to="+event.from+"]").addClass("btn-outline-secondary");
		$(".date[data-slide-to="+event.to+"]").removeClass("btn-outline-secondary");
		$(".date[data-slide-to="+event.to+"]").addClass("btn-secondary");
	});
});


$(window).resize(function(){
	positionPresentation = $("#Presentation").offset();
	gestionNavBar();
});

function gestionNavBar(){
	//Positionnement de la barre de navigation
	$(window).scroll(function() {
		if($(window).scrollTop() >= (positionPresentation.top - hauteurNavBar) || (window.innerWidth < 573)) {
			$('nav').addClass('fixed-top');
			if(window.innerWidth > 573){
				$('main').css('padding-top', ""+hauteurNavBar+'px');
			}
		}else{
			$('nav').removeClass('fixed-top');
			$('main').css('padding-top', '');
		}
	})
}

//"Modèle des cartes"
Vue.component('blog-post', {
	props: ['title', 'content', 'img', 'number', 'langage', 'techno1', 'techno2', 'link', 'mini_content', 'objectif', 'competence_tra'],
	template: `<div class="col-lg-3">` + cardTemplate + modalTemplate + `</div>`
});

//Création de l'ensemble des cartes
new Vue({
	el: 'main',
	data: {
		posts: [
			{ 	number: 1 ,
				link: "https://github.com/LoradaAndre/Liputhia" ,
				langage: "HTML/CSS" ,
				img: "img/illustrationProjets/liputhia.png",
				title: 'Liputhia',
				mini_content: mc1 ,
				content: text1 ,
				objectif: obj1 ,
				competence_tra: compTra1
			},
			{ 	number: 2 ,
				link: "https://github.com/LoradaAndre/Livrairy" ,
				langage: "PHP" ,
				techno1: "jQuery" ,
				techno2: "Bootstrap" ,
				img: "img/illustrationProjets/livrairy.jpg",
				title: 'Livr\'airy',
				mini_content: mc2 ,
				content: text2 ,
				objectif: obj2 ,
				competence_tra: compTra2
			},
			{ 	number: 3 ,
				link: "https://github.com/LoradaAndre/Memory" ,
				langage: "JavaScript" ,
				img: "img/illustrationProjets/memory.png",
				title: 'Memory',
				mini_content: mc3,
				content: text3 ,
				objectif: obj3,
				competence_tra: compTra3
			},
			{ 	number: 4 ,
				link: "https://github.com/LoradaAndre/Ricochet-Robots" ,
				langage: "Java" ,
				techno1: "JavaFX" ,
				img: "img/illustrationProjets/roboter.jpg",
				title: 'Ricochet Robots',
				mini_content: mc4 ,
				content: text4 ,
				objectif: obj4 ,
				competence_tra: compTra4
			},
			{ 	number: 5 ,
				link: "https://github.com/LoradaAndre/Taquin/" ,
				langage: "Java" ,
				techno1: "Swing" ,
				img: "img/illustrationProjets/taquin.png",
				title: 'Taquin',
				mini_content: mc5 ,
				content: text5 ,
				objectif: obj5 ,
				competence_tra: compTra5
			},
			{ 	number: 6 ,
				link: "https://github.com/LoradaAndre/EDT" ,
				langage: "Java" ,
				img: "img/illustrationProjets/edt.png",
				title: 'Emploi du temps',
				mini_content: mc6 ,
				content: text6 ,
				objectif: obj6 ,
				competence_tra: compTra6
			},
		]
	}
});

//annimation vers l'ancre de la section
$(".nav-link").click(function(e) {

	e.preventDefault();
	let sectionSelect = e.currentTarget.hash;
	if(sectionSelect != "#Accueil"){
		$('body, html').animate({
		    scrollTop: $(sectionSelect).offset().top - hauteurNavBar + 10
		}, 700);
	}else{
		$('body, html').animate({
		    scrollTop: "0px"
		}, vitesseAnnim);

	}
});
