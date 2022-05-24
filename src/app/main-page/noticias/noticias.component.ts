import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  noticias = [ //? CATEGORIAS: Interfaz, Jugabilidad, NPC, Diseño, General
    {
      titulo: '¡Estoy vivo!',
      parrafo:
        'Es importante saber si estas a punto de morir o no, o cuanta experiencia te falta para subir de nivel, para ello se han incluido indicadores de vida y de experiencia.',
      src: '../../../assets/vidayexp.png',
      fecha: '21/03/2022',
      cat: 'interfaz',
    },
    {
      titulo: '¡Al ataque!',
      parrafo:
        'Despues de que unos enemigos llegasen a nuestro juego, teniamos que dar la posibilidad de luchar contra ellos, hemos añadido y estamos trabajando en el ataque tanto de cerca como a distancia, tambien hemos hecho que los enemigos que mates te suelte experiencia para poder subir de nivel.',
      src: '../../../assets/ataqueExp.gif',
      fecha: '20/03/2022',
      cat: 'jugabilidad',
    },
    {
      titulo: '¡Mirame me muevo!',
      parrafo:
        'Queriamos dar un toque de vida a los seres vivos de este mundo, pues eso hemos hecho dandoles animaciones ¡mira como se mueven estando quietos!',
      src: '../../../assets/idle.gif',
      fecha: '19/03/2022',
      cat: 'npc',
    },
    {
      titulo: '¡A cubierto nos atacan!',
      parrafo:
        'Se ha empezado a trabajan en el diseño y funcionamiento de los enemigos.',
      src: '../../../assets/enemigos.png',
      fecha: '17/03/2022',
      cat: 'npc',
    },
    {
      titulo: '¡Ya estamos trabajando en el mapa!',
      parrafo:
        'Necesitamos un terreno en el que andar, en el que vivir, que mirar, un mapa lo es todo en un juego.',
      src: '../../../assets/mapa.png',
      fecha: '08/03/2022',
      cat: 'diseño',
    },
    {
      titulo: '¡Ya tenemos personaje!',
      parrafo:
        'Ya se ha creado el peronaje principal, vamos avanzando poco a poco.',
      src: '../../../assets/pj.png',
      fecha: '03/03/2022',
      cat: 'npc',
    },
    {
      titulo: '¡Una nueva aventura!',
      parrafo:
        'Este es el inicio de un nuevo proyecto, ¡vamos a crear un nuevo juego rpg!',
      src: '../../../assets/logoRazorSinNegro.png',
      fecha: '25/02/2022',
      cat: 'general',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
