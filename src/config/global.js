export default {
  global: {
    componenteFormativo: 'Creatividad y estrategia emprendedora',
    descripcionCurso:
      'El emprender, en cualquier situación, plantea una serie de retos. Dos aspectos esenciales son la creatividad y la innovación para generar ideas que permitan encontrar nuevos caminos y maneras de solucionar diversas necesidades. Pero, ¿cómo se hace? Es necesario trazar una estrategia, es decir, un conjunto de acciones, que alineadas entre sí, conllevan al logro de la meta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Capacidad creativa e innovadora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos y categorías',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Design Thinking',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Elementos para una estrategia emprendedora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos que dan respuesta a preguntas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características emprendedoras',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño de un plan de acción',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Benet, M. (2017). 5 aspectos en los que aplicar el design thinking. Sociedad de la innovación.',
      link:
        'https://www.sociedaddelainnovacion.es/5-aspectos-los-aplicar-design-thinking/',
    },
    {
      referencia:
        'Blooming potential educational consulting. (2016). La visión como construir una vida con propósito (Video). Youtube.',
      link: 'https://www.youtube.com/watch?v=i9jaUL9dJJw',
    },
    {
      referencia:
        'Denkmodell. (2019). Manual Design Thinking. Publicación inédita.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., y Caycedo, M. (2020). Cartilla de comportamiento. Emprendedor ¡camilo al logro! Servicio Nacional de Aprendizaje SENA',
      link: '',
    },
    {
      referencia:
        'Niño, C. (2019). Empaques frutas en polvo y trozos [Fotografías].',
      link: '',
    },
    {
      referencia:
        'Organización de Cooperación y Desarrollo Económicos (OCDE). (2018). Manual de Oslo. Guía para la recogida e interpretación de datos sobre innovación. OECD/ European Communities.',
      link: '',
    },
    {
      referencia: 'Significados.com (s.f.). Qué es estrategia',
      link: 'https://www.significados.com/estrategia',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad creativa',
      significado:
        'conjunto de recursos y aptitudes que tiene un individuo para generar ideas.',
    },
    {
      termino: 'Creatividad',
      significado:
        'es la generación de ideas útiles y novedosas que tengan valor.',
    },
    {
      termino: 'Design Thinking',
      significado:
        'proceso creativo que consiste en definir el problema que se pretende abordar para entenderlo y posteriormente, implementar las soluciones, siempre enfocando el proceso hacia las necesidades del usuario y generando valor.',
    },
    {
      termino: 'Estrategia',
      significado:
        'estrategia es un plan para dirigir un asunto. Una estrategia se compone de una serie de acciones planificadas que ayudan a tomar decisiones y a conseguir los mejores resultados posibles.  La estrategia está orientada a alcanzar un objetivo siguiendo una pauta de actuación.',
    },
    {
      termino: 'Innovación',
      significado:
        'poner las ideas en acción. Introducción de algo nuevo o una novedad que añade valor a un mercado, organización o sociedad.',
    },
    {
      termino: 'Plan',
      significado:
        'un plan es una intención que se formula a corto o mediano plazo, se elabora antes de realizar una acción con el objetivo de dirigirla y viabilizarla.',
    },
    {
      termino: 'Producto/servicio',
      significado:
        'productos materiales o servicios intangibles, que satisfacen las necesidades de los usuarios y que, por lo tanto, son adquiridos por ellos.',
    },
  ],
  complementario: [
    {
      texto:
        'Blooming potential educational consulting. (2016).  La visión, cómo construir una vida con propósito (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i9jaUL9dJJw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magaly Caycedo Molano',
        cargo: 'Coordinación Nacional de Emprendimiento',
        centro: 'Dirección de Empleo, Trabajo y Emprendimiento - SENA',
      },
      {
        nombre: 'Ruth Nelly Gutierrez Achury',
        cargo: 'Coordinación Nacional de Emprendimiento',
        centro: 'Dirección de Empleo, Trabajo y Emprendimiento - SENA',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Miguel Ricardo Rivera Lizcano',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
