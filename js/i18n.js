/* =============================================
   iamLudok Portfolio - i18n.js
   ============================================= */

(function () {
  const translations = {
    en: {
      nav_me:         'Me',
      nav_projects:   'Projects',
      nav_challenges: 'Challenges',
      nav_experience: 'Studies & Experience',
      nav_links:      'Links',

      hero_sub:      'Computer Engineering Student · AI & ML Enthusiast · DJ & Producer as Ludok',
      hero_location: 'Markina-Xemein, Basque Country',

      about_title: 'about_me',
      about_text:  `Hi! I'm <strong>Luken Iriondo Bilbao</strong>, also known as <strong>iamLudok</strong>. I'm passionate about AI, privacy and building things on my own.`,

      interests_title: 'interests',
      interest_dj:     'DJ & Producer',

      skills_title:      'skills',
      skills_ai:         'AI & ML',
      skills_research:   'Research & Experimentation Stack',
      skills_data:       'Data Analysis & Visualization',
      skills_design:     'Design & Creative Systems',
      skills_infra:      'Infrastructure & DevOps',
      skills_cyber:      'Cybersecurity',
      skills_webdev:     'Web Dev',
      skills_db:         'Databases',
      skills_relational: 'Relational',
      skills_nosql:      'NoSQL',
      skills_graph:      'Graph',
      skills_vector:     'Vector',

      views_title:        'views',
      views_privacy_tag:  'Privacy & Data',
      views_privacy_text: `Our data is one of our most valuable assets and we hand it over to corporations without a second thought. I believe in self-hosting, owning your infrastructure, and being conscious of what you store and how. Depending on others for your own data is a vulnerability, not a convenience.`,
      views_ai_tag:       'AI Responsibility',
      views_ai_text:      `AI is one of the most powerful tools we have right now and that's exactly why we need to understand what we're building. Shipping code you don't understand to a client isn't a shortcut, it's a risk. If everyone builds things they can't explain, we're heading somewhere bad. Read the code. Know what it does.`,

      projects_title:           'projects',
      filter_all:               'All',
      filter_dev:               'Active',
      filter_hackathon:         'Hackathon',
      filter_wip:               'WIP',
      project_ludext_desc:      'Self-hosted morning assistant running on a Raspberry Pi. Collects emails, calendar events, tasks and news from your own infrastructure, summarizes everything with a local AI model, and sends a Telegram digest before you start your day.',
      project_aibookmarks_desc: 'My selection of free or freemium AI tools. Tested and recommended.',
      project_teknoa_desc:      'Community platform for electronic music in the Basque Country. One place for all events, venues, vinyl shops, radio stations and DJ collectives from the local scene.',
      project_musicgenre_desc:  'Automated music organization system that classifies and groups large song libraries by genre using ML and audio processing.',
      project_visualizer_desc:  'Real-time visual generator for DJs and live performances, reacting to audio input.',
      project_skai_desc:        'AI travel companion that turns emotional intent into real, ranked flight options. Vibe-based matching across 11 dimensions, scored by compatibility, price, history, and novelty.',
      project_jaialai_desc:     'AI chatbot with specialized knowledge about Jai Alai sport and culture.',
      project_gluteina_desc:       'Platform focused on people with celiac disease, helping them find safe places to eat when travelling or dining out.',
      project_secondbrain_desc:    'Personal knowledge management system built with Obsidian and Claude Code. AI-assisted note-taking, linking, and retrieval.',
      project_claudetemplate_desc: 'Boilerplate template to accelerate development workflows with Claude Code.',
      project_playlist_desc:    'Batch download tool for SoundCloud and Spotify playlists via YouTube, outputting WAV files.',

      project_with: 'with',

      link_live:    'Live',
      link_website: 'Website',
      link_project: 'Project',

      tag_ai:         'AI',
      tag_selfhosted: 'Self-hosted',
      tag_community:  'Community',
      tag_music:      'Music',
      tag_basquecountry: 'Basque Country',
      tag_devtools:   'Dev Tools',
      tag_crypto:     'Crypto',
      tag_reversing:  'Reversing',
      tag_forensics:  'Forensics',
      tag_misc:       'Miscellaneous',
      tag_ot:         'Operational Technology',

      visitor_challenge_title: 'your_turn',
      visitor_challenge_desc:  "I've hidden 4 easter eggs somewhere on this page. Think you can find them all?",

      ctf_board_title: 'secret_challenges',
      ctf_hint_1:      '"some words trigger reactions"',
      ctf_hint_2:      '"visit = consent"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 in the pocket"',
      ctf_all_solved:  '> gg. you found them all.',

      challenges_title:       'challenges',
      challenge_ikerlan_desc: 'My first CTF. Ended up going solo - tackled a bit of everything across categories. A good intro to the mindset.',
      challenge_hackupc_desc: '36h hackathon at Universitat Politècnica de Catalunya, Barcelona.',
      challenge_thegame_desc: 'CTF competition held during HackUPC 2026. Writeups for the challenges I solved.',

      experience_title: 'studies_&_experience',
      edu_heading:      'Education',
      work_heading:     'Experience',

      edu1_date:  '2026/09 – Soon',
      edu1_title: "Master's Degree on Artificial Intelligence",
      edu1_desc:  'Incoming - spot already reserved. Next step after finishing my Computer Engineering degree.',
      edu2_date:  '2022/09 – Present',
      edu2_title: 'Computer Engineering Degree',
      edu2_desc:  'Currently in my 4th year. Focused on databases, security and AI.',

      work1_date:  '2025/09 – Present',
      work1_title: 'Researcher',
      work1_desc:  "Bachelor's thesis. Development of a cognitive AI-powered search system.",
      work2_date:  '2024/09 – 2025/07',
      work2_title: 'Researcher',
      work2_desc:  'Built an LLM-based system allowing non-technical users to query databases and extract knowledge intuitively.',
      work3_date:  '2023/10 – 2024/07',
      work3_title: 'Project Assistant',
      work3_desc:  'Developed a logistics system to automate a pallet and container warehouse for an industrial client.',

      links_title: 'find_me',
      links_intro: 'Want to connect, collaborate, or just say hi?',
      cal_name: 'Book a Meeting',

      secrets_hint:      '4 secrets hidden somewhere in this page',
      paranoid_msg:      '<span class="paranoid-accent">Your data.</span><br>Your rules.',
      tracking_cmd:      '$ ./expose.sh',
      tracking_ip:       '  IP Address  : ',
      tracking_os:       '  OS          : ',
      tracking_browser:  '  Browser     : ',
      tracking_lang:     '  Language    : ',
      tracking_tz:       '  Timezone    : ',
      tracking_res:      '  Resolution  : ',
      tracking_footer1:  '  This is what every website sees.',
      tracking_footer2:  '  Think about it.',
    },

    es: {
      nav_me:         'Yo',
      nav_projects:   'Proyectos',
      nav_challenges: 'Retos',
      nav_experience: 'Estudios & Experiencia',
      nav_links:      'Enlaces',

      hero_sub:      'Estudiante de Ingeniería Informática · Entusiasta de IA & ML · DJ & Productor como Ludok',
      hero_location: 'Markina-Xemein, País Vasco',

      about_title: 'sobre_mí',
      about_text:  '¡Hola! Soy <strong>Luken Iriondo Bilbao</strong>, también conocido como <strong>iamLudok</strong>. Me apasiona la IA, la privacidad y construir cosas por mi cuenta.',

      interests_title: 'intereses',
      interest_dj:     'DJ y Productor',

      skills_title:      'habilidades',
      skills_ai:         'IA y ML',
      skills_research:   'Stack de Investigación y Experimentación',
      skills_data:       'Análisis y Visualización de Datos',
      skills_design:     'Diseño y Sistemas Creativos',
      skills_infra:      'Infraestructura & DevOps',
      skills_cyber:      'Ciberseguridad',
      skills_webdev:     'Desarrollo Web',
      skills_db:         'Bases de Datos',
      skills_relational: 'Relacional',
      skills_nosql:      'NoSQL',
      skills_graph:      'Grafo',
      skills_vector:     'Vectorial',

      views_title:        'opiniones',
      views_privacy_tag:  'Privacidad & Datos',
      views_privacy_text: 'Nuestros datos son uno de nuestros activos más valiosos y sin embargo los cedemos a las corporaciones sin pensarlo dos veces. Creo en el autoalojamiento, en ser dueño de tu infraestructura y en ser consciente de qué almacenas y cómo. Depender de otros para gestionar tus propios datos es una vulnerabilidad, no una comodidad.',
      views_ai_tag:       'Responsabilidad con la IA',
      views_ai_text:      'La IA es una de las herramientas más poderosas que tenemos ahora mismo y precisamente por eso necesitamos entender lo que estamos construyendo. Entregar código que no entiendes a un cliente no es un atajo, es un riesgo. Si todo el mundo construye cosas que no puede explicar, vamos por mal camino. Lee el código.',

      projects_title:           'proyectos',
      filter_all:               'Todos',
      filter_dev:               'Activos',
      filter_hackathon:         'Hackathon',
      filter_wip:               'WIP',
      project_ludext_desc:      'Asistente matutino autoalojado que corre en una Raspberry Pi. Recopila correos, eventos del calendario, tareas y noticias desde tu propia infraestructura, resume todo con un modelo de IA local y envía un resumen por Telegram antes de empezar el día.',
      project_aibookmarks_desc: 'Mi selección de herramientas de IA gratuitas o freemium. Probadas y recomendadas.',
      project_teknoa_desc:      'Plataforma comunitaria de música electrónica del País Vasco. Un único lugar para eventos, locales, tiendas de vinilos, radios y colectivos de DJs de la escena local.',
      project_musicgenre_desc:  'Sistema de organización musical automatizado que clasifica y agrupa grandes bibliotecas de canciones por género usando ML y procesamiento de audio.',
      project_visualizer_desc:  'Generador de visuales en tiempo real para DJs y actuaciones en directo, reactivo al audio.',
      project_skai_desc:        'Asistente de viaje con IA que convierte la intención emocional en opciones de vuelo reales y ordenadas. Compatibilidad de vibes en 11 dimensiones, puntuada por afinidad, precio, historial y novedad.',
      project_jaialai_desc:     'Chatbot de IA con conocimiento especializado sobre el deporte y la cultura del Jai Alai.',
      project_gluteina_desc:       'Plataforma enfocada en personas celíacas, ayudándoles a encontrar sitios donde comer de forma segura cuando viajan o comen fuera.',
      project_secondbrain_desc:    'Sistema personal de gestión del conocimiento construido con Obsidian y Claude Code. Toma de notas, enlazado y recuperación asistidos por IA.',
      project_claudetemplate_desc: 'Plantilla base para acelerar flujos de trabajo de desarrollo con Claude Code.',
      project_playlist_desc:    'Herramienta de descarga masiva de playlists de SoundCloud y Spotify vía YouTube, generando archivos WAV.',

      project_with: 'con',

      link_live:    'Demo',
      link_website: 'Web',
      link_project: 'Proyecto',

      tag_ai:         'IA',
      tag_selfhosted: 'Autoalojado',
      tag_community:  'Comunidad',
      tag_music:      'Música',
      tag_basquecountry: 'País Vasco',
      tag_devtools:   'Herramientas Dev',
      tag_crypto:     'Criptografía',
      tag_reversing:  'Ingeniería Inversa',
      tag_forensics:  'Forense',
      tag_misc:       'Miscelánea',
      tag_ot:         'Tecnología Operacional',

      visitor_challenge_title: 'tu_turno',
      visitor_challenge_desc:  'He escondido 4 easter eggs en algún lugar de esta página. ¿Crees que puedes encontrarlos todos?',

      ctf_board_title: 'retos_secretos',
      ctf_hint_1:      '"algunas palabras desencadenan reacciones"',
      ctf_hint_2:      '"visitar = consentir"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 en el bolsillo"',
      ctf_all_solved:  '> gg. los encontraste todos.',

      challenges_title:       'retos',
      challenge_ikerlan_desc: 'Mi primer CTF. Acabé participando en solitario, cubrí un poco de todo entre las categorías. Una buena introducción a los CTF-s.',
      challenge_hackupc_desc: 'Hackathon de 36h en la Universitat Politècnica de Catalunya, Barcelona.',
      challenge_thegame_desc: 'Competición CTF celebrada durante el HackUPC 2026. Writeups de los retos que resolví.',

      experience_title: 'estudios_y_experiencia',
      edu_heading:      'Formación',
      work_heading:     'Experiencia',

      edu1_date:  '2026/09 – Próximamente',
      edu1_title: 'Máster en Inteligencia Artificial',
      edu1_desc:  'Próximo - plaza ya reservada. Siguiente paso tras terminar el Grado en Ingeniería Informática.',
      edu2_date:  '2022/09 – Actualidad',
      edu2_title: 'Grado en Ingeniería Informática',
      edu2_desc:  'Actualmente en 4.º año. Especializado en bases de datos, seguridad e IA.',

      work1_date:  '2025/09 – Actualidad',
      work1_title: 'Investigador',
      work1_desc:  'Trabajo de fin de grado. Desarrollo de un sistema de búsqueda cognitivo impulsado por IA.',
      work2_date:  '2024/09 – 2025/07',
      work2_title: 'Investigador',
      work2_desc:  'Desarrollé un sistema basado en LLM que permite a usuarios no técnicos consultar bases de datos y extraer conocimiento de forma intuitiva.',
      work3_date:  '2023/10 – 2024/07',
      work3_title: 'Asistente de Proyectos',
      work3_desc:  'Desarrollé un sistema logístico para automatizar un almacén de palés y contenedores para un cliente industrial.',

      links_title: 'encuéntrame',
      links_intro: '¿Quieres conectar, colaborar o simplemente saludar?',
      cal_name: 'Reservar una Reunión',

      secrets_hint:     '4 secretos escondidos en algún lugar de esta página',
      paranoid_msg:     '<span class="paranoid-accent">Tus datos.</span><br>Tus reglas.',
      tracking_cmd:     '$ ./expose.sh',
      tracking_ip:      '  Dir. IP      : ',
      tracking_os:      '  SO           : ',
      tracking_browser: '  Navegador    : ',
      tracking_lang:    '  Idioma       : ',
      tracking_tz:      '  Zona horaria : ',
      tracking_res:     '  Resolución   : ',
      tracking_footer1: '  Esto es lo que ve cada página web.',
      tracking_footer2: '  Piénsalo.',
    },
  };

  const saved      = localStorage.getItem('lang');
  const browserEs  = navigator.language && navigator.language.startsWith('es');
  let currentLang  = saved || (browserEs ? 'es' : 'en');

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
  }

  function apply(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = translations[lang][el.dataset.i18n];
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = translations[lang][el.dataset.i18nHtml];
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }

  function initToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => apply(currentLang === 'en' ? 'es' : 'en'));
    apply(currentLang);
  }

  initToggle();

  globalThis.i18n = { t, apply, getLang: () => currentLang };
})();
