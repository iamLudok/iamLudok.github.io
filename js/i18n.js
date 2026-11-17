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
      skip_link:      'Skip to content',

      hero_sub:      'Computer Engineer · AI & ML Enthusiast · DJ & Producer as Ludok',
      hero_location: 'Markina-Xemein, Basque Country',
      intro_sub: 'AI · privacy · DJ as Ludok',
      intro_enter: 'enter',
      intro_keys: 'scroll · click · enter',

      about_title: 'about_me',
      about_text:  `Hi! I'm <strong>Luken Iriondo Bilbao</strong>, also known as <strong>iamLudok</strong>. I'm passionate about AI, privacy and building things on my own. Highly motivated by agentic AI and constantly curious about the latest trends in frameworks, models and architectures.`,

      interests_title: 'interests',
      interest_dj:     'DJ & Producer',

      skills_title:      'skills',
      skills_graph_link: 'view as graph →',
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
      oss_heading:              'open_source',
      others_heading: 'other_projects',
      badge_teknoa: 'Web · live',
      badge_ludokapps: '8 Android apps',
      oss_usageoverlay_desc:    'Contributor to usage-overlay, a floating click-through Windows overlay that tracks Claude, Codex, Cursor & OpenCode usage. Merged a large PR: configurable overlay, a Copilot section, a provider/threading refactor, bug fixes and UI polish.',
      oss_usageoverlay_linux_desc: 'Ported usage-overlay to Linux as a GNOME Shell extension: since Wayland has no click-through overlays, it lives in the top panel, with one glyph and percentage per tool. Adds Devin / Windsurf quota, Ollama Cloud usage and Claude token counts. Merged, and published on extensions.gnome.org.',
      project_aibookmarks_desc: 'My selection of free or freemium AI tools. Tested and recommended.',
      project_teknoa_desc:      'Community platform for electronic music in the Basque Country. One place for all events, venues, vinyl shops, radio stations and DJ collectives from the local scene.',
      project_skai_desc:        'AI travel companion that turns emotional intent into real, ranked flight options. Vibe-based matching across 11 dimensions, scored by compatibility, price, history, and novelty.',
      project_elkano_desc:      'Financial health platform for companies, built at HackSpain 2026 for Embat\'s challenge. Turns banking movements and invoice data into a 0-100 financial stress score, then offers a credit marketplace, continuous credit insurance and cash pooling on top of it.',
      project_habewiki_desc:     'Study wiki for the HABE C1 Basque exam, focused on the writing section. Collects structural frameworks, discourse markers, model essays, commonly confused words, and an AI prompt that grades a text on appropriateness, coherence, cohesion, richness and correctness.',
      project_teknoa_tagline: 'The whole Basque electronic music scene in one place.',
      project_ludokapps_tagline: 'Local-first, no accounts: your data lives on your phone.',
      project_elkano_tagline: 'Financial stress score validated on 1,286 companies.',
      project_skai_tagline: 'An AI agent that turns how you feel into flights.',
      project_habewiki_tagline: 'Study wiki for the HABE C1 Basque exam, with an AI prompt that grades essays.',
      project_ludokkick_tagline: '1v1 arcade football where big-headed DJs play to the beat.',
      project_ludokkick_desc: '1v1 arcade football for Android where big-headed DJs play to the beat: hit on the kick drum for stronger shots, every goal is a drop. Rival ladder, badges, upgrades. Expo + Skia, music synthesized live, local-first.',
      project_ludokkick_tags: 'Expo, React Native, TypeScript, Skia, Web Audio, SQLite, Git',
      project_downloader_tagline: 'Download Spotify and SoundCloud playlists as tagged MP3 or WAV, no API keys needed.',
      project_downloader_desc: 'Download Spotify and SoundCloud playlists, albums and tracks as tagged MP3 or WAV files, from a local web interface or the command line. No API keys needed.',
      project_downloader_story: 'I keep playlists on both Spotify and SoundCloud but I need WAV files for DJ sets. Downloading track by track was tedious. I wanted a tool that handled entire playlists in one command.',
      project_downloader_tags: 'Python, Flask, yt-dlp, JavaScript, HTML, CSS, Git',
      project_ludokapps_desc: 'Eight free, open-source Android apps: series and books, visited countries, restaurants, cards and tickets, the friend group, music from my own server, the house and Monster cans. No accounts, no ads: your data lives on your phone.',
      project_ludokapps_story: 'It started when TV Time lost my entire history and I realised my data lived on someone else\'s server. Since then, every time an app asked me for an account to do something simple, I built my own: native, local-first, no accounts. There are eight now, all on the same base: Expo, React Native and SQLite.',
      project_ludokapps_tags: 'Expo, React Native, TypeScript, SQLite, Drizzle, Nextcloud, Python, Raspberry Pi, Docker, Git',
      project_ludokapps_learned: 'native android apps, local-first design, self-hosted backups',

      drawer_why:     'Why I built it',
      drawer_learned: 'What I learned',
      private_note:   'This project is finished but kept private for now.',


      project_aibookmarks_story:     'Everyone saves their go-to links in the browser bar, but the AI space moves too fast for that to work. There are hundreds of tools launching every week, most of them noise. I wanted a curated space where people could actually find something useful for what they need, tested and recommended by me. I\'m also increasingly adding tools focused on privacy and digital autonomy, which reflects where my own interests are heading.',
      project_aibookmarks_tags:      'HTML, CSS, JS, Git',
      project_aibookmarks_learned:   'trend tracking',

      project_teknoa_story:          'I noticed that almost every event poster in the Basque Country was being uploaded to Instagram, but each DJ to their own account. If you didn\'t follow the right people, you\'d simply miss the event. I created an Instagram page so that anyone into electronic music in the Basque Country could have one place to check what\'s on this weekend, no matter who\'s playing. Then I realised I wanted to do more, DJ profiles, venues, email alerts, maps. Instagram wasn\'t built for that, so I built the website.',
      project_teknoa_tags:           'JS, CSS, Git, Astro, TypeScript',
      project_teknoa_learned:        'community, content management, full-stack',

      project_skai_story:            'At HackUPC, each sponsor presented their challenge. Skyscanner\'s caught our attention: "design a next-generation, AI-powered travel experience that truly understands traveller intent, cuts through complexity, and helps people make confident, informed decisions." We started from scratch, a React frontend styled after Skyscanner\'s own colours, with the classic search bar, a chat interface, an interactive map, and destination cards. From there we kept layering complexity: a LangGraph agentic backend, RAG over destination data stored in ChromaDB, short and long-term memory to personalise across the conversation, vibe-based matching across 11 emotional dimensions scored by compatibility, price, travel history and novelty. The AI models ran on Azure AI Foundry, with FastAPI and MongoDB powering the rest. 36 hours, 3-person team, built from zero.',
      project_skai_tags:             'Python, FastAPI, LangGraph, API, LangChain, Short-term / Long-term Memory, LLMs, RAG, Azure AI Foundry, MongoDB, ChromaDB, Docker, Git, React',
      project_skai_learned:          'agentic ai, rapid prototyping',

      project_elkano_story:          'At HackSpain, Embat set the challenge: help companies see financial trouble coming instead of finding out from a missed payment. Elkano scores each company\'s financial stress from 105 variables built on top of banking movements and invoice history, 24 core metrics, trend analysis and 9 stress signals, validated on a dataset of 1,286 companies, 24 months of banking data and 900k invoices, with a Gini coefficient of 0.54 one month out. On top of the score we built three products: a credit marketplace so cash-rich companies can lend to those under stress, continuous credit insurance on receivables with premiums that move with the score, and cash pooling so subsidiaries share group liquidity before going to a bank. Team of five, working from Friday evening to Sunday late morning.',
      project_elkano_tags:           'Next.js, TypeScript, Docker, Vercel, Python, Git',
      project_elkano_learned:        'financial risk scoring, rapid prototyping',












      project_habewiki_story:        'I put this together while preparing the HABE C1 Basque exam, focused on the writing section. I passed.',
      project_habewiki_tags:         'Markdown, AI',
      project_habewiki_learned:      'technical writing, basque C1',

      project_hackspain_tags:        '36h',
      project_hackupc_tags:          '36h',
      project_thegame_tags:          'Forensics, Web, Crypto, Data, Miscellaneous, Steganography',
      project_ikerlan_tags:          'Crypto, Reversing, Web, Forensics, Hardware, Miscellaneous, Operational Technology, Machine Learning',

      project_with: 'with',

      link_live:    'Live',
      link_project: 'Project',
      link_deck:    'Deck',
      link_video:   'Video',
      link_apk:     'Download APK',
      link_apps: 'See the apps',

      visitor_challenge_title: 'your_turn',
      visitor_challenge_desc:  "I've hidden 4 easter eggs somewhere on this page. Think you can find them all?",

      ctf_board_title: 'secret_challenges',
      ctf_hint_1:      '"some words trigger reactions"',
      ctf_hint_2:      '"visit = consent"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 in the pocket"',
      ctf_hint_5:      '"the shell answers to root"',
      ctf_all_solved:  '> gg. you found them all.',
      ctf_reset:       '[ reset ]',

      challenges_title:       'challenges',
      challenge_hackspain_date: 'Sep 2026',
      challenge_hackspain_sub:  'ETSIT UPM, Madrid',
      challenge_hackspain_desc: 'In-person hackathon in Madrid, 36 hours straight, for young builders across five startup-led tracks. Built Elkano, a financial-stress scoring platform, for Embat\'s challenge.',
      challenge_ikerlan_date: '2025',
      challenge_ikerlan_sub:  'Online',
      challenge_ikerlan_desc: 'My first CTF. Ended up going solo - tackled a bit of everything across categories. A good intro to the mindset.',
      challenge_hackupc_date: 'Apr 2026',
      challenge_hackupc_sub:  'UPC, Barcelona',
      challenge_hackupc_desc: '36h hackathon at Universitat Politècnica de Catalunya, Barcelona.',
      challenge_thegame_date: 'Apr 2026',
      challenge_thegame_sub:  'UPC, Barcelona',
      challenge_thegame_desc: 'CTF competition held during HackUPC 2026. Writeups for the challenges I solved.',

      experience_title: 'studies_&_experience',
      edu_heading:      'Education',
      work_heading:     'Experience',

      edu1_date:  '2026/09 - Present',
      edu1_title: "Master's Degree in Applied Artificial Intelligence",
      edu1_desc:  'Started right after finishing my Computer Engineering degree.',
      edu2_date:  '2022/09 - 2026/07',
      edu2_title: 'Computer Engineering Degree',
      edu2_desc:  'Graduated. Focused on databases, security and AI.',

      work1_date:  '2025/09 - Present',
      work1_title: 'Researcher',
      work1_desc:  "Bachelor's thesis. Development of a cognitive AI-powered search system.",
      work2_date:  '2024/09 - 2025/07',
      work2_title: 'Researcher',
      work2_desc:  'Built an LLM-based system allowing non-technical users to query databases and extract knowledge intuitively.',
      work3_date:  '2023/10 - 2024/07',
      work3_title: 'Project Assistant',
      work3_desc:  'Developed a logistics system to automate a pallet and container warehouse for an industrial client.',

      links_title: 'find_me',
      links_intro: 'Want to connect, collaborate, or just say hi?',

      secrets_hint:      '4 secrets hidden somewhere in this page',
      paranoid_msg:      '<span class="paranoid-accent">Your data.</span><br>Your rules.',
      tracking_cmd:      '$ ./expose.sh',
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
      skip_link:      'Saltar al contenido',

      hero_sub:      'Ingeniero Informático · Entusiasta de IA & ML · DJ & Productor como Ludok',
      hero_location: 'Markina-Xemein, País Vasco',
      intro_sub: 'IA · privacidad · DJ como Ludok',
      intro_enter: 'entrar',
      intro_keys: 'scroll · clic · enter',

      about_title: 'sobre_mí',
      about_text:  '¡Hola! Soy <strong>Luken Iriondo Bilbao</strong>, también conocido como <strong>iamLudok</strong>. Me apasiona la IA, la privacidad y construir cosas por mi cuenta. Alta motivación por la IA agéntica y curiosidad constante por las últimas tendencias en frameworks, modelos y arquitecturas.',

      interests_title: 'intereses',
      interest_dj:     'DJ y Productor',

      skills_title:      'habilidades',
      skills_graph_link: 'ver como grafo →',
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
      oss_heading:              'open_source',
      others_heading: 'otros_proyectos',
      badge_teknoa: 'Web · en producción',
      badge_ludokapps: '8 apps Android',
      oss_usageoverlay_desc:    'Colaborador en usage-overlay, un overlay flotante para Windows que muestra el uso de Claude, Codex, Cursor y OpenCode. PR grande fusionado: overlay configurable, sección de Copilot, refactor de proveedores e hilos, corrección de bugs y mejoras de interfaz.',
      oss_usageoverlay_linux_desc: 'Port de usage-overlay a Linux como extensión de GNOME Shell: Wayland no permite overlays que dejen pasar los clics, así que vive en el panel superior, con un icono y un porcentaje por herramienta. Añade la cuota de Devin / Windsurf, el uso de Ollama Cloud y los tokens de Claude. Fusionado y publicado en extensions.gnome.org.',
      project_aibookmarks_desc: 'Mi selección de herramientas de IA gratuitas o freemium. Probadas y recomendadas.',
      project_teknoa_desc:      'Plataforma comunitaria de música electrónica del País Vasco. Un único lugar para eventos, locales, tiendas de vinilos, radios y colectivos de DJs de la escena local.',
      project_skai_desc:        'Asistente de viaje con IA que convierte la intención emocional en opciones de vuelo reales y ordenadas. Compatibilidad de vibes en 11 dimensiones, puntuada por afinidad, precio, historial y novedad.',
      project_elkano_desc:      'Plataforma de salud financiera para empresas, construida en HackSpain 2026 para el reto de Embat. Convierte movimientos bancarios y facturas en una puntuación de estrés financiero de 0 a 100, y encima ofrece un marketplace de crédito, seguro de crédito continuo y cash pooling.',
      project_habewiki_desc:     'Wiki de estudio para el examen HABE C1 de euskera, centrada en la parte escrita. Reúne esquemas de estructura, marcadores del discurso, redacciones modelo, palabras que se confunden con frecuencia y un prompt de IA que evalúa un texto por adecuación, coherencia, cohesión, riqueza y corrección.',
      project_teknoa_tagline: 'Toda la escena electrónica de Euskal Herria en un solo sitio.',
      project_ludokapps_tagline: 'Local-first y sin cuentas: tus datos viven en tu móvil.',
      project_elkano_tagline: 'Score de estrés financiero validado sobre 1.286 empresas.',
      project_skai_tagline: 'Un agente de IA que convierte cómo te sientes en vuelos.',
      project_habewiki_tagline: 'Wiki para preparar el HABE C1 de euskera, con un prompt de IA que corrige redacciones.',
      project_ludokkick_tagline: 'Fútbol arcade 1 contra 1 donde DJs cabezones juegan al ritmo de la música.',
      project_ludokkick_desc: 'Fútbol arcade 1 contra 1 para Android donde DJs cabezones juegan al ritmo: golpea en el bombo para tirar más fuerte y cada gol es un drop. Escalera de rivales, insignias y mejoras. Expo + Skia, música sintetizada en directo, local-first.',
      project_downloader_tagline: 'Descarga playlists de Spotify y SoundCloud en MP3 o WAV etiquetados, sin claves de API.',
      project_downloader_desc: 'Descarga playlists, álbumes y canciones de Spotify y SoundCloud como MP3 o WAV etiquetados, desde una interfaz web local o la línea de comandos. Sin claves de API.',
      project_downloader_story: 'Tengo playlists en Spotify y SoundCloud pero necesito archivos WAV para los sets. Descargar pista a pista era tedioso. Quería una herramienta que gestionara playlists enteras con un solo comando.',
      project_ludokapps_desc: 'Ocho apps para Android, gratis y de código abierto: series y libros, países visitados, restaurantes, tarjetas y entradas, la cuadrilla, música de mi propio servidor, la casa y latas de Monster. Sin cuentas ni anuncios: tus datos viven en tu móvil.',
      project_ludokapps_story: 'Todo empezó cuando TV Time perdió mi historial entero y me di cuenta de que mis datos vivían en el servidor de otro. Desde entonces, cada vez que una app me pedía una cuenta para algo sencillo, me hacía la mía: nativa, local-first y sin cuentas. Ya van ocho, todas sobre la misma base: Expo, React Native y SQLite.',
      project_ludokapps_learned: 'apps android nativas, diseño local-first, copias autoalojadas',

      drawer_why:     'Por qué lo hice',
      drawer_learned: 'Qué aprendí',
      private_note:   'Este proyecto está terminado pero de momento se mantiene privado.',

      project_aibookmarks_story:     'Todo el mundo guarda sus enlaces favoritos en la barra del navegador, pero el mundo de la IA se mueve demasiado rápido para que eso funcione. Cada semana aparecen cientos de herramientas nuevas, la mayoría ruido. Quería un espacio curado donde la gente pudiera encontrar algo realmente útil para lo que necesita, probado y recomendado por mí. Además, cada vez añado más herramientas enfocadas en privacidad y autonomía digital, que es hacia donde van mis propios intereses.',
      project_teknoa_story:          'Me di cuenta de que casi todos los carteles de eventos del País Vasco se subían a Instagram, pero cada DJ al suyo. Si no seguías a las personas adecuadas, simplemente no te enterabas. Creé una cuenta de Instagram para que cualquiera al que le guste la electrónica en Euskal Herria tuviera un sitio donde ver qué hay este finde, independientemente de quién pinche. Luego quise hacer más cosas: perfiles de DJs, recintos, avisos al correo, mapas. Instagram se quedaba corto, así que creé la página web.',
      project_skai_story:            'En la HackUPC, cada sponsor presentó su reto. El de Skyscanner nos enganchó: "diseña una experiencia de viaje de nueva generación con IA que entienda de verdad la intención del viajero, reduzca la complejidad y ayude a tomar decisiones con confianza." Empezamos desde cero, un frontend en React inspirado en los propios colores de Skyscanner, con el buscador clásico, un chat, un mapa interactivo y tarjetas de destinos. A partir de ahí fuimos añadiendo complejidad: un backend agéntico con LangGraph, RAG sobre datos de destinos almacenados en ChromaDB, memoria a corto y largo plazo para personalizar la conversación, y compatibilidad de vibes en 11 dimensiones emocionales puntuada por afinidad, precio, historial y novedad. Los modelos de IA corrían sobre Azure AI Foundry, con FastAPI y MongoDB detrás. 36 horas, equipo de 3, desde cero.',
      project_elkano_story:          'En HackSpain, el reto de Embat era ayudar a las empresas a ver venir los problemas financieros en lugar de enterarse por un impago. Elkano puntúa el estrés financiero de cada empresa a partir de 105 variables construidas sobre movimientos bancarios e historial de facturas, 24 métricas base, análisis de tendencia y 9 señales de estrés, validado sobre un dataset de 1.286 empresas, 24 meses de datos bancarios y 900.000 facturas, con un coeficiente de Gini de 0,54 a un mes vista. Sobre esa puntuación montamos tres productos: un marketplace de crédito para que las empresas con caja presten a las que están en estrés, un seguro de crédito continuo sobre las facturas por cobrar con primas que se mueven con la puntuación, y cash pooling para que las filiales compartan liquidez del grupo antes de acudir a un banco. Equipo de cinco, trabajando desde la tarde del viernes hasta la mañana del domingo.',




      project_habewiki_story:        'Lo monté mientras preparaba el examen HABE C1 de euskera, centrado en la parte escrita. Lo aprobé.',

      project_with: 'con',

      link_live:    'Demo',
      link_project: 'Proyecto',
      link_deck:    'Presentación',
      link_video:   'Vídeo',
      link_apk:     'Descargar APK',
      link_apps: 'Ver las apps',

      visitor_challenge_title: 'tu_turno',
      visitor_challenge_desc:  'He escondido 4 easter eggs en algún lugar de esta página. ¿Crees que puedes encontrarlos todos?',

      ctf_board_title: 'retos_secretos',
      ctf_hint_1:      '"algunas palabras desencadenan reacciones"',
      ctf_hint_2:      '"visitar = consentir"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 en el bolsillo"',
      ctf_hint_5:      '"la shell obedece a root"',
      ctf_all_solved:  '> gg. los encontraste todos.',
      ctf_reset:       '[ reiniciar ]',

      challenges_title:       'retos',
      challenge_hackspain_date: 'Sep 2026',
      challenge_hackspain_sub:  'ETSIT UPM, Madrid',
      challenge_hackspain_desc: 'Hackathon presencial en Madrid, 36 horas seguidas, para jóvenes builders, con cinco retos propuestos por startups. Construimos Elkano, una plataforma de puntuación de estrés financiero, para el reto de Embat.',
      challenge_ikerlan_date: '2025',
      challenge_ikerlan_sub:  'Online',
      challenge_ikerlan_desc: 'Mi primer CTF. Acabé participando en solitario, cubrí un poco de todo entre las categorías. Una buena introducción a los CTF-s.',
      challenge_hackupc_date: 'Abr 2026',
      challenge_hackupc_sub:  'UPC, Barcelona',
      challenge_hackupc_desc: 'Hackathon de 36h en la Universitat Politècnica de Catalunya, Barcelona.',
      challenge_thegame_date: 'Abr 2026',
      challenge_thegame_sub:  'UPC, Barcelona',
      challenge_thegame_desc: 'Competición CTF celebrada durante el HackUPC 2026. Writeups de los retos que resolví.',

      experience_title: 'estudios_y_experiencia',
      edu_heading:      'Formación',
      work_heading:     'Experiencia',

      edu1_date:  '2026/09 - Actualidad',
      edu1_title: 'Máster en Inteligencia Artificial Aplicada',
      edu1_desc:  'Empezado justo después de terminar el Grado en Ingeniería Informática.',
      edu2_date:  '2022/09 - 2026/07',
      edu2_title: 'Grado en Ingeniería Informática',
      edu2_desc:  'Graduado. Especializado en bases de datos, seguridad e IA.',

      work1_date:  '2025/09 - Actualidad',
      work1_title: 'Investigador',
      work1_desc:  'Trabajo de fin de grado. Desarrollo de un sistema de búsqueda cognitivo impulsado por IA.',
      work2_date:  '2024/09 - 2025/07',
      work2_title: 'Investigador',
      work2_desc:  'Desarrollé un sistema basado en LLM que permite a usuarios no técnicos consultar bases de datos y extraer conocimiento de forma intuitiva.',
      work3_date:  '2023/10 - 2024/07',
      work3_title: 'Asistente de Proyectos',
      work3_desc:  'Desarrollé un sistema logístico para automatizar un almacén de palés y contenedores para un cliente industrial.',

      links_title: 'encuéntrame',
      links_intro: '¿Quieres conectar, colaborar o simplemente saludar?',

      secrets_hint:     '4 secretos escondidos en algún lugar de esta página',
      paranoid_msg:     '<span class="paranoid-accent">Tus datos.</span><br>Tus reglas.',
      tracking_cmd:     '$ ./expose.sh',
      tracking_os:      '  SO           : ',
      tracking_browser: '  Navegador    : ',
      tracking_lang:    '  Idioma       : ',
      tracking_tz:      '  Zona horaria : ',
      tracking_res:     '  Resolución   : ',
      tracking_footer1: '  Esto es lo que ve cada página web.',
      tracking_footer2: '  Piénsalo.',
    },

    eu: {
      nav_me:         'Ni',
      nav_projects:   'Proiektuak',
      nav_challenges: 'Erronkak',
      nav_experience: 'Ikasketak & Esperientzia',
      nav_links:      'Estekak',
      skip_link:      'Edukira jauzi',

      hero_sub:      'Informatika Ingeniaria · AI & ML Zalea · DJ & Ekoizlea Ludok gisa',
      hero_location: 'Markina-Xemein, Euskal Herria',
      intro_sub: 'AI · pribatutasuna · DJ Ludok gisa',
      intro_enter: 'sartu',
      intro_keys: 'scroll · klik · enter',

      about_title: 'ni_buruz',
      about_text:  `Kaixo! <strong>Luken Iriondo Bilbao</strong> naiz, <strong>iamLudok</strong> izenez ere ezaguna. AIak, pribatutasunak eta gauzak nire kabuz eraikitzeak liluratu egiten naute. AI agentikoak motibazio handia ematen dit eta framework, modelo eta arkitektura berrienekiko etengabeko jakin-mina daukat.`,

      interests_title: 'interesak',
      interest_dj:     'DJ eta Ekoizlea',

      skills_title:      'trebetasunak',
      skills_graph_link: 'grafo gisa ikusi →',
      skills_ai:         'AI eta LLMak',
      skills_research:   'Frameworkak eta Tresnak',
      skills_eval:       'Ebaluazioa eta Ikusgarritasuna',
      skills_data:       'Datuak eta Analisia',
      skills_design:     'Diseinua eta Sormen Sistemak',
      skills_infra:      'Azpiegitura & DevOps',
      skills_cyber:      'Zibersegurtasuna',
      skills_webdev:     'Garapena',
      skills_db:         'Datu-baseak',
      skills_relational: 'Erlazionala',
      skills_nosql:      'NoSQL',
      skills_graph:      'Grafo',
      skills_vector:     'Bektoriala',

      views_title:        'iritziak',
      views_privacy_tag:  'Pribatutasuna & Datuak',
      views_privacy_text: `Gure datuak gure aktibo baliotsuenetako bat dira, eta korporazioei bigarren buruhausterik gabe ematen dizkiegu. Autoalojamenduan sinesten dut, azpiegitura propioa izatean eta gordetzen duzunaz eta nola gordetzen duzunaz kontziente izatean. Zure datu propioetarako besteengan mendekotasuna ahultasun bat da, ez erosotasun bat.`,
      views_ai_tag:       'AIrekiko Erantzukizuna',
      views_ai_text:      `AI orain dugun tresnarik indartsuenetako bat da, eta hori da hain zuzen ere eraikitzen ari garena ulertu behar dugula. Ulertzen ez duzun kodea bezero bati entregatzea ez da lasterbide bat, arriskua baizik. Denek azaldu ezin dituzten gauzak eraikitzen badituzte, norabide txarrera goaz. Irakurri kodea. Jakin zer egiten duen.`,

      projects_title:           'proiektuak',
      oss_heading:              'open_source',
      others_heading: 'beste_proiektuak',
      badge_teknoa: 'Weba · martxan',
      badge_ludokapps: '8 Android app',
      oss_usageoverlay_desc:    'usage-overlay proiektuko laguntzailea: Claude, Codex, Cursor eta OpenCode-ren erabilera erakusten duen Windows-eko overlay gainerakor bat. PR handi bat fusionatuta: overlay konfiguragarria, Copilot atala, hornitzaile eta harien refaktorizazioa, akatsen konponketak eta interfazearen hobekuntzak.',
      oss_usageoverlay_linux_desc: 'usage-overlay Linuxera eraman nuen GNOME Shell-eko luzapen gisa: Wayland-ek ez du klikak pasatzen uzten dituen overlay-rik onartzen, beraz goiko panelean bizi da, tresna bakoitzeko ikono eta ehuneko batekin. Devin / Windsurf kuota, Ollama Cloud-en erabilera eta Claude-ren tokenak gehitzen ditu. Fusionatuta eta extensions.gnome.org-en argitaratuta.',
      project_aibookmarks_desc: 'Nire AI tresna dohaineko edo freemium aukeraketa. Probatu eta gomendatua.',
      project_teknoa_desc:      'Euskal Herriko musika elektronikoaren komunitate plataforma. Tokiko eszenako gertaera, local, binilo-denda, irrati-kate eta DJ kolektiboen leku bakarra.',
      project_skai_desc:        'Emozio-asmoari hegazkin aukera erreal eta ordenatuz bihurtzen dien AI bidaiari laguna. 11 dimentsiotako bibe bateragarritasuna, bateragarritasunaren, prezioaren, historiaren eta berritasunaren arabera puntuatua.',
      project_elkano_desc:      'Enpresentzako osasun finantzarioko plataforma, HackSpain 2026n Embat-en erronkarako eraikia. Banku-mugimenduak eta fakturak 0-100eko estres finantzario puntuazio bihurtzen ditu, eta horren gainean kreditu-merkatu bat, kreditu-aseguru jarraitua eta cash pooling eskaintzen ditu.',
      project_habewiki_desc:     'HABE C1 euskara azterketa prestatzeko ikasketa-wikia, idazlan atalean zentratua. Egitura-eskemak, diskurtso-markatzaileak, eredu-idazlanak, sarritan nahasten diren hitzak eta testu bat egokitasun, koherentzia, kohesio, aberastasun eta zuzentasunaren arabera ebaluatzen duen IA prompt bat biltzen ditu.',
      project_teknoa_tagline: 'Euskal Herriko musika elektronikoaren eszena osoa leku bakarrean.',
      project_ludokapps_tagline: 'Local-first eta konturik gabe: zure datuak zure mugikorrean bizi dira.',
      project_elkano_tagline: '1.286 enpresatan balioztatutako estres finantzarioaren puntuazioa.',
      project_skai_tagline: 'Nola sentitzen zaren hegaldi bihurtzen duen AI agentea.',
      project_habewiki_tagline: 'HABE C1 euskara azterketa prestatzeko wikia, idazlanak zuzentzen dituen AI prompt batekin.',
      project_ludokkick_tagline: '1 vs 1 arcade futbola, buru handiko DJak musikaren erritmoan jokatzen.',
      project_ludokkick_desc: 'Android-erako 1 vs 1 arcade futbola, buru handiko DJak erritmoan jokatzen: kolpatu bonboan jaurtiketa indartsuagoak egiteko, eta gol bakoitza drop bat da. Aurkarien eskailera, intsigniak eta hobekuntzak. Expo + Skia, zuzenean sintetizatutako musika, local-first.',
      project_ludokkick_tags: 'Expo, React Native, TypeScript, Skia, Web Audio, SQLite, Git',
      project_downloader_tagline: 'Spotify eta SoundCloud playlistak MP3 edo WAV etiketatu gisa deskargatu, API gakorik gabe.',
      project_downloader_desc: 'Spotify eta SoundCloud-eko playlistak, albumak eta abestiak MP3 edo WAV etiketatu gisa deskargatzen ditu, web interfaze lokal batetik edo komando-lerrotik. API gakorik gabe.',
      project_downloader_story: 'Spotify eta SoundCloud-en playlist-ak dauzkadan arren, DJ seterako WAV fitxategiak behar ditut. Pista pista deskargatzen nekagarria zen. Playlist osoak komando bakar batekin kudeatuko zituen tresna bat nahi nuen.',
      project_downloader_tags: 'Python, Flask, yt-dlp, JavaScript, HTML, CSS, Git',
      project_ludokapps_desc: 'Android-erako zortzi app, doakoak eta kode irekikoak: serieak eta liburuak, bisitatutako herrialdeak, jatetxeak, txartelak eta sarrerak, koadrila, nire zerbitzariko musika, etxea eta Monster latak. Konturik eta iragarkirik gabe: zure datuak zure mugikorrean bizi dira.',
      project_ludokapps_story: 'TV Time-k nire historial osoa galdu zuenean hasi zen dena, eta konturatu nintzen nire datuak beste baten zerbitzarian bizi zirela. Harrezkero, app batek gauza sinple baterako kontu bat eskatzen zidan bakoitzean, nirea egin dut: natiboa, local-first eta konturik gabe. Zortzi dira jada, denak oinarri berean: Expo, React Native eta SQLite.',
      project_ludokapps_tags: 'Expo, React Native, TypeScript, SQLite, Drizzle, Nextcloud, Python, Raspberry Pi, Docker, Git',
      project_ludokapps_learned: 'Android app natiboak, local-first diseinua, babeskopia autoalojatuak',

      drawer_why:     'Zergatik eraiki nuen',
      drawer_learned: 'Zer ikasi nuen',
      private_note:   'Proiektu hau bukatuta dago baina oraingoz pribatua da.',


      project_aibookmarks_story:     'Denek gordetzen dituzte beren esteka gogokoenak nabigatzailearen barran, baina AI munduak horretarako azkarregi mugitzen da. Astero ehunka tresna berri agertzen dira, gehiena zarata. Probatu eta gomendatutako, benetan erabilgarria den zerbait aurkitu dezakeen espazio kuratu bat nahi nuen. Gainera, gero eta tresna gehiago gehitzen ari naiz pribatutasunean eta autonomia digitalean zentratuta, nire interesak norantz doazen islatuz.',
      project_aibookmarks_tags:      'HTML, CSS, JS, Git',
      project_aibookmarks_learned:   'joera jarraipena',

      project_teknoa_story:          'Konturatu nintzen Euskal Herriko ia kartela guztiak Instagramera igotzen zirela, baina DJ bakoitza bere kontura. Pertsona egokiak jarraitzen ez bazituen, gertaera galtzen zenuen. Instagram orrialde bat sortu nuen Euskal Herriko elektronika gogoko duen edonork aste honetan zer dagoen ikusteko leku bakarra izateko, inork jotzea axola gabe. Gero gehiago egin nahi nuela konturatu nintzen: DJ profileak, lokalak, mezu-alertak, mapak. Instagram ez zen nahikoa, eta webgunea eraiki nuen.',
      project_teknoa_tags:           'JS, CSS, Git, Astro, TypeScript',
      project_teknoa_learned:        'komunitatea, eduki kudeaketa, full-stack',

      project_skai_story:            'HackUPC-n, bapatukoak bere erronka aurkeztu zuen. Skyscanner-ena arreta harrapatu zigun: "diseinatu hurrengo belaunaldiko AI bidezko bidaia esperientzia bat, bidaiarien asmoa benetan ulertu, konplexutasuna murriztu eta erabaki seguruak eta informatuak hartzen lagundu." Hutsetik hasi ginen, Skyscanner-en koloreetan oinarritutako React frontend bat, bilatzaile klasikoarekin, chat interfazearekin, mapa interaktiboarekin eta helmuga txartelekin. Handik konplexutasuna gehitzen joan ginen: LangGraph-eko backend agentiko bat, ChromaDB-n gordetako helmuga datuen gaineko RAG, epe laburrerako eta luzeko memoria elkarrizketaren bidez pertsonalizatzeko, eta 11 dimentsio emozionaletako bibe bateragarritasuna, bateragarritasunaren, prezioaren, historiaren eta berritasunaren arabera puntuatua. AI modeloak Azure AI Foundry-n ibili ziren, FastAPI eta MongoDB-rekin atzean. 36 ordu, 3ko taldea, hutsetik.',
      project_skai_tags:             'Python, FastAPI, LangGraph, API, LangChain, Short-term / Long-term Memory, LLMs, RAG, Azure AI Foundry, MongoDB, ChromaDB, Docker, Git, React',
      project_skai_learned:          'AI agentikoa, prototipaketa azkarra',
      project_elkano_story:          'HackSpain-en, Embat-en erronka enpresei arazo finantzarioak ordainketa bat galdu aurretik ikusten laguntzea zen. Elkanok enpresa bakoitzaren estres finantzarioa puntuatzen du banku-mugimenduen eta fakturen historialean oinarritutako 105 aldagairekin, 24 oinarrizko metrikarekin, joera-analisiarekin eta 9 estres-seinalerekin, 1.286 enpresa, 24 hilabeteko banku-datu eta 900.000 fakturako datu-multzo batean balidatua, 0,54ko Gini koefizientearekin hilabete batera. Puntuazio horren gainean hiru produktu eraiki genituen: kreditu-merkatu bat kutxa duten enpresek estresean daudenei mailegatzeko, kobratzeko dauden fakturen gaineko kreditu-aseguru jarraitua puntuazioarekin batera mugitzen diren primekin, eta cash pooling bat filialek taldearen likidezia partekatzeko banku batera jo aurretik. Bost lagunetako taldea, ostiral arratsaldetik igande goizera arte lanean.',
      project_elkano_tags:           'Next.js, TypeScript, Docker, Vercel, Python, Git',
      project_elkano_learned:        'arrisku finantzarioaren puntuazioa, prototipaketa azkarra',












      project_habewiki_story:        'HABE C1 euskara azterketa prestatzen ari nintzela osatu nuen, idazlan atalean zentratua. Gainditu nuen.',
      project_habewiki_tags:         'Markdown, AI',
      project_habewiki_learned:      'idazketa teknikoa, euskara C1',

      project_hackspain_tags:        '36h',
      project_hackupc_tags:          '36h',
      project_thegame_tags:          'Forensics, Web, Crypto, Data, Miscellaneous, Steganography',
      project_ikerlan_tags:          'Crypto, Reversing, Web, Forensics, Hardware, Miscellaneous, Operational Technology, Machine Learning',

      project_with: 'Kide',

      link_live:    'Zuzenean',
      link_project: 'Proiektua',
      link_deck:    'Aurkezpena',
      link_video:   'Bideoa',
      link_apk:     'APKa deskargatu',
      link_apps: 'Aplikazioak ikusi',

      visitor_challenge_title: 'zure_txanda',
      visitor_challenge_desc:  '4 easter egg ezkutatu ditut orrialdearen nonbaiten. Denak aurkitzeko gai al zara?',

      ctf_board_title: 'erronka_sekretoak',
      ctf_hint_1:      '"hitz batzuek erreakzioak eragiten dituzte"',
      ctf_hint_2:      '"bisitatu = adostu"',
      ctf_hint_3:      '"$ → ×2"',
      ctf_hint_4:      '"4/4 poltsikoan"',
      ctf_hint_5:      '"shell-ak root-i obeditzen dio"',
      ctf_all_solved:  '> gg. denak aurkitu dituzu.',
      ctf_reset:       '[ berrezarri ]',

      challenges_title:       'erronkak',
      challenge_hackspain_date: '2026 Iraila',
      challenge_hackspain_sub:  'ETSIT UPM, Madril',
      challenge_hackspain_desc: 'Hackathon presentziala Madrilen, 36 ordu jarraian, gazte builder-entzat, startupek proposatutako bost erronkarekin. Elkano eraiki genuen, estres finantzarioaren puntuazio-plataforma bat, Embat-en erronkarako.',
      challenge_ikerlan_date: '2025',
      challenge_ikerlan_sub:  'Online',
      challenge_ikerlan_desc: 'Nire lehen CTF-a. Bakarrik bukatu nuen, kategoria guztietako zerbait egin nuen. Sarrera ona mentalitate honetara.',
      challenge_hackupc_date: 'Api. 2026',
      challenge_hackupc_sub:  'UPC, Bartzelona',
      challenge_hackupc_desc: '36 orduko hackathona Universitat Politècnica de Catalunya-n, Bartzelonan.',
      challenge_thegame_date: 'Api. 2026',
      challenge_thegame_sub:  'UPC, Bartzelona',
      challenge_thegame_desc: 'HackUPC 2026an zehar egindako CTF lehiaketa. Konpondutako erronken writeupak.',

      experience_title: 'ikasketak_&_esperientzia',
      edu_heading:      'Hezkuntza',
      work_heading:     'Esperientzia',

      edu1_date:  '2026/09 - Gaur egun',
      edu1_title: 'Adimen Artifizial Aplikatuko Masterra',
      edu1_desc:  'Informatika Ingeniaritza Gradua bukatu bezain laster hasia.',
      edu2_date:  '2022/09 - 2026/07',
      edu2_title: 'Informatika Ingeniaritza Gradua',
      edu2_desc:  'Graduatua. Datu-baseak, segurtasuna eta AIan espezializatuta.',

      work1_date:  '2025/09 - Gaur egun',
      work1_title: 'Ikertzailea',
      work1_desc:  'Gradu Amaierako Lana. AI bidezko bilaketa sistema kognitibo baten garapena.',
      work2_date:  '2024/09 - 2025/07',
      work2_title: 'Ikertzailea',
      work2_desc:  'LLMetan oinarritutako sistema bat garatu nuen, erabiltzaile ez-teknikoei datu-baseak kontsultatzeko eta ezagutza intuitiboki ateratzeko aukera ematen diena.',
      work3_date:  '2023/10 - 2024/07',
      work3_title: 'Proiektu Laguntzailea',
      work3_desc:  'Bezero industrial batentzako paleta eta edukiontzien biltegi bat automatizatzeko logistika sistema bat garatu nuen.',

      links_title: 'aurkitu_ni',
      links_intro: 'Konektatu, kolaboratu edo kaixo esan nahi al duzu?',

      secrets_hint:      '4 sekretu ezkutatuta orrialdearen nonbaiten',
      paranoid_msg:      '<span class="paranoid-accent">Zure datuak.</span><br>Zure arauak.',
      tracking_cmd:      '$ ./expose.sh',
      tracking_os:       '  SE           : ',
      tracking_browser:  '  Nabigatzailea: ',
      tracking_lang:     '  Hizkuntza    : ',
      tracking_tz:       '  Ordu-zona    : ',
      tracking_res:      '  Bereizmena   : ',
      tracking_footer1:  '  Hau da webgune bakoitzak ikusten duena.',
      tracking_footer2:  '  Pentsatu horretan.',
    },
  };

  const saved      = localStorage.getItem('lang');
  const browserEu  = navigator.language && navigator.language.startsWith('eu');
  const browserEs  = navigator.language && navigator.language.startsWith('es');
  let currentLang  = saved || (browserEu ? 'eu' : browserEs ? 'es' : 'en');

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
    btn.addEventListener('click', e => {
      const opt = e.target.closest('.lang-option');
      if (opt) {
        apply(opt.dataset.lang);
      } else {
        const langs = ['en', 'es', 'eu'];
        apply(langs[(langs.indexOf(currentLang) + 1) % langs.length]);
      }
    });
    apply(currentLang);
  }

  initToggle();

  globalThis.i18n = { t, apply, getLang: () => currentLang };
})();
