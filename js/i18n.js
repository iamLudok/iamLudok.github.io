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
      about_text:  `Hi! I'm <strong>Luken Iriondo Bilbao</strong>, also known as <strong>iamLudok</strong>. I'm passionate about AI, privacy and building things on my own. Highly motivated by agentic AI and constantly curious about the latest trends in frameworks, models and architectures.`,

      interests_title: 'interests',
      interest_dj:     'DJ & Producer',

      skills_title:      'skills',
      skills_ai:         'AI & LLMs',
      skills_research:   'Frameworks & Tools',
      skills_eval:       'Evaluation & Observability',
      skills_data:       'Data & Analysis',
      skills_design:     'Design & Creative Systems',
      skills_infra:      'Infrastructure & DevOps',
      skills_cyber:      'Cybersecurity',
      skills_webdev:     'Development',
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
      filter_private:           'Private',
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

      drawer_why:     'Why I built it',
      drawer_learned: 'What I learned',
      private_note:   'This project is finished but kept private. The documents it works with contain personal information from real people — making them publicly accessible without their consent would be both a legal and an ethical problem.',

      project_ludext_story:          'I wanted one place to pull together everything I care about in the morning — my wishlist, shopping list, medication reminders, today\'s events — without relying on Google, Alexa, or any cloud service. Everything runs locally on a Raspberry Pi through Nextcloud. The only remaining dependency is Gmail, which is still on the migration list.',
      project_ludext_tags:           'Python, Raspberry Pi, API, LLMs, Docker, Git, NextCloud, Telegram, Ollama',
      project_ludext_learned:        'self-hosting, local ai, efficiency',

      project_aibookmarks_story:     'Everyone saves their go-to links in the browser bar, but the AI space moves too fast for that to work. There are hundreds of tools launching every week — most of them noise. I wanted a curated space where people could actually find something useful for what they need, tested and recommended by me. I\'m also increasingly adding tools focused on privacy and digital autonomy, which reflects where my own interests are heading.',
      project_aibookmarks_tags:      'HTML, CSS, JS, Git',
      project_aibookmarks_learned:   'trend tracking',

      project_teknoa_story:          'I noticed that almost every event poster in the Basque Country was being uploaded to Instagram — but each DJ to their own account. If you didn\'t follow the right people, you\'d simply miss the event. I created an Instagram page so that anyone into electronic music in the Basque Country could have one place to check what\'s on this weekend, no matter who\'s playing. Then I realised I wanted to do more — DJ profiles, venues, email alerts, maps. Instagram wasn\'t built for that, so I built the website.',
      project_teknoa_tags:           'JS, CSS, Git, Astro, TypeScript',
      project_teknoa_learned:        'community, content management, full-stack',

      project_skai_story:            'At HackUPC, each sponsor presented their challenge. Skyscanner\'s caught our attention: "design a next-generation, AI-powered travel experience that truly understands traveller intent, cuts through complexity, and helps people make confident, informed decisions." We started from scratch — a React frontend styled after Skyscanner\'s own colours, with the classic search bar, a chat interface, an interactive map, and destination cards. From there we kept layering complexity: a LangGraph agentic backend, RAG over destination data stored in ChromaDB, short and long-term memory to personalise across the conversation, vibe-based matching across 11 emotional dimensions scored by compatibility, price, travel history and novelty. The AI models ran on Azure AI Foundry, with FastAPI and MongoDB powering the rest. 36 hours, 3-person team, built from zero.',
      project_skai_tags:             'Python, FastAPI, LangGraph, API, Git, LangChain, Short-term / Long-term Memory, LLMs, RAG, Azure AI Foundry, MongoDB, ChromaDB, Docker, Git, React',
      project_skai_learned:          'agentic ai, rapid prototyping',

      project_musicgenre_story:      'As a DJ I\'ve accumulated thousands of tracks across hard drives with no consistent naming or structure. Organizing them manually would take weeks. I wanted a system that could do it automatically.',
      project_musicgenre_tags:       'Python, Git, ML, Audio',
      project_musicgenre_learned:    'audio processing, ml classification',

      project_visualizer_story:      'I play live sets and wanted visuals that actually react to the music in real time — not pre-rendered loops, but something that moves with the energy of the moment.',
      project_visualizer_tags:       'Python, Git, ML, Audio, Video',
      project_visualizer_learned:    'fft, live performance',

      project_jaialai_story:         'I played cesta punta for years, but the real expert in my family is my grandfather — a lifelong fanatic who has even written books about the sport. Over the decades he\'s collected an enormous amount of information that exists nowhere else: interviews with players, historical records, personal notes gathered through years of research. When I started building RAG-based chatbots, I knew exactly what I wanted to do with that knowledge. I built him a tool where he can ask questions in plain language and get answers from his own documents — hundreds of pages that would otherwise take hours to search through manually.',
      project_jaialai_tags:          'Python, LLMs, RAG, KG, Short-term / Long-term Memory, LangChain, LangGraph, Git, API, Streamlit, Docker, Docling, Qdrant, Neo4j, MongoDB',
      project_jaialai_learned:       'agentic ai, unique knowledge',

      project_claudetemplate_story:  'Every time I started a new project with Claude Code I was repeating the same setup. CLAUDE.md, hooks, permissions, folder structure — always the same. This template is what I wish had existed from day one.',
      project_claudetemplate_tags:   'Git, Claude Code',
      project_claudetemplate_learned:'workflow design, efficiency',

      project_playlist_story:        'I keep playlists on both Spotify and SoundCloud but I need WAV files for DJ sets. Downloading track by track was tedious. I wanted a tool that handled entire playlists in one command.',
      project_playlist_tags:         'Python, API, Git, SoundCloud, Spotify, YouTube',
      project_playlist_learned:      'batch processing, audio conversion',

      project_secondbrain_story:     'Notes scattered across apps, ideas I\'d never revisit, knowledge I\'d look up twice. I built a system in Obsidian with Claude Code that actually connects things instead of just storing them.',
      project_secondbrain_tags:      'LLMs, Git, Obsidian, Claude Code',
      project_secondbrain_learned:   'knowledge management, ai workflows',

      project_gluteina_story:        'A close friend has celiac disease. Finding safe restaurants while travelling is genuinely stressful — no reliable source exists. We built this during a project sprint to make that search easier.',
      project_gluteina_tags:         'PostgreSQL, Docker, CSS, JS, Git, Leaflet',
      project_gluteina_learned:      'community, full-stack',

      project_hackupc_tags:          '36h',
      project_thegame_tags:          'Forensics, Web, Crypto, Data, Miscellaneous, Steganography',
      project_ikerlan_tags:          'Crypto, Reversing, Web, Forensics, Hardware, Miscellaneous, Operational Technology, Machine Learning',

      project_with: 'with',

      link_live:    'Live',
      link_project: 'Project',

      visitor_challenge_title: 'your_turn',
      visitor_challenge_desc:  "I've hidden 4 easter eggs somewhere on this page. Think you can find them all?",

      ctf_board_title: 'secret_challenges',
      ctf_hint_1:      '"some words trigger reactions"',
      ctf_hint_2:      '"visit = consent"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 in the pocket"',
      ctf_all_solved:  '> gg. you found them all.',
      ctf_reset:       '[ reset ]',

      challenges_title:       'challenges',
      challenge_ikerlan_date: '2025',
      challenge_ikerlan_sub:  'Ikerlan · Basque Country',
      challenge_ikerlan_desc: 'My first CTF. Ended up going solo - tackled a bit of everything across categories. A good intro to the mindset.',
      challenge_hackupc_date: 'Apr 2026',
      challenge_hackupc_sub:  'Universitat Politècnica de Catalunya · Barcelona',
      challenge_hackupc_desc: '36h hackathon at Universitat Politècnica de Catalunya, Barcelona.',
      challenge_thegame_date: 'Apr 2026',
      challenge_thegame_sub:  'HackUPC 2026 · Barcelona',
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
      about_text:  '¡Hola! Soy <strong>Luken Iriondo Bilbao</strong>, también conocido como <strong>iamLudok</strong>. Me apasiona la IA, la privacidad y construir cosas por mi cuenta. Alta motivación por la IA agéntica y curiosidad constante por las últimas tendencias en frameworks, modelos y arquitecturas.',

      interests_title: 'intereses',
      interest_dj:     'DJ y Productor',

      skills_title:      'habilidades',
      skills_ai:         'IA y LLMs',
      skills_research:   'Frameworks y Herramientas',
      skills_eval:       'Evaluación y Observabilidad',
      skills_data:       'Datos y Análisis',
      skills_design:     'Diseño y Sistemas Creativos',
      skills_infra:      'Infraestructura & DevOps',
      skills_cyber:      'Ciberseguridad',
      skills_webdev:     'Desarrollo',
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
      filter_private:           'Privado',
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

      drawer_why:     'Por qué lo hice',
      drawer_learned: 'Qué aprendí',
      private_note:   'Este proyecto está terminado pero es privado. Los documentos con los que trabaja contienen información personal de personas reales — hacerlos públicamente accesibles sin su consentimiento sería un problema legal y ético.',

      project_ludext_story:          'Quería tener en un solo sitio todo lo que me importa por la mañana — mi wishlist, lista de la compra, recordatorios de medicación, eventos del día — sin depender de Google, Alexa ni ningún servicio en la nube. Todo corre en local sobre una Raspberry Pi a través de Nextcloud. La única dependencia que queda pendiente es Gmail, que sigue en la lista de migración.',
      project_aibookmarks_story:     'Todo el mundo guarda sus enlaces favoritos en la barra del navegador, pero el mundo de la IA se mueve demasiado rápido para que eso funcione. Cada semana aparecen cientos de herramientas nuevas — la mayoría ruido. Quería un espacio curado donde la gente pudiera encontrar algo realmente útil para lo que necesita, probado y recomendado por mí. Además, cada vez añado más herramientas enfocadas en privacidad y autonomía digital, que es hacia donde van mis propios intereses.',
      project_teknoa_story:          'Me di cuenta de que casi todos los carteles de eventos del País Vasco se subían a Instagram — pero cada DJ al suyo. Si no seguías a las personas adecuadas, simplemente no te enterabas. Creé una cuenta de Instagram para que cualquiera al que le guste la electrónica en Euskal Herria tuviera un sitio donde ver qué hay este finde, independientemente de quién pinche. Luego quise hacer más cosas: perfiles de DJs, recintos, avisos al correo, mapas. Instagram se quedaba corto, así que creé la página web.',
      project_skai_story:            'En la HackUPC, cada sponsor presentó su reto. El de Skyscanner nos enganchó: "diseña una experiencia de viaje de nueva generación con IA que entienda de verdad la intención del viajero, reduzca la complejidad y ayude a tomar decisiones con confianza." Empezamos desde cero — un frontend en React inspirado en los propios colores de Skyscanner, con el buscador clásico, un chat, un mapa interactivo y tarjetas de destinos. A partir de ahí fuimos añadiendo complejidad: un backend agéntico con LangGraph, RAG sobre datos de destinos almacenados en ChromaDB, memoria a corto y largo plazo para personalizar la conversación, y compatibilidad de vibes en 11 dimensiones emocionales puntuada por afinidad, precio, historial y novedad. Los modelos de IA corrían sobre Azure AI Foundry, con FastAPI y MongoDB detrás. 36 horas, equipo de 3, desde cero.',
      project_musicgenre_story:      'Como DJ he acumulado miles de canciones en diferentes discos sin estructura ni nombre consistente. Organizarlas a mano llevaría semanas. Quería un sistema que lo hiciera solo.',
      project_visualizer_story:      'Toco sets en directo y quería visuales que reaccionaran a la música en tiempo real — no loops pregrabados, sino algo que se moviera con la energía del momento.',
      project_jaialai_story:         'Yo jugué a cesta punta durante muchos años, pero el verdadero experto en mi familia es mi abuelo — un fanático de toda la vida que incluso ha escrito libros sobre el deporte. A lo largo de décadas ha recopilado una cantidad enorme de información que no existe en ningún otro sitio: entrevistas con pelotaris, registros históricos, notas personales fruto de años de investigación. Cuando empecé a construir chatbots basados en RAG, supe exactamente qué quería hacer con ese conocimiento. Le construí una herramienta donde puede preguntar en lenguaje natural y obtener respuestas de sus propios documentos — cientos de páginas que de otra forma llevarían horas de búsqueda manual.',
      project_claudetemplate_story:  'Cada vez que empezaba un proyecto nuevo con Claude Code repetía la misma configuración. CLAUDE.md, hooks, permisos, estructura de carpetas — siempre lo mismo. Esta plantilla es lo que me hubiera gustado tener desde el primer día.',
      project_playlist_story:        'Tengo playlists en Spotify y SoundCloud pero necesito archivos WAV para los sets. Descargar pista a pista era tedioso. Quería una herramienta que gestionara playlists enteras con un solo comando.',
      project_secondbrain_story:     'Notas dispersas en varias apps, ideas que nunca revisitaría, conocimiento que buscaría dos veces. Construí un sistema en Obsidian con Claude Code que conecta las cosas en lugar de simplemente almacenarlas.',
      project_gluteina_story:        'Una persona cercana tiene celiaquía. Encontrar restaurantes seguros viajando es un estrés real — no existe una fuente fiable. Lo construimos durante un sprint de proyecto para hacer esa búsqueda más fácil.',

      project_with: 'con',

      link_live:    'Demo',
      link_project: 'Proyecto',

      visitor_challenge_title: 'tu_turno',
      visitor_challenge_desc:  'He escondido 4 easter eggs en algún lugar de esta página. ¿Crees que puedes encontrarlos todos?',

      ctf_board_title: 'retos_secretos',
      ctf_hint_1:      '"algunas palabras desencadenan reacciones"',
      ctf_hint_2:      '"visitar = consentir"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 en el bolsillo"',
      ctf_all_solved:  '> gg. los encontraste todos.',
      ctf_reset:       '[ reiniciar ]',

      challenges_title:       'retos',
      challenge_ikerlan_date: '2025',
      challenge_ikerlan_sub:  'Ikerlan · País Vasco',
      challenge_ikerlan_desc: 'Mi primer CTF. Acabé participando en solitario, cubrí un poco de todo entre las categorías. Una buena introducción a los CTF-s.',
      challenge_hackupc_date: 'Abr 2026',
      challenge_hackupc_sub:  'Universitat Politècnica de Catalunya · Barcelona',
      challenge_hackupc_desc: 'Hackathon de 36h en la Universitat Politècnica de Catalunya, Barcelona.',
      challenge_thegame_date: 'Abr 2026',
      challenge_thegame_sub:  'HackUPC 2026 · Barcelona',
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
    return translations[currentLang]?.[key] ?? translations.en?.[key] ?? key;
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
