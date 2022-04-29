export default {
  global: {
    componenteFormativo: 'Pruebas de jarras y equipos de dosificación',
    descripcionCurso:
      'En este componente formativo, se abordan temas importantes que le permitirá adquirir habilidades para realizar pruebas a una muestra de agua y posteriormente dosificar la cantidad correcta de sustancias químicas para su potabilización.',
    imagenBannerPrincipal: require('@/assets/curso/banner/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner-principal.png'),
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
        titulo: 'Prueba de jarras',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de resultados agua cruda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Lineamientos técnicos de agua potable y saneamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cloración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Unidades de medida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Normatividad de calidad de agua',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      texto: 'Resolución 0330, 8 de junio del 2017.',
      tipo: 'Resolución',
      descarga: '/downloads/Resolucion_0330-2017.pdf',
    },
    {
      texto:
        'ALAC Cajamarca. Proceso de cloración de sistemas de agua potable. 18 de dic. 2020. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AqJ9HY-gqsE',
    },
  ],
  glosario: [
    {
      termino: 'Calidad del agua',
      significado:
        'Es el resultado entre la comparación de las características presentes en el agua contra los parámetros que están contenidos en las normas que regulan el agua potable. ',
    },
    {
      termino: 'Cloración del agua',
      significado:
        'Es el proceso por el cual se desinfecta el agua utilizando cloro o compuestos clorados. ',
    },
    {
      termino: 'Desinfección',
      significado:
        'En este proceso se eliminan todos aquellos organismos patógenos que se encuentren presentes en el agua. ',
    },
    {
      termino: 'Muestreo',
      significado:
        'Es el proceso por el cual se toma una muestra para ser analizada en un laboratorio y así obtener información sobre la calidad del agua en un área específica.',
    },
    {
      termino: 'Prueba de jarras',
      significado:
        'Es un ensayo de laboratorio que permite simular las etapas de coagulación – floculación para realizar dicha selección de los químicos adecuados y obtener una determinada calidad de agua final. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Castañeda, Mónica; Bernal, Lina. Trabajo de Grado. Establecer la demanda de cloro en el acueducto tribunas Córcega de la ciudad de Pereira. Pereira, 2008. Obtenido de internet el 4 de noviembre de 2021. ',
      link: 'https://core.ac.uk/download/pdf/71396109.pdf',
    },
    {
      referencia:
        'ISA, Ingeniería y Servicios Ambientales. Prueba de Jarras. Obtenido de internet el 3 de nov. de 21. ',
      link: 'https://isa.ec/prueba-de-jarras/',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. Nov,2000. REGLAMENTO TÉCNICO DEL SECTOR DE AGUA POTABLE Y SANEAMIENTO BÁSICO, RAS. Obtenido de internet el 8 de noviembre de 21. ',
      link: 'https://procurement-notices.undp.org/view_file.cfm?doc_id=16483',
    },
    {
      referencia:
        'SENA, Programa de capacitación y certificación del sector de agua potable y saneamiento básico. Obtenido de internet el 8 de noviembre de 2021. ',
      link:
        'https://repositorio.sena.edu.co/sitios/calidad_del_agua/index.html#',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Julián Ardila',
        cargo: 'Instructor',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital.',
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
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
