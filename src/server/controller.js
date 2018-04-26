const express = require('express');

const routes = express.Router();

const sampleTags = ['Culture',
  'Tool\\Service',
  'Education',
  'Narrative',
  'Play',
  'UX\\UI',
  'Identity',
  'VR\\AR',
  'Installation',
  'Data',
  'Society',
  'Performance',
  'Machine Learning',
  'Sound',
  'Tangible',
  'Health'];

const sampleStudentData =
  {
    'akmyrat-tuyliyev': {
      student_id: '40',
      student_name: 'Akmyrat Tuyliyev',
      student_slug: 'akmyrat-tuyliyev',
      advisor_id: '119',
      project_title: 'Erteki: Storytelling by Children',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/baby_thumbnail.png', title: 'Erteki Thumbnail', alt: 'A baby boy looking into a bright screen', caption: 'Erteki thumbnail'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Narrative', slug: 'narrative' }]
    },
    'alejandro-matamala': {
      student_id: '58',
      student_name: 'Alejandro Matamala',
      student_slug: 'alejandro-matamala',
      advisor_id: '124',
      project_title: 'Archetype',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/arche.jpg', title: 'archetype', alt: 'archetype', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'alex-fast': {
      student_id: '2',
      student_name: 'Alex Fast',
      student_slug: 'alex-fast',
      advisor_id: '114',
      project_title: 'See the Ball',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Berrios.jpeg', title: 'Berrios', alt: 'berrios', caption: 'Berrios'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Narrative', slug: 'narrative' }]
    },
    'alexander-zimmer': {
      student_id: '77',
      student_name: 'Alexander Zimmer',
      student_slug: 'alexander-zimmer',
      advisor_id: '129',
      project_title: 'Portraits of Evanston',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ymca2.jpg', title: 'ymca', alt: 'ymca', caption: 'ymca'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Narrative', slug: 'narrative' }]
    },
    'alexia-kyriakopoulou': {
      student_id: '95',
      student_name: 'Alexia Kyriakopoulou',
      student_slug: 'alexia-kyriakopoulou',
      advisor_id: '131',
      project_title: 'Sygnómi',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb-1.png', title: 'thumb (1)', alt: 'sygnomi', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'amanda-min-jin-lee': {
      student_id: '20',
      student_name: 'Amanda Min-Jin Lee',
      student_slug: 'amanda-min-jin-lee',
      advisor_id: '123',
      project_title: 'JAM-JAM',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/amanda-01-1024x768.jpg', title: 'amanda', alt: '-', caption: '-'
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'anastasios-germanidis': {
      student_id: '76',
      student_name: 'Anastasios Germanidis',
      student_slug: 'anastasios-germanidis',
      advisor_id: '129',
      project_title: 'Sybil Society',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Artboard-Copy-3.png', title: 'Artboard Copy 3', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'anne-michelle-gallero': {
      student_id: '39',
      student_name: 'Anne-Michelle Gallero',
      student_slug: 'anne-michelle-gallero',
      advisor_id: '119',
      project_title: '100 Days of News',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/100News_Thumbnail_320x240.jpg', title: '100News_Thumbnail_320x240', alt: 'Thesis: 100 Days News_Thumbnail', caption: 'Thesis: 100 Days of News_Thumbnail'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    },
    'ari-melenciano': {
      student_id: '3',
      student_name: 'Ari Melenciano',
      student_slug: 'ari-melenciano',
      advisor_id: '114',
      project_title: 'OJO ORO Neo-retro Experimental Cameras',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ari1.png', title: 'OJO ORO', alt: 'OJO ORO', caption: 'a line of neo reto experimental cameras.'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'ariana-vassilopoulou': {
      student_id: '78',
      student_name: 'Ariana Vassilopoulou',
      student_slug: 'ariana-vassilopoulou',
      advisor_id: '129',
      project_title: 'A Fresh View',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailphoto.jpg', title: 'thumbnailphoto', alt: 'thumbnail', caption: 'thumbnail'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
    },
    'brandon-kader': {
      student_id: '4',
      student_name: 'Brandon Kader',
      student_slug: 'brandon-kader',
      advisor_id: '114',
      project_title: 'IMVII',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/IMVII-THESIS-ARCHIVE-THUMBNAIL-1.jpg', title: 'IMVII THESIS ARCHIVE THUMBNAIL', alt: 'IMVII', caption: 'caption'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    },
    'bryan-hsu': {
      student_id: '21',
      student_name: 'Bryan Hsu',
      student_slug: 'bryan-hsu',
      advisor_id: '123',
      project_title: 'Cascade',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-cascade2.png', title: 'thumbnail-cascade2', alt: 'Cascade thumbnail', caption: 'Cascade thumbnail'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'chester-dols': {
      student_id: '23',
      student_name: 'Chester Dols',
      student_slug: 'chester-dols',
      advisor_id: '123',
      project_title: 'On Otherness and Queer Affect',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/THUMBNAIL-Converted.jpg', title: 'THUMBNAIL', alt: 'On Otherness and Queer Affect', caption: 'On Otherness and Queer Affect'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    },
    'chetan-hasabnis': {
      student_id: '96',
      student_name: 'Chetan Hasabnis',
      student_slug: 'chetan-hasabnis',
      advisor_id: '131',
      project_title: 'Building Emergency Intelligence',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-1-01.png', title: 'Building Emergency Intelligence', alt: 'Building Emergency Intelligence', caption: 'Building Emergency Intelligence'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    },
    'chloe-gao': {
      student_id: '5',
      student_name: 'Chloe Gao',
      student_slug: 'chloe-gao',
      advisor_id: '114',
      project_title: 'Ephemeral',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail-2.jpg', title: 'Thumbnail', alt: 'Thumbnail', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'christina-hall': {
      student_id: '22',
      student_name: 'Christina Hall',
      student_slug: 'christina-hall',
      advisor_id: '123',
      project_title: 'The Masks I Wear',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/HallC_TMIW_thumbnail320x240.jpg', title: 'HallC_TMIW_thumbnail320x240', alt: 'tmiw', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Performance', slug: 'performance' }]
    },
    'cristobal-valenzuela': {
      student_id: '59',
      student_name: 'Cristobal Valenzuela',
      student_slug: 'cristobal-valenzuela',
      advisor_id: '124',
      project_title: 'Runway',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.jpg', title: 'thumbnail', alt: 'runway', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'daniella-garcia-rosales': {
      student_id: '41',
      student_name: 'Daniella Garcia-Rosales',
      student_slug: 'daniella-garcia-rosales',
      advisor_id: '119',
      project_title: 'Curiosity Algorithm',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/uno.png', title: 'uno', alt: 'curiosity', caption: 'a curiosity algorithm'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    },
    'danni-huang': {
      student_id: '79',
      student_name: 'Danni Huang',
      student_slug: 'danni-huang',
      advisor_id: '129',
      project_title: 'Jamais Vu',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-12.jpg', title: 'thumbnail', alt: '0', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'david-temchulla': {
      student_id: '42',
      student_name: 'David Temchulla',
      student_slug: 'david-temchulla',
      advisor_id: '119',
      project_title: 'Beast of Burden',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-3.png', title: 'Beast of Burden', alt: "Sound Booths, Sheet Metal, Motor, LED's, Mic", caption: 'Interactive Sculpture'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Sound', slug: 'sound' }]
    },
    'diego-cruz-castillo': {
      student_id: '60',
      student_name: 'Diego Cruz Castillo',
      student_slug: 'diego-cruz-castillo',
      advisor_id: '124',
      project_title: 'The Future of Comics',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-1.png', title: 'thumbnail', alt: 'The Future of Comics', caption: 'The Future of Comics'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'dimosthenis-markopoulos': {
      student_id: '6',
      student_name: 'Dimosthenis Markopoulos',
      student_slug: 'dimosthenis-markopoulos',
      advisor_id: '114',
      project_title: 'PoolBuddy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Asset-4.png', title: 'Asset 4', alt: '0', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'dominic-barrett': {
      student_id: '24',
      student_name: 'Dominic Barrett',
      student_slug: 'dominic-barrett',
      advisor_id: '123',
      project_title: 'Going Forward',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/plug_tongue_320x240.jpg', title: 'plug_tongue_320x240', alt: 'Power cable close to a tongue', caption: 'Going Forward Thumbnail'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Narrative', slug: 'narrative' }]
    },
    'dong-chan-kim': {
      student_id: '97',
      student_name: 'Dong Chan Kim',
      student_slug: 'dong-chan-kim',
      advisor_id: '131',
      project_title: 'The Son&#8217;s Drawer',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/key-image_320x240.jpg', title: 'key image_320x240', alt: 'Main image of the project', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'dror-dov-ayalon': {
      student_id: '25',
      student_name: 'Dror Dov Ayalon',
      student_slug: 'dror-dov-ayalon',
      advisor_id: '123',
      project_title: 'Soundscape: a Tool for Music Makers',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/card-copy-1.png', title: 'Soundscape', alt: 'Soundscape', caption: 'Soundscape'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Sound', slug: 'sound' }]
    },
    'elizabeth-white': {
      student_id: '98',
      student_name: 'Elizabeth White',
      student_slug: 'elizabeth-white',
      advisor_id: '131',
      project_title: 'Body Lights',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/BodyLightsThumbnail.jpg', title: 'BodyLightsThumbnail', alt: 'me', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Performance', slug: 'performance' }]
    },
    'ellen-kim': {
      student_id: '61',
      student_name: 'Ellen Kim',
      student_slug: 'ellen-kim',
      advisor_id: '124',
      project_title: 'At Home',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-13.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'grau-puche-recarens': {
      student_id: '7',
      student_name: 'Grau Puche Recarens',
      student_slug: 'grau-puche-recarens',
      advisor_id: '114',
      project_title: 'lligam',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-15.05.48.png', title: 'CCR, realization of lligam', alt: 'the face of a cat', caption: ''
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'hayeon-hwang': {
      student_id: '43',
      student_name: 'Hayeon Hwang',
      student_slug: 'hayeon-hwang',
      advisor_id: '119',
      project_title: 'Expressive Tactile Controls',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thum.gif', title: 'Expressive Tactile Controls', alt: 'Expressive Tactile Controls', caption: 'Expressive Tactile Controls'
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'hayeon-kim': {
      student_id: '8',
      student_name: 'Hayeon Kim',
      student_slug: 'hayeon-kim',
      advisor_id: '114',
      project_title: 'Droplet: an AR Experience Design System',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-4.png', title: 'droplet', alt: 'title', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'jacquelyn-zen': {
      student_id: '63',
      student_name: 'Jacquelyn Zen',
      student_slug: 'jacquelyn-zen',
      advisor_id: '124',
      project_title: 'Spotter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mockup2.jpg', title: 'Spotter Thumbnail', alt: 'Spotter Thumbnail', caption: ''
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'jarrett-c-slavin': {
      student_id: '80',
      student_name: 'Jarrett C Slavin',
      student_slug: 'jarrett-c-slavin',
      advisor_id: '129',
      project_title: 'Spectrum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/spectrumThumbnail.jpg', title: 'spectrumThumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Sound', slug: 'sound' }]
    },
    'jasmine-a-soltani': {
      student_id: '99',
      student_name: 'Jasmine A Soltani',
      student_slug: 'jasmine-a-soltani',
      advisor_id: '131',
      project_title: 'Manifest Energy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailV5.jpg', title: 'thumbnailV5', alt: 'earth and phone', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    },
    'jaycee-holmes': {
      student_id: '81',
      student_name: 'Jaycee Holmes',
      student_slug: 'jaycee-holmes',
      advisor_id: '129',
      project_title: 'Nigga Inventions',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-9-1024x773.png', title: 'thumbnail', alt: 'Nigga Inventions.', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'jeffrey-park': {
      student_id: '101',
      student_name: 'Jeffrey Park',
      student_slug: 'jeffrey-park',
      advisor_id: '131',
      project_title: 'Responsibly.me',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ext-min-thumb.png', title: 'extension-minimized', alt: 'The Responsibly.me Extension', caption: "At a glance, learn how the brand you're shopping at is doing and learn how their competitors are doing."
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'jennifer-g-tis': {
      student_id: '26',
      student_name: 'Jennifer G Tis',
      student_slug: 'jennifer-g-tis',
      advisor_id: '123',
      project_title: 'In Their Steps',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesisarchivethumbnail.jpg', title: 'thesisarchivethumbnail', alt: "iPhone app displaying ahistorical image with New York City's Washington Square Park in the background", caption: ''
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'jenny-lim': {
      student_id: '10',
      student_name: 'Jenny Lim',
      student_slug: 'jenny-lim',
      advisor_id: '114',
      project_title: 'Awkward Thanksgiving',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TurkeyThumb_color.png', title: 'Turkey_thumbnail', alt: 'Turkey Is Not Happy', caption: ''
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'Society', slug: 'society' }]
    },
    'jesal-trivedi': {
      student_id: '44',
      student_name: 'Jesal Trivedi',
      student_slug: 'jesal-trivedi',
      advisor_id: '119',
      project_title: 'Mindful Technology: Aduri',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ITP-Thesis-Thumbnail.png', title: 'ITP Thesis Thumbnail', alt: 'meditation', caption: 'meditation'
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'ji-young-chun': {
      student_id: '100',
      student_name: 'Ji Young Chun',
      student_slug: 'ji-young-chun',
      advisor_id: '131',
      project_title: 'Semper Simul',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thmb-e1524291318103.png', title: 'Semper Simul', alt: 'Semper Simul', caption: 'Semper Simul'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'jina-jung': {
      student_id: '9',
      student_name: 'Jina Jung',
      student_slug: 'jina-jung',
      advisor_id: '114',
      project_title: 'Intangible Canvas',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.jpg', title: 'Thumbnail', alt: 'Jina001', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'jingfei-lin': {
      student_id: '27',
      student_name: 'Jingfei Lin',
      student_slug: 'jingfei-lin',
      advisor_id: '123',
      project_title: 'Runway in Store',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/THUMBNAIL.jpg', title: 'Runway in store', alt: 'Runway in store', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'jingru-yin': {
      student_id: '45',
      student_name: 'Jingru Yin',
      student_slug: 'jingru-yin',
      advisor_id: '119',
      project_title: 'I&#8217;m With Mr. Zhou',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-10.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'jinhee-ahn': {
      student_id: '62',
      student_name: 'Jinhee Ahn',
      student_slug: 'jinhee-ahn',
      advisor_id: '124',
      project_title: 'textARt',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-7.jpg', title: 'thumbnail', alt: 'textARt', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'jixuan-sun': {
      student_id: '11',
      student_name: 'Jixuan Sun',
      student_slug: 'jixuan-sun',
      advisor_id: '114',
      project_title: 'Xiangrui: Patterns at the Palace Museum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-thumbnail.png', title: 'thesis thumbnail', alt: 'XIANGRUI – Auspicious Symbols in the Palace Museum', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'kar-rosen': {
      student_id: '83',
      student_name: 'Kar Rosen',
      student_slug: 'kar-rosen',
      advisor_id: '129',
      project_title: 'The Quantum Carnival',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis_archive_thumb.jpg', title: 'thesis_archive_thumb', alt: 'A brown wooden trunk stands before a red curtain. White light emits through the cracks of the open trunk top.', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    },
    'katherine-a-takacs': {
      student_id: '13',
      student_name: 'Katherine A Takacs',
      student_slug: 'katherine-a-takacs',
      advisor_id: '114',
      project_title: 'AWall',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TakacsThumbnail.jpg', title: 'TakacsThumbnail', alt: 'Thumbnail', caption: 'Takacs'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    },
    'koji': {
      student_id: '64',
      student_name: 'Koji',
      student_slug: 'koji',
      advisor_id: '124',
      project_title: 'Mtindo',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mtindo_journal_thumbnail.png', title: 'mtindo_journal_thumbnail', alt: 'mtindo', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'kyung-a-na': {
      student_id: '12',
      student_name: 'Kyung A Na',
      student_slug: 'kyung-a-na',
      advisor_id: '114',
      project_title: 'Synesthesia',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbsupArtboard-1.jpg', title: 'thumbsnail', alt: 'hmhm', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'laura-kerry': {
      student_id: '104',
      student_name: 'Laura Kerry',
      student_slug: 'laura-kerry',
      advisor_id: '131',
      project_title: 'Beachcomber',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-lk-e1524493107305.png', title: 'thumbnail-lk', alt: 'Shoe soles in sand', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Society', slug: 'society' }]
    },
    'li-chung-chen': {
      student_id: '14',
      student_name: 'Li-Chung Chen',
      student_slug: 'li-chung-chen',
      advisor_id: '114',
      project_title: 'Iso-principle in the Digital World',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/iso-principle-in-the-digital-world.jpg', title: 'iso-principle in the digital world', alt: '11', caption: 'thumbnail'
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'Sound', slug: 'sound' }]
    },
    'lin-yang': {
      student_id: '65',
      student_name: 'Lin Yang',
      student_slug: 'lin-yang',
      advisor_id: '124',
      project_title: 'PathIndoor',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-2.png', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'lindsey-daniels': {
      student_id: '103',
      student_name: 'Lindsey Daniels',
      student_slug: 'lindsey-daniels',
      advisor_id: '131',
      project_title: 'Basic Ingredients',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/icon1.jpg', title: 'icon1', alt: 'smallIcon', caption: 'small icon'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Sound', slug: 'sound' }]
    },
    'lindsey-piscitell': {
      student_id: '46',
      student_name: 'Lindsey Piscitell',
      student_slug: 'lindsey-piscitell',
      advisor_id: '119',
      project_title: 'Pack Your Things and Go',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/8W0B7922-1-1024x768.jpg', title: '8W0B7922-1', alt: 'Brass lantern and mosaic box in larger box surrounded by dried flowers.', caption: 'Thumbnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Sound', slug: 'sound' }]
    },
    'luqian-chen': {
      student_id: '102',
      student_name: 'Luqian Chen',
      student_slug: 'luqian-chen',
      advisor_id: '131',
      project_title: 'Foodies',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/320240.jpg', title: 'Foodies', alt: 'Foodies', caption: 'Foodies'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'manning-qu': {
      student_id: '66',
      student_name: 'Manning Qu',
      student_slug: 'manning-qu',
      advisor_id: '124',
      project_title: 'DING: Intuitive Comm Tool for Grandma',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-15.jpg', title: 'DING_thumbtail', alt: 'A picture of photo frame has D I N G on it.', caption: ''
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'marco-guarino': {
      student_id: '28',
      student_name: 'Marco Guarino',
      student_slug: 'marco-guarino',
      advisor_id: '123',
      project_title: 'Genealogy of a Rhythm',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/4.jpg', title: '4', alt: 'Genealogy of a Rhythm', caption: 'Genealogy of a Rhythm'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    },
    'maria-del-pilar-gomez-ruiz': {
      student_id: '84',
      student_name: 'Maria Del Pilar Gomez Ruiz',
      student_slug: 'maria-del-pilar-gomez-ruiz',
      advisor_id: '129',
      project_title: 'Onda: Data Portraits for Period Health',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/onda-cover-pilar-gomez.png', title: 'onda-cover-pilar-gomez', alt: 'sketch of a physical menstrual calendar scanned and stored digitally with a computer vision algorithm', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Health', slug: 'health' }]
    },
    'maxwell-nakamura': {
      student_id: '105',
      student_name: 'Maxwell Nakamura',
      student_slug: 'maxwell-nakamura',
      advisor_id: '131',
      project_title: 'Plaza Project: Mapping US public opinion',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/PlazaThumbnail.png', title: 'PlazaThumbnail', alt: 'Plaza logo', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    },
    'melissa-parker': {
      student_id: '85',
      student_name: 'Melissa Parker',
      student_slug: 'melissa-parker',
      advisor_id: '129',
      project_title: 'Honeybee Training Academy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/archive-site-thumbnail.png', title: 'archive-site-thumbnail', alt: 'A giant fabric flower with 15 inch pink petals and a yellow arcade button in the center.', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    },
    'miao-tian': {
      student_id: '106',
      student_name: 'Miao Tian',
      student_slug: 'miao-tian',
      advisor_id: '131',
      project_title: 'Commodity Fetishism',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb.jpg', title: 'thumb', alt: 'Enduring Commodity Fetish', caption: 'Enduring Commodity Fetish'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'michael-kripchak': {
      student_id: '15',
      student_name: 'Michael Kripchak',
      student_slug: 'michael-kripchak',
      advisor_id: '114',
      project_title: 'Touch at a Distance',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/KripchakThesisThumbnail.png', title: 'Kripchak Thesis Thumbnail', alt: 'Telepresence projection in VR.', caption: 'Screen-capture of holographic telepresence from within VR.'
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'michael-simpson': {
      student_id: '67',
      student_name: 'Michael Simpson',
      student_slug: 'michael-simpson',
      advisor_id: '124',
      project_title: 'CATk: Computational Audition Toolkit',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ofxDeepSignalProcessingDebug-Screen-Output-2018-04-19-at-22.26.40-1.png', title: 'Cover Matrix', alt: 'Cover Matrix', caption: 'Cover Matrix'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Sound', slug: 'sound' }]
    },
    'mithru-swarna': {
      student_id: '47',
      student_name: 'Mithru Swarna',
      student_slug: 'mithru-swarna',
      advisor_id: '119',
      project_title: 'Internet of T̶h̶i̶n̶g̶s̶ Humans (IoH)',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ioh-colour.png', title: 'ioh-colour', alt: "A dark blue logo with white background that has a representation of a human with wireless signals coming off the human's head. It's a combination between a human icon and the WiFi icon.", caption: 'Internet of Humans - logo'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    },
    'nanou-dimachki': {
      student_id: '86',
      student_name: 'Nanou Dimachki',
      student_slug: 'nanou-dimachki',
      advisor_id: '129',
      project_title: 'Intimate Patterns',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/20180424_142819-1024x768.jpg', title: '20180424_142819', alt: 'bulbs two', caption: 'bulbs two'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Installation', slug: 'installation' }]
    },
    'nathaniel-padgett': {
      student_id: '107',
      student_name: 'Nathaniel Padgett',
      student_slug: 'nathaniel-padgett',
      advisor_id: '131',
      project_title: 'Open Kinetics',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/OKlogosymbol.png', title: 'OKlogosymbol', alt: 'Open Kinetics Logo', caption: 'Open Kinetics Logo'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    },
    'nitish-wakalkar': {
      student_id: '69',
      student_name: 'Nitish Wakalkar',
      student_slug: 'nitish-wakalkar',
      advisor_id: '124',
      project_title: 'The Quirk Bot Experiment',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/quirk-bots-thumbnail.png', title: 'quirk bots-thumbnail', alt: 'smart objects', caption: ''
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'nouf-aljowaysir': {
      student_id: '68',
      student_name: 'Nouf Aljowaysir',
      student_slug: 'nouf-aljowaysir',
      advisor_id: '124',
      project_title: 'Nouf.io',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-9.jpg', title: 'thumbnail', alt: 'nouf.io', caption: 'nouf.io'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Identity', slug: 'identity' }]
    },
    'or-fleisher': {
      student_id: '48',
      student_name: 'Or Fleisher',
      student_slug: 'or-fleisher',
      advisor_id: '119',
      project_title: 'Volume',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumb.png', title: 'Volume_Thumbnail', alt: 'Volume_Thumbnail', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    },
    'oriana-neidecker': {
      student_id: '29',
      student_name: 'Oriana Neidecker',
      student_slug: 'oriana-neidecker',
      advisor_id: '123',
      project_title: 'The Nude Museum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mars320.jpg', title: 'Nude Museum on Mars', alt: 'Curated selection of photos for the Mars Environment', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'pan-pan': {
      student_id: '71',
      student_name: 'Pan Pan',
      student_slug: 'pan-pan',
      advisor_id: '124',
      project_title: 'active.ly',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-8.png', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'patrick-presto': {
      student_id: '70',
      student_name: 'Patrick Presto',
      student_slug: 'patrick-presto',
      advisor_id: '124',
      project_title: 'Decrypt.Ed',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Logo_3.png', title: 'Logo_3', alt: 'logo3', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    },
    'paula-leonvendagar': {
      student_id: '30',
      student_name: 'Paula Leonvendagar',
      student_slug: 'paula-leonvendagar',
      advisor_id: '123',
      project_title: 'Oneiric Lab',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ThesisThumbnailImage1-2.png', title: 'ThesisThumbnailImage1', alt: 'Oneiric Lab Art Installation', caption: 'Oneiric Lab Art Installation'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Narrative', slug: 'narrative' }]
    },
    'philip-mccausland': {
      student_id: '49',
      student_name: 'Philip McCausland',
      student_slug: 'philip-mccausland',
      advisor_id: '119',
      project_title: 'Feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-7.png', title: 'thumbnail', alt: 'feeeeeeeeeed thumbnail', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Installation', slug: 'installation' }]
    },
    'ran-tian': {
      student_id: '109',
      student_name: 'Ran Tian',
      student_slug: 'ran-tian',
      advisor_id: '131',
      project_title: 'Heart Health',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.png', title: 'Thumbnail', alt: 'Heart Health AR app', caption: ''
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'regina-cantu-de-alba': {
      student_id: '50',
      student_name: 'Regina Cantu De Alba',
      student_slug: 'regina-cantu-de-alba',
      advisor_id: '119',
      project_title: 'Epoche',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/epocheThumb.png', title: 'epocheThumb', alt: 'The logo for a project that looks like a broken clock', caption: 'Epoche Logo'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'richard-lapham': {
      student_id: '16',
      student_name: 'Richard Lapham',
      student_slug: 'richard-lapham',
      advisor_id: '114',
      project_title: 'Customizing Reality: Immersive Painting',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/RL_thumbnail.jpg', title: 'RL_thumbnail', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'rita-cheng': {
      student_id: '108',
      student_name: 'Rita Cheng',
      student_slug: 'rita-cheng',
      advisor_id: '131',
      project_title: 'The Personal Panopticon',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/render.png', title: 'Karma. The Smarter Assistant.', alt: 'A Render of Karma', caption: 'Karma. The Smarter Assistant.'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    },
    'roi-lev': {
      student_id: '17',
      student_name: 'Roi Lev',
      student_slug: 'roi-lev',
      advisor_id: '114',
      project_title: 'Inventing America',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail_new2.png', title: 'thumbnail', alt: '', caption: 'thumbnail'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'rushali-rupchand-paratey': {
      student_id: '31',
      student_name: 'Rushali Rupchand Paratey',
      student_slug: 'rushali-rupchand-paratey',
      advisor_id: '123',
      project_title: 'NYC Beats',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-thesis-pink.png', title: 'thumbnail-thesis-pink', alt: 'pink music location icon with black background', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Sound', slug: 'sound' }]
    },
    'samantha-schulman': {
      student_id: '110',
      student_name: 'Samantha Schulman',
      student_slug: 'samantha-schulman',
      advisor_id: '131',
      project_title: 'Breathe With Me',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb2-size-2.jpg', title: '', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'Tangible', slug: 'Tangible' }]
    },
    'scott-reitherman': {
      student_id: '33',
      student_name: 'Scott Reitherman',
      student_slug: 'scott-reitherman',
      advisor_id: '123',
      project_title: 'Grand Central Immersion',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/GCI_thesisArchive1.jpg', title: 'GCI_thesisArchive1', alt: 'Grand Central Immersion, Scott Reitherman ITP Thesis', caption: 'Grand Central Immersion, Scott Reitherman ITP Thesis'
      },
      topics: [{ name: 'Sound', slug: 'sound' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'se-young-kim': {
      student_id: '52',
      student_name: 'Se Young Kim',
      student_slug: 'se-young-kim',
      advisor_id: '119',
      project_title: 'Memoria',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/main.png', title: 'memoria', alt: 'memoria', caption: 'memoria'
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'sean-kim': {
      student_id: '88',
      student_name: 'Sean Kim',
      student_slug: 'sean-kim',
      advisor_id: '129',
      project_title: 'Mindfulness Over Matter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/s3.jpg', title: 'sean_thumbnail', alt: '.', caption: 'Mindfuness Over Matter _'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'sebastian-morales': {
      student_id: '32',
      student_name: 'Sebastian Morales',
      student_slug: 'sebastian-morales',
      advisor_id: '123',
      project_title: 'Bots, Cells, and Humans Watching',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailCrop.jpg', title: 'bots, cells and humans watching', alt: 'internet connected microscope, bioreactor and internet bots', caption: 'internet connected microscope, bioreactor and internet bots'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    },
    'sharif-al-hadidi': {
      student_id: '87',
      student_name: 'Sharif Al-hadidi',
      student_slug: 'sharif-al-hadidi',
      advisor_id: '129',
      project_title: 'Odyssey',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Odyssey-Logo.png', title: 'Odyssey Icon', alt: 'Odyssey Icon', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'shelley-hu': {
      student_id: '35',
      student_name: 'Shelley Hu',
      student_slug: 'shelley-hu',
      advisor_id: '123',
      project_title: 'The Act of Receiving',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-6.jpg', title: 'thumbnail', alt: 'shelley_thumbnail_small', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'shivanku-kumar-fnu': {
      student_id: '90',
      student_name: 'Shivanku Kumar Fnu',
      student_slug: 'shivanku-kumar-fnu',
      advisor_id: '129',
      project_title: 'NewChat: All the News That&#8217;s Fit to Chat',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail-3.jpg', title: 'new chat', alt: 'This is a placeholder logo for the app', caption: ''
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'siman-li': {
      student_id: '51',
      student_name: 'Siman Li',
      student_slug: 'siman-li',
      advisor_id: '119',
      project_title: 'The Crossings 渡',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-11.jpg', title: 'thumbnail', alt: 'f', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Installation', slug: 'installation' }]
    },
    'stephanie-koltun': {
      student_id: '89',
      student_name: 'Stephanie Koltun',
      student_slug: 'stephanie-koltun',
      advisor_id: '129',
      project_title: 'How Thrilling',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-14.jpg', title: 'thumbnail', alt: "a still from Michael Jackson's \"Thriller\"", caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Play', slug: 'play' }]
    },
    'steven-simon': {
      student_id: '72',
      student_name: 'Steven Simon',
      student_slug: 'steven-simon',
      advisor_id: '124',
      project_title: 'BrowseBetter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/browseBetter_thumbnail.jpg', title: 'BrowseBetter', alt: 'BrowseBetter', caption: 'BrowseBetter'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'swapna-joshi': {
      student_id: '73',
      student_name: 'Swapna Joshi',
      student_slug: 'swapna-joshi',
      advisor_id: '124',
      project_title: 'MoleculAR : interactive chemistry kit',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb-1.jpg', title: 'kid interacting with MoleculAR', alt: 'kid interacting with MoleculAR', caption: 'kid interacting with MoleculAR'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'tiriree-kananuruk': {
      student_id: '53',
      student_name: 'Tiriree Kananuruk',
      student_slug: 'tiriree-kananuruk',
      advisor_id: '119',
      project_title: 'DeepTalking',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/forthesisarchive.jpg', title: 'forthesisarchive', alt: 'DeepTalking- performance show. Tiri and Jann sing along with 10 bots', caption: 'DeepTalking- performance show. Tiri and Jann sing along with 10 bots'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Performance', slug: 'performance' }]
    },
    'utsav-chadha': {
      student_id: '34',
      student_name: 'Utsav Chadha',
      student_slug: 'utsav-chadha',
      advisor_id: '123',
      project_title: 'Philosophycal / Feel-oh-so-fickle',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/logo.png', title: 'logo', alt: 'philosophycal-logo', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Narrative', slug: 'narrative' }]
    },
    'wenqi-li': {
      student_id: '55',
      student_name: 'Wenqi Li',
      student_slug: 'wenqi-li',
      advisor_id: '119',
      project_title: 'Metron Busker',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/final-banner.png', title: 'metron busker', alt: 'a man wears a high tech backpack', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'woo-hyun-kim': {
      student_id: '74',
      student_name: 'Woo Hyun Kim',
      student_slug: 'woo-hyun-kim',
      advisor_id: '124',
      project_title: 'Guidr',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail3.png', title: 'Guidr Thumbnail', alt: 'Guidr Thumbnail', caption: 'Guidr Thumbnail'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'woraya-boonyapanachoti': {
      student_id: '54',
      student_name: 'Woraya Boonyapanachoti',
      student_slug: 'woraya-boonyapanachoti',
      advisor_id: '119',
      project_title: '(Dis)connect',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail_2.jpg', title: '(Dis)connect', alt: '(Dis)connect', caption: ''
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'xitong-xu': {
      student_id: '112',
      student_name: 'Xitong Xu',
      student_slug: 'xitong-xu',
      advisor_id: '131',
      project_title: 'The Birth of the Self Portrait (1889)',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/archivethumb.png', title: 'The birth of the portrait', alt: 'The birth of the portrait', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'yanlin-ma': {
      student_id: '75',
      student_name: 'Yanlin Ma',
      student_slug: 'yanlin-ma',
      advisor_id: '124',
      project_title: '.5 Square Meter Land of My Hometown',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-1.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Installation', slug: 'installation' }]
    },
    'ye-lu': {
      student_id: '37',
      student_name: 'Ye Lu',
      student_slug: 'ye-lu',
      advisor_id: '123',
      project_title: 'Lotus Babe',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-cover-page.png', title: 'thesis cover page', alt: '123', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Society', slug: 'society' }]
    },
    'yeseul-song': {
      student_id: '92',
      student_name: 'Yeseul Song',
      student_slug: 'yeseul-song',
      advisor_id: '129',
      project_title: 'Invisible Sculptures',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/invisible_thumbnail-1.jpg', title: 'invisible_thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Tangible', slug: 'Tangible' }]
    },
    'yihan-chen': {
      student_id: '36',
      student_name: 'Yihan Chen',
      student_slug: 'yihan-chen',
      advisor_id: '123',
      project_title: 'Perfect Housewife',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Yihan_Thesis_01_320x240.jpg', title: 'Yihan_Thesis_01_320x240', alt: '11', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    },
    'younho-lee': {
      student_id: '18',
      student_name: 'Younho Lee',
      student_slug: 'younho-lee',
      advisor_id: '114',
      project_title: 'The World of Reverie',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail1.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'yuan-chen': {
      student_id: '56',
      student_name: 'Yuan Chen',
      student_slug: 'yuan-chen',
      advisor_id: '119',
      project_title: 'Google-Qt',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-3.jpg', title: 'thumbnailaaa', alt: 'thumbnail', caption: 'thumbnail'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    },
    'yueping-wang': {
      student_id: '38',
      student_name: 'Yueping Wang',
      student_slug: 'yueping-wang',
      advisor_id: '123',
      project_title: 'Speakspeare: Theater Speech Recognition',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-5.jpg', title: 'thumbnail', alt: '.', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    },
    'yuhan-zhang': {
      student_id: '19',
      student_name: 'Yuhan Zhang',
      student_slug: 'yuhan-zhang',
      advisor_id: '114',
      project_title: 'Gold Hunter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/coin@1x.jpg', title: 'coin@1x', alt: 'AR Thumbnail', caption: 'AR Thumbnail'
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'yunho-choi': {
      student_id: '113',
      student_name: 'Yunho Choi',
      student_slug: 'yunho-choi',
      advisor_id: '131',
      project_title: 'Let Me Give Light',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/test_thumnail2.jpg', title: 'thumnail', alt: 'thumnail', caption: 'thumnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'yuqiao-qin': {
      student_id: '91',
      student_name: 'Yuqiao Qin',
      student_slug: 'yuqiao-qin',
      advisor_id: '129',
      project_title: 'Vuja De',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/vujade.jpg', title: 'vujade', alt: 'breathe deeply', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    },
    'yutong-zhang': {
      student_id: '57',
      student_name: 'Yutong Zhang',
      student_slug: 'yutong-zhang',
      advisor_id: '119',
      project_title: 'SELF POOL',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail2.jpg', title: 'thumbnail2', alt: 'Self_pool_thumbnail', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    },
    'zachary-coble': {
      student_id: '93',
      student_name: 'Zachary Coble',
      student_slug: 'zachary-coble',
      advisor_id: '129',
      project_title: 'Wikibabel',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/putin-320x240-fish.jpg', title: 'Wikibabel', alt: 'Wikibabel', caption: 'Wikibabel'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    },
    'ziyu-he': {
      student_id: '94',
      student_name: 'Ziyu He',
      student_slug: 'ziyu-he',
      advisor_id: '129',
      project_title: 'it will be perfect from now on',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-2.002.jpeg', title: 'it will be perfect from now on', alt: 'it will be perfect from now on - thumbnail', caption: 'it will be perfect from now on - thumbnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Society', slug: 'society' }]
    },
    'sejo-vega-cebrián': {
      student_id: '82',
      student_name: 'sejo vega-cebrián',
      student_slug: 'sejo-vega-cebrián',
      advisor_id: '129',
      project_title: 'everything must go ( … )',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.png', title: 'thumbnail', alt: 'image of a dimly lit dark table in a dark room. it contains the following elements: a laptop with a small lamp over it, a microphone, a small booklet, and three glass cups', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Society', slug: 'society' }]
    }
  };
const sampleTagData =
  {
    'Culture': [{
      student_id: '58',
      student_name: 'Alejandro Matamala',
      student_slug: 'alejandro-matamala',
      advisor_id: '124',
      project_title: 'Archetype',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/arche.jpg', title: 'archetype', alt: 'archetype', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '81',
      student_name: 'Jaycee Holmes',
      student_slug: 'jaycee-holmes',
      advisor_id: '129',
      project_title: 'Nigga Inventions',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-9-1024x773.png', title: 'thumbnail', alt: 'Nigga Inventions.', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '100',
      student_name: 'Ji Young Chun',
      student_slug: 'ji-young-chun',
      advisor_id: '131',
      project_title: 'Semper Simul',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thmb-e1524291318103.png', title: 'Semper Simul', alt: 'Semper Simul', caption: 'Semper Simul'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '28',
      student_name: 'Marco Guarino',
      student_slug: 'marco-guarino',
      advisor_id: '123',
      project_title: 'Genealogy of a Rhythm',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/4.jpg', title: '4', alt: 'Genealogy of a Rhythm', caption: 'Genealogy of a Rhythm'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    }, {
      student_id: '47',
      student_name: 'Mithru Swarna',
      student_slug: 'mithru-swarna',
      advisor_id: '119',
      project_title: 'Internet of T̶h̶i̶n̶g̶s̶ Humans (IoH)',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ioh-colour.png', title: 'ioh-colour', alt: "A dark blue logo with white background that has a representation of a human with wireless signals coming off the human's head. It's a combination between a human icon and the WiFi icon.", caption: 'Internet of Humans - logo'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    }, {
      student_id: '48',
      student_name: 'Or Fleisher',
      student_slug: 'or-fleisher',
      advisor_id: '119',
      project_title: 'Volume',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumb.png', title: 'Volume_Thumbnail', alt: 'Volume_Thumbnail', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }, {
      student_id: '29',
      student_name: 'Oriana Neidecker',
      student_slug: 'oriana-neidecker',
      advisor_id: '123',
      project_title: 'The Nude Museum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mars320.jpg', title: 'Nude Museum on Mars', alt: 'Curated selection of photos for the Mars Environment', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '49',
      student_name: 'Philip McCausland',
      student_slug: 'philip-mccausland',
      advisor_id: '119',
      project_title: 'Feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-7.png', title: 'thumbnail', alt: 'feeeeeeeeeed thumbnail', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '108',
      student_name: 'Rita Cheng',
      student_slug: 'rita-cheng',
      advisor_id: '131',
      project_title: 'The Personal Panopticon',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/render.png', title: 'Karma. The Smarter Assistant.', alt: 'A Render of Karma', caption: 'Karma. The Smarter Assistant.'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    }, {
      student_id: '31',
      student_name: 'Rushali Rupchand Paratey',
      student_slug: 'rushali-rupchand-paratey',
      advisor_id: '123',
      project_title: 'NYC Beats',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-thesis-pink.png', title: 'thumbnail-thesis-pink', alt: 'pink music location icon with black background', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '51',
      student_name: 'Siman Li',
      student_slug: 'siman-li',
      advisor_id: '119',
      project_title: 'The Crossings 渡',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-11.jpg', title: 'thumbnail', alt: 'f', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '37',
      student_name: 'Ye Lu',
      student_slug: 'ye-lu',
      advisor_id: '123',
      project_title: 'Lotus Babe',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-cover-page.png', title: 'thesis cover page', alt: '123', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '93',
      student_name: 'Zachary Coble',
      student_slug: 'zachary-coble',
      advisor_id: '129',
      project_title: 'Wikibabel',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/putin-320x240-fish.jpg', title: 'Wikibabel', alt: 'Wikibabel', caption: 'Wikibabel'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }],
    'Tool\\Service': [{
      student_id: '58',
      student_name: 'Alejandro Matamala',
      student_slug: 'alejandro-matamala',
      advisor_id: '124',
      project_title: 'Archetype',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/arche.jpg', title: 'archetype', alt: 'archetype', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '3',
      student_name: 'Ari Melenciano',
      student_slug: 'ari-melenciano',
      advisor_id: '114',
      project_title: 'OJO ORO Neo-retro Experimental Cameras',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ari1.png', title: 'OJO ORO', alt: 'OJO ORO', caption: 'a line of neo reto experimental cameras.'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '59',
      student_name: 'Cristobal Valenzuela',
      student_slug: 'cristobal-valenzuela',
      advisor_id: '124',
      project_title: 'Runway',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.jpg', title: 'thumbnail', alt: 'runway', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '60',
      student_name: 'Diego Cruz Castillo',
      student_slug: 'diego-cruz-castillo',
      advisor_id: '124',
      project_title: 'The Future of Comics',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-1.png', title: 'thumbnail', alt: 'The Future of Comics', caption: 'The Future of Comics'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '6',
      student_name: 'Dimosthenis Markopoulos',
      student_slug: 'dimosthenis-markopoulos',
      advisor_id: '114',
      project_title: 'PoolBuddy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Asset-4.png', title: 'Asset 4', alt: '0', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '61',
      student_name: 'Ellen Kim',
      student_slug: 'ellen-kim',
      advisor_id: '124',
      project_title: 'At Home',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-13.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '63',
      student_name: 'Jacquelyn Zen',
      student_slug: 'jacquelyn-zen',
      advisor_id: '124',
      project_title: 'Spotter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mockup2.jpg', title: 'Spotter Thumbnail', alt: 'Spotter Thumbnail', caption: ''
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '101',
      student_name: 'Jeffrey Park',
      student_slug: 'jeffrey-park',
      advisor_id: '131',
      project_title: 'Responsibly.me',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ext-min-thumb.png', title: 'extension-minimized', alt: 'The Responsibly.me Extension', caption: "At a glance, learn how the brand you're shopping at is doing and learn how their competitors are doing."
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '64',
      student_name: 'Koji',
      student_slug: 'koji',
      advisor_id: '124',
      project_title: 'Mtindo',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mtindo_journal_thumbnail.png', title: 'mtindo_journal_thumbnail', alt: 'mtindo', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '66',
      student_name: 'Manning Qu',
      student_slug: 'manning-qu',
      advisor_id: '124',
      project_title: 'DING: Intuitive Comm Tool for Grandma',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-15.jpg', title: 'DING_thumbtail', alt: 'A picture of photo frame has D I N G on it.', caption: ''
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '87',
      student_name: 'Sharif Al-hadidi',
      student_slug: 'sharif-al-hadidi',
      advisor_id: '129',
      project_title: 'Odyssey',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Odyssey-Logo.png', title: 'Odyssey Icon', alt: 'Odyssey Icon', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '72',
      student_name: 'Steven Simon',
      student_slug: 'steven-simon',
      advisor_id: '124',
      project_title: 'BrowseBetter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/browseBetter_thumbnail.jpg', title: 'BrowseBetter', alt: 'BrowseBetter', caption: 'BrowseBetter'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '55',
      student_name: 'Wenqi Li',
      student_slug: 'wenqi-li',
      advisor_id: '119',
      project_title: 'Metron Busker',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/final-banner.png', title: 'metron busker', alt: 'a man wears a high tech backpack', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '74',
      student_name: 'Woo Hyun Kim',
      student_slug: 'woo-hyun-kim',
      advisor_id: '124',
      project_title: 'Guidr',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail3.png', title: 'Guidr Thumbnail', alt: 'Guidr Thumbnail', caption: 'Guidr Thumbnail'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '56',
      student_name: 'Yuan Chen',
      student_slug: 'yuan-chen',
      advisor_id: '119',
      project_title: 'Google-Qt',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-3.jpg', title: 'thumbnailaaa', alt: 'thumbnail', caption: 'thumbnail'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '38',
      student_name: 'Yueping Wang',
      student_slug: 'yueping-wang',
      advisor_id: '123',
      project_title: 'Speakspeare: Theater Speech Recognition',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-5.jpg', title: 'thumbnail', alt: '.', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }],
    'Education': [{
      student_id: '77',
      student_name: 'Alexander Zimmer',
      student_slug: 'alexander-zimmer',
      advisor_id: '129',
      project_title: 'Portraits of Evanston',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ymca2.jpg', title: 'ymca', alt: 'ymca', caption: 'ymca'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '78',
      student_name: 'Ariana Vassilopoulou',
      student_slug: 'ariana-vassilopoulou',
      advisor_id: '129',
      project_title: 'A Fresh View',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailphoto.jpg', title: 'thumbnailphoto', alt: 'thumbnail', caption: 'thumbnail'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '41',
      student_name: 'Daniella Garcia-Rosales',
      student_slug: 'daniella-garcia-rosales',
      advisor_id: '119',
      project_title: 'Curiosity Algorithm',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/uno.png', title: 'uno', alt: 'curiosity', caption: 'a curiosity algorithm'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }, {
      student_id: '6',
      student_name: 'Dimosthenis Markopoulos',
      student_slug: 'dimosthenis-markopoulos',
      advisor_id: '114',
      project_title: 'PoolBuddy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Asset-4.png', title: 'Asset 4', alt: '0', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '24',
      student_name: 'Dominic Barrett',
      student_slug: 'dominic-barrett',
      advisor_id: '123',
      project_title: 'Going Forward',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/plug_tongue_320x240.jpg', title: 'plug_tongue_320x240', alt: 'Power cable close to a tongue', caption: 'Going Forward Thumbnail'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '62',
      student_name: 'Jinhee Ahn',
      student_slug: 'jinhee-ahn',
      advisor_id: '124',
      project_title: 'textARt',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-7.jpg', title: 'thumbnail', alt: 'textARt', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '83',
      student_name: 'Kar Rosen',
      student_slug: 'kar-rosen',
      advisor_id: '129',
      project_title: 'The Quantum Carnival',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis_archive_thumb.jpg', title: 'thesis_archive_thumb', alt: 'A brown wooden trunk stands before a red curtain. White light emits through the cracks of the open trunk top.', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '84',
      student_name: 'Maria Del Pilar Gomez Ruiz',
      student_slug: 'maria-del-pilar-gomez-ruiz',
      advisor_id: '129',
      project_title: 'Onda: Data Portraits for Period Health',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/onda-cover-pilar-gomez.png', title: 'onda-cover-pilar-gomez', alt: 'sketch of a physical menstrual calendar scanned and stored digitally with a computer vision algorithm', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Health', slug: 'health' }]
    }, {
      student_id: '85',
      student_name: 'Melissa Parker',
      student_slug: 'melissa-parker',
      advisor_id: '129',
      project_title: 'Honeybee Training Academy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/archive-site-thumbnail.png', title: 'archive-site-thumbnail', alt: 'A giant fabric flower with 15 inch pink petals and a yellow arcade button in the center.', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '107',
      student_name: 'Nathaniel Padgett',
      student_slug: 'nathaniel-padgett',
      advisor_id: '131',
      project_title: 'Open Kinetics',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/OKlogosymbol.png', title: 'OKlogosymbol', alt: 'Open Kinetics Logo', caption: 'Open Kinetics Logo'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '70',
      student_name: 'Patrick Presto',
      student_slug: 'patrick-presto',
      advisor_id: '124',
      project_title: 'Decrypt.Ed',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Logo_3.png', title: 'Logo_3', alt: 'logo3', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }, {
      student_id: '88',
      student_name: 'Sean Kim',
      student_slug: 'sean-kim',
      advisor_id: '129',
      project_title: 'Mindfulness Over Matter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/s3.jpg', title: 'sean_thumbnail', alt: '.', caption: 'Mindfuness Over Matter _'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '73',
      student_name: 'Swapna Joshi',
      student_slug: 'swapna-joshi',
      advisor_id: '124',
      project_title: 'MoleculAR : interactive chemistry kit',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb-1.jpg', title: 'kid interacting with MoleculAR', alt: 'kid interacting with MoleculAR', caption: 'kid interacting with MoleculAR'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }],
    'Narrative': [{
      student_id: '40',
      student_name: 'Akmyrat Tuyliyev',
      student_slug: 'akmyrat-tuyliyev',
      advisor_id: '119',
      project_title: 'Erteki: Storytelling by Children',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/baby_thumbnail.png', title: 'Erteki Thumbnail', alt: 'A baby boy looking into a bright screen', caption: 'Erteki thumbnail'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '2',
      student_name: 'Alex Fast',
      student_slug: 'alex-fast',
      advisor_id: '114',
      project_title: 'See the Ball',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Berrios.jpeg', title: 'Berrios', alt: 'berrios', caption: 'Berrios'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '77',
      student_name: 'Alexander Zimmer',
      student_slug: 'alexander-zimmer',
      advisor_id: '129',
      project_title: 'Portraits of Evanston',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ymca2.jpg', title: 'ymca', alt: 'ymca', caption: 'ymca'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '95',
      student_name: 'Alexia Kyriakopoulou',
      student_slug: 'alexia-kyriakopoulou',
      advisor_id: '131',
      project_title: 'Sygnómi',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb-1.png', title: 'thumb (1)', alt: 'sygnomi', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '21',
      student_name: 'Bryan Hsu',
      student_slug: 'bryan-hsu',
      advisor_id: '123',
      project_title: 'Cascade',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-cascade2.png', title: 'thumbnail-cascade2', alt: 'Cascade thumbnail', caption: 'Cascade thumbnail'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '22',
      student_name: 'Christina Hall',
      student_slug: 'christina-hall',
      advisor_id: '123',
      project_title: 'The Masks I Wear',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/HallC_TMIW_thumbnail320x240.jpg', title: 'HallC_TMIW_thumbnail320x240', alt: 'tmiw', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '79',
      student_name: 'Danni Huang',
      student_slug: 'danni-huang',
      advisor_id: '129',
      project_title: 'Jamais Vu',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-12.jpg', title: 'thumbnail', alt: '0', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '60',
      student_name: 'Diego Cruz Castillo',
      student_slug: 'diego-cruz-castillo',
      advisor_id: '124',
      project_title: 'The Future of Comics',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-1.png', title: 'thumbnail', alt: 'The Future of Comics', caption: 'The Future of Comics'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '24',
      student_name: 'Dominic Barrett',
      student_slug: 'dominic-barrett',
      advisor_id: '123',
      project_title: 'Going Forward',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/plug_tongue_320x240.jpg', title: 'plug_tongue_320x240', alt: 'Power cable close to a tongue', caption: 'Going Forward Thumbnail'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '97',
      student_name: 'Dong Chan Kim',
      student_slug: 'dong-chan-kim',
      advisor_id: '131',
      project_title: 'The Son&#8217;s Drawer',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/key-image_320x240.jpg', title: 'key image_320x240', alt: 'Main image of the project', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '104',
      student_name: 'Laura Kerry',
      student_slug: 'laura-kerry',
      advisor_id: '131',
      project_title: 'Beachcomber',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-lk-e1524493107305.png', title: 'thumbnail-lk', alt: 'Shoe soles in sand', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '30',
      student_name: 'Paula Leonvendagar',
      student_slug: 'paula-leonvendagar',
      advisor_id: '123',
      project_title: 'Oneiric Lab',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ThesisThumbnailImage1-2.png', title: 'ThesisThumbnailImage1', alt: 'Oneiric Lab Art Installation', caption: 'Oneiric Lab Art Installation'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '16',
      student_name: 'Richard Lapham',
      student_slug: 'richard-lapham',
      advisor_id: '114',
      project_title: 'Customizing Reality: Immersive Painting',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/RL_thumbnail.jpg', title: 'RL_thumbnail', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '17',
      student_name: 'Roi Lev',
      student_slug: 'roi-lev',
      advisor_id: '114',
      project_title: 'Inventing America',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail_new2.png', title: 'thumbnail', alt: '', caption: 'thumbnail'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '34',
      student_name: 'Utsav Chadha',
      student_slug: 'utsav-chadha',
      advisor_id: '123',
      project_title: 'Philosophycal / Feel-oh-so-fickle',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/logo.png', title: 'logo', alt: 'philosophycal-logo', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '112',
      student_name: 'Xitong Xu',
      student_slug: 'xitong-xu',
      advisor_id: '131',
      project_title: 'The Birth of the Self Portrait (1889)',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/archivethumb.png', title: 'The birth of the portrait', alt: 'The birth of the portrait', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '91',
      student_name: 'Yuqiao Qin',
      student_slug: 'yuqiao-qin',
      advisor_id: '129',
      project_title: 'Vuja De',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/vujade.jpg', title: 'vujade', alt: 'breathe deeply', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }],
    'Play': [{
      student_id: '20',
      student_name: 'Amanda Min-Jin Lee',
      student_slug: 'amanda-min-jin-lee',
      advisor_id: '123',
      project_title: 'JAM-JAM',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/amanda-01-1024x768.jpg', title: 'amanda', alt: '-', caption: '-'
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '10',
      student_name: 'Jenny Lim',
      student_slug: 'jenny-lim',
      advisor_id: '114',
      project_title: 'Awkward Thanksgiving',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TurkeyThumb_color.png', title: 'Turkey_thumbnail', alt: 'Turkey Is Not Happy', caption: ''
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '83',
      student_name: 'Kar Rosen',
      student_slug: 'kar-rosen',
      advisor_id: '129',
      project_title: 'The Quantum Carnival',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis_archive_thumb.jpg', title: 'thesis_archive_thumb', alt: 'A brown wooden trunk stands before a red curtain. White light emits through the cracks of the open trunk top.', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '85',
      student_name: 'Melissa Parker',
      student_slug: 'melissa-parker',
      advisor_id: '129',
      project_title: 'Honeybee Training Academy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/archive-site-thumbnail.png', title: 'archive-site-thumbnail', alt: 'A giant fabric flower with 15 inch pink petals and a yellow arcade button in the center.', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '107',
      student_name: 'Nathaniel Padgett',
      student_slug: 'nathaniel-padgett',
      advisor_id: '131',
      project_title: 'Open Kinetics',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/OKlogosymbol.png', title: 'OKlogosymbol', alt: 'Open Kinetics Logo', caption: 'Open Kinetics Logo'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '89',
      student_name: 'Stephanie Koltun',
      student_slug: 'stephanie-koltun',
      advisor_id: '129',
      project_title: 'How Thrilling',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-14.jpg', title: 'thumbnail', alt: "a still from Michael Jackson's \"Thriller\"", caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '54',
      student_name: 'Woraya Boonyapanachoti',
      student_slug: 'woraya-boonyapanachoti',
      advisor_id: '119',
      project_title: '(Dis)connect',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail_2.jpg', title: '(Dis)connect', alt: '(Dis)connect', caption: ''
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '19',
      student_name: 'Yuhan Zhang',
      student_slug: 'yuhan-zhang',
      advisor_id: '114',
      project_title: 'Gold Hunter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/coin@1x.jpg', title: 'coin@1x', alt: 'AR Thumbnail', caption: 'AR Thumbnail'
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }],
    'UX\\UI': [{
      student_id: '20',
      student_name: 'Amanda Min-Jin Lee',
      student_slug: 'amanda-min-jin-lee',
      advisor_id: '123',
      project_title: 'JAM-JAM',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/amanda-01-1024x768.jpg', title: 'amanda', alt: '-', caption: '-'
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '3',
      student_name: 'Ari Melenciano',
      student_slug: 'ari-melenciano',
      advisor_id: '114',
      project_title: 'OJO ORO Neo-retro Experimental Cameras',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ari1.png', title: 'OJO ORO', alt: 'OJO ORO', caption: 'a line of neo reto experimental cameras.'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '7',
      student_name: 'Grau Puche Recarens',
      student_slug: 'grau-puche-recarens',
      advisor_id: '114',
      project_title: 'lligam',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-15.05.48.png', title: 'CCR, realization of lligam', alt: 'the face of a cat', caption: ''
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '43',
      student_name: 'Hayeon Hwang',
      student_slug: 'hayeon-hwang',
      advisor_id: '119',
      project_title: 'Expressive Tactile Controls',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thum.gif', title: 'Expressive Tactile Controls', alt: 'Expressive Tactile Controls', caption: 'Expressive Tactile Controls'
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '8',
      student_name: 'Hayeon Kim',
      student_slug: 'hayeon-kim',
      advisor_id: '114',
      project_title: 'Droplet: an AR Experience Design System',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-4.png', title: 'droplet', alt: 'title', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '63',
      student_name: 'Jacquelyn Zen',
      student_slug: 'jacquelyn-zen',
      advisor_id: '124',
      project_title: 'Spotter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mockup2.jpg', title: 'Spotter Thumbnail', alt: 'Spotter Thumbnail', caption: ''
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '81',
      student_name: 'Jaycee Holmes',
      student_slug: 'jaycee-holmes',
      advisor_id: '129',
      project_title: 'Nigga Inventions',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-9-1024x773.png', title: 'thumbnail', alt: 'Nigga Inventions.', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '26',
      student_name: 'Jennifer G Tis',
      student_slug: 'jennifer-g-tis',
      advisor_id: '123',
      project_title: 'In Their Steps',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesisarchivethumbnail.jpg', title: 'thesisarchivethumbnail', alt: "iPhone app displaying ahistorical image with New York City's Washington Square Park in the background", caption: ''
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '44',
      student_name: 'Jesal Trivedi',
      student_slug: 'jesal-trivedi',
      advisor_id: '119',
      project_title: 'Mindful Technology: Aduri',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ITP-Thesis-Thumbnail.png', title: 'ITP Thesis Thumbnail', alt: 'meditation', caption: 'meditation'
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '12',
      student_name: 'Kyung A Na',
      student_slug: 'kyung-a-na',
      advisor_id: '114',
      project_title: 'Synesthesia',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbsupArtboard-1.jpg', title: 'thumbsnail', alt: 'hmhm', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '65',
      student_name: 'Lin Yang',
      student_slug: 'lin-yang',
      advisor_id: '124',
      project_title: 'PathIndoor',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-2.png', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '102',
      student_name: 'Luqian Chen',
      student_slug: 'luqian-chen',
      advisor_id: '131',
      project_title: 'Foodies',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/320240.jpg', title: 'Foodies', alt: 'Foodies', caption: 'Foodies'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '66',
      student_name: 'Manning Qu',
      student_slug: 'manning-qu',
      advisor_id: '124',
      project_title: 'DING: Intuitive Comm Tool for Grandma',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-15.jpg', title: 'DING_thumbtail', alt: 'A picture of photo frame has D I N G on it.', caption: ''
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '69',
      student_name: 'Nitish Wakalkar',
      student_slug: 'nitish-wakalkar',
      advisor_id: '124',
      project_title: 'The Quirk Bot Experiment',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/quirk-bots-thumbnail.png', title: 'quirk bots-thumbnail', alt: 'smart objects', caption: ''
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '71',
      student_name: 'Pan Pan',
      student_slug: 'pan-pan',
      advisor_id: '124',
      project_title: 'active.ly',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-8.png', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '50',
      student_name: 'Regina Cantu De Alba',
      student_slug: 'regina-cantu-de-alba',
      advisor_id: '119',
      project_title: 'Epoche',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/epocheThumb.png', title: 'epocheThumb', alt: 'The logo for a project that looks like a broken clock', caption: 'Epoche Logo'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '52',
      student_name: 'Se Young Kim',
      student_slug: 'se-young-kim',
      advisor_id: '119',
      project_title: 'Memoria',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/main.png', title: 'memoria', alt: 'memoria', caption: 'memoria'
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '90',
      student_name: 'Shivanku Kumar Fnu',
      student_slug: 'shivanku-kumar-fnu',
      advisor_id: '129',
      project_title: 'NewChat: All the News That&#8217;s Fit to Chat',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail-3.jpg', title: 'new chat', alt: 'This is a placeholder logo for the app', caption: ''
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '72',
      student_name: 'Steven Simon',
      student_slug: 'steven-simon',
      advisor_id: '124',
      project_title: 'BrowseBetter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/browseBetter_thumbnail.jpg', title: 'BrowseBetter', alt: 'BrowseBetter', caption: 'BrowseBetter'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '74',
      student_name: 'Woo Hyun Kim',
      student_slug: 'woo-hyun-kim',
      advisor_id: '124',
      project_title: 'Guidr',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail3.png', title: 'Guidr Thumbnail', alt: 'Guidr Thumbnail', caption: 'Guidr Thumbnail'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '56',
      student_name: 'Yuan Chen',
      student_slug: 'yuan-chen',
      advisor_id: '119',
      project_title: 'Google-Qt',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-3.jpg', title: 'thumbnailaaa', alt: 'thumbnail', caption: 'thumbnail'
      },
      topics: [{ name: 'Tool\\Service', slug: 'toolservice' }, { name: 'UX\\UI', slug: 'uxui' }]
    }],
    'Identity': [{
      student_id: '40',
      student_name: 'Akmyrat Tuyliyev',
      student_slug: 'akmyrat-tuyliyev',
      advisor_id: '119',
      project_title: 'Erteki: Storytelling by Children',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/baby_thumbnail.png', title: 'Erteki Thumbnail', alt: 'A baby boy looking into a bright screen', caption: 'Erteki thumbnail'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '76',
      student_name: 'Anastasios Germanidis',
      student_slug: 'anastasios-germanidis',
      advisor_id: '129',
      project_title: 'Sybil Society',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Artboard-Copy-3.png', title: 'Artboard Copy 3', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '23',
      student_name: 'Chester Dols',
      student_slug: 'chester-dols',
      advisor_id: '123',
      project_title: 'On Otherness and Queer Affect',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/THUMBNAIL-Converted.jpg', title: 'THUMBNAIL', alt: 'On Otherness and Queer Affect', caption: 'On Otherness and Queer Affect'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '98',
      student_name: 'Elizabeth White',
      student_slug: 'elizabeth-white',
      advisor_id: '131',
      project_title: 'Body Lights',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/BodyLightsThumbnail.jpg', title: 'BodyLightsThumbnail', alt: 'me', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '80',
      student_name: 'Jarrett C Slavin',
      student_slug: 'jarrett-c-slavin',
      advisor_id: '129',
      project_title: 'Spectrum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/spectrumThumbnail.jpg', title: 'spectrumThumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '13',
      student_name: 'Katherine A Takacs',
      student_slug: 'katherine-a-takacs',
      advisor_id: '114',
      project_title: 'AWall',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TakacsThumbnail.jpg', title: 'TakacsThumbnail', alt: 'Thumbnail', caption: 'Takacs'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '103',
      student_name: 'Lindsey Daniels',
      student_slug: 'lindsey-daniels',
      advisor_id: '131',
      project_title: 'Basic Ingredients',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/icon1.jpg', title: 'icon1', alt: 'smallIcon', caption: 'small icon'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '68',
      student_name: 'Nouf Aljowaysir',
      student_slug: 'nouf-aljowaysir',
      advisor_id: '124',
      project_title: 'Nouf.io',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-9.jpg', title: 'thumbnail', alt: 'nouf.io', caption: 'nouf.io'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Identity', slug: 'identity' }]
    }, {
      student_id: '57',
      student_name: 'Yutong Zhang',
      student_slug: 'yutong-zhang',
      advisor_id: '119',
      project_title: 'SELF POOL',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail2.jpg', title: 'thumbnail2', alt: 'Self_pool_thumbnail', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    }],
    'VR\\AR': [{
      student_id: '95',
      student_name: 'Alexia Kyriakopoulou',
      student_slug: 'alexia-kyriakopoulou',
      advisor_id: '131',
      project_title: 'Sygnómi',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb-1.png', title: 'thumb (1)', alt: 'sygnomi', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '76',
      student_name: 'Anastasios Germanidis',
      student_slug: 'anastasios-germanidis',
      advisor_id: '129',
      project_title: 'Sybil Society',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Artboard-Copy-3.png', title: 'Artboard Copy 3', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '21',
      student_name: 'Bryan Hsu',
      student_slug: 'bryan-hsu',
      advisor_id: '123',
      project_title: 'Cascade',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-cascade2.png', title: 'thumbnail-cascade2', alt: 'Cascade thumbnail', caption: 'Cascade thumbnail'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '5',
      student_name: 'Chloe Gao',
      student_slug: 'chloe-gao',
      advisor_id: '114',
      project_title: 'Ephemeral',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail-2.jpg', title: 'Thumbnail', alt: 'Thumbnail', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '79',
      student_name: 'Danni Huang',
      student_slug: 'danni-huang',
      advisor_id: '129',
      project_title: 'Jamais Vu',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-12.jpg', title: 'thumbnail', alt: '0', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '97',
      student_name: 'Dong Chan Kim',
      student_slug: 'dong-chan-kim',
      advisor_id: '131',
      project_title: 'The Son&#8217;s Drawer',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/key-image_320x240.jpg', title: 'key image_320x240', alt: 'Main image of the project', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '8',
      student_name: 'Hayeon Kim',
      student_slug: 'hayeon-kim',
      advisor_id: '114',
      project_title: 'Droplet: an AR Experience Design System',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-4.png', title: 'droplet', alt: 'title', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '100',
      student_name: 'Ji Young Chun',
      student_slug: 'ji-young-chun',
      advisor_id: '131',
      project_title: 'Semper Simul',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thmb-e1524291318103.png', title: 'Semper Simul', alt: 'Semper Simul', caption: 'Semper Simul'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '9',
      student_name: 'Jina Jung',
      student_slug: 'jina-jung',
      advisor_id: '114',
      project_title: 'Intangible Canvas',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.jpg', title: 'Thumbnail', alt: 'Jina001', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '27',
      student_name: 'Jingfei Lin',
      student_slug: 'jingfei-lin',
      advisor_id: '123',
      project_title: 'Runway in Store',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/THUMBNAIL.jpg', title: 'Runway in store', alt: 'Runway in store', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '45',
      student_name: 'Jingru Yin',
      student_slug: 'jingru-yin',
      advisor_id: '119',
      project_title: 'I&#8217;m With Mr. Zhou',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-10.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '62',
      student_name: 'Jinhee Ahn',
      student_slug: 'jinhee-ahn',
      advisor_id: '124',
      project_title: 'textARt',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-7.jpg', title: 'thumbnail', alt: 'textARt', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '11',
      student_name: 'Jixuan Sun',
      student_slug: 'jixuan-sun',
      advisor_id: '114',
      project_title: 'Xiangrui: Patterns at the Palace Museum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-thumbnail.png', title: 'thesis thumbnail', alt: 'XIANGRUI – Auspicious Symbols in the Palace Museum', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '12',
      student_name: 'Kyung A Na',
      student_slug: 'kyung-a-na',
      advisor_id: '114',
      project_title: 'Synesthesia',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbsupArtboard-1.jpg', title: 'thumbsnail', alt: 'hmhm', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '65',
      student_name: 'Lin Yang',
      student_slug: 'lin-yang',
      advisor_id: '124',
      project_title: 'PathIndoor',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-2.png', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '106',
      student_name: 'Miao Tian',
      student_slug: 'miao-tian',
      advisor_id: '131',
      project_title: 'Commodity Fetishism',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb.jpg', title: 'thumb', alt: 'Enduring Commodity Fetish', caption: 'Enduring Commodity Fetish'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '15',
      student_name: 'Michael Kripchak',
      student_slug: 'michael-kripchak',
      advisor_id: '114',
      project_title: 'Touch at a Distance',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/KripchakThesisThumbnail.png', title: 'Kripchak Thesis Thumbnail', alt: 'Telepresence projection in VR.', caption: 'Screen-capture of holographic telepresence from within VR.'
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '29',
      student_name: 'Oriana Neidecker',
      student_slug: 'oriana-neidecker',
      advisor_id: '123',
      project_title: 'The Nude Museum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mars320.jpg', title: 'Nude Museum on Mars', alt: 'Curated selection of photos for the Mars Environment', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '71',
      student_name: 'Pan Pan',
      student_slug: 'pan-pan',
      advisor_id: '124',
      project_title: 'active.ly',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-8.png', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '109',
      student_name: 'Ran Tian',
      student_slug: 'ran-tian',
      advisor_id: '131',
      project_title: 'Heart Health',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.png', title: 'Thumbnail', alt: 'Heart Health AR app', caption: ''
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '16',
      student_name: 'Richard Lapham',
      student_slug: 'richard-lapham',
      advisor_id: '114',
      project_title: 'Customizing Reality: Immersive Painting',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/RL_thumbnail.jpg', title: 'RL_thumbnail', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '17',
      student_name: 'Roi Lev',
      student_slug: 'roi-lev',
      advisor_id: '114',
      project_title: 'Inventing America',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail_new2.png', title: 'thumbnail', alt: '', caption: 'thumbnail'
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '33',
      student_name: 'Scott Reitherman',
      student_slug: 'scott-reitherman',
      advisor_id: '123',
      project_title: 'Grand Central Immersion',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/GCI_thesisArchive1.jpg', title: 'GCI_thesisArchive1', alt: 'Grand Central Immersion, Scott Reitherman ITP Thesis', caption: 'Grand Central Immersion, Scott Reitherman ITP Thesis'
      },
      topics: [{ name: 'Sound', slug: 'sound' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '52',
      student_name: 'Se Young Kim',
      student_slug: 'se-young-kim',
      advisor_id: '119',
      project_title: 'Memoria',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/main.png', title: 'memoria', alt: 'memoria', caption: 'memoria'
      },
      topics: [{ name: 'UX\\UI', slug: 'uxui' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '88',
      student_name: 'Sean Kim',
      student_slug: 'sean-kim',
      advisor_id: '129',
      project_title: 'Mindfulness Over Matter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/s3.jpg', title: 'sean_thumbnail', alt: '.', caption: 'Mindfuness Over Matter _'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '35',
      student_name: 'Shelley Hu',
      student_slug: 'shelley-hu',
      advisor_id: '123',
      project_title: 'The Act of Receiving',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-6.jpg', title: 'thumbnail', alt: 'shelley_thumbnail_small', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '73',
      student_name: 'Swapna Joshi',
      student_slug: 'swapna-joshi',
      advisor_id: '124',
      project_title: 'MoleculAR : interactive chemistry kit',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb-1.jpg', title: 'kid interacting with MoleculAR', alt: 'kid interacting with MoleculAR', caption: 'kid interacting with MoleculAR'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '54',
      student_name: 'Woraya Boonyapanachoti',
      student_slug: 'woraya-boonyapanachoti',
      advisor_id: '119',
      project_title: '(Dis)connect',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail_2.jpg', title: '(Dis)connect', alt: '(Dis)connect', caption: ''
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '112',
      student_name: 'Xitong Xu',
      student_slug: 'xitong-xu',
      advisor_id: '131',
      project_title: 'The Birth of the Self Portrait (1889)',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/archivethumb.png', title: 'The birth of the portrait', alt: 'The birth of the portrait', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '18',
      student_name: 'Younho Lee',
      student_slug: 'younho-lee',
      advisor_id: '114',
      project_title: 'The World of Reverie',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail1.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '19',
      student_name: 'Yuhan Zhang',
      student_slug: 'yuhan-zhang',
      advisor_id: '114',
      project_title: 'Gold Hunter',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/coin@1x.jpg', title: 'coin@1x', alt: 'AR Thumbnail', caption: 'AR Thumbnail'
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '113',
      student_name: 'Yunho Choi',
      student_slug: 'yunho-choi',
      advisor_id: '131',
      project_title: 'Let Me Give Light',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/test_thumnail2.jpg', title: 'thumnail', alt: 'thumnail', caption: 'thumnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '91',
      student_name: 'Yuqiao Qin',
      student_slug: 'yuqiao-qin',
      advisor_id: '129',
      project_title: 'Vuja De',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/vujade.jpg', title: 'vujade', alt: 'breathe deeply', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }],
    'Installation': [{
      student_id: '78',
      student_name: 'Ariana Vassilopoulou',
      student_slug: 'ariana-vassilopoulou',
      advisor_id: '129',
      project_title: 'A Fresh View',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailphoto.jpg', title: 'thumbnailphoto', alt: 'thumbnail', caption: 'thumbnail'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '4',
      student_name: 'Brandon Kader',
      student_slug: 'brandon-kader',
      advisor_id: '114',
      project_title: 'IMVII',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/IMVII-THESIS-ARCHIVE-THUMBNAIL-1.jpg', title: 'IMVII THESIS ARCHIVE THUMBNAIL', alt: 'IMVII', caption: 'caption'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '23',
      student_name: 'Chester Dols',
      student_slug: 'chester-dols',
      advisor_id: '123',
      project_title: 'On Otherness and Queer Affect',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/THUMBNAIL-Converted.jpg', title: 'THUMBNAIL', alt: 'On Otherness and Queer Affect', caption: 'On Otherness and Queer Affect'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '5',
      student_name: 'Chloe Gao',
      student_slug: 'chloe-gao',
      advisor_id: '114',
      project_title: 'Ephemeral',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail-2.jpg', title: 'Thumbnail', alt: 'Thumbnail', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '42',
      student_name: 'David Temchulla',
      student_slug: 'david-temchulla',
      advisor_id: '119',
      project_title: 'Beast of Burden',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-3.png', title: 'Beast of Burden', alt: "Sound Booths, Sheet Metal, Motor, LED's, Mic", caption: 'Interactive Sculpture'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '9',
      student_name: 'Jina Jung',
      student_slug: 'jina-jung',
      advisor_id: '114',
      project_title: 'Intangible Canvas',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.jpg', title: 'Thumbnail', alt: 'Jina001', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '27',
      student_name: 'Jingfei Lin',
      student_slug: 'jingfei-lin',
      advisor_id: '123',
      project_title: 'Runway in Store',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/THUMBNAIL.jpg', title: 'Runway in store', alt: 'Runway in store', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '13',
      student_name: 'Katherine A Takacs',
      student_slug: 'katherine-a-takacs',
      advisor_id: '114',
      project_title: 'AWall',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TakacsThumbnail.jpg', title: 'TakacsThumbnail', alt: 'Thumbnail', caption: 'Takacs'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '46',
      student_name: 'Lindsey Piscitell',
      student_slug: 'lindsey-piscitell',
      advisor_id: '119',
      project_title: 'Pack Your Things and Go',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/8W0B7922-1-1024x768.jpg', title: '8W0B7922-1', alt: 'Brass lantern and mosaic box in larger box surrounded by dried flowers.', caption: 'Thumbnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '86',
      student_name: 'Nanou Dimachki',
      student_slug: 'nanou-dimachki',
      advisor_id: '129',
      project_title: 'Intimate Patterns',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/20180424_142819-1024x768.jpg', title: '20180424_142819', alt: 'bulbs two', caption: 'bulbs two'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '30',
      student_name: 'Paula Leonvendagar',
      student_slug: 'paula-leonvendagar',
      advisor_id: '123',
      project_title: 'Oneiric Lab',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ThesisThumbnailImage1-2.png', title: 'ThesisThumbnailImage1', alt: 'Oneiric Lab Art Installation', caption: 'Oneiric Lab Art Installation'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '49',
      student_name: 'Philip McCausland',
      student_slug: 'philip-mccausland',
      advisor_id: '119',
      project_title: 'Feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-7.png', title: 'thumbnail', alt: 'feeeeeeeeeed thumbnail', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '32',
      student_name: 'Sebastian Morales',
      student_slug: 'sebastian-morales',
      advisor_id: '123',
      project_title: 'Bots, Cells, and Humans Watching',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailCrop.jpg', title: 'bots, cells and humans watching', alt: 'internet connected microscope, bioreactor and internet bots', caption: 'internet connected microscope, bioreactor and internet bots'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '51',
      student_name: 'Siman Li',
      student_slug: 'siman-li',
      advisor_id: '119',
      project_title: 'The Crossings 渡',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-11.jpg', title: 'thumbnail', alt: 'f', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '75',
      student_name: 'Yanlin Ma',
      student_slug: 'yanlin-ma',
      advisor_id: '124',
      project_title: '.5 Square Meter Land of My Hometown',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-1.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '92',
      student_name: 'Yeseul Song',
      student_slug: 'yeseul-song',
      advisor_id: '129',
      project_title: 'Invisible Sculptures',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/invisible_thumbnail-1.jpg', title: 'invisible_thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Tangible', slug: 'Tangible' }]
    }, {
      student_id: '36',
      student_name: 'Yihan Chen',
      student_slug: 'yihan-chen',
      advisor_id: '123',
      project_title: 'Perfect Housewife',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Yihan_Thesis_01_320x240.jpg', title: 'Yihan_Thesis_01_320x240', alt: '11', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '113',
      student_name: 'Yunho Choi',
      student_slug: 'yunho-choi',
      advisor_id: '131',
      project_title: 'Let Me Give Light',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/test_thumnail2.jpg', title: 'thumnail', alt: 'thumnail', caption: 'thumnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '57',
      student_name: 'Yutong Zhang',
      student_slug: 'yutong-zhang',
      advisor_id: '119',
      project_title: 'SELF POOL',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail2.jpg', title: 'thumbnail2', alt: 'Self_pool_thumbnail', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '94',
      student_name: 'Ziyu He',
      student_slug: 'ziyu-he',
      advisor_id: '129',
      project_title: 'it will be perfect from now on',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-2.002.jpeg', title: 'it will be perfect from now on', alt: 'it will be perfect from now on - thumbnail', caption: 'it will be perfect from now on - thumbnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Society', slug: 'society' }]
    }],
    'Data': [{
      student_id: '2',
      student_name: 'Alex Fast',
      student_slug: 'alex-fast',
      advisor_id: '114',
      project_title: 'See the Ball',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Berrios.jpeg', title: 'Berrios', alt: 'berrios', caption: 'Berrios'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '39',
      student_name: 'Anne-Michelle Gallero',
      student_slug: 'anne-michelle-gallero',
      advisor_id: '119',
      project_title: '100 Days of News',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/100News_Thumbnail_320x240.jpg', title: '100News_Thumbnail_320x240', alt: 'Thesis: 100 Days News_Thumbnail', caption: 'Thesis: 100 Days of News_Thumbnail'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '96',
      student_name: 'Chetan Hasabnis',
      student_slug: 'chetan-hasabnis',
      advisor_id: '131',
      project_title: 'Building Emergency Intelligence',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-1-01.png', title: 'Building Emergency Intelligence', alt: 'Building Emergency Intelligence', caption: 'Building Emergency Intelligence'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '61',
      student_name: 'Ellen Kim',
      student_slug: 'ellen-kim',
      advisor_id: '124',
      project_title: 'At Home',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-13.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '99',
      student_name: 'Jasmine A Soltani',
      student_slug: 'jasmine-a-soltani',
      advisor_id: '131',
      project_title: 'Manifest Energy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailV5.jpg', title: 'thumbnailV5', alt: 'earth and phone', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '28',
      student_name: 'Marco Guarino',
      student_slug: 'marco-guarino',
      advisor_id: '123',
      project_title: 'Genealogy of a Rhythm',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/4.jpg', title: '4', alt: 'Genealogy of a Rhythm', caption: 'Genealogy of a Rhythm'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    }, {
      student_id: '105',
      student_name: 'Maxwell Nakamura',
      student_slug: 'maxwell-nakamura',
      advisor_id: '131',
      project_title: 'Plaza Project: Mapping US public opinion',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/PlazaThumbnail.png', title: 'PlazaThumbnail', alt: 'Plaza logo', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '47',
      student_name: 'Mithru Swarna',
      student_slug: 'mithru-swarna',
      advisor_id: '119',
      project_title: 'Internet of T̶h̶i̶n̶g̶s̶ Humans (IoH)',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ioh-colour.png', title: 'ioh-colour', alt: "A dark blue logo with white background that has a representation of a human with wireless signals coming off the human's head. It's a combination between a human icon and the WiFi icon.", caption: 'Internet of Humans - logo'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    }, {
      student_id: '86',
      student_name: 'Nanou Dimachki',
      student_slug: 'nanou-dimachki',
      advisor_id: '129',
      project_title: 'Intimate Patterns',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/20180424_142819-1024x768.jpg', title: '20180424_142819', alt: 'bulbs two', caption: 'bulbs two'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '68',
      student_name: 'Nouf Aljowaysir',
      student_slug: 'nouf-aljowaysir',
      advisor_id: '124',
      project_title: 'Nouf.io',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-9.jpg', title: 'thumbnail', alt: 'nouf.io', caption: 'nouf.io'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Identity', slug: 'identity' }]
    }, {
      student_id: '108',
      student_name: 'Rita Cheng',
      student_slug: 'rita-cheng',
      advisor_id: '131',
      project_title: 'The Personal Panopticon',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/render.png', title: 'Karma. The Smarter Assistant.', alt: 'A Render of Karma', caption: 'Karma. The Smarter Assistant.'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Data', slug: 'data' }]
    }, {
      student_id: '87',
      student_name: 'Sharif Al-hadidi',
      student_slug: 'sharif-al-hadidi',
      advisor_id: '129',
      project_title: 'Odyssey',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Odyssey-Logo.png', title: 'Odyssey Icon', alt: 'Odyssey Icon', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '75',
      student_name: 'Yanlin Ma',
      student_slug: 'yanlin-ma',
      advisor_id: '124',
      project_title: '.5 Square Meter Land of My Hometown',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-1.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Installation', slug: 'installation' }]
    }, {
      student_id: '18',
      student_name: 'Younho Lee',
      student_slug: 'younho-lee',
      advisor_id: '114',
      project_title: 'The World of Reverie',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail1.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }],
    'Society': [{
      student_id: '39',
      student_name: 'Anne-Michelle Gallero',
      student_slug: 'anne-michelle-gallero',
      advisor_id: '119',
      project_title: '100 Days of News',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/100News_Thumbnail_320x240.jpg', title: '100News_Thumbnail_320x240', alt: 'Thesis: 100 Days News_Thumbnail', caption: 'Thesis: 100 Days of News_Thumbnail'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '96',
      student_name: 'Chetan Hasabnis',
      student_slug: 'chetan-hasabnis',
      advisor_id: '131',
      project_title: 'Building Emergency Intelligence',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-1-01.png', title: 'Building Emergency Intelligence', alt: 'Building Emergency Intelligence', caption: 'Building Emergency Intelligence'
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '99',
      student_name: 'Jasmine A Soltani',
      student_slug: 'jasmine-a-soltani',
      advisor_id: '131',
      project_title: 'Manifest Energy',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailV5.jpg', title: 'thumbnailV5', alt: 'earth and phone', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '101',
      student_name: 'Jeffrey Park',
      student_slug: 'jeffrey-park',
      advisor_id: '131',
      project_title: 'Responsibly.me',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ext-min-thumb.png', title: 'extension-minimized', alt: 'The Responsibly.me Extension', caption: "At a glance, learn how the brand you're shopping at is doing and learn how their competitors are doing."
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '26',
      student_name: 'Jennifer G Tis',
      student_slug: 'jennifer-g-tis',
      advisor_id: '123',
      project_title: 'In Their Steps',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesisarchivethumbnail.jpg', title: 'thesisarchivethumbnail', alt: "iPhone app displaying ahistorical image with New York City's Washington Square Park in the background", caption: ''
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '10',
      student_name: 'Jenny Lim',
      student_slug: 'jenny-lim',
      advisor_id: '114',
      project_title: 'Awkward Thanksgiving',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TurkeyThumb_color.png', title: 'Turkey_thumbnail', alt: 'Turkey Is Not Happy', caption: ''
      },
      topics: [{ name: 'Play', slug: 'play' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '104',
      student_name: 'Laura Kerry',
      student_slug: 'laura-kerry',
      advisor_id: '131',
      project_title: 'Beachcomber',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-lk-e1524493107305.png', title: 'thumbnail-lk', alt: 'Shoe soles in sand', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '102',
      student_name: 'Luqian Chen',
      student_slug: 'luqian-chen',
      advisor_id: '131',
      project_title: 'Foodies',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/320240.jpg', title: 'Foodies', alt: 'Foodies', caption: 'Foodies'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '105',
      student_name: 'Maxwell Nakamura',
      student_slug: 'maxwell-nakamura',
      advisor_id: '131',
      project_title: 'Plaza Project: Mapping US public opinion',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/PlazaThumbnail.png', title: 'PlazaThumbnail', alt: 'Plaza logo', caption: ''
      },
      topics: [{ name: 'Data', slug: 'data' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '106',
      student_name: 'Miao Tian',
      student_slug: 'miao-tian',
      advisor_id: '131',
      project_title: 'Commodity Fetishism',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb.jpg', title: 'thumb', alt: 'Enduring Commodity Fetish', caption: 'Enduring Commodity Fetish'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '50',
      student_name: 'Regina Cantu De Alba',
      student_slug: 'regina-cantu-de-alba',
      advisor_id: '119',
      project_title: 'Epoche',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/epocheThumb.png', title: 'epocheThumb', alt: 'The logo for a project that looks like a broken clock', caption: 'Epoche Logo'
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '90',
      student_name: 'Shivanku Kumar Fnu',
      student_slug: 'shivanku-kumar-fnu',
      advisor_id: '129',
      project_title: 'NewChat: All the News That&#8217;s Fit to Chat',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail-3.jpg', title: 'new chat', alt: 'This is a placeholder logo for the app', caption: ''
      },
      topics: [{ name: 'Society', slug: 'society' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '37',
      student_name: 'Ye Lu',
      student_slug: 'ye-lu',
      advisor_id: '123',
      project_title: 'Lotus Babe',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-cover-page.png', title: 'thesis cover page', alt: '123', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '94',
      student_name: 'Ziyu He',
      student_slug: 'ziyu-he',
      advisor_id: '129',
      project_title: 'it will be perfect from now on',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-2.002.jpeg', title: 'it will be perfect from now on', alt: 'it will be perfect from now on - thumbnail', caption: 'it will be perfect from now on - thumbnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Society', slug: 'society' }]
    }, {
      student_id: '82',
      student_name: 'sejo vega-cebrián',
      student_slug: 'sejo-vega-cebrián',
      advisor_id: '129',
      project_title: 'everything must go ( … )',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.png', title: 'thumbnail', alt: 'image of a dimly lit dark table in a dark room. it contains the following elements: a laptop with a small lamp over it, a microphone, a small booklet, and three glass cups', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Society', slug: 'society' }]
    }],
    'Performance': [{
      student_id: '4',
      student_name: 'Brandon Kader',
      student_slug: 'brandon-kader',
      advisor_id: '114',
      project_title: 'IMVII',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/IMVII-THESIS-ARCHIVE-THUMBNAIL-1.jpg', title: 'IMVII THESIS ARCHIVE THUMBNAIL', alt: 'IMVII', caption: 'caption'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '22',
      student_name: 'Christina Hall',
      student_slug: 'christina-hall',
      advisor_id: '123',
      project_title: 'The Masks I Wear',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/HallC_TMIW_thumbnail320x240.jpg', title: 'HallC_TMIW_thumbnail320x240', alt: 'tmiw', caption: ''
      },
      topics: [{ name: 'Narrative', slug: 'narrative' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '98',
      student_name: 'Elizabeth White',
      student_slug: 'elizabeth-white',
      advisor_id: '131',
      project_title: 'Body Lights',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/BodyLightsThumbnail.jpg', title: 'BodyLightsThumbnail', alt: 'me', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '45',
      student_name: 'Jingru Yin',
      student_slug: 'jingru-yin',
      advisor_id: '119',
      project_title: 'I&#8217;m With Mr. Zhou',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-10.jpg', title: 'thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '32',
      student_name: 'Sebastian Morales',
      student_slug: 'sebastian-morales',
      advisor_id: '123',
      project_title: 'Bots, Cells, and Humans Watching',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnailCrop.jpg', title: 'bots, cells and humans watching', alt: 'internet connected microscope, bioreactor and internet bots', caption: 'internet connected microscope, bioreactor and internet bots'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '35',
      student_name: 'Shelley Hu',
      student_slug: 'shelley-hu',
      advisor_id: '123',
      project_title: 'The Act of Receiving',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-6.jpg', title: 'thumbnail', alt: 'shelley_thumbnail_small', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '89',
      student_name: 'Stephanie Koltun',
      student_slug: 'stephanie-koltun',
      advisor_id: '129',
      project_title: 'How Thrilling',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-14.jpg', title: 'thumbnail', alt: "a still from Michael Jackson's \"Thriller\"", caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Play', slug: 'play' }]
    }, {
      student_id: '53',
      student_name: 'Tiriree Kananuruk',
      student_slug: 'tiriree-kananuruk',
      advisor_id: '119',
      project_title: 'DeepTalking',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/forthesisarchive.jpg', title: 'forthesisarchive', alt: 'DeepTalking- performance show. Tiri and Jann sing along with 10 bots', caption: 'DeepTalking- performance show. Tiri and Jann sing along with 10 bots'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '55',
      student_name: 'Wenqi Li',
      student_slug: 'wenqi-li',
      advisor_id: '119',
      project_title: 'Metron Busker',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/final-banner.png', title: 'metron busker', alt: 'a man wears a high tech backpack', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '36',
      student_name: 'Yihan Chen',
      student_slug: 'yihan-chen',
      advisor_id: '123',
      project_title: 'Perfect Housewife',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Yihan_Thesis_01_320x240.jpg', title: 'Yihan_Thesis_01_320x240', alt: '11', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '38',
      student_name: 'Yueping Wang',
      student_slug: 'yueping-wang',
      advisor_id: '123',
      project_title: 'Speakspeare: Theater Speech Recognition',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-5.jpg', title: 'thumbnail', alt: '.', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '82',
      student_name: 'sejo vega-cebrián',
      student_slug: 'sejo-vega-cebrián',
      advisor_id: '129',
      project_title: 'everything must go ( … )',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.png', title: 'thumbnail', alt: 'image of a dimly lit dark table in a dark room. it contains the following elements: a laptop with a small lamp over it, a microphone, a small booklet, and three glass cups', caption: ''
      },
      topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Society', slug: 'society' }]
    }],
    'Machine Learning': [{
      student_id: '59',
      student_name: 'Cristobal Valenzuela',
      student_slug: 'cristobal-valenzuela',
      advisor_id: '124',
      project_title: 'Runway',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.jpg', title: 'thumbnail', alt: 'runway', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '41',
      student_name: 'Daniella Garcia-Rosales',
      student_slug: 'daniella-garcia-rosales',
      advisor_id: '119',
      project_title: 'Curiosity Algorithm',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/uno.png', title: 'uno', alt: 'curiosity', caption: 'a curiosity algorithm'
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }, {
      student_id: '25',
      student_name: 'Dror Dov Ayalon',
      student_slug: 'dror-dov-ayalon',
      advisor_id: '123',
      project_title: 'Soundscape: a Tool for Music Makers',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/card-copy-1.png', title: 'Soundscape', alt: 'Soundscape', caption: 'Soundscape'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '11',
      student_name: 'Jixuan Sun',
      student_slug: 'jixuan-sun',
      advisor_id: '114',
      project_title: 'Xiangrui: Patterns at the Palace Museum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-thumbnail.png', title: 'thesis thumbnail', alt: 'XIANGRUI – Auspicious Symbols in the Palace Museum', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '64',
      student_name: 'Koji',
      student_slug: 'koji',
      advisor_id: '124',
      project_title: 'Mtindo',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mtindo_journal_thumbnail.png', title: 'mtindo_journal_thumbnail', alt: 'mtindo', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Tool\\Service', slug: 'toolservice' }]
    }, {
      student_id: '67',
      student_name: 'Michael Simpson',
      student_slug: 'michael-simpson',
      advisor_id: '124',
      project_title: 'CATk: Computational Audition Toolkit',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ofxDeepSignalProcessingDebug-Screen-Output-2018-04-19-at-22.26.40-1.png', title: 'Cover Matrix', alt: 'Cover Matrix', caption: 'Cover Matrix'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '48',
      student_name: 'Or Fleisher',
      student_slug: 'or-fleisher',
      advisor_id: '119',
      project_title: 'Volume',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumb.png', title: 'Volume_Thumbnail', alt: 'Volume_Thumbnail', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }, {
      student_id: '70',
      student_name: 'Patrick Presto',
      student_slug: 'patrick-presto',
      advisor_id: '124',
      project_title: 'Decrypt.Ed',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Logo_3.png', title: 'Logo_3', alt: 'logo3', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }, {
      student_id: '53',
      student_name: 'Tiriree Kananuruk',
      student_slug: 'tiriree-kananuruk',
      advisor_id: '119',
      project_title: 'DeepTalking',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/forthesisarchive.jpg', title: 'forthesisarchive', alt: 'DeepTalking- performance show. Tiri and Jann sing along with 10 bots', caption: 'DeepTalking- performance show. Tiri and Jann sing along with 10 bots'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Performance', slug: 'performance' }]
    }, {
      student_id: '34',
      student_name: 'Utsav Chadha',
      student_slug: 'utsav-chadha',
      advisor_id: '123',
      project_title: 'Philosophycal / Feel-oh-so-fickle',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/logo.png', title: 'logo', alt: 'philosophycal-logo', caption: ''
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Narrative', slug: 'narrative' }]
    }, {
      student_id: '93',
      student_name: 'Zachary Coble',
      student_slug: 'zachary-coble',
      advisor_id: '129',
      project_title: 'Wikibabel',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/putin-320x240-fish.jpg', title: 'Wikibabel', alt: 'Wikibabel', caption: 'Wikibabel'
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Machine Learning', slug: 'machine-learning' }]
    }],
    'Sound': [{
      student_id: '42',
      student_name: 'David Temchulla',
      student_slug: 'david-temchulla',
      advisor_id: '119',
      project_title: 'Beast of Burden',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-3.png', title: 'Beast of Burden', alt: "Sound Booths, Sheet Metal, Motor, LED's, Mic", caption: 'Interactive Sculpture'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '25',
      student_name: 'Dror Dov Ayalon',
      student_slug: 'dror-dov-ayalon',
      advisor_id: '123',
      project_title: 'Soundscape: a Tool for Music Makers',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/card-copy-1.png', title: 'Soundscape', alt: 'Soundscape', caption: 'Soundscape'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '80',
      student_name: 'Jarrett C Slavin',
      student_slug: 'jarrett-c-slavin',
      advisor_id: '129',
      project_title: 'Spectrum',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/spectrumThumbnail.jpg', title: 'spectrumThumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '14',
      student_name: 'Li-Chung Chen',
      student_slug: 'li-chung-chen',
      advisor_id: '114',
      project_title: 'Iso-principle in the Digital World',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/iso-principle-in-the-digital-world.jpg', title: 'iso-principle in the digital world', alt: '11', caption: 'thumbnail'
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '103',
      student_name: 'Lindsey Daniels',
      student_slug: 'lindsey-daniels',
      advisor_id: '131',
      project_title: 'Basic Ingredients',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/icon1.jpg', title: 'icon1', alt: 'smallIcon', caption: 'small icon'
      },
      topics: [{ name: 'Identity', slug: 'identity' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '46',
      student_name: 'Lindsey Piscitell',
      student_slug: 'lindsey-piscitell',
      advisor_id: '119',
      project_title: 'Pack Your Things and Go',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/8W0B7922-1-1024x768.jpg', title: '8W0B7922-1', alt: 'Brass lantern and mosaic box in larger box surrounded by dried flowers.', caption: 'Thumbnail'
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '67',
      student_name: 'Michael Simpson',
      student_slug: 'michael-simpson',
      advisor_id: '124',
      project_title: 'CATk: Computational Audition Toolkit',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ofxDeepSignalProcessingDebug-Screen-Output-2018-04-19-at-22.26.40-1.png', title: 'Cover Matrix', alt: 'Cover Matrix', caption: 'Cover Matrix'
      },
      topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '31',
      student_name: 'Rushali Rupchand Paratey',
      student_slug: 'rushali-rupchand-paratey',
      advisor_id: '123',
      project_title: 'NYC Beats',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail-thesis-pink.png', title: 'thumbnail-thesis-pink', alt: 'pink music location icon with black background', caption: ''
      },
      topics: [{ name: 'Culture', slug: 'culture' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '33',
      student_name: 'Scott Reitherman',
      student_slug: 'scott-reitherman',
      advisor_id: '123',
      project_title: 'Grand Central Immersion',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/GCI_thesisArchive1.jpg', title: 'GCI_thesisArchive1', alt: 'Grand Central Immersion, Scott Reitherman ITP Thesis', caption: 'Grand Central Immersion, Scott Reitherman ITP Thesis'
      },
      topics: [{ name: 'Sound', slug: 'sound' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }],
    'Tangible': [{
      student_id: '7',
      student_name: 'Grau Puche Recarens',
      student_slug: 'grau-puche-recarens',
      advisor_id: '114',
      project_title: 'lligam',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-15.05.48.png', title: 'CCR, realization of lligam', alt: 'the face of a cat', caption: ''
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '43',
      student_name: 'Hayeon Hwang',
      student_slug: 'hayeon-hwang',
      advisor_id: '119',
      project_title: 'Expressive Tactile Controls',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thum.gif', title: 'Expressive Tactile Controls', alt: 'Expressive Tactile Controls', caption: 'Expressive Tactile Controls'
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '15',
      student_name: 'Michael Kripchak',
      student_slug: 'michael-kripchak',
      advisor_id: '114',
      project_title: 'Touch at a Distance',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/KripchakThesisThumbnail.png', title: 'Kripchak Thesis Thumbnail', alt: 'Telepresence projection in VR.', caption: 'Screen-capture of holographic telepresence from within VR.'
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '69',
      student_name: 'Nitish Wakalkar',
      student_slug: 'nitish-wakalkar',
      advisor_id: '124',
      project_title: 'The Quirk Bot Experiment',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/quirk-bots-thumbnail.png', title: 'quirk bots-thumbnail', alt: 'smart objects', caption: ''
      },
      topics: [{ name: 'Tangible', slug: 'Tangible' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '110',
      student_name: 'Samantha Schulman',
      student_slug: 'samantha-schulman',
      advisor_id: '131',
      project_title: 'Breathe With Me',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb2-size-2.jpg', title: '', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'Tangible', slug: 'Tangible' }]
    }, {
      student_id: '92',
      student_name: 'Yeseul Song',
      student_slug: 'yeseul-song',
      advisor_id: '129',
      project_title: 'Invisible Sculptures',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/invisible_thumbnail-1.jpg', title: 'invisible_thumbnail', alt: 'thumbnail', caption: ''
      },
      topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Tangible', slug: 'Tangible' }]
    }],
    'Health': [{
      student_id: '44',
      student_name: 'Jesal Trivedi',
      student_slug: 'jesal-trivedi',
      advisor_id: '119',
      project_title: 'Mindful Technology: Aduri',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/ITP-Thesis-Thumbnail.png', title: 'ITP Thesis Thumbnail', alt: 'meditation', caption: 'meditation'
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'UX\\UI', slug: 'uxui' }]
    }, {
      student_id: '14',
      student_name: 'Li-Chung Chen',
      student_slug: 'li-chung-chen',
      advisor_id: '114',
      project_title: 'Iso-principle in the Digital World',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/iso-principle-in-the-digital-world.jpg', title: 'iso-principle in the digital world', alt: '11', caption: 'thumbnail'
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'Sound', slug: 'sound' }]
    }, {
      student_id: '84',
      student_name: 'Maria Del Pilar Gomez Ruiz',
      student_slug: 'maria-del-pilar-gomez-ruiz',
      advisor_id: '129',
      project_title: 'Onda: Data Portraits for Period Health',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/onda-cover-pilar-gomez.png', title: 'onda-cover-pilar-gomez', alt: 'sketch of a physical menstrual calendar scanned and stored digitally with a computer vision algorithm', caption: ''
      },
      topics: [{ name: 'Education', slug: 'education' }, { name: 'Health', slug: 'health' }]
    }, {
      student_id: '109',
      student_name: 'Ran Tian',
      student_slug: 'ran-tian',
      advisor_id: '131',
      project_title: 'Heart Health',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.png', title: 'Thumbnail', alt: 'Heart Health AR app', caption: ''
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'VR\\AR', slug: 'vr-ar' }]
    }, {
      student_id: '110',
      student_name: 'Samantha Schulman',
      student_slug: 'samantha-schulman',
      advisor_id: '131',
      project_title: 'Breathe With Me',
      portfolio_icon: {
        src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumb2-size-2.jpg', title: '', alt: 'thumb', caption: ''
      },
      topics: [{ name: 'Health', slug: 'health' }, { name: 'Tangible', slug: 'Tangible' }]
    }]
  };

routes.route('/student/:student').get(getStudentProject);
routes.route('/tag/:tag').get(getTagProjects);
routes.route('/tag/:tag1/:tag2').get(getTwoTagProjects);
// routes.route('/pair/:tag').get(getTagPairs);
routes.route('/id/:student').get(getStudentID);

function getStudentID(req, res) {
  res.send(sampleStudentData[req.params.student].student_id);
}

function getStudentProject(req, res) {
  res.send(sampleStudentData[req.params.student]);
}

function getTwoTagProjects(req, res) {
  const filteredProjects = [];
  sampleTagData[req.params.tag2].forEach((project) => {
    project.topics.forEach((tag) => {
      if (tag.name === req.params.tag1) {
        filteredProjects.push(project);
      }
    });
  });
  res.send(filteredProjects);
}

function getTagProjects(req, res) {
  res.send(sampleTagData[req.params.tag]);
}

// function getTagPairs(req, res) {
//   let tagPairs = [];
//
//   if (sampleTagData[req.params.tag]) {
//     sampleTagData[req.params.tag].forEach((project) => {
//       project.topics.forEach((topic) => {
//         tagPairs = tagPairs.concat(topic.name);
//       });
//     });
//   }
//   tagPairs = tagPairs.filter(onlyUnique);
//   res.send(tagPairs);
// }

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = routes;
