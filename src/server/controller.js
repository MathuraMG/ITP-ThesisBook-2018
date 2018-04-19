const express = require('express');

const routes = express.Router();

const sampleStudents = [
  'student1',
  'student2',
  'student3'
];

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
  'Tangiable',
  'Health'];

const sampleStudentData = {
  'alejandro-matamala':
{
  student_id: '58',
  student_name: 'Alejandro Matamala',
  student_slug: 'alejandro-matamala',
  advisor_id: '124',
  project_title: 'Archetype',
  project_question: 'Many creative professionals - from visual artists to musicians, writers to digital media artists -all face a similar problem. Most of the information about their artwork and projects lives within a few concentrated online publishing platforms and social networks, and these companies typically control access to the information and how it is presented. For artists of all kinds, this turns out to be a huge threat; not only in terms of the openness of the web and the artist’s ability to maintain control over their intellectual property but also as an impediment to creative expression and sustainable ways to archive and distribute artwork digitally. \r\n\r\nArchetype aims to address the centralization and standardization of creative expression of how works of arts often inhabit the web. An alternative, independent and experimental set of desktop publishing tools that enable artists to share their artwork online without having to depend on centralized publishing platforms or cloud computing services. \r\n\r\nThe project runs on a distributed peer-to-peer network using the DAT Protocol (https://datproject.org), which adds important characteristics to the publishing practice. It enables the publishing of content from any device connected to the network, including an artist’s individual personal computer. \r\n\r\nUnlike centralized models, where company-owned servers assume the right of publishing, a peer-to-peer protocol enables any computer, even an artist’s personal computer, the right to serve content, allowing affordable and accessible alternatives to the display of information online. In addition, DAT, allows users to distribute data through an archive system, enabling features like going back and revert previous versions. Distributed archive systems follow a bottom-up model which makes interconnected data solutions possible. Artists’ collections of work can be integrated together allowing anyone interested to contribute and participate.\r\n',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/arche.jpg',
    title: 'archetype',
    alt: 'archetype',
    caption: ''
  },
  topics: [{
    name: 'Culture',
    slug: 'culture'
  }, {
    name: 'Tool\\Service',
    slug: 'toolservice'
  }]
},
  'alexander-zimmer':
{
  student_id: '77',
  student_name: 'Alexander Zimmer',
  student_slug: 'alexander-zimmer',
  advisor_id: '129',
  project_title: 'Portraits of Evanston',
  project_question: 'For middle school students, history is often seen as the truth, rather than a version of it. Only by doing, can students begin to understand what it means to write history. For three months, five students at the McGaw Hill YMCA in Evanston, IL engaged in writing pieces of their own family histories. \r\nEach student engaged with their history by interviewing a family member about archival photos that they found in their home. They subsequently engaged with the present state of their family’s history by interviewing various citizens in Evanston, IL.\r\nThroughout these experiences, students created media, working with a team of filmmakers to film their entire process. In creating this media, students considered more deeply the writing of history itself.\r\nMoving forward, the stories of these five students will be used by teachers interesting in having their students engage in similar projects. Shorts films depicting the process of researching and writing history that these five students went through, will be used to get other students excited about doing the same.\r\nAs these five students, and the others who follow, grow older, they will already have set the groundwork to think critically about history as being written by humans, and not a definitive truth.\r\n',
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'Narrative',
    slug: 'narrative'
  }]
},
  'amanda-min-jin-lee':
{
  student_id: '20',
  student_name: 'Amanda Min-Jin Lee',
  student_slug: 'amanda-min-jin-lee',
  advisor_id: '123',
  project_title: 'JAM-JAM',
  project_question: 'I love music and we all love music.\r\nMusic is always on in our daily lives. Music is powerful as it can change the mood of the environment and the people that reside in it. These shared musical spaces bring out strong emotional connections between each listener. Hip-hop, jazz, classical; these are different genres that deliver different emotions and moods, depending on where we are and who we are with. \r\n \r\nHowever, sometimes an annoying situation happens when we are listening to music together with friends. Somebody needs to control the music. But it is hard to satisfy everyone because we all have different musical tastes. If there are more than two people in the same room who have different musical tastes, who will make the decision for what’s playing on the stereo? \r\n \r\nBased on this question, my goal was to find an answer to this small dilemma in my own playful way. How can I shuffle music playlists in a fair and equal way?\r\nI ended up with two keywords: “competition + shuffle”. I wanted the users to focus on the music-listening experience rather than the competitive action, so I chose a simple and dynamic “shaking” interaction for the game. It is fast and dynamic, so that users may quickly associate this action with the process of mixing music.',
  topics: [{
    name: 'Play',
    slug: 'play'
  }, {
    name: 'UX\\UI',
    slug: 'uxui'
  }]
},
  'anastasios-germanidis':
{
  student_id: '76',
  student_name: 'Anastasios Germanidis',
  student_slug: 'anastasios-germanidis',
  advisor_id: '129',
  project_title: 'Sybil Society',
  project_question: 'In Sybil Society, you are not tied to one identity, one personality, one past. Here, you can create as many identities as you like and switch between them freely. Once you have selected an identity, an algorithm matches you with other users nearby, and a scene is generated based on your respective identities. Examples of scenes include: meeting a friend, going on a date, breaking up with a significant other, doing a job interview, having an existential crisis. You can continue living the life of that identity for as long as you like – an hour, a day, a month, a year. Then you can decide to become someone else.\r\n\r\nMark Zuckerberg said in 2010: “You have only one identity. Having two identities for yourself is an example of a lack of integrity.” In the past decade Zuckerberg’s vision of social life, where most of one’s online and offline activity is linked directly to a single legal identity, has become reality. But pseudonymity is having a comeback, as people wake up to the myriad problems of the “real name internet.” Cryptocurrencies will enable people to participate in economic transactions without using their legal identity. Mixed reality headsets will get people to start identifying with the faces and bodies they choose, instead of those they were born with. Machine learning will allow people to mimic the style and behavior of others with ever-increasing accuracy. Sybil Society is today’s approximation of this weird future of fluid identities.',
  topics: [{
    name: 'Identity',
    slug: 'identity'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'ariana-vassilopoulou':
{
  student_id: '78',
  student_name: 'Ariana Vassilopoulou',
  student_slug: 'ariana-vassilopoulou',
  advisor_id: '129',
  project_title: 'A Fresh view',
  project_question: 'Cyprus is a divided island separated by what is known as a political “Green Line”. Its formal name is the United Nations Buffer Zone, which is a demilitarized area patrolled by the United Nations Peacekeeping Force in Cyprus (UNFICYP). It’s been this way since the Turkish Invasion of Cyprus of 1974. The Northern side of the island is the Turkish Republic of Northern Cyprus, and the Southern side is the Republic of Cyprus -the Greek side - where I am from. While the separation isn’t as absolute as North and South Korea--for example, I can cross the border -- each side is run like a totally different country. ',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/photo-1024x691.jpg',
    title: 'photo',
    alt: 'A Fresh View',
    caption: ''
  },
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'Installation',
    slug: 'installation'
  }]
},
  'brandon-kader':
{
  student_id: '4',
  student_name: 'Brandon Kader',
  student_slug: 'brandon-kader',
  advisor_id: '114',
  project_title: 'IMVII',
  project_question: 'I made an immersive experience without a device or VR headset. I have tried a VR headset and felt disoriented and extremely uncomfortable. I most definitely do not want to work in that medium. It is important that the performer not touch things like a conductor does not play a specific instrument in an orchestra, rather directs the performance. My experience with piano performance is that it is not very physically moving, the piano is stationary and the performer is seated at the keyboard. There is little showmanship or stage presence. I have felt the need to perform my music in another way. \r\n\r\nI explored how to make an immersive experience - including music and visual effects - using a touch free interface for modern composers to perform room scale installations. I used a Kinect camera to gather depth sensory data with Processing to map music and generative visuals in a system I built with Max MSP Jitter, a visual programming language that patches and connects the data to music and visual elements. I used a triplehead2go for 3 projector display to create a room-scale visual experience and performed at NYU Steinhardt’s Recital Room. \r\n\r\n\r\n',
  topics: []
},
  'chen-mike-yen-kkasfd':
{
  student_id: '133',
  student_name: 'Chen Mike Yen kkasfd',
  student_slug: 'chen-mike-yen-kkasfd',
  advisor_id: '119',
  project_title: 'test 533',
  project_question: '',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/IMAG0655-1024x579.jpg',
    title: 'IMAG0655',
    alt: 'kksadgfwfdg',
    caption: 'asdgf'
  },
  topics: []
},
  'chetan-hasabnis':
{
  student_id: '96',
  student_name: 'Chetan Hasabnis',
  student_slug: 'chetan-hasabnis',
  advisor_id: '131',
  project_title: 'Building Emergency Intelligence',
  project_question: 'I am part of an NGEMS team developing next generation emergency systems that delivers real-time situational information of people, location and occupancy in buildings to help assist rescue personnel mitigate emergency situations. It provides concise information at the most crucial time to help operators at dispatch centers allocate resources effectively and aid incident commanders en-route to the rescue site with life saving information even before they arrive on scene.\r\n\r\n100+ customer interviews were conducted and two facts were discovered – 1. Operational difficulty and limited site information are the biggest challenge for fire fighters 2. The rescue teams literally go in blind. There is a 15 minute window of crucial time lost from the time the initial call received dispatch centers and until the first responders arrive on the incident site to execute evacuation procedures. I plan maximize rescue operations by providing context relevant information during this brief time by developing real-time emergency system that collects data from IoT sensors installed in buildings.\r\n\r\nFor the thesis I am building a prototype of a browser based application that contains a collection of digital 2d floor maps for the NYU Tisch building at 721 Broadway, visualizing smoke and temperature levels of Wifi enabled smoke detectors installed at ITP on the 4th floor over a mesh network integrated with our NGEMS platform.\r\n\r\nMy efforts are directed toward making it accessible to the first responder community as well as integration with third party CAD provides and incident management application over public safety mesh network.\r\n',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-1-01.png',
    title: 'Building Emergency Intelligence',
    alt: 'Building Emergency Intelligence',
    caption: 'Building Emergency Intelligence'
  },
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'Society',
    slug: 'society'
  }]
},
  'chloe-gao':
{
  student_id: '5',
  student_name: 'Chloe Gao',
  student_slug: 'chloe-gao',
  advisor_id: '114',
  project_title: 'Ephemeral',
  project_question: 'During my first summer in New York, many of my friends visited me and slept in my living room. Since my apartment is close to the Hudson River Park, I always took them to the park for a walk in the evenings. They shared with me their stories of the city: hopes, dreams; sweet and broken hearts. I have lived in the city for three years now, but not as many friends visited me since that summer. Sometimes they came, but they no longer slept in my living room. This project is for the ephemeral summer nights that will never happen again.\r\n\r\nInspired by site-specific kinetic sculpture, my thesis project Ephemeral explores the potential forms of kinetic sculptures, specifically in my thesis human forms in augmented reality. I chose a wireframe material because its transparent texture delivers the feeling of memory: it looked like a shadow in the day, and glowing particles at nights. \r\n\r\nUsers who download the app can see and explore the AR experience I created at the Hudson River Park west of Manhattan. Users have to go to the exact area in order for the virtual sculptures to show up. As the camera moves away, the sculpture vanishes. The app Ephemeral is essentially an AR magazine of the city, and it will help you understand the city in a unique, emotional and romantic way. \r\n\r\nThe app is written in Swift and ARkit, and uses Google Geo-Location API.\r\n',
  topics: [{
    name: 'UX\\UI',
    slug: 'uxui'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'christina-hall':
{
  student_id: '22',
  student_name: 'Christina Hall',
  student_slug: 'christina-hall',
  advisor_id: '123',
  project_title: 'The Masks I Wear',
  project_question: 'The Masks I Wear is a solo live performance, alternative documentary that explores the harassment experienced by women in industry. The artist has collected personal stories from four women who have experienced harassment in a professional environment and then “wears” projected motion controlled digital masks to portray the collected stories. Each performance sits only four audience members, each paired with a narrative from a different woman. Through the physical interaction of pushing a button, audience members will be able to influence how much of the narrative is told. This interaction will challenge the audience, putting them in a position of power and control, deciding how much of the emotional story to experience. \r\n\r\nThe artist sits on a rotating stool with the audience surrounding her in a circle. An element of privacy is added by dividing the space between each audience member, allowing them to feel comfortable with varying degrees of interaction during the performance. \r\n\r\nThe artist will be using a combination of facial tracking software and projection mapping to portray the sketched face of the woman that have gone through the harassment or assault.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/HallC_TMIW_thumbnail320x240.jpg',
    title: 'HallC_TMIW_thumbnail320x240',
    alt: 'tmiw',
    caption: ''
  },
  topics: [{
    name: 'Narrative',
    slug: 'narrative'
  }, {
    name: 'Performance',
    slug: 'performance'
  }]
},
  'cristobal-valenzuela':
{
  student_id: '59',
  student_name: 'Cristobal Valenzuela',
  student_slug: 'cristobal-valenzuela',
  advisor_id: '124',
  project_title: 'Runway',
  project_question: 'Runway’s main goal is to make the process of running and using a state of the art machine learning model as easy as possible. If models are the building blocks of machine learning, how can we create more accessible tools to access them? This project is not about creating the right training environment to deploy It is not about training an algorithm and it’s not about hyper-parameters or hard code data science. It is a project built around the simple idea of making pre-trained models accessible.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.jpg',
    title: 'thumbnail',
    alt: 'runway',
    caption: ''
  },
  topics: [{
    name: 'Machine Learning',
    slug: 'machine-learning'
  }, {
    name: 'Tool\\Service',
    slug: 'toolservice'
  }]
},
  'david-temchulla':
{
  student_id: '42',
  student_name: 'David Temchulla',
  student_slug: 'david-temchulla',
  advisor_id: '119',
  project_title: 'Beast of Burden',
  project_question: 'For thesis I wanted to further my practice of developing interactive, data-driven sculptures that investigate the spaces between the art object and lived experience. More specifically, I wanted to create works that take the promise of technology and incorporate the surrounding natural environment. In doing so, I aimed to deepen and extend methods I have used in previous work (e.g., Cosmic Breath, where data taken from a wind sensor that measures the power of an individual’s breath is used to activate motors that tug at stalks of wheat, simulating a powerful gust of wind blowing through a field) to develop a new body of work that focuses no longer on the individual, but on the collective. These new works will manifest as a new form of social sculpture - one that perpetuates meaningful collective interactions between humans and the material world. Ultimately, I aim to create works that require an aggregation of small individual actions to demonstrate and explicate how the actions of many can create something monumental.\r\n',
  topics: []
},
  'dominic-barrett':
{
  student_id: '24',
  student_name: 'Dominic Barrett',
  student_slug: 'dominic-barrett',
  advisor_id: '123',
  project_title: 'Going Forward',
  project_question: '“Going Forward: A Recipe Book for the Continuing Creative Technologist” is a tutorial book serving artists who have started making with technology. Not a beginners guide, nor for in depth advanced concepts, “Going Forward” positions itself as the second book, or what you do after your first class.\r\n\r\nYet as you continue to read, the lessons become strange. Projects become unusual, and code comments begin to fill with short stories. More and more, the technical lessons mutate into the poetic. Further and further the transformation takes place, until the reader realizes that this is anything but the normal programming tutorial.\r\n\r\nIt is common for those starting to program in hopes of making art to have doubts in their abilities. Despite completing introductory courses, they insist they still aren’t “real programmers”. Their beginner skills make achieving sophisticated output feel miles away. Console errors that plague them for days are fixed by “better” programmers in minutes. Impostor syndrome runs rampant. Motivation is sapped by obscure and idiosyncratic platform bugs, broken drivers, and unrequested operating system updates.\r\n\r\nThis is not fertile ground for newcomers, let alone artists.\r\n\r\nIt is enough to make any sensible person want to quit. These common, and reasonable emotions stand in the way of programmers making programs. Which to me, is a programming problem. An emotional one. How do we solve it?\r\n\r\nWhile development as a creative technologist does require more advanced technical and programming skill, a different kind of lesson is simultaneously required. It needs to be something that lets people know that these struggles aren’t uncommon. And not just for beginners, but for professionals. The experts are on Stack Overflow. Your favorite artist is in the forums, describing a bug that can’t be replicated by anyone but them.\r\n\r\nThe lesson of “Going Forward” is a depiction of our creative technologist culture. It’s a story about our ups and downs. How our technology isn’t a hurdle, but where our art happens. A reminder that we put ourselves in our art. And when things finally work, against all odds, the magic at the other end is worth it.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/plug_tongue_320x240.jpg',
    title: 'plug_tongue_320x240',
    alt: 'Power cable close to a tongue',
    caption: 'Going Forward Thumbnail'
  },
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'Narrative',
    slug: 'narrative'
  }]
},
  'dong-chan-kim':
{
  student_id: '97',
  student_name: 'Dong Chan Kim',
  student_slug: 'dong-chan-kim',
  advisor_id: '131',
  project_title: 'The Son&#8217;s Drawer',
  project_question: "In virtual reality, my father is invited to my home in New York where he's never visited in person. He looks around the son's living room, which is hand-painted. Some of the things in there are distinguished from the surroundings because they're 3D scanned and colored. These objects are specifically associated with the memories from my personal history. When he touches or grab one of these, the story begins with my narration and the sketches are drawn around the object. After he puts all the things to the drawer, a photography pops up. It is the photo of him when he was in the hospital. And the experience ends with my message saying that I hope I can collect more memories with him in the future.\r\n\r\nThis project is to get my father who underwent cancer surgery last year to take care of himself.\r\nThe way I chose to do it is a story. Because I believe that story can change one’s behavior.\r\n\r\nI have a drawer of my little things from last 20 years. They may be nothing special to look at, but for me, each one is a treasure with a precious story on it. By telling my father about these stories, I want to remind him that he has a family that cares about his health more than he does. And I expect this experience will inspire him.\r\n\r\nSince I'm in New York and my father is in Seoul, it's hard to demonstrate the actual things. Also, it can also be hard to focus on because it starts with small, nothing-special objects. So I chose virtual reality. Since it uses HMD(Head-Mounted Display), which blocks outside interference. I think it will help my father become more absorbed in the story.\r\n",
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/key-image_320x240.jpg',
    title: 'key image_320x240',
    alt: 'Main image of the project',
    caption: ''
  },
  topics: [{
    name: 'Narrative',
    slug: 'narrative'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'dror-dov-ayalon':
{
  student_id: '25',
  student_name: 'Dror Dov Ayalon',
  student_slug: 'dror-dov-ayalon',
  advisor_id: '123',
  project_title: 'Soundscape: A Tool for music makers',
  project_question: '',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/card-copy-1.png',
    title: 'Soundscape',
    alt: 'Soundscape',
    caption: 'Soundscape'
  },
  topics: [{
    name: 'Machine Learning',
    slug: 'machine-learning'
  }, {
    name: 'Sound',
    slug: 'sound'
  }]
},
  'grau-puche-recarens':
{
  student_id: '7',
  student_name: 'Grau Puche Recarens',
  student_slug: 'grau-puche-recarens',
  advisor_id: '114',
  project_title: 'lligam',
  project_question: 'The main thread of this project is the desire to break out of screen-based interactions. Wanting to go away from a visual-feedback-only world, and building something engaging that comes through touch. [ʎigam] is not about finding a solution but going away from the norm and making something weird through an exploration of physical interaction. And that relies on screen just as an accessory or an intensifier.\r\n\r\nThis experimentation had various parameters decided a priori as it had to have a clear end goal making sure something came out of this. The resulting device would be a game composed of two different items; a physical controller, and a digital game. The control was built first and is the main element and platform for the digital game. The video game is linked directly to the controller and only makes sense with it. The reasoning for these parameters besides personal ones is the fact that games are a great exemplifier of good, and bad interaction *building*.\r\n\r\nAll these contributing factors have coalesced into the creation of CCR (CatCat Revolution). An arcade-style game where the player has to pet a cat according to their picky request and try to make them happy (no one is sure if it is even possible)',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-15.05.48.png',
    title: 'CCR, realization of lligam',
    alt: 'the face of a cat',
    caption: ''
  },
  topics: [{
    name: 'Tangiable',
    slug: 'tangiable'
  }, {
    name: 'UX\\UI',
    slug: 'uxui'
  }]
},
  'hayeon-hwang':
{
  student_id: '43',
  student_name: 'Hayeon Hwang',
  student_slug: 'hayeon-hwang',
  advisor_id: '119',
  project_title: 'Expressive Tactile Controls',
  project_question: 'Push buttons, sliders, switches and dials—we use such controls everyday, and yet we barely notice them. ‘Expressive Tactile Controls’ is a series of playful research experiments that ask: how could our relationship to tactile controls be augmented by giving these controls more personality? How would buttons that have a stronger, more evocative personality affect and improve our relationship with the applications they are built into? How would people react to buttons that ‘talk back?’\r\n\r\nThis question was approached by constructing and testing a series of experimental pushbutton prototypes able to express themselves with various tactile and kinesthetic feedback (vibration, tension, and movement), according to the user’s touch or environment. \r\n\r\nThe first series included controls designed to feel Stubborn, Sensitive/Impatient, Lazy, Timid, and Spontaneous. These ‘personality-enriched’ buttons were then used to provide users with a more intuitive tactile feedback, in accordance with the application they were serving.\r\n',
  topics: [{
    name: 'Tangiable',
    slug: 'tangiable'
  }, {
    name: 'UX\\UI',
    slug: 'uxui'
  }]
},
  'jarrett-c-slavin':
{
  student_id: '80',
  student_name: 'Jarrett C Slavin',
  student_slug: 'jarrett-c-slavin',
  advisor_id: '129',
  project_title: 'Spectrum',
  project_question: 'What does life look like through the bipolar lens?\r\nSpectrum is a mobile audio app that places the user in the shoes of a bipolar mind through various situations &amp; thoughts. The user adjust a slider to hear three different perspectives, (depressed, baseline, and manic) on the same subjects, from the same mind experiencing different mood states. \r\n\r\nThis version of “Spectrum” is comprised entirely of my own personal thoughts, re-living various events in specific situations through each of the 3 primary lenses of the bipolar spectrum.\r\n\r\n“Spectrum” serves as a prototype that could eventually expand to include the thoughts of several different bipolar individuals. For now, for the sake of focus and scale, I choose to focus on expressing my own personal perspective.\r\n\r\nFor anyone who has ever struggled to understand what it means to be bipolar, “Spectrum” seeks to increase empathy, understanding, and communication. Whether you are bipolar yourself, seeking to relate &amp; compare your own experience to mine, or if you are not bipolar but would like to better understand &amp; empathize with those in your life who are, “Spectrum” offers a valuable, insightful experience.\r\n\r\n',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/spectrumThumbnail.jpg',
    title: 'spectrumThumbnail',
    alt: 'thumbnail',
    caption: ''
  },
  topics: [{
    name: 'Identity',
    slug: 'identity'
  }, {
    name: 'Sound',
    slug: 'sound'
  }]
},
  'jasmine-a-soltani':
{
  student_id: '99',
  student_name: 'Jasmine A Soltani',
  student_slug: 'jasmine-a-soltani',
  advisor_id: '131',
  project_title: 'Manifest Energy',
  project_question: 'The lifecycle of a product includes the mining and processing of natural resources, manufacturing, transport, product delivery, use, and its reuse, recycling or disposal. Embodied energy is the energy consumed by all of the processes associated with production: the life-cycle up until the use phase. Manifest Energy is a series of lenticular stickers, a mechanical animation, and website that illustrate the life-cycle and embodied energy of digital devices. \r\n\r\nElectronics are unique in that they have exceedingly high embodied energy, exacerbated by planned obsolescence, their difficulty to repair, lack of supply chain accountability, and the increasing ubiquity of computing. The energy economy, on which the ecologically destructive digital economy is based, is unsustainable in itself. Can illuminating the resource demand of our digital devices change our consumption habits, our relationship with our devices, the way we design and legislate their use, and handle end-of-life?\r\n\r\nIn addition to shifting the paradigm by which we think about energy consumption, I hope my project informs people of actions that can be taken. By extending the lives of our products through repair, we can reduce demand for new items. By developing more modular electronics, we can make these devices easier to repair. By putting pressure on companies and legislators, we can achieve greater supply chain transparency and improve the health of people working on or near production sites. By developing renewable energy sources and eliminating carbon emissions, we can mitigate the ecological impact of the production of digital technologies.',
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'Society',
    slug: 'society'
  }]
},
  'jaycee-holmes':
{
  student_id: '81',
  student_name: 'Jaycee Holmes',
  student_slug: 'jaycee-holmes',
  advisor_id: '129',
  project_title: 'Nigga Inventions',
  project_question: 'This thesis began with the research question: What does Utopia mean for marginalized communities? Through dinners, conversations, interviews, and Utopia workshops that I designed and conducted, I began to map the wants and needs of the black creative community in New York City, selecting this particular community as my focus due to access. \r\n\r\nRacism still exists in New York City. Utopia does not. \r\n\r\nThe thesis deliverable of this research, Nigga Inventions, is a toolkit that focuses on solving the largest obstacles that prevent Utopia from existing, as defined by the participants of my thesis research. The toolkit centers around community, education, and access to reparations. \r\n\r\nA ‘Nigga Invention’ is a colloquialism for a work-around; a method for overcoming a difficult problem. In the context of this thesis, the problem is racism. The inventions presented in the Nigga Inventions toolkit are not meant to be presented as real techno-utopic solutions. They are tongue-in-cheek work-arounds for the survival of the black community against the very real distraction that is racism. \r\n',
  topics: [{
    name: 'Culture',
    slug: 'culture'
  }, {
    name: 'UX\\UI',
    slug: 'uxui'
  }]
},
  'jeffrey-park':
{
  student_id: '101',
  student_name: 'Jeffrey Park',
  student_slug: 'jeffrey-park',
  advisor_id: '131',
  project_title: 'Responsibly.me',
  project_question: 'Responsibly.me is a web platform for consumers to make more socially responsible purchasing decisions. Responsibly.me aggregates existing rankings on a company’s Corporate Social Responsibility initiatives and recommends similar products from brands with higher grades. Responsibly.me also provides a dashboard for users to understand their social responsibility values and purchasing habits in order to encourage them to shop more consciously.\r\n\r\nIn this current climate where we face a growing number of wicked problems, both the public and private sector need to do more to create a better world for all of us. According to the 2017 Cone Communications CSR study, 63% of Americans are hopeful businesses will take the lead to drive social and environmental change moving forward. This number increases to 71% for millennials and younger generations. However, only 39% of consumers “researched a company’s business practices or support of social and environmental issues” (2017 Cone Communications CSR study). The majority of users simply are not aware of the efforts corporations take to tackle these social issues and make their businesses more socially responsible.\r\n\r\nResponsibly.me aims to make these efforts more transparent and easier to access for regular consumers. I have collected data on 50 of the top 100 brands according to Forbes and have built a web extension in which users can learn about a brand’s social responsibility rankings. I have also created design wireframes for product recommendations and the user dashboard to get an idea of where I hope to take this project.',
  topics: [{
    name: 'Society',
    slug: 'society'
  }, {
    name: 'Tool\\Service',
    slug: 'toolservice'
  }]
},
  'jenny-lim':
{
  student_id: '10',
  student_name: 'Jenny Lim',
  student_slug: 'jenny-lim',
  advisor_id: '114',
  project_title: 'Awkward Thanksgiving',
  project_question: 'I’ve recently noticed myself censoring my speech out of fear: fear of seeming ignorant, bigoted or worse. While I think it’s important to watch one’s words out of sensitivity and respect for others, I believe that self-censorship due to fear hinders discourse. For my thesis, I wanted to make a game that creates a safe space for people to discuss politics. \r\nIn Awkward Thanksgiving, players begin by adopting an ideology: libertarian, progressive, socialist, etc. This is the ideology that they must represent throughout the game. Some players choose ideologies because it’s fun to pretend to be on the other side. Others choose ideologies because it gives them the freedom to express opinions that their friends may not share.\r\nThe mechanics of the game force players to think beyond their initial stereotypes of their ideologies. Players must use Argument cards when they discuss a topic, and often players will find themselves with Argument cards that do not perfectly align with the “party line.” According to one player, “It’s fun to puzzle out, ‘How am I going to use this card?’ Making arguments that buck stereotype is really nice.”\r\nThe trickiest part of making a “serious” game is making it fun. It doesn’t matter how important a game’s mission is; if it’s not fun, no one will play it. Awkward Thanksgiving provides two kinds of fun: the relief of saying the unsayable, and the joy of improvising family history. During one playtest, two friends playing a divorced couple began bickering over a stolen lawnmower. The exchange provided some relief to a fairly serious discussion on Universal Basic Income.\r\nAwkward Thanksgiving has gone through 6 distinct iterations since mid-February. I’ve run over 12 playtests, with 4-8 players each time. The game is both fun and thought-provoking. I will continue to develop it after graduation.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Lim_thumbnail.png',
    title: 'Lim_thumbnail',
    alt: 'AwkwardThanksgiving',
    caption: ''
  },
  topics: [{
    name: 'Play',
    slug: 'play'
  }, {
    name: 'Society',
    slug: 'society'
  }]
},
  'jina-jung':
{
  student_id: '9',
  student_name: 'Jina Jung',
  student_slug: 'jina-jung',
  advisor_id: '114',
  project_title: 'Intangible Canvas',
  project_question: 'Fragmentary Landscape is an experiment with the realm between new technology and traditional materials, combining both genres of work. Paralleling the way rays of light are untouchable in the physical world, this project focuses on the relationship between real and imaginary figures in an immersive natural environment. My real life paintings of nature are converted into a virtual space so people can experience my paintings in VR. \r\n\r\nFurthermore, this project also focuses on questions of how the artist applied VR with traditional paintings or drawings as well as how their observation changes depending on the medium. It aims to create landscapes with different dimensions(2D&amp;3D) which are situated on real and virtual canvases. Based on my artistic approach, and experiences with nature, I could explore new perspectives while creating landscapes and characteristics of elements and landscapes in a virtual environment.\r\n\r\nThe project consists of 3 methods – Drawings, titled ‘Fragments - Intangible Objects’, Paintings, titled ‘Fragmentary forest’, and VR, titled ’Beyond forest’. Handling these three different forms provides audiences the chance to fully immerse themselves and engage completely in the world that the artist has visualized. \t',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.jpg',
    title: 'Thumbnail',
    alt: 'Jina001',
    caption: ''
  },
  topics: [{
    name: 'Installation',
    slug: 'installation'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'jingfei-lin':
{
  student_id: '27',
  student_name: 'Jingfei Lin',
  student_slug: 'jingfei-lin',
  advisor_id: '123',
  project_title: 'Runway in store',
  project_question: 'The retail industry is undergoing a major transformation as e-commerce disrupts traditional brick-and-mortar store models and gives rise to new modes of “experiential retail.” By creating a more immersive retail experience, retailers can drive people towards their stores and ensure they leave not just with your products but also memories. Runway in store explores how technology can enhance the retail experience, and especially adopts Augmented Reality to provide shoppers the experiences that engage, inform and entertain. \r\n\r\nRunway in store is a physical playground that encourages customers in the retail store to move around and interact with the augmented visuals that are projected on the wall or an LED screen, where a Kinect v2 is used to capture the real-time the human image and drive a real-time movement of a 3D character in Unity. By choosing Nike as the brand, the AR installation tracks human motions with multiplayer features and metaphorical explorations of the augmented 3D visuals.\r\n\r\nCustomers then could save and share the looks to social media, so that the brand can employ social media as a means of reaching out and connecting with potential customers.',
  topics: [{
    name: 'Installation',
    slug: 'installation'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'jingru-yin':
{
  student_id: '45',
  student_name: 'Jingru Yin',
  student_slug: 'jingru-yin',
  advisor_id: '119',
  project_title: 'I&#8217;m with Mr.Zhou',
  project_question: 'This is a dream interpretation VR installation experience. It’s around 6 minutes long. One person per round. The audience will be invited by a doctor to participate in dream research. Then lie on a bed to into the virtual world. During the “dreaming,” the audience will have different experiences based on his/her choices and interactions. In the end, the doctor will give the audience a printed paper tells about his/her dream interpretation.',
  topics: []
},
  'jinhee-ahn':
{
  student_id: '62',
  student_name: 'Jinhee Ahn',
  student_slug: 'jinhee-ahn',
  advisor_id: '124',
  project_title: 'textARt',
  project_question: 'The state of UI/UX design in virtual worlds is still evolving. The use of typography and text is a prime example of this. At the moment, text elements in virtual worlds for the most part still follow the design conventions developed for 2D environments, such as print or flat web pages, rather than taking into account the more dimensional and experiential characteristics of 3D environments. I have been curious to explore new ways to visualize text in virtual spaces that move beyond traditional 2D graphic design. For my thesis project I have experimented \r\nwith ways to make text come alive with AR by creating more animated and dimensional text examples in the process of learning simple verbs in a new language. For example, the word ‘SPIN’ could be visualized by displaying a spinning animation of the word, or the letters that make up the word, with related environmental elements that help provide a context for the spinning action.',
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'jixuan-sun':
{
  student_id: '11',
  student_name: 'Jixuan Sun',
  student_slug: 'jixuan-sun',
  advisor_id: '114',
  project_title: 'XIANGRUI &#8211; Auspicious Symbols in the Palace Museum',
  project_question: 'With rapidly changing technologies, how can we find a better way to get the most of information, explore hidden context and stories behind museum exhibits, and maximize the experience? How can we connect with millions of artifacts during the limited visiting hours? ',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-thumbnail.png',
    title: 'thesis thumbnail',
    alt: 'XIANGRUI – Auspicious Symbols in the Palace Museum',
    caption: ''
  },
  topics: [{
    name: 'Machine Learning',
    slug: 'machine-learning'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'jose-manuel-vega-cebrian':
{
  student_id: '82',
  student_name: 'Jose Manuel Vega Cebrian',
  student_slug: 'jose-manuel-vega-cebrian',
  advisor_id: '129',
  project_title: 'everything must go ( … )',
  project_question: "<i>everything must go ( … )</i> is an immersive experience that happens in a dark room and lasts around one hour. the panel members - silence, pre-recorded laughter, and cyborg in existential anxiety - have their spots indicated onstage by dim lights. only the third participant has a human shape. during the discussion, the moderator performs chance operations live to decide how the interventions should develop. in the first part the conversation is reserved for the three participants and the moderator's random remarks; for the second part the audience is repeatedly invited to contribute with questions.\r\n\r\na companion booklet is provided for consultation as a logocentric aid, for those who prefer words as a source of meaning. this booklet contains a comprehensive collection of the scripts, ideas, attempted descriptions of the work, and other fragments of text surrounding the genesis of the experience.\r\n\r\nthe creation process started with me being overwhelmed by the climate breakdown and other contemporary crises verging on total collapse(s). it took its short title, <i>everything must go</i>, from a <a href=\"http://www.monbiot.com/2017/11/24/everything-must-go/\">column of the journalist and environmentalist george monbiot</a>.\r\n\r\nin my research i tried to trace back in ideologies and worldviews the origins of \"the problem\", also exploring the difficulties of letting go of the life i take for granted. the process became an acknowledgement of the complexities and contradictions that exist when trying to confront these deep issues. this situation led me to a renewed way of looking at the world, and it also made me decide to extend the title of the work. \r\n\r\nimportant references during the process were the works of john cage, the theater of the absurd, existentialism, and posthuman philosophy. the research also included dipping into readings about zen buddhism, the tao, and the limitations of western thought.\r\n\r\nthe project is a free cultural work, and it was entirely built with free (libre) software.",
  topics: [{
    name: 'Performance',
    slug: 'performance'
  }, {
    name: 'Society',
    slug: 'society'
  }]
},
  'kar-rosen':
{
  student_id: '83',
  student_name: 'Kar Rosen',
  student_slug: 'kar-rosen',
  advisor_id: '129',
  project_title: 'The Quantum Carnival',
  project_question: 'Step right up, and enter the Quantum Carnival!\r\n\r\nQuantum Carnival is a proposal for a museum exhibition that presents key principles of quantum physics in the form of a carnival sideshow performance.\r\n\r\nConcepts like Schrödinger’s Cat experiment, the double slit experiment, relativity, Heisenberg’s principle of uncertainty, multiverse theory/butterfly effect, probability, and others are shown as sideshow acts or staged as carnival games.\r\n\r\nA central goal of this project is to cut through the widespread perception that quantum physics is too complex for most people to understand, by offering an introduction to this important and fascinating scientific field in an engaging and playful way.\r\n\r\nThe smoke-and-mirror aesthetics of turn-of-the century fairgrounds is well-suited to explaining principles of quantum physics, due to its penchant for playfully blurring the lines of reality and uncertainty. Embracing the performative, welcoming, and down-to-earth tone that has come to define this unique part of American culture allows audiences an immediate, appealing connection to quantum physics - which, just like the sideshows that dotted the boardwalks and campgrounds of the early 20th century, is full of mind-bending wonder that can truly astound.\r\n\r\nMinimal Viable Product is a design booklet and a prototype of one of the interactive demonstrations: The Great Heisenberg’s Uncertainty Chest, a game where audiences are asked to guess if a light (programmed to a random state) concealed within a closed trunk is on or off. I will demonstrate the trunk but without the performative element it would have in the exhibit, where a facilitator would be there acting like a performer running the carnival game.\r\n',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis_archive_thumb.jpg',
    title: 'thesis_archive_thumb',
    alt: 'A brown wooden trunk stands before a red curtain. White light emits through the cracks of the open trunk top.',
    caption: ''
  },
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'Play',
    slug: 'play'
  }]
},
  'katherine-a-takacs':
{
  student_id: '13',
  student_name: 'Katherine A Takacs',
  student_slug: 'katherine-a-takacs',
  advisor_id: '114',
  project_title: 'AWall',
  project_question: "I am going to build a wall using modules that are L-shaped. Those blocks are strategically stacked to look solid. The back of the blocks will be lined with neo-pixels. As people approach the wall, the lights will move and light is. They will become brighter in an exponential growth - so that the light permeates the wall, and shows it to be an illusion more than anything else. To borrow Richard Serra's words, I am showing how the viewer can become the subject of their own experience in a way that allows you to connect more readily to the world around you.",
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TakacsThumbnail.jpg',
    title: 'TakacsThumbnail',
    alt: 'Thumbnail',
    caption: 'Takacs'
  },
  topics: [{
    name: 'Identity',
    slug: 'identity'
  }, {
    name: 'Installation',
    slug: 'installation'
  }]
},
  'koji-kanao':
{
  student_id: '64',
  student_name: 'Koji Kanao',
  student_slug: 'koji-kanao',
  advisor_id: '124',
  project_title: 'Mtindo',
  project_question: 'What kinds of practical style transfer applications can be developed for non-technical people, such as creative professionals, that are easy to use, efficient, and push beyond the limits of what is currently possible with existing graphics tools? People think that machine learning requires a Ph.D./CS degree and a background in mathematics and statistics. It all sounds very complicated and difficult. Unfortunately, machine learning isn’t easy to learn, but using applications designed with non-technical people in mind isn’t so hard and can be a lot of fun. Style transfer, which is the technique of recomposing images in the style of other images, is one form of machine learning that has started to be made available online to the general public through simple games. Mtindo is a style transfer application for the desktop that offers non-technical people a unique opportunity to experience machine learning in action that explores some of the practical potentials of style transfer, beyond the game-like applications that are currently available. Mtindo means style in Swahili. ',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mtindo_journal_thumbnail.png',
    title: 'mtindo_journal_thumbnail',
    alt: 'mtindo',
    caption: ''
  },
  topics: [{
    name: 'Machine Learning',
    slug: 'machine-learning'
  }, {
    name: 'Tool\\Service',
    slug: 'toolservice'
  }]
},
  'lindsey-daniels':
{
  student_id: '103',
  student_name: 'Lindsey Daniels',
  student_slug: 'lindsey-daniels',
  advisor_id: '131',
  project_title: 'Basic Ingredients',
  project_question: 'If everyone eats and has food habits, then food is able to be used as a shared language among all people. And in that language, everyone proceeds to reveal a lot about themselves - history, socioeconomic status, personal hang-ups, weird quirks, how they handle time, etc. \r\n\r\nIt happens inadvertently and without notice; we can’t help but pour ourselves into that which we (in an ideal world) do everyday. \r\n\r\nAnd if the self is so wrapped up in what we eat and cook, when we offer to feed others, we offer that same self to be consumed. In this way, as we have become an ingredient, we engage in an act of emotional cannibalism. \r\n\r\nBut while feeding others is a nurturing and compassionate act, acts of cannibalism usually manifest as a power exchange. Where is the power in my particular exchange? Is it equal?\t\r\n\r\nBasic Ingredients is a sound installation and personal exercise constructed from recordings in home kitchens and facilitated discussions around the topic of food. What do people reveal about themselves by talking me through recipes? When moving through their own kitchens? If I ask about breakfast, lazy foods, or coffee, what do they tell me outside of eggs, milk, and sugar? \r\n\r\nFor my thesis, I ask people about food and they proceed to tell me about everything else. \r\n\r\nAnd while their answers and actions seemingly all differ, even the sound of the supposed common ones (the shapes of those sounds - how to break an egg, light a stove, measure an ingredient) act as fingerprints, all distinct to the individuals and their spaces. \r\n\r\nIf eating is an experience of the senses, I challenged myself to channel that experience through the limited scope of sound to make an individual available to be known by others, to be consumed by others.\r\n',
  topics: [{
    name: 'Identity',
    slug: 'identity'
  }, {
    name: 'Sound',
    slug: 'sound'
  }]
},
  'luqian-chen':
{
  student_id: '102',
  student_name: 'Luqian Chen',
  student_slug: 'luqian-chen',
  advisor_id: '131',
  project_title: 'Foodies',
  project_question: 'My thesis focuses on creating a real-life community with the goal of optimizing food resources and reducing food waste. Through establishing a mobile platform, Foodies is able to ease individual’s pressure of independently changing behaviors of wasting food. Instead, it relies on food to bringing people together to create communities, and eventually achieve the goal of reducing food waste. Put it in a simple way: if there is only chicken left in my fridge while there are merely some tomatoes and cheese left in yours; instead of purchasing more ingredients, (it might lead to more food waste,) we can bring our leftover together and cook them in order to reduce all of our waste and have a good experience at the same time.',
  topics: []
},
  'marco-guarino':
{
  student_id: '28',
  student_name: 'Marco Guarino',
  student_slug: 'marco-guarino',
  advisor_id: '123',
  project_title: 'Genealogy of a Rhythm',
  project_question: ' ‘Genealogy of a Rhythm’ tells the ethnomusicological story of Candombe (Afro- Uruguayan music and dance) using modern tools such as 360 cameras and motion capturing. In virtual reality, I give the viewer a glimpse into some of the lives of the people that take part in Candombe, presented as a non-linear narrative. The motion capturing portion of the project documents the bodies of the drummers, (and in the future, of the dancers) to collect data of body movements and create anthropological data sets of these movements. Future work would include a Music Information Retrieval approach to dissecting the rhythmic patterns of Candombe, as well as other prominent Afro-Latin rhythms. This information can then be presented as a family tree of rhythmic patterns, depending on similarities and differences between rhythms. This is an expression of advocacy for a musical form as well as a proposal to document cultural information with the modern tools of our time.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/4.jpg',
    title: '4',
    alt: 'Genealogy of a Rhythm',
    caption: 'Genealogy of a Rhythm'
  },
  topics: [{
    name: 'Culture',
    slug: 'culture'
  }, {
    name: 'Data',
    slug: 'data'
  }]
},
  'maxwell-nakamura':
{
  student_id: '105',
  student_name: 'Maxwell Nakamura',
  student_slug: 'maxwell-nakamura',
  advisor_id: '131',
  project_title: 'The Plaza Project: Mapping US public opinion across space, time, and identity.',
  project_question: 'Good citizenship and effective civic engagement relies first on a firm and accurate understanding of one’s society. And so The Plaza Project‘s mission is to measure and visualize the public opinions, attitudes, and values that make up the nation’s social fabric and drives political policy.\r\nThe project’s online platform stores a growing repository of active polls which visitors respond to. The questions on which the polls are based are taken from the news, political surveys, local ballots, personality quizzes, dating websites, psychology tests, morality tests, and canonical philosophy. Questions can also come directly from the users themselves. Responses are visualized across geography, time, and population segments so that the public may see how opinions change from one year to another, across the country’s fifty states, and between American identities, age groups, and political affiliations.\r\nThe open network democratizes public opinion polling, which until now has been conducted by small yet influential organizations like the Pew Research Center, Gallup, and national news organizations, and gives everyday people a forum to ask important questions to the public at large.',
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'Society',
    slug: 'society'
  }]
},
  'nanou-dimachki':
{
  student_id: '86',
  student_name: 'Nanou Dimachki',
  student_slug: 'nanou-dimachki',
  advisor_id: '129',
  project_title: 'Intimate Patterns.',
  project_question: '"Intimate Patterns" is a series of physical expressions that emerged from the intimate digital conversations between two people. \r\n\r\nThe relationship between the pair is translated into two/three physical installations. \r\n\r\nTexts become a metaphor, becomes tangible in concrete form.\r\n\r\nHow?\r\nI thought of ordinary objects from daily life because physicality is exactly what we miss in digital interactions. Hence the two installations: two light bulbs and two wine glasses.\r\n\r\nRelationships, like the bulbs sometimes go on and off or dim and die... The tangible aspect of bulbs, their accessibility and presence everywhere in every room made me think about how we tend to take them for granted. We can put a bulb on and off when we want to… However, do we have that choice in relationships with people? Is it always our call? Are we ever conscious of the pattern we make with them? Maybe. Who knows? Regardless bulbs are only here to show us in a very simplified and poetic way these digital interactions.\r\nThey go “on” and “off” like the interaction of the texting between those people. On, when received; off, in the absence of it. The lights intensify and dim when the interaction is vivid or dull. The bulbs change colors when the words exchanged are positive or negative, etc.\r\n\r\nThe installation of the two wine glasses come in pairs too, to exchange liquid (the wine) just like the exchange of messages, to reflect the pattern of sending and receiving. The full glass is a metaphor for the emotional fulfillment someone make us feel, when we receive a text. And an empty one is the lack of it or when we are in return filling somebody’s cup. \r\n',
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'Installation',
    slug: 'installation'
  }]
},
  'nathaniel-padgett':
{
  student_id: '107',
  student_name: 'Nathaniel Padgett',
  student_slug: 'nathaniel-padgett',
  advisor_id: '131',
  project_title: 'Open Kinetics',
  project_question: 'An exciting aspect of the rapid proliferation of technology over the past decade is that much of it is open and remixable by anyone with access to a computer and the internet. This has created unprecedented opportunities for anyone to contribute to and use these technologies for research, to start businesses, or to make art. \r\n\r\nBut despite these advances, access to technology is still largely concentrated in the wealthiest communities. A major reason for this digital divide is cost. Open Kinetics addresses this problem with engaging DIY technology kits designed to be affordable and accessible. Students learn programming, electronics, and design by making a simple motion controller used to play free movement-based games that they can also remix and build themselves. Through building these kits, they learn to use technology for their own creative ends, developing technological agency and preparing them for careers of the future. \r\n\r\nBy pairing hardware with games, Open Kinetics kits give context to what students can do once they have built their controller. Open Kinetics give students a virtually endless array of experiences to choose from, whether moving a character, playing virtual tennis, or making kinetic art. Because these games are movement-based, they engage students in active, physical participation that facilitates learning. Built for kids ages 8-16 but great for all ages, Open Kinetics turn players into makers and empowers students to contribute to rather than simply consume technology.\r\n\r\nOne simple project for Open Kinetics is a twist on the Atari classic Pong. In this game has players move paddles up and down the screen to deflect a puck and prevent their opponent from scoring. Rather than using joysticks or buttons, players use the Open Kinetics motion controller they build to move the paddles with their arm movements, making a sedentary game into an active one. ',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/MakeLeanMove.png',
    title: 'MakeLeanMove',
    alt: 'Make. Learn. Move.',
    caption: ''
  },
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'Play',
    slug: 'play'
  }]
},
  'nouf-aljowaysir':
{
  student_id: '68',
  student_name: 'Nouf Aljowaysir',
  student_slug: 'nouf-aljowaysir',
  advisor_id: '124',
  project_title: 'Nouf.io',
  project_question: 'What information is collected about me online? Can I recreate another version of myself based on who this data describes?\r\n \r\nNouf.io seeks to answer these two questions. I extract, scrape, and collect different archives of my digital information in order to understand who I am online. On a personal level, Nouf.io is a self-reflective character whose actions and behaviors visualize my digital persona.\r\n \r\nOn a broader level, she is a character representative of my data and its categorization and labeling of who I am. After looking through large amounts of my information, I noted many inaccuracies to how I was being portrayed such as “Nouf’s hobbies include acting and playing the harp”. Hence, I wanted to paint a picture to how algorithms categorize us based on interactions we have had online.\r\n \r\nServing as both a self-reflective piece and a commentary, I want users to interact with Nouf.io in order to push the boundaries of privacy and accessibility to my information. Depending on the identity of the user and the amount of interactions we have had via text and Facebook, Nouf.io discloses private information based on our level of digital intimacy. In the same manner that data is passed around online between Facebook and Google, what if I just handed it out and made it available to you? What does it feel like to get to know me if you have never met me? Does her honesty and raw information make you feel uncomfortable? To gain more information from Nouf.io, users are told to interact with me more online to achieve a higher level of accessibility to my data.',
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'Identity',
    slug: 'identity'
  }]
},
  'or-fleisher':
{
  student_id: '48',
  student_name: 'Or Fleisher',
  student_slug: 'or-fleisher',
  advisor_id: '119',
  project_title: 'Volume',
  project_question: "Volume is a system that generates 3D models from single view 2D images and video using state-of-the-art Machine Learning research. It is intended to provide a way to reconstruct archival, historical and pre-existing images and video in 3D space. \r\n\r\nBy providing an interface to bridge between machine learning and storytelling practices, Volume enables content creators to easily prototype 3D assets from 2D images and video in Augmented, Virtual and Mixed reality environments. Volume is built as a cloud service, which abstracts all the machine learning processing and provides a simple interface to reconstruct and view your assets. Upon reconstruction, you are able to download and use these assets in popular game engines such as Unity, Unreal or Three.js using the Volume plugin. \r\n\r\nVolume's main audience are content creators. By allowing anyone, with no previous coding background, to easily prototype 3D Volume encourages inclusion in the content creation process.",
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumb.png',
    title: 'Volume_Thumbnail',
    alt: 'Volume_Thumbnail',
    caption: ''
  },
  topics: [{
    name: 'Culture',
    slug: 'culture'
  }, {
    name: 'Machine Learning',
    slug: 'machine-learning'
  }]
},
  'pan-pan':
{
  student_id: '71',
  student_name: 'Pan Pan',
  student_slug: 'pan-pan',
  advisor_id: '124',
  project_title: 'active.ly',
  project_question: "There is no one like your child. Every child's development is unique and complex. Although children develop through a generally predictable sequence of steps and milestones, they don’t necessarily proceed through these steps in the same way or at the same time. Play is essential to development because it contributes to the cognitive, physical, social, and emotional well-being of children and youth. Play also offers an ideal opportunity for parents to engage more fully with their children. Unfortunately, given the hectic pace and over-scheduling of life today, time for free play has been markedly reduced in recent years despite the benefits derived from play for both children and parents.\r\nMore and more kids are glued to their phones or tablets for endless hours every day. Even those children who are fortunate enough to have abundant available resources and who live in relative peace may not be receiving the full benefits of offline play. Parents are not only worried about all the time their children are spending with technology, but they are also worried about the lack of time they are spending with them. Active.ly is an app designed to help parents turn the time they have with their children into more memorable moments that maximize the benefits of play offline.\r\n",
  topics: [{
    name: 'UX\\UI',
    slug: 'uxui'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'patrick-presto':
{
  student_id: '70',
  student_name: 'Patrick Presto',
  student_slug: 'patrick-presto',
  advisor_id: '124',
  project_title: 'Decrypt.Ed',
  project_question: 'Decrypt.Ed is an interactive and practical guide to understanding cryptocurrencies in an approachable way. Societies and communities at one time traded with salt or cowrie shells as these were seen as trusted forms of currency which everyone agreed held value. Eventually, multiple shifts gave rise to coins, banknotes, and later, plastic cards which act as proxies of value and offer consistency to the system of exchange. If is often the case that currencies, or our understanding of value, evolves faster than societies can adapt. Many things are gained as well as lost in the process, including elements of culture, languages, design, and politics. The process of adapting to a new currency often involves a steep learning curve. Decrypt.Ed is a project that evolved from an exploration of the ways in which value is understood, agreed upon, retained and exchanged and attempts to help newcomers up the cryptocurrency learning curve. \r\n',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/logo2.png',
    title: 'logo2',
    alt: 'logo',
    caption: ''
  },
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'Machine Learning',
    slug: 'machine-learning'
  }]
},
  'ran-tian':
{
  student_id: '109',
  student_name: 'Ran Tian',
  student_slug: 'ran-tian',
  advisor_id: '131',
  project_title: 'Heart Health',
  project_question: 'Unlike some disease that can be instantly felt by the patient or can be life threatening, cardiovascular disease is a silent killer. One third of patients after a cardiac event are not adherent to their medication irrespective of the cardiac medication prescribed, which is a major high growth situation in the US and globally. Patient adherence to medication is crucial for risk reduction following a cardiac event. Cardiac rehabilitation is complex and the workflow consists of 5 phases: patient ID, referral management, enrollment, patient rehabilitation, and maintenance. My thesis is focusing on patient rehabilitation and maintenance.\r\n\r\nThe primary reasons that cause non-adherence after a cardiac event are no symptoms, not filling the prescription, complexity, forgetting, cost and side effects. To address these problems, I’m creating a visually rich AR experience that will improve medication adherence, patient engagement, and create a better relationship between the patients and their heart anatomy to help them think about medication and rehab differently. Targeting the elderly, but highly applicable for youth as well, this AR app has three primary features: medication education via AR animated heart modules; integrated apple watch with realtime heart rate data; fun, emotional, and engaging gamified notifications for medication management. By turning the burdensome rehab trajectory into an experience of a beautiful garden inside the room, the process becomes more like meditation rather than work.',
  topics: [{
    name: 'Health',
    slug: 'health'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'richard-lapham':
{
  student_id: '16',
  student_name: 'Richard Lapham',
  student_slug: 'richard-lapham',
  advisor_id: '114',
  project_title: 'Customizing Reality Through Immersive Painting',
  project_question: 'How would you customize your reality? In a world where mixed reality eyewear is integrated into our lives, how would you augment the space around you and why would you want to? \r\n\r\nWith many possible applications of mixed reality, my research focuses on one: immersive digital painting. I’m most interested in the creative potential of mixed reality and with the release of immersive painting softwares, like Tilt Brush and Quill, I explored some of the possibilities offered by this new medium through a series of mixed reality experiments. \r\n\r\nMy research began with a technical component as I familiarized myself with developing for mixed reality. In this time I created a workflow allowing me to incorporate digital painting assets (including animated digital paintings) with mixed reality as a mobile application. \r\n\r\nWith this toolkit, I structured the remaining experimentation around three categories: environment, people, and narrative. \r\n\r\nEnvironment\r\nI reimagined Washington Square Park as a procedurally produced impressionist painting (inspired by Van Gogh and Seurat). In addition to experimenting with my own paintings in a space, I ran user testing with several volunteers in VR to see how people would paint and collaborate with each other. \r\n\r\nPeople\r\nInspired by several clothing collections, I created personal animations intended to track and overlay onto a person as a speculative digital accessory and a future form of self expression. \r\n\r\nNarrative\r\nI built a database of illustrative paintings that depict a specific action, character, environment, and many other elements that can be combined to create a story. In a mobile application, users can add these paintings to a mixed reality scene and rearrange them to create their own narrative. I plan to work on this application in the future and create a tool that makes mixed reality more accessible for creators to engage with the medium. ',
  topics: [{
    name: 'Narrative',
    slug: 'narrative'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'rita-cheng':
{
  student_id: '108',
  student_name: 'Rita Cheng',
  student_slug: 'rita-cheng',
  advisor_id: '131',
  project_title: 'The Personal Panopticon',
  project_question: 'How are Internet of Things devices like the Fitbit aiding in our collective exploitation and surveillance? What is the future of these caretaking devices? Most importantly: how do I get a piece of this action?\r\n\r\nThe Personal Panopticon is a multimedia project exploring the Internet of Things (IoT), surveillance culture, and the aesthetics of wellness and self-help. The project is a critical look at internet-enabled care devices (e.g. the Fitbit, smart scales, Apple Health) and the politics of their usage. Using them produces metrics to try and improve your well-being, but also is an implicit agreement to data surveillance and continuous monitoring.\r\n\r\nThe project consists of an IoT hub called Karma. Karma will take care of and manage your life, as a vision of the dystopia in which surveillance and monitoring is taken to extremes. Karma will collect information from other devices and will nag you to meet your goals and stay connected. When you are in range, she will talk to you and care for you in person. When you are away, she will call you and remind you of your obligations. You cannot opt out of Karma-- she is connected to your phone, email, and social media, so connecting to any network necessitates connecting to Karma.\r\n\r\nThe project also includes marketing such as the <a href="http://www.karma.care">landing website found here</a> and the Indiegogo campaign. A trade show setup was designed for the quick and dirty show. In this way, I examine how technology companies sell IoT devices and look at the aesthetics of surveillance, gadgets, and wellness.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/render.png',
    title: 'karma',
    alt: 'karma',
    caption: ''
  },
  topics: [{
    name: 'Culture',
    slug: 'culture'
  }, {
    name: 'Data',
    slug: 'data'
  }]
},
  'roi-lev':
{
  student_id: '17',
  student_name: 'Roi Lev',
  student_slug: 'roi-lev',
  advisor_id: '114',
  project_title: 'Inventing America',
  project_question: 'In 1623 the first immigrants came to what is known today as New York city. They were young, ambitious and came to reinvent themselves in America. \r\n\r\nInventing America is a story of a new society, a new city, being told from the point of view of a single person, an immigrant.\r\n\r\nThe project uses augmented and virtual reality technologies to explore the relations between time and space. Using their mobile devices, visitors are immersed in the same space they are physically standing in, the way it was in the past. Inventing America provides an opportunity to experience immigration to a new dimension, to different times, using the city of immigrants as a canvas.\r\n\r\nI believe we are witnessing a revolution in the way we integrate digital content into our lives. Latest technologies take content beyond the screen and provide exciting new ways for us to interact with it. The novel uses of immersive media we can see today in entertainment will eventually evolve to include other aspects of our lives. Inventing America demonstrates the potential of using those technologies to interact with historical data, with our past, in a new vivid and engaging way.\r\n\r\nIn order to realize this project we developed unique solutions and tools. The process involved unique production techniques such as 3D scanning, motion, face capture, custom graphics, branching narrative mechanisms and augmented reality platforms for mapping virtual environments to physical spaces.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail_new2.png',
    title: 'thumbnail',
    alt: '',
    caption: 'thumbnail'
  },
  topics: [{
    name: 'Narrative',
    slug: 'narrative'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'samantha-schulman':
{
  student_id: '110',
  student_name: 'Samantha Schulman',
  student_slug: 'samantha-schulman',
  advisor_id: '131',
  project_title: 'Breathe With Me',
  project_question: 'Anxiety disorders affect more than 40 million Americans, many of whom suffer from panic attacks. Panic attacks are unpredictable, debilitating episodes typically characterized by shaking, chest tightness, difficulty breathing, and intense fear. The combination of fear and physiological symptoms continues to heighten one another, escalating the panic attack. Paralyzed with fear, one’s breathing becomes short and shallow. While some strategies for coping with anxiety involve meditation or medication, I want to offer a new solution, one that transforms the anti-anxiety techniques of both diaphragmatic breathing and applied deep body pressure into a garment that could be worn anywhere.\r\n\r\nThe result, Breathe With Me, is is a wearable t-shirt that leverages the expansion and compression of pneumatics to encourage the wearer to focus on and control their breathing during moments of panic and anxiety. The user squeezes a hand-pump to inflate two air pockets that hug their chest and back, providing comfort in the application of gentle pressure. The hand-pump itself is soft and tactile, shaped to match the form of a person’s hand, and absorbs muscle tension to provide stress relief. The repeated squeezing of the pump combined with the soft compression develops a pattern that simulates deep breathing, guiding the user to practice breathing together with their garment. Essential oils are also dispersed with each pump as an additional calming element.\r\n\r\nFurthermore, in creating Breathe with Me, I challenged myself to try to uphold environmental ethics when selecting materials, despite the lack of resources available for fast and affordable sustainable production. My final prototype is made with soft white cotton fabric by the way of vintage laundry bags, and silicone, which is non-toxic throughout its entire lifecycle when properly developed.\r\n',
  topics: [{
    name: 'Health',
    slug: 'health'
  }, {
    name: 'Tangiable',
    slug: 'tangiable'
  }]
},
  'se-young-kim':
{
  student_id: '52',
  student_name: 'Se Young Kim',
  student_slug: 'se-young-kim',
  advisor_id: '119',
  project_title: 'Memory Capsule',
  project_question: 'MemoryCapsule is a mobile augmented reality app that let users archive their memories in the digital world attached to space. More and more people digitalize their memories, but it’s often disconnected with the real world we’re living in. The memories are heaped up, and users never go back. Think of all those bookmarks we made in the web, countless photos in your phone, and all those things you thought you would come back again. \r\nMemory is a visual thing, and it is strongly connected with the concept of space. Spatial memory is well known for a method to efficiently recall information too(“The method of loci”) \r\nI wanted to explore the relationship between memory and space, and literally attach the memory to the actual place and even recall them. \r\n\r\nMemoryCapsule will use AR to connect the memory with the real world. AR uses the actual environment for the background, and the users will use device’s screen to see through the digital space of memory. Users will keep their moments in photo, text and sound format. They will not only anchor to the 3D digital space but also attached to GPS data. After the user leaves a mark, they will set a certain amount of time for how long you want to “bury” the memory in that place. After the time has passed, the memory will be visible again. Then the users will go find and recall the memory again like they open a time capsule they buried a long time ago. ',
  topics: [{
    name: 'UX\\UI',
    slug: 'uxui'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'sean-seunghwan-kim':
{
  student_id: '88',
  student_name: 'Sean Seunghwan Kim',
  student_slug: 'sean-seunghwan-kim',
  advisor_id: '129',
  project_title: 'Mindfulness Over Matter (MOM)',
  project_question: 'Meditation helps us achieve oneness with the world and removes our distracting desires. Breathing and time is all we need for meditation. After all, Shakyamuni Buddha founded Buddhism and popularized meditation techniques without any high-tech gadgets. However, in the 21st century, more and more people are dependent on digital technologies. For most people, meditation seems like a mysterious and unattainable activity. Mindfulness Over Matter (MOM) is a series of educational technologies that seek to bring meditation to the modern world by making it accessible and entertaining, through unique gadgets and art-installations that inspire and enlighten people to think about mindfulness.\r\n\r\nA brief overview of the technologies I have developed in my search to raise awareness about mindfulness:\r\n\r\n[RAT RACE] \r\nA fun and engaging art installation/ game that is a satire of our hyper-competitive society. The more you relax, the faster your robot moves. \r\n\r\n[WAVR]\r\nAn EEG + VR headset that uses brainwave states to determine the virtual environment. Depending on the state of the user’s mind, their sensory (visuals, sounds, smells, motions) experience changes.\r\n\r\n[Mindfulness in Washington Sq. Park.]\r\nAn EEG + AR Headset experience that simulates human delusions, and how meditation can help reveal true reality. The Washington Sq. Park Fountain can be compared to our minds. At times, the fountain flows full of water. Sometimes, there are musicians or magicians performing in the center. Despite the many different experiences and occurrences in the fountain, it is really only a fountain. Similarly, our minds continuously come up with various thoughts and desires.\r\n\r\nFor this experience, I fill the fountain with various scenarios: water, magma, earthquake, and blizzards (using virtual augmentations). The EEG sensor measures the user’s level of concentration. If the user focuses, the distracting scenery disappears, so that in the end only the fountain is left. The more the user relaxes, the faster he/she can reach the true state of reality.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-4.50.07-PM-1024x595.png',
    title: 'Mindfulness Over Matter',
    alt: 'Mindfulness Over Matter',
    caption: ''
  },
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'sharif-al-hadidi':
{
  student_id: '87',
  student_name: 'Sharif Al-hadidi',
  student_slug: 'sharif-al-hadidi',
  advisor_id: '129',
  project_title: 'Odyssey',
  project_question: 'Odyssey is a set of features of a proposed larger application suite meant to assist authors, writers, journalists, and students write and organize all their research in one location. This version of the application focuses solely on audio/video transcription. Odyssey seeks to fill a gap within the market for writing tools, as well as improving the experience and helping users save time through automation. I developed a tool to accurately and quickly transcribe multimedia files using two APIs: IBM Watson and Google Speech. Users are provided time stamped and color coded transcripts in order to easy find and correct inevitable mistakes. A user can click on a word within the transcript to start playing the specific audio/video file from that point. This serves two purposes: to retrieve correction recommendations for edits as well as allowing for users to resume a file from a specific location within the file. ',
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'Tool\\Service',
    slug: 'toolservice'
  }]
},
  'siman-li':
{
  student_id: '51',
  student_name: 'Siman Li',
  student_slug: 'siman-li',
  advisor_id: '119',
  project_title: 'the Crossings 渡',
  project_question: "\r\nThe Crossings 渡 is a sculpture that in the shape of both mountain and artist's own body, with projection of seasons changes animation that represents the changes happen in life. While the animation changes, the sculpture itself seems to change in form, and provoking the audience's different emotions. \r\n\r\nInspired by the ancient Chinese landscape painting style, this work is a visual, aural and olfactory interpretation of the Buddhist concept —relief. Using the technique of 3D scanning, the body of the artist was captured, broke down and deformed into the shape of landscape. The 3D model was used to generate physical simulation animation to represent four seasons, using different color, form and dynamic to stimulates the audience’s imagination that is abstract, ancient, futuristic and poetic. \r\n\r\nThis work is a continuation of the artist’s exploration into the examination of traditional Chinese aesthetic and philosophy, by extracting, exploring and extending the core elements within a contemporary discourse without being bound by the formal restraints of tradition.\r\n\r\n",
  topics: []
},
  'stephanie-koltun':
{
  student_id: '89',
  student_name: 'Stephanie Koltun',
  student_slug: 'stephanie-koltun',
  advisor_id: '129',
  project_title: 'How Thrilling',
  project_question: 'As an installation, "How Thrilling" explores these three themes by creating different relationships across contexts. A context is composed of bodies and technology, which together establish an expectation for people to behave and perform. Central in all scenes of the installation is the performance (and identification) of the body — whether that be as dancing, watching, or both. How do contexts come together to give meaning to each other? How do we perform differently in different contexts? How is expectation for performance established and understood in a context?\r\n\r\nFrom the earliest artworks to the printed book to streaming video, technology has extended one’s capacity to represent oneself. But technology also extends one’s capacity to identify ourselves and others. Through computer vision and machine learning, this capacity to identify is extended to technology—independently of a contingent and changing psyche, or as an extension of the psyche who made it.\r\n\r\nContext as the situation of and relationships between, technology and bodies in space. Context establishes an expectation for performance, from which bodies are identified. A public restroom, a library, and a sports field are all examples of where a combination of signs, objects, uniforms, and spatial arrangements, are used to identify and enforce an expectation of a particular performance.\r\n\r\nContingency of the body-psyche can mean choosing to participate, where an example might be rejecting a gendered discourse through drag as discussed by Judith Butler. But there’s also contingency in the material condition of the body. Bodies come in all shapes, sizes, and capacities. Because of this contingency, our bodies may or may not be identified by the expected standards of a technology. \r\n',
  topics: [{
    name: 'Performance',
    slug: 'performance'
  }, {
    name: 'Play',
    slug: 'play'
  }]
},
  'swapna-joshi':
{
  student_id: '73',
  student_name: 'Swapna Joshi',
  student_slug: 'swapna-joshi',
  advisor_id: '124',
  project_title: 'MoleculAR : interactive chemistry kit',
  project_question: 'Given the rapid rate and growing complexity of scientific breakthroughs, it is increasingly important for children today to be exposed to the basics of science long before plunging into the rigors of high school level classes. I developed a particular interest in pre-high school level chemistry after my mother, who is a middle school chemistry teacher, told me about the difficulties her students were having visualizing basic chemistry concepts on a molecular level.\r\n\r\nMoleculAR, is a middle school chemistry kit that consists of physical cards representing the elements in the periodic table, a paper playground and an augmented reality app. The augmented reality component works like a magic window that converts the paper printed periodic table into other wordly, playful interactions. When the students scan individual element cards with their phones, the AR animations they see introduce them to different chemistry concepts, such as the electronic configuration and reactivity of elements. When two element cards are placed side-by-side on the paper playground, then scanned together, the resulting AR videos explain the formation of compounds and bonds. \r\n\r\nAlthough designed for use in a classroom environment, MoleculAR can also be used as a stand-alone kit for parents to use to introduce chemistry concepts to their children at home.\r\n',
  topics: [{
    name: 'Education',
    slug: 'education'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'xinyu-hu':
{
  student_id: '35',
  student_name: 'Xinyu Hu',
  student_slug: 'xinyu-hu',
  advisor_id: '123',
  project_title: 'The Act of Receiving',
  project_question: "The Act of Receiving is a series of performance art pieces and digital installations examining what it means to be a receiver of information.\r\n\r\nAct I is an experiment where I give my audience the power to control all my information input.\r\n\r\nThis is a performance piece where I sit in a virtual reality headset, but have no control of what I see. My audience can decide from online to show me any YouTube videos they want. They will be able to see what I am seeing in VR at the moment, and a live stream of my reaction to their content. Once the video is submitted, it's immediately mapped onto the four “walls” in my virtual environment, so I will not be able to look away from any point of view. The videos would keep on playing in loop, until another one is submitted.\r\n\r\nAct II is a broadcast of my real-time interaction with information.\r\n\r\nThis is a performance piece where I live stream my interaction with my phone for 12 hours. The screen of my phone is shared and streamed online, along with a streaming of myself. I interact with my phone the same way I would on any other day (reply messages, check emails, scroll instagram, etc.). \r\n\r\nAct III is an invitation for others to experience my history of receiving information.\r\n\r\nThis is a VR installation where viewers physically stand on a treadmill. As they walk forward, in the virtual environment, they are scrolling through a room-sized, simulated chat window with the entire WeChat conversation history between me and my mother for the past six years, experiencing voice messages, texts, images, videos, etc. fading in and out.",
  topics: [{
    name: 'Performance',
    slug: 'performance'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'xitong-xu':
{
  student_id: '112',
  student_name: 'Xitong Xu',
  student_slug: 'xitong-xu',
  advisor_id: '131',
  project_title: 'The Birth of the Self Portrait (1889)',
  project_question: "This project is a tribute to Vincent Van Gogh, and his famous self-portrait oil painting from 1889, by converting the post-impressionist static painting into a dynamic storytelling platform through an AR platform\r\n\r\nWhat's the story and creation process behind this legendary self-portrait? What happened to the artist and his life right before this painting was finished? What’s the environment? The static painting itself it's just the very last frame of this whole story. This platform aims to address this buried yet consequential information within the painting itself amplifying this contextual information through the colors and brush strokes on the final piece.\r\n\r\nVan Gogh went through a lot in 1889, and in his letters to his brother, he wrote about the influence of many things on himself and the continuous impact this had on his psyche and artistic sensibilities all of which greatly influenced his creations.The creation story and the painting are not mutually exclusive, they depend on each other and give each other adde depth, nuance, and impact.\r\n\r\nThis AR project is about expressing the mutually reinforcing relationship between the creation story and the artwork. The existing way for the audience to do that is reading the description labels in the museum next to the painting, the experience is not immersive enough. This platform can shift our perceptions of art, history, storytelling, context, and experience. When you run the AR application on the mobile device and focus the screen onto the Self-Portrait (1889) painting, the audience is going to see the animation of the birth story of this painting. It takes the painting and translates it into real-time virtual animations. Also, the visualization sends the paint daubs of the self-portrait into swirling patterns of motion, the brush strokes will be animated into dynamic flows.\r\n\r\n\r\n",
  topics: [{
    name: 'Narrative',
    slug: 'narrative'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'yeseul-song':
{
  student_id: '92',
  student_name: 'Yeseul Song',
  student_slug: 'yeseul-song',
  advisor_id: '129',
  project_title: 'Invisible Sculptures',
  project_question: 'In a gallery setting, there are five identical display plinths. Each holds an invisible sculpture.\r\n\r\nSculpture I is a solid 3d form made of sound. To experience the work, move your hand over the plinth. Concentrate all of your senses to find the connection between what you touch and what you hear. You will soon find yourself in the land of synesthesia. Once you are aware of the shape, try to recreate the form using a handful of clay that will be handed to you.\r\n\r\nSculpture II is an obscure pattern floating on top of the second plinth. Move your hand over the plinth to hear and experience the sculpture. Is it rough or soft? Is it dense or light? Is it spiky? \r\n\r\nSculpture III is made of heat. \r\n\r\nSculpture IV is made of cold air.\r\n\r\nSculpture V is stinky… You might not want to get too close to this one! The sculpture accompanies a video piece of the artist trying to create a large invisible sculpture with the smell of a durian at Grand Central Station.\r\n',
  topics: []
},
  'younho-lee':
{
  student_id: '18',
  student_name: 'Younho Lee',
  student_slug: 'younho-lee',
  advisor_id: '114',
  project_title: 'The World of Reverie',
  project_question: 'The World of Reverie is a mobile app that allows users to experience a poetic moment in their familiar places. Users can select a phrase from text corpus related to the places and juxtapose the phrase along with scenery with the capability of Augmented Reality. It will invoke a different emotion about the places that you have never had. The first edition is for myself and those who live in New York City. 18,163 phrases parsed from 451 lyrics inspired by the city are ready for you as a source of inspiration. The whole city will be transformed into poetic space that makes you fall into a reverie. \r\n\r\nIt is also for experimenting with creating and collecting a dataset about places in a different way. Activities of associating a phrase with a particular place eventually become a process of analyzing and contextualizing the raw data(text corpus). While users take a journey with using the app, they can naturally transform the text corpus into reinterpreted, personalized data. Finally, users can have a collection of their own poetic experiences about places.',
  topics: [{
    name: 'Data',
    slug: 'data'
  }, {
    name: 'VR\\AR',
    slug: 'vr-ar'
  }]
},
  'yuan-chen':
{
  student_id: '56',
  student_name: 'Yuan Chen',
  student_slug: 'yuan-chen',
  advisor_id: '119',
  project_title: 'Google-Qt',
  project_question: 'Voice assistant starts to become a daily thing at home today, and a new trend of human-computer interface in the future. But all of them basically remain as a virtual character behind a cold object with non emotional response. Our user expectations related to sensing and responding with emotion are unfulfilled by now, and it mentally disconnect user and machine in some level. In order to make voice assistant more delightful, attractive and engaging, my thesis project, Google-Qt, is an exploration of new voice assistant interface, that embody the assistant’s personality by animatronic eye expressions, react emotionally according to the contents of conversation. Eyes and eyebrows are the most important parts in facial expression system to effectively convey emotions. Different combinations between eye expressions and sentences even generate richer, funnier meaning of responses. As a result, Google-Qt not only keeps the full function of google assistant, but also has additional expressive possibilities to expand user experiences. ',
  topics: [{
    name: 'Tool\\Service',
    slug: 'toolservice'
  }, {
    name: 'UX\\UI',
    slug: 'uxui'
  }]
},
  'yunho-choi':
{
  student_id: '113',
  student_name: 'Yunho Choi',
  student_slug: 'yunho-choi',
  advisor_id: '131',
  project_title: 'Let me give Light',
  project_question: 'How can light and emerging technology create a more empathetic society? According to Ian Ashdown, the Chief Scientist of Lighting Analysts Inc., the thought “giving light” is clearly an abstraction, it shifts the focus from designing for the illuminated environment to designing for people. \r\n\r\nLighting technology has been developed over the past two centuries, bringing not only countless paradigm shifts in its hardware but also how we think about light and lighting. While we naturally think of light as something which illuminates the space around us, fire occupied a pivotal role in the religious beliefs of in ancient days and now candlelight is still widely used from meditation to social movements like tribute ceremonies or protests.\r\n\r\nSo I started to imagine - what if the most recent lighting technologies can mimic the restorative properties of ancient light? How can I design them as a new mean of interaction between human and physical environment by giving light, not only for the purpose of illumination? \r\n\r\nIn my thesis, I used augmented reality and smart light networks in order to create virtual lights and make a connection between them. In the first section "Let me give light", audiences can create and send the virtual light to the physical light by blowing into their smartphones. In the second section "Let us give light", multiple audiences can create a collaborative audiovisual sculpture by recognizing a light installation which has an AR marker.',
  portfolio_icon: {
    src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/test_thumnail.jpg',
    title: 'Let me give Light',
    alt: 'main thumbnail',
    caption: ''
  },
  topics: [{
    name: 'Culture',
    slug: 'culture'
  }, {
    name: 'Tool\\Service',
    slug: 'toolservice'
  }]
}
};

const sampleTagData = {
  'Culture': [{
    student_id: '58',
    student_name: 'Alejandro Matamala',
    student_slug: 'alejandro-matamala',
    advisor_id: '124',
    project_title: 'Archetype',
    project_question: 'Many creative professionals - from visual artists to musicians, writers to digital media artists -all face a similar problem. Most of the information about their artwork and projects lives within a few concentrated online publishing platforms and social networks, and these companies typically control access to the information and how it is presented. For artists of all kinds, this turns out to be a huge threat; not only in terms of the openness of the web and the artist’s ability to maintain control over their intellectual property but also as an impediment to creative expression and sustainable ways to archive and distribute artwork digitally. \r\n\r\nArchetype aims to address the centralization and standardization of creative expression of how works of arts often inhabit the web. An alternative, independent and experimental set of desktop publishing tools that enable artists to share their artwork online without having to depend on centralized publishing platforms or cloud computing services. \r\n\r\nThe project runs on a distributed peer-to-peer network using the DAT Protocol (https://datproject.org), which adds important characteristics to the publishing practice. It enables the publishing of content from any device connected to the network, including an artist’s individual personal computer. \r\n\r\nUnlike centralized models, where company-owned servers assume the right of publishing, a peer-to-peer protocol enables any computer, even an artist’s personal computer, the right to serve content, allowing affordable and accessible alternatives to the display of information online. In addition, DAT, allows users to distribute data through an archive system, enabling features like going back and revert previous versions. Distributed archive systems follow a bottom-up model which makes interconnected data solutions possible. Artists’ collections of work can be integrated together allowing anyone interested to contribute and participate.\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/arche.jpg',
      title: 'archetype',
      alt: 'archetype',
      caption: ''
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '81',
    student_name: 'Jaycee Holmes',
    student_slug: 'jaycee-holmes',
    advisor_id: '129',
    project_title: 'Nigga Inventions',
    project_question: 'This thesis began with the research question: What does Utopia mean for marginalized communities? Through dinners, conversations, interviews, and Utopia workshops that I designed and conducted, I began to map the wants and needs of the black creative community in New York City, selecting this particular community as my focus due to access. \r\n\r\nRacism still exists in New York City. Utopia does not. \r\n\r\nThe thesis deliverable of this research, Nigga Inventions, is a toolkit that focuses on solving the largest obstacles that prevent Utopia from existing, as defined by the participants of my thesis research. The toolkit centers around community, education, and access to reparations. \r\n\r\nA ‘Nigga Invention’ is a colloquialism for a work-around; a method for overcoming a difficult problem. In the context of this thesis, the problem is racism. The inventions presented in the Nigga Inventions toolkit are not meant to be presented as real techno-utopic solutions. They are tongue-in-cheek work-arounds for the survival of the black community against the very real distraction that is racism. \r\n',
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '28',
    student_name: 'Marco Guarino',
    student_slug: 'marco-guarino',
    advisor_id: '123',
    project_title: 'Genealogy of a Rhythm',
    project_question: ' ‘Genealogy of a Rhythm’ tells the ethnomusicological story of Candombe (Afro- Uruguayan music and dance) using modern tools such as 360 cameras and motion capturing. In virtual reality, I give the viewer a glimpse into some of the lives of the people that take part in Candombe, presented as a non-linear narrative. The motion capturing portion of the project documents the bodies of the drummers, (and in the future, of the dancers) to collect data of body movements and create anthropological data sets of these movements. Future work would include a Music Information Retrieval approach to dissecting the rhythmic patterns of Candombe, as well as other prominent Afro-Latin rhythms. This information can then be presented as a family tree of rhythmic patterns, depending on similarities and differences between rhythms. This is an expression of advocacy for a musical form as well as a proposal to document cultural information with the modern tools of our time.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/4.jpg',
      title: '4',
      alt: 'Genealogy of a Rhythm',
      caption: 'Genealogy of a Rhythm'
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Data',
      slug: 'data'
    }]
  }, {
    student_id: '48',
    student_name: 'Or Fleisher',
    student_slug: 'or-fleisher',
    advisor_id: '119',
    project_title: 'Volume',
    project_question: "Volume is a system that generates 3D models from single view 2D images and video using state-of-the-art Machine Learning research. It is intended to provide a way to reconstruct archival, historical and pre-existing images and video in 3D space. \r\n\r\nBy providing an interface to bridge between machine learning and storytelling practices, Volume enables content creators to easily prototype 3D assets from 2D images and video in Augmented, Virtual and Mixed reality environments. Volume is built as a cloud service, which abstracts all the machine learning processing and provides a simple interface to reconstruct and view your assets. Upon reconstruction, you are able to download and use these assets in popular game engines such as Unity, Unreal or Three.js using the Volume plugin. \r\n\r\nVolume's main audience are content creators. By allowing anyone, with no previous coding background, to easily prototype 3D Volume encourages inclusion in the content creation process.",
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumb.png',
      title: 'Volume_Thumbnail',
      alt: 'Volume_Thumbnail',
      caption: ''
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Machine Learning',
      slug: 'machine-learning'
    }]
  }, {
    student_id: '108',
    student_name: 'Rita Cheng',
    student_slug: 'rita-cheng',
    advisor_id: '131',
    project_title: 'The Personal Panopticon',
    project_question: 'How are Internet of Things devices like the Fitbit aiding in our collective exploitation and surveillance? What is the future of these caretaking devices? Most importantly: how do I get a piece of this action?\r\n\r\nThe Personal Panopticon is a multimedia project exploring the Internet of Things (IoT), surveillance culture, and the aesthetics of wellness and self-help. The project is a critical look at internet-enabled care devices (e.g. the Fitbit, smart scales, Apple Health) and the politics of their usage. Using them produces metrics to try and improve your well-being, but also is an implicit agreement to data surveillance and continuous monitoring.\r\n\r\nThe project consists of an IoT hub called Karma. Karma will take care of and manage your life, as a vision of the dystopia in which surveillance and monitoring is taken to extremes. Karma will collect information from other devices and will nag you to meet your goals and stay connected. When you are in range, she will talk to you and care for you in person. When you are away, she will call you and remind you of your obligations. You cannot opt out of Karma-- she is connected to your phone, email, and social media, so connecting to any network necessitates connecting to Karma.\r\n\r\nThe project also includes marketing such as the <a href="http://www.karma.care">landing website found here</a> and the Indiegogo campaign. A trade show setup was designed for the quick and dirty show. In this way, I examine how technology companies sell IoT devices and look at the aesthetics of surveillance, gadgets, and wellness.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/render.png',
      title: 'karma',
      alt: 'karma',
      caption: ''
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Data',
      slug: 'data'
    }]
  }],
  'Tool\\Service': [{
    student_id: '58',
    student_name: 'Alejandro Matamala',
    student_slug: 'alejandro-matamala',
    advisor_id: '124',
    project_title: 'Archetype',
    project_question: 'Many creative professionals - from visual artists to musicians, writers to digital media artists -all face a similar problem. Most of the information about their artwork and projects lives within a few concentrated online publishing platforms and social networks, and these companies typically control access to the information and how it is presented. For artists of all kinds, this turns out to be a huge threat; not only in terms of the openness of the web and the artist’s ability to maintain control over their intellectual property but also as an impediment to creative expression and sustainable ways to archive and distribute artwork digitally. \r\n\r\nArchetype aims to address the centralization and standardization of creative expression of how works of arts often inhabit the web. An alternative, independent and experimental set of desktop publishing tools that enable artists to share their artwork online without having to depend on centralized publishing platforms or cloud computing services. \r\n\r\nThe project runs on a distributed peer-to-peer network using the DAT Protocol (https://datproject.org), which adds important characteristics to the publishing practice. It enables the publishing of content from any device connected to the network, including an artist’s individual personal computer. \r\n\r\nUnlike centralized models, where company-owned servers assume the right of publishing, a peer-to-peer protocol enables any computer, even an artist’s personal computer, the right to serve content, allowing affordable and accessible alternatives to the display of information online. In addition, DAT, allows users to distribute data through an archive system, enabling features like going back and revert previous versions. Distributed archive systems follow a bottom-up model which makes interconnected data solutions possible. Artists’ collections of work can be integrated together allowing anyone interested to contribute and participate.\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/arche.jpg',
      title: 'archetype',
      alt: 'archetype',
      caption: ''
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '59',
    student_name: 'Cristobal Valenzuela',
    student_slug: 'cristobal-valenzuela',
    advisor_id: '124',
    project_title: 'Runway',
    project_question: 'Runway’s main goal is to make the process of running and using a state of the art machine learning model as easy as possible. If models are the building blocks of machine learning, how can we create more accessible tools to access them? This project is not about creating the right training environment to deploy It is not about training an algorithm and it’s not about hyper-parameters or hard code data science. It is a project built around the simple idea of making pre-trained models accessible.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.jpg',
      title: 'thumbnail',
      alt: 'runway',
      caption: ''
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '101',
    student_name: 'Jeffrey Park',
    student_slug: 'jeffrey-park',
    advisor_id: '131',
    project_title: 'Responsibly.me',
    project_question: 'Responsibly.me is a web platform for consumers to make more socially responsible purchasing decisions. Responsibly.me aggregates existing rankings on a company’s Corporate Social Responsibility initiatives and recommends similar products from brands with higher grades. Responsibly.me also provides a dashboard for users to understand their social responsibility values and purchasing habits in order to encourage them to shop more consciously.\r\n\r\nIn this current climate where we face a growing number of wicked problems, both the public and private sector need to do more to create a better world for all of us. According to the 2017 Cone Communications CSR study, 63% of Americans are hopeful businesses will take the lead to drive social and environmental change moving forward. This number increases to 71% for millennials and younger generations. However, only 39% of consumers “researched a company’s business practices or support of social and environmental issues” (2017 Cone Communications CSR study). The majority of users simply are not aware of the efforts corporations take to tackle these social issues and make their businesses more socially responsible.\r\n\r\nResponsibly.me aims to make these efforts more transparent and easier to access for regular consumers. I have collected data on 50 of the top 100 brands according to Forbes and have built a web extension in which users can learn about a brand’s social responsibility rankings. I have also created design wireframes for product recommendations and the user dashboard to get an idea of where I hope to take this project.',
    topics: [{
      name: 'Society',
      slug: 'society'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '64',
    student_name: 'Koji Kanao',
    student_slug: 'koji-kanao',
    advisor_id: '124',
    project_title: 'Mtindo',
    project_question: 'What kinds of practical style transfer applications can be developed for non-technical people, such as creative professionals, that are easy to use, efficient, and push beyond the limits of what is currently possible with existing graphics tools? People think that machine learning requires a Ph.D./CS degree and a background in mathematics and statistics. It all sounds very complicated and difficult. Unfortunately, machine learning isn’t easy to learn, but using applications designed with non-technical people in mind isn’t so hard and can be a lot of fun. Style transfer, which is the technique of recomposing images in the style of other images, is one form of machine learning that has started to be made available online to the general public through simple games. Mtindo is a style transfer application for the desktop that offers non-technical people a unique opportunity to experience machine learning in action that explores some of the practical potentials of style transfer, beyond the game-like applications that are currently available. Mtindo means style in Swahili. ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mtindo_journal_thumbnail.png',
      title: 'mtindo_journal_thumbnail',
      alt: 'mtindo',
      caption: ''
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '87',
    student_name: 'Sharif Al-hadidi',
    student_slug: 'sharif-al-hadidi',
    advisor_id: '129',
    project_title: 'Odyssey',
    project_question: 'Odyssey is a set of features of a proposed larger application suite meant to assist authors, writers, journalists, and students write and organize all their research in one location. This version of the application focuses solely on audio/video transcription. Odyssey seeks to fill a gap within the market for writing tools, as well as improving the experience and helping users save time through automation. I developed a tool to accurately and quickly transcribe multimedia files using two APIs: IBM Watson and Google Speech. Users are provided time stamped and color coded transcripts in order to easy find and correct inevitable mistakes. A user can click on a word within the transcript to start playing the specific audio/video file from that point. This serves two purposes: to retrieve correction recommendations for edits as well as allowing for users to resume a file from a specific location within the file. ',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '56',
    student_name: 'Yuan Chen',
    student_slug: 'yuan-chen',
    advisor_id: '119',
    project_title: 'Google-Qt',
    project_question: 'Voice assistant starts to become a daily thing at home today, and a new trend of human-computer interface in the future. But all of them basically remain as a virtual character behind a cold object with non emotional response. Our user expectations related to sensing and responding with emotion are unfulfilled by now, and it mentally disconnect user and machine in some level. In order to make voice assistant more delightful, attractive and engaging, my thesis project, Google-Qt, is an exploration of new voice assistant interface, that embody the assistant’s personality by animatronic eye expressions, react emotionally according to the contents of conversation. Eyes and eyebrows are the most important parts in facial expression system to effectively convey emotions. Different combinations between eye expressions and sentences even generate richer, funnier meaning of responses. As a result, Google-Qt not only keeps the full function of google assistant, but also has additional expressive possibilities to expand user experiences. ',
    topics: [{
      name: 'Tool\\Service',
      slug: 'toolservice'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }],
  'Education': [{
    student_id: '77',
    student_name: 'Alexander Zimmer',
    student_slug: 'alexander-zimmer',
    advisor_id: '129',
    project_title: 'Portraits of Evanston',
    project_question: 'For middle school students, history is often seen as the truth, rather than a version of it. Only by doing, can students begin to understand what it means to write history. For three months, five students at the McGaw Hill YMCA in Evanston, IL engaged in writing pieces of their own family histories. \r\nEach student engaged with their history by interviewing a family member about archival photos that they found in their home. They subsequently engaged with the present state of their family’s history by interviewing various citizens in Evanston, IL.\r\nThroughout these experiences, students created media, working with a team of filmmakers to film their entire process. In creating this media, students considered more deeply the writing of history itself.\r\nMoving forward, the stories of these five students will be used by teachers interesting in having their students engage in similar projects. Shorts films depicting the process of researching and writing history that these five students went through, will be used to get other students excited about doing the same.\r\nAs these five students, and the others who follow, grow older, they will already have set the groundwork to think critically about history as being written by humans, and not a definitive truth.\r\n',
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Narrative',
      slug: 'narrative'
    }]
  }, {
    student_id: '78',
    student_name: 'Ariana Vassilopoulou',
    student_slug: 'ariana-vassilopoulou',
    advisor_id: '129',
    project_title: 'A Fresh view',
    project_question: 'Cyprus is a divided island separated by what is known as a political “Green Line”. Its formal name is the United Nations Buffer Zone, which is a demilitarized area patrolled by the United Nations Peacekeeping Force in Cyprus (UNFICYP). It’s been this way since the Turkish Invasion of Cyprus of 1974. The Northern side of the island is the Turkish Republic of Northern Cyprus, and the Southern side is the Republic of Cyprus -the Greek side - where I am from. While the separation isn’t as absolute as North and South Korea--for example, I can cross the border -- each side is run like a totally different country. ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/photo-1024x691.jpg',
      title: 'photo',
      alt: 'A Fresh View',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Installation',
      slug: 'installation'
    }]
  }, {
    student_id: '24',
    student_name: 'Dominic Barrett',
    student_slug: 'dominic-barrett',
    advisor_id: '123',
    project_title: 'Going Forward',
    project_question: '“Going Forward: A Recipe Book for the Continuing Creative Technologist” is a tutorial book serving artists who have started making with technology. Not a beginners guide, nor for in depth advanced concepts, “Going Forward” positions itself as the second book, or what you do after your first class.\r\n\r\nYet as you continue to read, the lessons become strange. Projects become unusual, and code comments begin to fill with short stories. More and more, the technical lessons mutate into the poetic. Further and further the transformation takes place, until the reader realizes that this is anything but the normal programming tutorial.\r\n\r\nIt is common for those starting to program in hopes of making art to have doubts in their abilities. Despite completing introductory courses, they insist they still aren’t “real programmers”. Their beginner skills make achieving sophisticated output feel miles away. Console errors that plague them for days are fixed by “better” programmers in minutes. Impostor syndrome runs rampant. Motivation is sapped by obscure and idiosyncratic platform bugs, broken drivers, and unrequested operating system updates.\r\n\r\nThis is not fertile ground for newcomers, let alone artists.\r\n\r\nIt is enough to make any sensible person want to quit. These common, and reasonable emotions stand in the way of programmers making programs. Which to me, is a programming problem. An emotional one. How do we solve it?\r\n\r\nWhile development as a creative technologist does require more advanced technical and programming skill, a different kind of lesson is simultaneously required. It needs to be something that lets people know that these struggles aren’t uncommon. And not just for beginners, but for professionals. The experts are on Stack Overflow. Your favorite artist is in the forums, describing a bug that can’t be replicated by anyone but them.\r\n\r\nThe lesson of “Going Forward” is a depiction of our creative technologist culture. It’s a story about our ups and downs. How our technology isn’t a hurdle, but where our art happens. A reminder that we put ourselves in our art. And when things finally work, against all odds, the magic at the other end is worth it.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/plug_tongue_320x240.jpg',
      title: 'plug_tongue_320x240',
      alt: 'Power cable close to a tongue',
      caption: 'Going Forward Thumbnail'
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Narrative',
      slug: 'narrative'
    }]
  }, {
    student_id: '62',
    student_name: 'Jinhee Ahn',
    student_slug: 'jinhee-ahn',
    advisor_id: '124',
    project_title: 'textARt',
    project_question: 'The state of UI/UX design in virtual worlds is still evolving. The use of typography and text is a prime example of this. At the moment, text elements in virtual worlds for the most part still follow the design conventions developed for 2D environments, such as print or flat web pages, rather than taking into account the more dimensional and experiential characteristics of 3D environments. I have been curious to explore new ways to visualize text in virtual spaces that move beyond traditional 2D graphic design. For my thesis project I have experimented \r\nwith ways to make text come alive with AR by creating more animated and dimensional text examples in the process of learning simple verbs in a new language. For example, the word ‘SPIN’ could be visualized by displaying a spinning animation of the word, or the letters that make up the word, with related environmental elements that help provide a context for the spinning action.',
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '83',
    student_name: 'Kar Rosen',
    student_slug: 'kar-rosen',
    advisor_id: '129',
    project_title: 'The Quantum Carnival',
    project_question: 'Step right up, and enter the Quantum Carnival!\r\n\r\nQuantum Carnival is a proposal for a museum exhibition that presents key principles of quantum physics in the form of a carnival sideshow performance.\r\n\r\nConcepts like Schrödinger’s Cat experiment, the double slit experiment, relativity, Heisenberg’s principle of uncertainty, multiverse theory/butterfly effect, probability, and others are shown as sideshow acts or staged as carnival games.\r\n\r\nA central goal of this project is to cut through the widespread perception that quantum physics is too complex for most people to understand, by offering an introduction to this important and fascinating scientific field in an engaging and playful way.\r\n\r\nThe smoke-and-mirror aesthetics of turn-of-the century fairgrounds is well-suited to explaining principles of quantum physics, due to its penchant for playfully blurring the lines of reality and uncertainty. Embracing the performative, welcoming, and down-to-earth tone that has come to define this unique part of American culture allows audiences an immediate, appealing connection to quantum physics - which, just like the sideshows that dotted the boardwalks and campgrounds of the early 20th century, is full of mind-bending wonder that can truly astound.\r\n\r\nMinimal Viable Product is a design booklet and a prototype of one of the interactive demonstrations: The Great Heisenberg’s Uncertainty Chest, a game where audiences are asked to guess if a light (programmed to a random state) concealed within a closed trunk is on or off. I will demonstrate the trunk but without the performative element it would have in the exhibit, where a facilitator would be there acting like a performer running the carnival game.\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis_archive_thumb.jpg',
      title: 'thesis_archive_thumb',
      alt: 'A brown wooden trunk stands before a red curtain. White light emits through the cracks of the open trunk top.',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Play',
      slug: 'play'
    }]
  }, {
    student_id: '107',
    student_name: 'Nathaniel Padgett',
    student_slug: 'nathaniel-padgett',
    advisor_id: '131',
    project_title: 'Open Kinetics',
    project_question: 'An exciting aspect of the rapid proliferation of technology over the past decade is that much of it is open and remixable by anyone with access to a computer and the internet. This has created unprecedented opportunities for anyone to contribute to and use these technologies for research, to start businesses, or to make art. \r\n\r\nBut despite these advances, access to technology is still largely concentrated in the wealthiest communities. A major reason for this digital divide is cost. Open Kinetics addresses this problem with engaging DIY technology kits designed to be affordable and accessible. Students learn programming, electronics, and design by making a simple motion controller used to play free movement-based games that they can also remix and build themselves. Through building these kits, they learn to use technology for their own creative ends, developing technological agency and preparing them for careers of the future. \r\n\r\nBy pairing hardware with games, Open Kinetics kits give context to what students can do once they have built their controller. Open Kinetics give students a virtually endless array of experiences to choose from, whether moving a character, playing virtual tennis, or making kinetic art. Because these games are movement-based, they engage students in active, physical participation that facilitates learning. Built for kids ages 8-16 but great for all ages, Open Kinetics turn players into makers and empowers students to contribute to rather than simply consume technology.\r\n\r\nOne simple project for Open Kinetics is a twist on the Atari classic Pong. In this game has players move paddles up and down the screen to deflect a puck and prevent their opponent from scoring. Rather than using joysticks or buttons, players use the Open Kinetics motion controller they build to move the paddles with their arm movements, making a sedentary game into an active one. ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/MakeLeanMove.png',
      title: 'MakeLeanMove',
      alt: 'Make. Learn. Move.',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Play',
      slug: 'play'
    }]
  }, {
    student_id: '70',
    student_name: 'Patrick Presto',
    student_slug: 'patrick-presto',
    advisor_id: '124',
    project_title: 'Decrypt.Ed',
    project_question: 'Decrypt.Ed is an interactive and practical guide to understanding cryptocurrencies in an approachable way. Societies and communities at one time traded with salt or cowrie shells as these were seen as trusted forms of currency which everyone agreed held value. Eventually, multiple shifts gave rise to coins, banknotes, and later, plastic cards which act as proxies of value and offer consistency to the system of exchange. If is often the case that currencies, or our understanding of value, evolves faster than societies can adapt. Many things are gained as well as lost in the process, including elements of culture, languages, design, and politics. The process of adapting to a new currency often involves a steep learning curve. Decrypt.Ed is a project that evolved from an exploration of the ways in which value is understood, agreed upon, retained and exchanged and attempts to help newcomers up the cryptocurrency learning curve. \r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/logo2.png',
      title: 'logo2',
      alt: 'logo',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Machine Learning',
      slug: 'machine-learning'
    }]
  }, {
    student_id: '88',
    student_name: 'Sean Seunghwan Kim',
    student_slug: 'sean-seunghwan-kim',
    advisor_id: '129',
    project_title: 'Mindfulness Over Matter (MOM)',
    project_question: 'Meditation helps us achieve oneness with the world and removes our distracting desires. Breathing and time is all we need for meditation. After all, Shakyamuni Buddha founded Buddhism and popularized meditation techniques without any high-tech gadgets. However, in the 21st century, more and more people are dependent on digital technologies. For most people, meditation seems like a mysterious and unattainable activity. Mindfulness Over Matter (MOM) is a series of educational technologies that seek to bring meditation to the modern world by making it accessible and entertaining, through unique gadgets and art-installations that inspire and enlighten people to think about mindfulness.\r\n\r\nA brief overview of the technologies I have developed in my search to raise awareness about mindfulness:\r\n\r\n[RAT RACE] \r\nA fun and engaging art installation/ game that is a satire of our hyper-competitive society. The more you relax, the faster your robot moves. \r\n\r\n[WAVR]\r\nAn EEG + VR headset that uses brainwave states to determine the virtual environment. Depending on the state of the user’s mind, their sensory (visuals, sounds, smells, motions) experience changes.\r\n\r\n[Mindfulness in Washington Sq. Park.]\r\nAn EEG + AR Headset experience that simulates human delusions, and how meditation can help reveal true reality. The Washington Sq. Park Fountain can be compared to our minds. At times, the fountain flows full of water. Sometimes, there are musicians or magicians performing in the center. Despite the many different experiences and occurrences in the fountain, it is really only a fountain. Similarly, our minds continuously come up with various thoughts and desires.\r\n\r\nFor this experience, I fill the fountain with various scenarios: water, magma, earthquake, and blizzards (using virtual augmentations). The EEG sensor measures the user’s level of concentration. If the user focuses, the distracting scenery disappears, so that in the end only the fountain is left. The more the user relaxes, the faster he/she can reach the true state of reality.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-4.50.07-PM-1024x595.png',
      title: 'Mindfulness Over Matter',
      alt: 'Mindfulness Over Matter',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '73',
    student_name: 'Swapna Joshi',
    student_slug: 'swapna-joshi',
    advisor_id: '124',
    project_title: 'MoleculAR : interactive chemistry kit',
    project_question: 'Given the rapid rate and growing complexity of scientific breakthroughs, it is increasingly important for children today to be exposed to the basics of science long before plunging into the rigors of high school level classes. I developed a particular interest in pre-high school level chemistry after my mother, who is a middle school chemistry teacher, told me about the difficulties her students were having visualizing basic chemistry concepts on a molecular level.\r\n\r\nMoleculAR, is a middle school chemistry kit that consists of physical cards representing the elements in the periodic table, a paper playground and an augmented reality app. The augmented reality component works like a magic window that converts the paper printed periodic table into other wordly, playful interactions. When the students scan individual element cards with their phones, the AR animations they see introduce them to different chemistry concepts, such as the electronic configuration and reactivity of elements. When two element cards are placed side-by-side on the paper playground, then scanned together, the resulting AR videos explain the formation of compounds and bonds. \r\n\r\nAlthough designed for use in a classroom environment, MoleculAR can also be used as a stand-alone kit for parents to use to introduce chemistry concepts to their children at home.\r\n',
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }],
  'Narrative': [{
    student_id: '77',
    student_name: 'Alexander Zimmer',
    student_slug: 'alexander-zimmer',
    advisor_id: '129',
    project_title: 'Portraits of Evanston',
    project_question: 'For middle school students, history is often seen as the truth, rather than a version of it. Only by doing, can students begin to understand what it means to write history. For three months, five students at the McGaw Hill YMCA in Evanston, IL engaged in writing pieces of their own family histories. \r\nEach student engaged with their history by interviewing a family member about archival photos that they found in their home. They subsequently engaged with the present state of their family’s history by interviewing various citizens in Evanston, IL.\r\nThroughout these experiences, students created media, working with a team of filmmakers to film their entire process. In creating this media, students considered more deeply the writing of history itself.\r\nMoving forward, the stories of these five students will be used by teachers interesting in having their students engage in similar projects. Shorts films depicting the process of researching and writing history that these five students went through, will be used to get other students excited about doing the same.\r\nAs these five students, and the others who follow, grow older, they will already have set the groundwork to think critically about history as being written by humans, and not a definitive truth.\r\n',
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Narrative',
      slug: 'narrative'
    }]
  }, {
    student_id: '22',
    student_name: 'Christina Hall',
    student_slug: 'christina-hall',
    advisor_id: '123',
    project_title: 'The Masks I Wear',
    project_question: 'The Masks I Wear is a solo live performance, alternative documentary that explores the harassment experienced by women in industry. The artist has collected personal stories from four women who have experienced harassment in a professional environment and then “wears” projected motion controlled digital masks to portray the collected stories. Each performance sits only four audience members, each paired with a narrative from a different woman. Through the physical interaction of pushing a button, audience members will be able to influence how much of the narrative is told. This interaction will challenge the audience, putting them in a position of power and control, deciding how much of the emotional story to experience. \r\n\r\nThe artist sits on a rotating stool with the audience surrounding her in a circle. An element of privacy is added by dividing the space between each audience member, allowing them to feel comfortable with varying degrees of interaction during the performance. \r\n\r\nThe artist will be using a combination of facial tracking software and projection mapping to portray the sketched face of the woman that have gone through the harassment or assault.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/HallC_TMIW_thumbnail320x240.jpg',
      title: 'HallC_TMIW_thumbnail320x240',
      alt: 'tmiw',
      caption: ''
    },
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'Performance',
      slug: 'performance'
    }]
  }, {
    student_id: '24',
    student_name: 'Dominic Barrett',
    student_slug: 'dominic-barrett',
    advisor_id: '123',
    project_title: 'Going Forward',
    project_question: '“Going Forward: A Recipe Book for the Continuing Creative Technologist” is a tutorial book serving artists who have started making with technology. Not a beginners guide, nor for in depth advanced concepts, “Going Forward” positions itself as the second book, or what you do after your first class.\r\n\r\nYet as you continue to read, the lessons become strange. Projects become unusual, and code comments begin to fill with short stories. More and more, the technical lessons mutate into the poetic. Further and further the transformation takes place, until the reader realizes that this is anything but the normal programming tutorial.\r\n\r\nIt is common for those starting to program in hopes of making art to have doubts in their abilities. Despite completing introductory courses, they insist they still aren’t “real programmers”. Their beginner skills make achieving sophisticated output feel miles away. Console errors that plague them for days are fixed by “better” programmers in minutes. Impostor syndrome runs rampant. Motivation is sapped by obscure and idiosyncratic platform bugs, broken drivers, and unrequested operating system updates.\r\n\r\nThis is not fertile ground for newcomers, let alone artists.\r\n\r\nIt is enough to make any sensible person want to quit. These common, and reasonable emotions stand in the way of programmers making programs. Which to me, is a programming problem. An emotional one. How do we solve it?\r\n\r\nWhile development as a creative technologist does require more advanced technical and programming skill, a different kind of lesson is simultaneously required. It needs to be something that lets people know that these struggles aren’t uncommon. And not just for beginners, but for professionals. The experts are on Stack Overflow. Your favorite artist is in the forums, describing a bug that can’t be replicated by anyone but them.\r\n\r\nThe lesson of “Going Forward” is a depiction of our creative technologist culture. It’s a story about our ups and downs. How our technology isn’t a hurdle, but where our art happens. A reminder that we put ourselves in our art. And when things finally work, against all odds, the magic at the other end is worth it.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/plug_tongue_320x240.jpg',
      title: 'plug_tongue_320x240',
      alt: 'Power cable close to a tongue',
      caption: 'Going Forward Thumbnail'
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Narrative',
      slug: 'narrative'
    }]
  }, {
    student_id: '97',
    student_name: 'Dong Chan Kim',
    student_slug: 'dong-chan-kim',
    advisor_id: '131',
    project_title: 'The Son&#8217;s Drawer',
    project_question: "In virtual reality, my father is invited to my home in New York where he's never visited in person. He looks around the son's living room, which is hand-painted. Some of the things in there are distinguished from the surroundings because they're 3D scanned and colored. These objects are specifically associated with the memories from my personal history. When he touches or grab one of these, the story begins with my narration and the sketches are drawn around the object. After he puts all the things to the drawer, a photography pops up. It is the photo of him when he was in the hospital. And the experience ends with my message saying that I hope I can collect more memories with him in the future.\r\n\r\nThis project is to get my father who underwent cancer surgery last year to take care of himself.\r\nThe way I chose to do it is a story. Because I believe that story can change one’s behavior.\r\n\r\nI have a drawer of my little things from last 20 years. They may be nothing special to look at, but for me, each one is a treasure with a precious story on it. By telling my father about these stories, I want to remind him that he has a family that cares about his health more than he does. And I expect this experience will inspire him.\r\n\r\nSince I'm in New York and my father is in Seoul, it's hard to demonstrate the actual things. Also, it can also be hard to focus on because it starts with small, nothing-special objects. So I chose virtual reality. Since it uses HMD(Head-Mounted Display), which blocks outside interference. I think it will help my father become more absorbed in the story.\r\n",
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/key-image_320x240.jpg',
      title: 'key image_320x240',
      alt: 'Main image of the project',
      caption: ''
    },
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '16',
    student_name: 'Richard Lapham',
    student_slug: 'richard-lapham',
    advisor_id: '114',
    project_title: 'Customizing Reality Through Immersive Painting',
    project_question: 'How would you customize your reality? In a world where mixed reality eyewear is integrated into our lives, how would you augment the space around you and why would you want to? \r\n\r\nWith many possible applications of mixed reality, my research focuses on one: immersive digital painting. I’m most interested in the creative potential of mixed reality and with the release of immersive painting softwares, like Tilt Brush and Quill, I explored some of the possibilities offered by this new medium through a series of mixed reality experiments. \r\n\r\nMy research began with a technical component as I familiarized myself with developing for mixed reality. In this time I created a workflow allowing me to incorporate digital painting assets (including animated digital paintings) with mixed reality as a mobile application. \r\n\r\nWith this toolkit, I structured the remaining experimentation around three categories: environment, people, and narrative. \r\n\r\nEnvironment\r\nI reimagined Washington Square Park as a procedurally produced impressionist painting (inspired by Van Gogh and Seurat). In addition to experimenting with my own paintings in a space, I ran user testing with several volunteers in VR to see how people would paint and collaborate with each other. \r\n\r\nPeople\r\nInspired by several clothing collections, I created personal animations intended to track and overlay onto a person as a speculative digital accessory and a future form of self expression. \r\n\r\nNarrative\r\nI built a database of illustrative paintings that depict a specific action, character, environment, and many other elements that can be combined to create a story. In a mobile application, users can add these paintings to a mixed reality scene and rearrange them to create their own narrative. I plan to work on this application in the future and create a tool that makes mixed reality more accessible for creators to engage with the medium. ',
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '17',
    student_name: 'Roi Lev',
    student_slug: 'roi-lev',
    advisor_id: '114',
    project_title: 'Inventing America',
    project_question: 'In 1623 the first immigrants came to what is known today as New York city. They were young, ambitious and came to reinvent themselves in America. \r\n\r\nInventing America is a story of a new society, a new city, being told from the point of view of a single person, an immigrant.\r\n\r\nThe project uses augmented and virtual reality technologies to explore the relations between time and space. Using their mobile devices, visitors are immersed in the same space they are physically standing in, the way it was in the past. Inventing America provides an opportunity to experience immigration to a new dimension, to different times, using the city of immigrants as a canvas.\r\n\r\nI believe we are witnessing a revolution in the way we integrate digital content into our lives. Latest technologies take content beyond the screen and provide exciting new ways for us to interact with it. The novel uses of immersive media we can see today in entertainment will eventually evolve to include other aspects of our lives. Inventing America demonstrates the potential of using those technologies to interact with historical data, with our past, in a new vivid and engaging way.\r\n\r\nIn order to realize this project we developed unique solutions and tools. The process involved unique production techniques such as 3D scanning, motion, face capture, custom graphics, branching narrative mechanisms and augmented reality platforms for mapping virtual environments to physical spaces.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail_new2.png',
      title: 'thumbnail',
      alt: '',
      caption: 'thumbnail'
    },
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '112',
    student_name: 'Xitong Xu',
    student_slug: 'xitong-xu',
    advisor_id: '131',
    project_title: 'The Birth of the Self Portrait (1889)',
    project_question: "This project is a tribute to Vincent Van Gogh, and his famous self-portrait oil painting from 1889, by converting the post-impressionist static painting into a dynamic storytelling platform through an AR platform\r\n\r\nWhat's the story and creation process behind this legendary self-portrait? What happened to the artist and his life right before this painting was finished? What’s the environment? The static painting itself it's just the very last frame of this whole story. This platform aims to address this buried yet consequential information within the painting itself amplifying this contextual information through the colors and brush strokes on the final piece.\r\n\r\nVan Gogh went through a lot in 1889, and in his letters to his brother, he wrote about the influence of many things on himself and the continuous impact this had on his psyche and artistic sensibilities all of which greatly influenced his creations.The creation story and the painting are not mutually exclusive, they depend on each other and give each other adde depth, nuance, and impact.\r\n\r\nThis AR project is about expressing the mutually reinforcing relationship between the creation story and the artwork. The existing way for the audience to do that is reading the description labels in the museum next to the painting, the experience is not immersive enough. This platform can shift our perceptions of art, history, storytelling, context, and experience. When you run the AR application on the mobile device and focus the screen onto the Self-Portrait (1889) painting, the audience is going to see the animation of the birth story of this painting. It takes the painting and translates it into real-time virtual animations. Also, the visualization sends the paint daubs of the self-portrait into swirling patterns of motion, the brush strokes will be animated into dynamic flows.\r\n\r\n\r\n",
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }],
  'Play': [{
    student_id: '20',
    student_name: 'Amanda Min-Jin Lee',
    student_slug: 'amanda-min-jin-lee',
    advisor_id: '123',
    project_title: 'JAM-JAM',
    project_question: 'I love music and we all love music.\r\nMusic is always on in our daily lives. Music is powerful as it can change the mood of the environment and the people that reside in it. These shared musical spaces bring out strong emotional connections between each listener. Hip-hop, jazz, classical; these are different genres that deliver different emotions and moods, depending on where we are and who we are with. \r\n \r\nHowever, sometimes an annoying situation happens when we are listening to music together with friends. Somebody needs to control the music. But it is hard to satisfy everyone because we all have different musical tastes. If there are more than two people in the same room who have different musical tastes, who will make the decision for what’s playing on the stereo? \r\n \r\nBased on this question, my goal was to find an answer to this small dilemma in my own playful way. How can I shuffle music playlists in a fair and equal way?\r\nI ended up with two keywords: “competition + shuffle”. I wanted the users to focus on the music-listening experience rather than the competitive action, so I chose a simple and dynamic “shaking” interaction for the game. It is fast and dynamic, so that users may quickly associate this action with the process of mixing music.',
    topics: [{
      name: 'Play',
      slug: 'play'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '10',
    student_name: 'Jenny Lim',
    student_slug: 'jenny-lim',
    advisor_id: '114',
    project_title: 'Awkward Thanksgiving',
    project_question: 'I’ve recently noticed myself censoring my speech out of fear: fear of seeming ignorant, bigoted or worse. While I think it’s important to watch one’s words out of sensitivity and respect for others, I believe that self-censorship due to fear hinders discourse. For my thesis, I wanted to make a game that creates a safe space for people to discuss politics. \r\nIn Awkward Thanksgiving, players begin by adopting an ideology: libertarian, progressive, socialist, etc. This is the ideology that they must represent throughout the game. Some players choose ideologies because it’s fun to pretend to be on the other side. Others choose ideologies because it gives them the freedom to express opinions that their friends may not share.\r\nThe mechanics of the game force players to think beyond their initial stereotypes of their ideologies. Players must use Argument cards when they discuss a topic, and often players will find themselves with Argument cards that do not perfectly align with the “party line.” According to one player, “It’s fun to puzzle out, ‘How am I going to use this card?’ Making arguments that buck stereotype is really nice.”\r\nThe trickiest part of making a “serious” game is making it fun. It doesn’t matter how important a game’s mission is; if it’s not fun, no one will play it. Awkward Thanksgiving provides two kinds of fun: the relief of saying the unsayable, and the joy of improvising family history. During one playtest, two friends playing a divorced couple began bickering over a stolen lawnmower. The exchange provided some relief to a fairly serious discussion on Universal Basic Income.\r\nAwkward Thanksgiving has gone through 6 distinct iterations since mid-February. I’ve run over 12 playtests, with 4-8 players each time. The game is both fun and thought-provoking. I will continue to develop it after graduation.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Lim_thumbnail.png',
      title: 'Lim_thumbnail',
      alt: 'AwkwardThanksgiving',
      caption: ''
    },
    topics: [{
      name: 'Play',
      slug: 'play'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '83',
    student_name: 'Kar Rosen',
    student_slug: 'kar-rosen',
    advisor_id: '129',
    project_title: 'The Quantum Carnival',
    project_question: 'Step right up, and enter the Quantum Carnival!\r\n\r\nQuantum Carnival is a proposal for a museum exhibition that presents key principles of quantum physics in the form of a carnival sideshow performance.\r\n\r\nConcepts like Schrödinger’s Cat experiment, the double slit experiment, relativity, Heisenberg’s principle of uncertainty, multiverse theory/butterfly effect, probability, and others are shown as sideshow acts or staged as carnival games.\r\n\r\nA central goal of this project is to cut through the widespread perception that quantum physics is too complex for most people to understand, by offering an introduction to this important and fascinating scientific field in an engaging and playful way.\r\n\r\nThe smoke-and-mirror aesthetics of turn-of-the century fairgrounds is well-suited to explaining principles of quantum physics, due to its penchant for playfully blurring the lines of reality and uncertainty. Embracing the performative, welcoming, and down-to-earth tone that has come to define this unique part of American culture allows audiences an immediate, appealing connection to quantum physics - which, just like the sideshows that dotted the boardwalks and campgrounds of the early 20th century, is full of mind-bending wonder that can truly astound.\r\n\r\nMinimal Viable Product is a design booklet and a prototype of one of the interactive demonstrations: The Great Heisenberg’s Uncertainty Chest, a game where audiences are asked to guess if a light (programmed to a random state) concealed within a closed trunk is on or off. I will demonstrate the trunk but without the performative element it would have in the exhibit, where a facilitator would be there acting like a performer running the carnival game.\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis_archive_thumb.jpg',
      title: 'thesis_archive_thumb',
      alt: 'A brown wooden trunk stands before a red curtain. White light emits through the cracks of the open trunk top.',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Play',
      slug: 'play'
    }]
  }, {
    student_id: '107',
    student_name: 'Nathaniel Padgett',
    student_slug: 'nathaniel-padgett',
    advisor_id: '131',
    project_title: 'Open Kinetics',
    project_question: 'An exciting aspect of the rapid proliferation of technology over the past decade is that much of it is open and remixable by anyone with access to a computer and the internet. This has created unprecedented opportunities for anyone to contribute to and use these technologies for research, to start businesses, or to make art. \r\n\r\nBut despite these advances, access to technology is still largely concentrated in the wealthiest communities. A major reason for this digital divide is cost. Open Kinetics addresses this problem with engaging DIY technology kits designed to be affordable and accessible. Students learn programming, electronics, and design by making a simple motion controller used to play free movement-based games that they can also remix and build themselves. Through building these kits, they learn to use technology for their own creative ends, developing technological agency and preparing them for careers of the future. \r\n\r\nBy pairing hardware with games, Open Kinetics kits give context to what students can do once they have built their controller. Open Kinetics give students a virtually endless array of experiences to choose from, whether moving a character, playing virtual tennis, or making kinetic art. Because these games are movement-based, they engage students in active, physical participation that facilitates learning. Built for kids ages 8-16 but great for all ages, Open Kinetics turn players into makers and empowers students to contribute to rather than simply consume technology.\r\n\r\nOne simple project for Open Kinetics is a twist on the Atari classic Pong. In this game has players move paddles up and down the screen to deflect a puck and prevent their opponent from scoring. Rather than using joysticks or buttons, players use the Open Kinetics motion controller they build to move the paddles with their arm movements, making a sedentary game into an active one. ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/MakeLeanMove.png',
      title: 'MakeLeanMove',
      alt: 'Make. Learn. Move.',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Play',
      slug: 'play'
    }]
  }, {
    student_id: '89',
    student_name: 'Stephanie Koltun',
    student_slug: 'stephanie-koltun',
    advisor_id: '129',
    project_title: 'How Thrilling',
    project_question: 'As an installation, "How Thrilling" explores these three themes by creating different relationships across contexts. A context is composed of bodies and technology, which together establish an expectation for people to behave and perform. Central in all scenes of the installation is the performance (and identification) of the body — whether that be as dancing, watching, or both. How do contexts come together to give meaning to each other? How do we perform differently in different contexts? How is expectation for performance established and understood in a context?\r\n\r\nFrom the earliest artworks to the printed book to streaming video, technology has extended one’s capacity to represent oneself. But technology also extends one’s capacity to identify ourselves and others. Through computer vision and machine learning, this capacity to identify is extended to technology—independently of a contingent and changing psyche, or as an extension of the psyche who made it.\r\n\r\nContext as the situation of and relationships between, technology and bodies in space. Context establishes an expectation for performance, from which bodies are identified. A public restroom, a library, and a sports field are all examples of where a combination of signs, objects, uniforms, and spatial arrangements, are used to identify and enforce an expectation of a particular performance.\r\n\r\nContingency of the body-psyche can mean choosing to participate, where an example might be rejecting a gendered discourse through drag as discussed by Judith Butler. But there’s also contingency in the material condition of the body. Bodies come in all shapes, sizes, and capacities. Because of this contingency, our bodies may or may not be identified by the expected standards of a technology. \r\n',
    topics: [{
      name: 'Performance',
      slug: 'performance'
    }, {
      name: 'Play',
      slug: 'play'
    }]
  }],
  'UX\\UI': [{
    student_id: '20',
    student_name: 'Amanda Min-Jin Lee',
    student_slug: 'amanda-min-jin-lee',
    advisor_id: '123',
    project_title: 'JAM-JAM',
    project_question: 'I love music and we all love music.\r\nMusic is always on in our daily lives. Music is powerful as it can change the mood of the environment and the people that reside in it. These shared musical spaces bring out strong emotional connections between each listener. Hip-hop, jazz, classical; these are different genres that deliver different emotions and moods, depending on where we are and who we are with. \r\n \r\nHowever, sometimes an annoying situation happens when we are listening to music together with friends. Somebody needs to control the music. But it is hard to satisfy everyone because we all have different musical tastes. If there are more than two people in the same room who have different musical tastes, who will make the decision for what’s playing on the stereo? \r\n \r\nBased on this question, my goal was to find an answer to this small dilemma in my own playful way. How can I shuffle music playlists in a fair and equal way?\r\nI ended up with two keywords: “competition + shuffle”. I wanted the users to focus on the music-listening experience rather than the competitive action, so I chose a simple and dynamic “shaking” interaction for the game. It is fast and dynamic, so that users may quickly associate this action with the process of mixing music.',
    topics: [{
      name: 'Play',
      slug: 'play'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '5',
    student_name: 'Chloe Gao',
    student_slug: 'chloe-gao',
    advisor_id: '114',
    project_title: 'Ephemeral',
    project_question: 'During my first summer in New York, many of my friends visited me and slept in my living room. Since my apartment is close to the Hudson River Park, I always took them to the park for a walk in the evenings. They shared with me their stories of the city: hopes, dreams; sweet and broken hearts. I have lived in the city for three years now, but not as many friends visited me since that summer. Sometimes they came, but they no longer slept in my living room. This project is for the ephemeral summer nights that will never happen again.\r\n\r\nInspired by site-specific kinetic sculpture, my thesis project Ephemeral explores the potential forms of kinetic sculptures, specifically in my thesis human forms in augmented reality. I chose a wireframe material because its transparent texture delivers the feeling of memory: it looked like a shadow in the day, and glowing particles at nights. \r\n\r\nUsers who download the app can see and explore the AR experience I created at the Hudson River Park west of Manhattan. Users have to go to the exact area in order for the virtual sculptures to show up. As the camera moves away, the sculpture vanishes. The app Ephemeral is essentially an AR magazine of the city, and it will help you understand the city in a unique, emotional and romantic way. \r\n\r\nThe app is written in Swift and ARkit, and uses Google Geo-Location API.\r\n',
    topics: [{
      name: 'UX\\UI',
      slug: 'uxui'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '7',
    student_name: 'Grau Puche Recarens',
    student_slug: 'grau-puche-recarens',
    advisor_id: '114',
    project_title: 'lligam',
    project_question: 'The main thread of this project is the desire to break out of screen-based interactions. Wanting to go away from a visual-feedback-only world, and building something engaging that comes through touch. [ʎigam] is not about finding a solution but going away from the norm and making something weird through an exploration of physical interaction. And that relies on screen just as an accessory or an intensifier.\r\n\r\nThis experimentation had various parameters decided a priori as it had to have a clear end goal making sure something came out of this. The resulting device would be a game composed of two different items; a physical controller, and a digital game. The control was built first and is the main element and platform for the digital game. The video game is linked directly to the controller and only makes sense with it. The reasoning for these parameters besides personal ones is the fact that games are a great exemplifier of good, and bad interaction *building*.\r\n\r\nAll these contributing factors have coalesced into the creation of CCR (CatCat Revolution). An arcade-style game where the player has to pet a cat according to their picky request and try to make them happy (no one is sure if it is even possible)',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-15.05.48.png',
      title: 'CCR, realization of lligam',
      alt: 'the face of a cat',
      caption: ''
    },
    topics: [{
      name: 'Tangiable',
      slug: 'tangiable'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '43',
    student_name: 'Hayeon Hwang',
    student_slug: 'hayeon-hwang',
    advisor_id: '119',
    project_title: 'Expressive Tactile Controls',
    project_question: 'Push buttons, sliders, switches and dials—we use such controls everyday, and yet we barely notice them. ‘Expressive Tactile Controls’ is a series of playful research experiments that ask: how could our relationship to tactile controls be augmented by giving these controls more personality? How would buttons that have a stronger, more evocative personality affect and improve our relationship with the applications they are built into? How would people react to buttons that ‘talk back?’\r\n\r\nThis question was approached by constructing and testing a series of experimental pushbutton prototypes able to express themselves with various tactile and kinesthetic feedback (vibration, tension, and movement), according to the user’s touch or environment. \r\n\r\nThe first series included controls designed to feel Stubborn, Sensitive/Impatient, Lazy, Timid, and Spontaneous. These ‘personality-enriched’ buttons were then used to provide users with a more intuitive tactile feedback, in accordance with the application they were serving.\r\n',
    topics: [{
      name: 'Tangiable',
      slug: 'tangiable'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '81',
    student_name: 'Jaycee Holmes',
    student_slug: 'jaycee-holmes',
    advisor_id: '129',
    project_title: 'Nigga Inventions',
    project_question: 'This thesis began with the research question: What does Utopia mean for marginalized communities? Through dinners, conversations, interviews, and Utopia workshops that I designed and conducted, I began to map the wants and needs of the black creative community in New York City, selecting this particular community as my focus due to access. \r\n\r\nRacism still exists in New York City. Utopia does not. \r\n\r\nThe thesis deliverable of this research, Nigga Inventions, is a toolkit that focuses on solving the largest obstacles that prevent Utopia from existing, as defined by the participants of my thesis research. The toolkit centers around community, education, and access to reparations. \r\n\r\nA ‘Nigga Invention’ is a colloquialism for a work-around; a method for overcoming a difficult problem. In the context of this thesis, the problem is racism. The inventions presented in the Nigga Inventions toolkit are not meant to be presented as real techno-utopic solutions. They are tongue-in-cheek work-arounds for the survival of the black community against the very real distraction that is racism. \r\n',
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '71',
    student_name: 'Pan Pan',
    student_slug: 'pan-pan',
    advisor_id: '124',
    project_title: 'active.ly',
    project_question: "There is no one like your child. Every child's development is unique and complex. Although children develop through a generally predictable sequence of steps and milestones, they don’t necessarily proceed through these steps in the same way or at the same time. Play is essential to development because it contributes to the cognitive, physical, social, and emotional well-being of children and youth. Play also offers an ideal opportunity for parents to engage more fully with their children. Unfortunately, given the hectic pace and over-scheduling of life today, time for free play has been markedly reduced in recent years despite the benefits derived from play for both children and parents.\r\nMore and more kids are glued to their phones or tablets for endless hours every day. Even those children who are fortunate enough to have abundant available resources and who live in relative peace may not be receiving the full benefits of offline play. Parents are not only worried about all the time their children are spending with technology, but they are also worried about the lack of time they are spending with them. Active.ly is an app designed to help parents turn the time they have with their children into more memorable moments that maximize the benefits of play offline.\r\n",
    topics: [{
      name: 'UX\\UI',
      slug: 'uxui'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '52',
    student_name: 'Se Young Kim',
    student_slug: 'se-young-kim',
    advisor_id: '119',
    project_title: 'Memory Capsule',
    project_question: 'MemoryCapsule is a mobile augmented reality app that let users archive their memories in the digital world attached to space. More and more people digitalize their memories, but it’s often disconnected with the real world we’re living in. The memories are heaped up, and users never go back. Think of all those bookmarks we made in the web, countless photos in your phone, and all those things you thought you would come back again. \r\nMemory is a visual thing, and it is strongly connected with the concept of space. Spatial memory is well known for a method to efficiently recall information too(“The method of loci”) \r\nI wanted to explore the relationship between memory and space, and literally attach the memory to the actual place and even recall them. \r\n\r\nMemoryCapsule will use AR to connect the memory with the real world. AR uses the actual environment for the background, and the users will use device’s screen to see through the digital space of memory. Users will keep their moments in photo, text and sound format. They will not only anchor to the 3D digital space but also attached to GPS data. After the user leaves a mark, they will set a certain amount of time for how long you want to “bury” the memory in that place. After the time has passed, the memory will be visible again. Then the users will go find and recall the memory again like they open a time capsule they buried a long time ago. ',
    topics: [{
      name: 'UX\\UI',
      slug: 'uxui'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '56',
    student_name: 'Yuan Chen',
    student_slug: 'yuan-chen',
    advisor_id: '119',
    project_title: 'Google-Qt',
    project_question: 'Voice assistant starts to become a daily thing at home today, and a new trend of human-computer interface in the future. But all of them basically remain as a virtual character behind a cold object with non emotional response. Our user expectations related to sensing and responding with emotion are unfulfilled by now, and it mentally disconnect user and machine in some level. In order to make voice assistant more delightful, attractive and engaging, my thesis project, Google-Qt, is an exploration of new voice assistant interface, that embody the assistant’s personality by animatronic eye expressions, react emotionally according to the contents of conversation. Eyes and eyebrows are the most important parts in facial expression system to effectively convey emotions. Different combinations between eye expressions and sentences even generate richer, funnier meaning of responses. As a result, Google-Qt not only keeps the full function of google assistant, but also has additional expressive possibilities to expand user experiences. ',
    topics: [{
      name: 'Tool\\Service',
      slug: 'toolservice'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }],
  'Identity': [{
    student_id: '76',
    student_name: 'Anastasios Germanidis',
    student_slug: 'anastasios-germanidis',
    advisor_id: '129',
    project_title: 'Sybil Society',
    project_question: 'In Sybil Society, you are not tied to one identity, one personality, one past. Here, you can create as many identities as you like and switch between them freely. Once you have selected an identity, an algorithm matches you with other users nearby, and a scene is generated based on your respective identities. Examples of scenes include: meeting a friend, going on a date, breaking up with a significant other, doing a job interview, having an existential crisis. You can continue living the life of that identity for as long as you like – an hour, a day, a month, a year. Then you can decide to become someone else.\r\n\r\nMark Zuckerberg said in 2010: “You have only one identity. Having two identities for yourself is an example of a lack of integrity.” In the past decade Zuckerberg’s vision of social life, where most of one’s online and offline activity is linked directly to a single legal identity, has become reality. But pseudonymity is having a comeback, as people wake up to the myriad problems of the “real name internet.” Cryptocurrencies will enable people to participate in economic transactions without using their legal identity. Mixed reality headsets will get people to start identifying with the faces and bodies they choose, instead of those they were born with. Machine learning will allow people to mimic the style and behavior of others with ever-increasing accuracy. Sybil Society is today’s approximation of this weird future of fluid identities.',
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '80',
    student_name: 'Jarrett C Slavin',
    student_slug: 'jarrett-c-slavin',
    advisor_id: '129',
    project_title: 'Spectrum',
    project_question: 'What does life look like through the bipolar lens?\r\nSpectrum is a mobile audio app that places the user in the shoes of a bipolar mind through various situations &amp; thoughts. The user adjust a slider to hear three different perspectives, (depressed, baseline, and manic) on the same subjects, from the same mind experiencing different mood states. \r\n\r\nThis version of “Spectrum” is comprised entirely of my own personal thoughts, re-living various events in specific situations through each of the 3 primary lenses of the bipolar spectrum.\r\n\r\n“Spectrum” serves as a prototype that could eventually expand to include the thoughts of several different bipolar individuals. For now, for the sake of focus and scale, I choose to focus on expressing my own personal perspective.\r\n\r\nFor anyone who has ever struggled to understand what it means to be bipolar, “Spectrum” seeks to increase empathy, understanding, and communication. Whether you are bipolar yourself, seeking to relate &amp; compare your own experience to mine, or if you are not bipolar but would like to better understand &amp; empathize with those in your life who are, “Spectrum” offers a valuable, insightful experience.\r\n\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/spectrumThumbnail.jpg',
      title: 'spectrumThumbnail',
      alt: 'thumbnail',
      caption: ''
    },
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'Sound',
      slug: 'sound'
    }]
  }, {
    student_id: '13',
    student_name: 'Katherine A Takacs',
    student_slug: 'katherine-a-takacs',
    advisor_id: '114',
    project_title: 'AWall',
    project_question: "I am going to build a wall using modules that are L-shaped. Those blocks are strategically stacked to look solid. The back of the blocks will be lined with neo-pixels. As people approach the wall, the lights will move and light is. They will become brighter in an exponential growth - so that the light permeates the wall, and shows it to be an illusion more than anything else. To borrow Richard Serra's words, I am showing how the viewer can become the subject of their own experience in a way that allows you to connect more readily to the world around you.",
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TakacsThumbnail.jpg',
      title: 'TakacsThumbnail',
      alt: 'Thumbnail',
      caption: 'Takacs'
    },
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'Installation',
      slug: 'installation'
    }]
  }, {
    student_id: '103',
    student_name: 'Lindsey Daniels',
    student_slug: 'lindsey-daniels',
    advisor_id: '131',
    project_title: 'Basic Ingredients',
    project_question: 'If everyone eats and has food habits, then food is able to be used as a shared language among all people. And in that language, everyone proceeds to reveal a lot about themselves - history, socioeconomic status, personal hang-ups, weird quirks, how they handle time, etc. \r\n\r\nIt happens inadvertently and without notice; we can’t help but pour ourselves into that which we (in an ideal world) do everyday. \r\n\r\nAnd if the self is so wrapped up in what we eat and cook, when we offer to feed others, we offer that same self to be consumed. In this way, as we have become an ingredient, we engage in an act of emotional cannibalism. \r\n\r\nBut while feeding others is a nurturing and compassionate act, acts of cannibalism usually manifest as a power exchange. Where is the power in my particular exchange? Is it equal?\t\r\n\r\nBasic Ingredients is a sound installation and personal exercise constructed from recordings in home kitchens and facilitated discussions around the topic of food. What do people reveal about themselves by talking me through recipes? When moving through their own kitchens? If I ask about breakfast, lazy foods, or coffee, what do they tell me outside of eggs, milk, and sugar? \r\n\r\nFor my thesis, I ask people about food and they proceed to tell me about everything else. \r\n\r\nAnd while their answers and actions seemingly all differ, even the sound of the supposed common ones (the shapes of those sounds - how to break an egg, light a stove, measure an ingredient) act as fingerprints, all distinct to the individuals and their spaces. \r\n\r\nIf eating is an experience of the senses, I challenged myself to channel that experience through the limited scope of sound to make an individual available to be known by others, to be consumed by others.\r\n',
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'Sound',
      slug: 'sound'
    }]
  }, {
    student_id: '68',
    student_name: 'Nouf Aljowaysir',
    student_slug: 'nouf-aljowaysir',
    advisor_id: '124',
    project_title: 'Nouf.io',
    project_question: 'What information is collected about me online? Can I recreate another version of myself based on who this data describes?\r\n \r\nNouf.io seeks to answer these two questions. I extract, scrape, and collect different archives of my digital information in order to understand who I am online. On a personal level, Nouf.io is a self-reflective character whose actions and behaviors visualize my digital persona.\r\n \r\nOn a broader level, she is a character representative of my data and its categorization and labeling of who I am. After looking through large amounts of my information, I noted many inaccuracies to how I was being portrayed such as “Nouf’s hobbies include acting and playing the harp”. Hence, I wanted to paint a picture to how algorithms categorize us based on interactions we have had online.\r\n \r\nServing as both a self-reflective piece and a commentary, I want users to interact with Nouf.io in order to push the boundaries of privacy and accessibility to my information. Depending on the identity of the user and the amount of interactions we have had via text and Facebook, Nouf.io discloses private information based on our level of digital intimacy. In the same manner that data is passed around online between Facebook and Google, what if I just handed it out and made it available to you? What does it feel like to get to know me if you have never met me? Does her honesty and raw information make you feel uncomfortable? To gain more information from Nouf.io, users are told to interact with me more online to achieve a higher level of accessibility to my data.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Identity',
      slug: 'identity'
    }]
  }],
  'VR\\AR': [{
    student_id: '76',
    student_name: 'Anastasios Germanidis',
    student_slug: 'anastasios-germanidis',
    advisor_id: '129',
    project_title: 'Sybil Society',
    project_question: 'In Sybil Society, you are not tied to one identity, one personality, one past. Here, you can create as many identities as you like and switch between them freely. Once you have selected an identity, an algorithm matches you with other users nearby, and a scene is generated based on your respective identities. Examples of scenes include: meeting a friend, going on a date, breaking up with a significant other, doing a job interview, having an existential crisis. You can continue living the life of that identity for as long as you like – an hour, a day, a month, a year. Then you can decide to become someone else.\r\n\r\nMark Zuckerberg said in 2010: “You have only one identity. Having two identities for yourself is an example of a lack of integrity.” In the past decade Zuckerberg’s vision of social life, where most of one’s online and offline activity is linked directly to a single legal identity, has become reality. But pseudonymity is having a comeback, as people wake up to the myriad problems of the “real name internet.” Cryptocurrencies will enable people to participate in economic transactions without using their legal identity. Mixed reality headsets will get people to start identifying with the faces and bodies they choose, instead of those they were born with. Machine learning will allow people to mimic the style and behavior of others with ever-increasing accuracy. Sybil Society is today’s approximation of this weird future of fluid identities.',
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '5',
    student_name: 'Chloe Gao',
    student_slug: 'chloe-gao',
    advisor_id: '114',
    project_title: 'Ephemeral',
    project_question: 'During my first summer in New York, many of my friends visited me and slept in my living room. Since my apartment is close to the Hudson River Park, I always took them to the park for a walk in the evenings. They shared with me their stories of the city: hopes, dreams; sweet and broken hearts. I have lived in the city for three years now, but not as many friends visited me since that summer. Sometimes they came, but they no longer slept in my living room. This project is for the ephemeral summer nights that will never happen again.\r\n\r\nInspired by site-specific kinetic sculpture, my thesis project Ephemeral explores the potential forms of kinetic sculptures, specifically in my thesis human forms in augmented reality. I chose a wireframe material because its transparent texture delivers the feeling of memory: it looked like a shadow in the day, and glowing particles at nights. \r\n\r\nUsers who download the app can see and explore the AR experience I created at the Hudson River Park west of Manhattan. Users have to go to the exact area in order for the virtual sculptures to show up. As the camera moves away, the sculpture vanishes. The app Ephemeral is essentially an AR magazine of the city, and it will help you understand the city in a unique, emotional and romantic way. \r\n\r\nThe app is written in Swift and ARkit, and uses Google Geo-Location API.\r\n',
    topics: [{
      name: 'UX\\UI',
      slug: 'uxui'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '97',
    student_name: 'Dong Chan Kim',
    student_slug: 'dong-chan-kim',
    advisor_id: '131',
    project_title: 'The Son&#8217;s Drawer',
    project_question: "In virtual reality, my father is invited to my home in New York where he's never visited in person. He looks around the son's living room, which is hand-painted. Some of the things in there are distinguished from the surroundings because they're 3D scanned and colored. These objects are specifically associated with the memories from my personal history. When he touches or grab one of these, the story begins with my narration and the sketches are drawn around the object. After he puts all the things to the drawer, a photography pops up. It is the photo of him when he was in the hospital. And the experience ends with my message saying that I hope I can collect more memories with him in the future.\r\n\r\nThis project is to get my father who underwent cancer surgery last year to take care of himself.\r\nThe way I chose to do it is a story. Because I believe that story can change one’s behavior.\r\n\r\nI have a drawer of my little things from last 20 years. They may be nothing special to look at, but for me, each one is a treasure with a precious story on it. By telling my father about these stories, I want to remind him that he has a family that cares about his health more than he does. And I expect this experience will inspire him.\r\n\r\nSince I'm in New York and my father is in Seoul, it's hard to demonstrate the actual things. Also, it can also be hard to focus on because it starts with small, nothing-special objects. So I chose virtual reality. Since it uses HMD(Head-Mounted Display), which blocks outside interference. I think it will help my father become more absorbed in the story.\r\n",
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/key-image_320x240.jpg',
      title: 'key image_320x240',
      alt: 'Main image of the project',
      caption: ''
    },
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '9',
    student_name: 'Jina Jung',
    student_slug: 'jina-jung',
    advisor_id: '114',
    project_title: 'Intangible Canvas',
    project_question: 'Fragmentary Landscape is an experiment with the realm between new technology and traditional materials, combining both genres of work. Paralleling the way rays of light are untouchable in the physical world, this project focuses on the relationship between real and imaginary figures in an immersive natural environment. My real life paintings of nature are converted into a virtual space so people can experience my paintings in VR. \r\n\r\nFurthermore, this project also focuses on questions of how the artist applied VR with traditional paintings or drawings as well as how their observation changes depending on the medium. It aims to create landscapes with different dimensions(2D&amp;3D) which are situated on real and virtual canvases. Based on my artistic approach, and experiences with nature, I could explore new perspectives while creating landscapes and characteristics of elements and landscapes in a virtual environment.\r\n\r\nThe project consists of 3 methods – Drawings, titled ‘Fragments - Intangible Objects’, Paintings, titled ‘Fragmentary forest’, and VR, titled ’Beyond forest’. Handling these three different forms provides audiences the chance to fully immerse themselves and engage completely in the world that the artist has visualized. \t',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.jpg',
      title: 'Thumbnail',
      alt: 'Jina001',
      caption: ''
    },
    topics: [{
      name: 'Installation',
      slug: 'installation'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '27',
    student_name: 'Jingfei Lin',
    student_slug: 'jingfei-lin',
    advisor_id: '123',
    project_title: 'Runway in store',
    project_question: 'The retail industry is undergoing a major transformation as e-commerce disrupts traditional brick-and-mortar store models and gives rise to new modes of “experiential retail.” By creating a more immersive retail experience, retailers can drive people towards their stores and ensure they leave not just with your products but also memories. Runway in store explores how technology can enhance the retail experience, and especially adopts Augmented Reality to provide shoppers the experiences that engage, inform and entertain. \r\n\r\nRunway in store is a physical playground that encourages customers in the retail store to move around and interact with the augmented visuals that are projected on the wall or an LED screen, where a Kinect v2 is used to capture the real-time the human image and drive a real-time movement of a 3D character in Unity. By choosing Nike as the brand, the AR installation tracks human motions with multiplayer features and metaphorical explorations of the augmented 3D visuals.\r\n\r\nCustomers then could save and share the looks to social media, so that the brand can employ social media as a means of reaching out and connecting with potential customers.',
    topics: [{
      name: 'Installation',
      slug: 'installation'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '62',
    student_name: 'Jinhee Ahn',
    student_slug: 'jinhee-ahn',
    advisor_id: '124',
    project_title: 'textARt',
    project_question: 'The state of UI/UX design in virtual worlds is still evolving. The use of typography and text is a prime example of this. At the moment, text elements in virtual worlds for the most part still follow the design conventions developed for 2D environments, such as print or flat web pages, rather than taking into account the more dimensional and experiential characteristics of 3D environments. I have been curious to explore new ways to visualize text in virtual spaces that move beyond traditional 2D graphic design. For my thesis project I have experimented \r\nwith ways to make text come alive with AR by creating more animated and dimensional text examples in the process of learning simple verbs in a new language. For example, the word ‘SPIN’ could be visualized by displaying a spinning animation of the word, or the letters that make up the word, with related environmental elements that help provide a context for the spinning action.',
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '11',
    student_name: 'Jixuan Sun',
    student_slug: 'jixuan-sun',
    advisor_id: '114',
    project_title: 'XIANGRUI &#8211; Auspicious Symbols in the Palace Museum',
    project_question: 'With rapidly changing technologies, how can we find a better way to get the most of information, explore hidden context and stories behind museum exhibits, and maximize the experience? How can we connect with millions of artifacts during the limited visiting hours? ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-thumbnail.png',
      title: 'thesis thumbnail',
      alt: 'XIANGRUI – Auspicious Symbols in the Palace Museum',
      caption: ''
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '71',
    student_name: 'Pan Pan',
    student_slug: 'pan-pan',
    advisor_id: '124',
    project_title: 'active.ly',
    project_question: "There is no one like your child. Every child's development is unique and complex. Although children develop through a generally predictable sequence of steps and milestones, they don’t necessarily proceed through these steps in the same way or at the same time. Play is essential to development because it contributes to the cognitive, physical, social, and emotional well-being of children and youth. Play also offers an ideal opportunity for parents to engage more fully with their children. Unfortunately, given the hectic pace and over-scheduling of life today, time for free play has been markedly reduced in recent years despite the benefits derived from play for both children and parents.\r\nMore and more kids are glued to their phones or tablets for endless hours every day. Even those children who are fortunate enough to have abundant available resources and who live in relative peace may not be receiving the full benefits of offline play. Parents are not only worried about all the time their children are spending with technology, but they are also worried about the lack of time they are spending with them. Active.ly is an app designed to help parents turn the time they have with their children into more memorable moments that maximize the benefits of play offline.\r\n",
    topics: [{
      name: 'UX\\UI',
      slug: 'uxui'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '109',
    student_name: 'Ran Tian',
    student_slug: 'ran-tian',
    advisor_id: '131',
    project_title: 'Heart Health',
    project_question: 'Unlike some disease that can be instantly felt by the patient or can be life threatening, cardiovascular disease is a silent killer. One third of patients after a cardiac event are not adherent to their medication irrespective of the cardiac medication prescribed, which is a major high growth situation in the US and globally. Patient adherence to medication is crucial for risk reduction following a cardiac event. Cardiac rehabilitation is complex and the workflow consists of 5 phases: patient ID, referral management, enrollment, patient rehabilitation, and maintenance. My thesis is focusing on patient rehabilitation and maintenance.\r\n\r\nThe primary reasons that cause non-adherence after a cardiac event are no symptoms, not filling the prescription, complexity, forgetting, cost and side effects. To address these problems, I’m creating a visually rich AR experience that will improve medication adherence, patient engagement, and create a better relationship between the patients and their heart anatomy to help them think about medication and rehab differently. Targeting the elderly, but highly applicable for youth as well, this AR app has three primary features: medication education via AR animated heart modules; integrated apple watch with realtime heart rate data; fun, emotional, and engaging gamified notifications for medication management. By turning the burdensome rehab trajectory into an experience of a beautiful garden inside the room, the process becomes more like meditation rather than work.',
    topics: [{
      name: 'Health',
      slug: 'health'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '16',
    student_name: 'Richard Lapham',
    student_slug: 'richard-lapham',
    advisor_id: '114',
    project_title: 'Customizing Reality Through Immersive Painting',
    project_question: 'How would you customize your reality? In a world where mixed reality eyewear is integrated into our lives, how would you augment the space around you and why would you want to? \r\n\r\nWith many possible applications of mixed reality, my research focuses on one: immersive digital painting. I’m most interested in the creative potential of mixed reality and with the release of immersive painting softwares, like Tilt Brush and Quill, I explored some of the possibilities offered by this new medium through a series of mixed reality experiments. \r\n\r\nMy research began with a technical component as I familiarized myself with developing for mixed reality. In this time I created a workflow allowing me to incorporate digital painting assets (including animated digital paintings) with mixed reality as a mobile application. \r\n\r\nWith this toolkit, I structured the remaining experimentation around three categories: environment, people, and narrative. \r\n\r\nEnvironment\r\nI reimagined Washington Square Park as a procedurally produced impressionist painting (inspired by Van Gogh and Seurat). In addition to experimenting with my own paintings in a space, I ran user testing with several volunteers in VR to see how people would paint and collaborate with each other. \r\n\r\nPeople\r\nInspired by several clothing collections, I created personal animations intended to track and overlay onto a person as a speculative digital accessory and a future form of self expression. \r\n\r\nNarrative\r\nI built a database of illustrative paintings that depict a specific action, character, environment, and many other elements that can be combined to create a story. In a mobile application, users can add these paintings to a mixed reality scene and rearrange them to create their own narrative. I plan to work on this application in the future and create a tool that makes mixed reality more accessible for creators to engage with the medium. ',
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '17',
    student_name: 'Roi Lev',
    student_slug: 'roi-lev',
    advisor_id: '114',
    project_title: 'Inventing America',
    project_question: 'In 1623 the first immigrants came to what is known today as New York city. They were young, ambitious and came to reinvent themselves in America. \r\n\r\nInventing America is a story of a new society, a new city, being told from the point of view of a single person, an immigrant.\r\n\r\nThe project uses augmented and virtual reality technologies to explore the relations between time and space. Using their mobile devices, visitors are immersed in the same space they are physically standing in, the way it was in the past. Inventing America provides an opportunity to experience immigration to a new dimension, to different times, using the city of immigrants as a canvas.\r\n\r\nI believe we are witnessing a revolution in the way we integrate digital content into our lives. Latest technologies take content beyond the screen and provide exciting new ways for us to interact with it. The novel uses of immersive media we can see today in entertainment will eventually evolve to include other aspects of our lives. Inventing America demonstrates the potential of using those technologies to interact with historical data, with our past, in a new vivid and engaging way.\r\n\r\nIn order to realize this project we developed unique solutions and tools. The process involved unique production techniques such as 3D scanning, motion, face capture, custom graphics, branching narrative mechanisms and augmented reality platforms for mapping virtual environments to physical spaces.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail_new2.png',
      title: 'thumbnail',
      alt: '',
      caption: 'thumbnail'
    },
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '52',
    student_name: 'Se Young Kim',
    student_slug: 'se-young-kim',
    advisor_id: '119',
    project_title: 'Memory Capsule',
    project_question: 'MemoryCapsule is a mobile augmented reality app that let users archive their memories in the digital world attached to space. More and more people digitalize their memories, but it’s often disconnected with the real world we’re living in. The memories are heaped up, and users never go back. Think of all those bookmarks we made in the web, countless photos in your phone, and all those things you thought you would come back again. \r\nMemory is a visual thing, and it is strongly connected with the concept of space. Spatial memory is well known for a method to efficiently recall information too(“The method of loci”) \r\nI wanted to explore the relationship between memory and space, and literally attach the memory to the actual place and even recall them. \r\n\r\nMemoryCapsule will use AR to connect the memory with the real world. AR uses the actual environment for the background, and the users will use device’s screen to see through the digital space of memory. Users will keep their moments in photo, text and sound format. They will not only anchor to the 3D digital space but also attached to GPS data. After the user leaves a mark, they will set a certain amount of time for how long you want to “bury” the memory in that place. After the time has passed, the memory will be visible again. Then the users will go find and recall the memory again like they open a time capsule they buried a long time ago. ',
    topics: [{
      name: 'UX\\UI',
      slug: 'uxui'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '88',
    student_name: 'Sean Seunghwan Kim',
    student_slug: 'sean-seunghwan-kim',
    advisor_id: '129',
    project_title: 'Mindfulness Over Matter (MOM)',
    project_question: 'Meditation helps us achieve oneness with the world and removes our distracting desires. Breathing and time is all we need for meditation. After all, Shakyamuni Buddha founded Buddhism and popularized meditation techniques without any high-tech gadgets. However, in the 21st century, more and more people are dependent on digital technologies. For most people, meditation seems like a mysterious and unattainable activity. Mindfulness Over Matter (MOM) is a series of educational technologies that seek to bring meditation to the modern world by making it accessible and entertaining, through unique gadgets and art-installations that inspire and enlighten people to think about mindfulness.\r\n\r\nA brief overview of the technologies I have developed in my search to raise awareness about mindfulness:\r\n\r\n[RAT RACE] \r\nA fun and engaging art installation/ game that is a satire of our hyper-competitive society. The more you relax, the faster your robot moves. \r\n\r\n[WAVR]\r\nAn EEG + VR headset that uses brainwave states to determine the virtual environment. Depending on the state of the user’s mind, their sensory (visuals, sounds, smells, motions) experience changes.\r\n\r\n[Mindfulness in Washington Sq. Park.]\r\nAn EEG + AR Headset experience that simulates human delusions, and how meditation can help reveal true reality. The Washington Sq. Park Fountain can be compared to our minds. At times, the fountain flows full of water. Sometimes, there are musicians or magicians performing in the center. Despite the many different experiences and occurrences in the fountain, it is really only a fountain. Similarly, our minds continuously come up with various thoughts and desires.\r\n\r\nFor this experience, I fill the fountain with various scenarios: water, magma, earthquake, and blizzards (using virtual augmentations). The EEG sensor measures the user’s level of concentration. If the user focuses, the distracting scenery disappears, so that in the end only the fountain is left. The more the user relaxes, the faster he/she can reach the true state of reality.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-4.50.07-PM-1024x595.png',
      title: 'Mindfulness Over Matter',
      alt: 'Mindfulness Over Matter',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '73',
    student_name: 'Swapna Joshi',
    student_slug: 'swapna-joshi',
    advisor_id: '124',
    project_title: 'MoleculAR : interactive chemistry kit',
    project_question: 'Given the rapid rate and growing complexity of scientific breakthroughs, it is increasingly important for children today to be exposed to the basics of science long before plunging into the rigors of high school level classes. I developed a particular interest in pre-high school level chemistry after my mother, who is a middle school chemistry teacher, told me about the difficulties her students were having visualizing basic chemistry concepts on a molecular level.\r\n\r\nMoleculAR, is a middle school chemistry kit that consists of physical cards representing the elements in the periodic table, a paper playground and an augmented reality app. The augmented reality component works like a magic window that converts the paper printed periodic table into other wordly, playful interactions. When the students scan individual element cards with their phones, the AR animations they see introduce them to different chemistry concepts, such as the electronic configuration and reactivity of elements. When two element cards are placed side-by-side on the paper playground, then scanned together, the resulting AR videos explain the formation of compounds and bonds. \r\n\r\nAlthough designed for use in a classroom environment, MoleculAR can also be used as a stand-alone kit for parents to use to introduce chemistry concepts to their children at home.\r\n',
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '35',
    student_name: 'Xinyu Hu',
    student_slug: 'xinyu-hu',
    advisor_id: '123',
    project_title: 'The Act of Receiving',
    project_question: "The Act of Receiving is a series of performance art pieces and digital installations examining what it means to be a receiver of information.\r\n\r\nAct I is an experiment where I give my audience the power to control all my information input.\r\n\r\nThis is a performance piece where I sit in a virtual reality headset, but have no control of what I see. My audience can decide from online to show me any YouTube videos they want. They will be able to see what I am seeing in VR at the moment, and a live stream of my reaction to their content. Once the video is submitted, it's immediately mapped onto the four “walls” in my virtual environment, so I will not be able to look away from any point of view. The videos would keep on playing in loop, until another one is submitted.\r\n\r\nAct II is a broadcast of my real-time interaction with information.\r\n\r\nThis is a performance piece where I live stream my interaction with my phone for 12 hours. The screen of my phone is shared and streamed online, along with a streaming of myself. I interact with my phone the same way I would on any other day (reply messages, check emails, scroll instagram, etc.). \r\n\r\nAct III is an invitation for others to experience my history of receiving information.\r\n\r\nThis is a VR installation where viewers physically stand on a treadmill. As they walk forward, in the virtual environment, they are scrolling through a room-sized, simulated chat window with the entire WeChat conversation history between me and my mother for the past six years, experiencing voice messages, texts, images, videos, etc. fading in and out.",
    topics: [{
      name: 'Performance',
      slug: 'performance'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '112',
    student_name: 'Xitong Xu',
    student_slug: 'xitong-xu',
    advisor_id: '131',
    project_title: 'The Birth of the Self Portrait (1889)',
    project_question: "This project is a tribute to Vincent Van Gogh, and his famous self-portrait oil painting from 1889, by converting the post-impressionist static painting into a dynamic storytelling platform through an AR platform\r\n\r\nWhat's the story and creation process behind this legendary self-portrait? What happened to the artist and his life right before this painting was finished? What’s the environment? The static painting itself it's just the very last frame of this whole story. This platform aims to address this buried yet consequential information within the painting itself amplifying this contextual information through the colors and brush strokes on the final piece.\r\n\r\nVan Gogh went through a lot in 1889, and in his letters to his brother, he wrote about the influence of many things on himself and the continuous impact this had on his psyche and artistic sensibilities all of which greatly influenced his creations.The creation story and the painting are not mutually exclusive, they depend on each other and give each other adde depth, nuance, and impact.\r\n\r\nThis AR project is about expressing the mutually reinforcing relationship between the creation story and the artwork. The existing way for the audience to do that is reading the description labels in the museum next to the painting, the experience is not immersive enough. This platform can shift our perceptions of art, history, storytelling, context, and experience. When you run the AR application on the mobile device and focus the screen onto the Self-Portrait (1889) painting, the audience is going to see the animation of the birth story of this painting. It takes the painting and translates it into real-time virtual animations. Also, the visualization sends the paint daubs of the self-portrait into swirling patterns of motion, the brush strokes will be animated into dynamic flows.\r\n\r\n\r\n",
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '18',
    student_name: 'Younho Lee',
    student_slug: 'younho-lee',
    advisor_id: '114',
    project_title: 'The World of Reverie',
    project_question: 'The World of Reverie is a mobile app that allows users to experience a poetic moment in their familiar places. Users can select a phrase from text corpus related to the places and juxtapose the phrase along with scenery with the capability of Augmented Reality. It will invoke a different emotion about the places that you have never had. The first edition is for myself and those who live in New York City. 18,163 phrases parsed from 451 lyrics inspired by the city are ready for you as a source of inspiration. The whole city will be transformed into poetic space that makes you fall into a reverie. \r\n\r\nIt is also for experimenting with creating and collecting a dataset about places in a different way. Activities of associating a phrase with a particular place eventually become a process of analyzing and contextualizing the raw data(text corpus). While users take a journey with using the app, they can naturally transform the text corpus into reinterpreted, personalized data. Finally, users can have a collection of their own poetic experiences about places.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }],
  'Installation': [{
    student_id: '78',
    student_name: 'Ariana Vassilopoulou',
    student_slug: 'ariana-vassilopoulou',
    advisor_id: '129',
    project_title: 'A Fresh view',
    project_question: 'Cyprus is a divided island separated by what is known as a political “Green Line”. Its formal name is the United Nations Buffer Zone, which is a demilitarized area patrolled by the United Nations Peacekeeping Force in Cyprus (UNFICYP). It’s been this way since the Turkish Invasion of Cyprus of 1974. The Northern side of the island is the Turkish Republic of Northern Cyprus, and the Southern side is the Republic of Cyprus -the Greek side - where I am from. While the separation isn’t as absolute as North and South Korea--for example, I can cross the border -- each side is run like a totally different country. ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/photo-1024x691.jpg',
      title: 'photo',
      alt: 'A Fresh View',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Installation',
      slug: 'installation'
    }]
  }, {
    student_id: '9',
    student_name: 'Jina Jung',
    student_slug: 'jina-jung',
    advisor_id: '114',
    project_title: 'Intangible Canvas',
    project_question: 'Fragmentary Landscape is an experiment with the realm between new technology and traditional materials, combining both genres of work. Paralleling the way rays of light are untouchable in the physical world, this project focuses on the relationship between real and imaginary figures in an immersive natural environment. My real life paintings of nature are converted into a virtual space so people can experience my paintings in VR. \r\n\r\nFurthermore, this project also focuses on questions of how the artist applied VR with traditional paintings or drawings as well as how their observation changes depending on the medium. It aims to create landscapes with different dimensions(2D&amp;3D) which are situated on real and virtual canvases. Based on my artistic approach, and experiences with nature, I could explore new perspectives while creating landscapes and characteristics of elements and landscapes in a virtual environment.\r\n\r\nThe project consists of 3 methods – Drawings, titled ‘Fragments - Intangible Objects’, Paintings, titled ‘Fragmentary forest’, and VR, titled ’Beyond forest’. Handling these three different forms provides audiences the chance to fully immerse themselves and engage completely in the world that the artist has visualized. \t',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumbnail.jpg',
      title: 'Thumbnail',
      alt: 'Jina001',
      caption: ''
    },
    topics: [{
      name: 'Installation',
      slug: 'installation'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '27',
    student_name: 'Jingfei Lin',
    student_slug: 'jingfei-lin',
    advisor_id: '123',
    project_title: 'Runway in store',
    project_question: 'The retail industry is undergoing a major transformation as e-commerce disrupts traditional brick-and-mortar store models and gives rise to new modes of “experiential retail.” By creating a more immersive retail experience, retailers can drive people towards their stores and ensure they leave not just with your products but also memories. Runway in store explores how technology can enhance the retail experience, and especially adopts Augmented Reality to provide shoppers the experiences that engage, inform and entertain. \r\n\r\nRunway in store is a physical playground that encourages customers in the retail store to move around and interact with the augmented visuals that are projected on the wall or an LED screen, where a Kinect v2 is used to capture the real-time the human image and drive a real-time movement of a 3D character in Unity. By choosing Nike as the brand, the AR installation tracks human motions with multiplayer features and metaphorical explorations of the augmented 3D visuals.\r\n\r\nCustomers then could save and share the looks to social media, so that the brand can employ social media as a means of reaching out and connecting with potential customers.',
    topics: [{
      name: 'Installation',
      slug: 'installation'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '13',
    student_name: 'Katherine A Takacs',
    student_slug: 'katherine-a-takacs',
    advisor_id: '114',
    project_title: 'AWall',
    project_question: "I am going to build a wall using modules that are L-shaped. Those blocks are strategically stacked to look solid. The back of the blocks will be lined with neo-pixels. As people approach the wall, the lights will move and light is. They will become brighter in an exponential growth - so that the light permeates the wall, and shows it to be an illusion more than anything else. To borrow Richard Serra's words, I am showing how the viewer can become the subject of their own experience in a way that allows you to connect more readily to the world around you.",
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/TakacsThumbnail.jpg',
      title: 'TakacsThumbnail',
      alt: 'Thumbnail',
      caption: 'Takacs'
    },
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'Installation',
      slug: 'installation'
    }]
  }, {
    student_id: '86',
    student_name: 'Nanou Dimachki',
    student_slug: 'nanou-dimachki',
    advisor_id: '129',
    project_title: 'Intimate Patterns.',
    project_question: '"Intimate Patterns" is a series of physical expressions that emerged from the intimate digital conversations between two people. \r\n\r\nThe relationship between the pair is translated into two/three physical installations. \r\n\r\nTexts become a metaphor, becomes tangible in concrete form.\r\n\r\nHow?\r\nI thought of ordinary objects from daily life because physicality is exactly what we miss in digital interactions. Hence the two installations: two light bulbs and two wine glasses.\r\n\r\nRelationships, like the bulbs sometimes go on and off or dim and die... The tangible aspect of bulbs, their accessibility and presence everywhere in every room made me think about how we tend to take them for granted. We can put a bulb on and off when we want to… However, do we have that choice in relationships with people? Is it always our call? Are we ever conscious of the pattern we make with them? Maybe. Who knows? Regardless bulbs are only here to show us in a very simplified and poetic way these digital interactions.\r\nThey go “on” and “off” like the interaction of the texting between those people. On, when received; off, in the absence of it. The lights intensify and dim when the interaction is vivid or dull. The bulbs change colors when the words exchanged are positive or negative, etc.\r\n\r\nThe installation of the two wine glasses come in pairs too, to exchange liquid (the wine) just like the exchange of messages, to reflect the pattern of sending and receiving. The full glass is a metaphor for the emotional fulfillment someone make us feel, when we receive a text. And an empty one is the lack of it or when we are in return filling somebody’s cup. \r\n',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Installation',
      slug: 'installation'
    }]
  }],
  'Data': [{
    student_id: '96',
    student_name: 'Chetan Hasabnis',
    student_slug: 'chetan-hasabnis',
    advisor_id: '131',
    project_title: 'Building Emergency Intelligence',
    project_question: 'I am part of an NGEMS team developing next generation emergency systems that delivers real-time situational information of people, location and occupancy in buildings to help assist rescue personnel mitigate emergency situations. It provides concise information at the most crucial time to help operators at dispatch centers allocate resources effectively and aid incident commanders en-route to the rescue site with life saving information even before they arrive on scene.\r\n\r\n100+ customer interviews were conducted and two facts were discovered – 1. Operational difficulty and limited site information are the biggest challenge for fire fighters 2. The rescue teams literally go in blind. There is a 15 minute window of crucial time lost from the time the initial call received dispatch centers and until the first responders arrive on the incident site to execute evacuation procedures. I plan maximize rescue operations by providing context relevant information during this brief time by developing real-time emergency system that collects data from IoT sensors installed in buildings.\r\n\r\nFor the thesis I am building a prototype of a browser based application that contains a collection of digital 2d floor maps for the NYU Tisch building at 721 Broadway, visualizing smoke and temperature levels of Wifi enabled smoke detectors installed at ITP on the 4th floor over a mesh network integrated with our NGEMS platform.\r\n\r\nMy efforts are directed toward making it accessible to the first responder community as well as integration with third party CAD provides and incident management application over public safety mesh network.\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-1-01.png',
      title: 'Building Emergency Intelligence',
      alt: 'Building Emergency Intelligence',
      caption: 'Building Emergency Intelligence'
    },
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '99',
    student_name: 'Jasmine A Soltani',
    student_slug: 'jasmine-a-soltani',
    advisor_id: '131',
    project_title: 'Manifest Energy',
    project_question: 'The lifecycle of a product includes the mining and processing of natural resources, manufacturing, transport, product delivery, use, and its reuse, recycling or disposal. Embodied energy is the energy consumed by all of the processes associated with production: the life-cycle up until the use phase. Manifest Energy is a series of lenticular stickers, a mechanical animation, and website that illustrate the life-cycle and embodied energy of digital devices. \r\n\r\nElectronics are unique in that they have exceedingly high embodied energy, exacerbated by planned obsolescence, their difficulty to repair, lack of supply chain accountability, and the increasing ubiquity of computing. The energy economy, on which the ecologically destructive digital economy is based, is unsustainable in itself. Can illuminating the resource demand of our digital devices change our consumption habits, our relationship with our devices, the way we design and legislate their use, and handle end-of-life?\r\n\r\nIn addition to shifting the paradigm by which we think about energy consumption, I hope my project informs people of actions that can be taken. By extending the lives of our products through repair, we can reduce demand for new items. By developing more modular electronics, we can make these devices easier to repair. By putting pressure on companies and legislators, we can achieve greater supply chain transparency and improve the health of people working on or near production sites. By developing renewable energy sources and eliminating carbon emissions, we can mitigate the ecological impact of the production of digital technologies.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '28',
    student_name: 'Marco Guarino',
    student_slug: 'marco-guarino',
    advisor_id: '123',
    project_title: 'Genealogy of a Rhythm',
    project_question: ' ‘Genealogy of a Rhythm’ tells the ethnomusicological story of Candombe (Afro- Uruguayan music and dance) using modern tools such as 360 cameras and motion capturing. In virtual reality, I give the viewer a glimpse into some of the lives of the people that take part in Candombe, presented as a non-linear narrative. The motion capturing portion of the project documents the bodies of the drummers, (and in the future, of the dancers) to collect data of body movements and create anthropological data sets of these movements. Future work would include a Music Information Retrieval approach to dissecting the rhythmic patterns of Candombe, as well as other prominent Afro-Latin rhythms. This information can then be presented as a family tree of rhythmic patterns, depending on similarities and differences between rhythms. This is an expression of advocacy for a musical form as well as a proposal to document cultural information with the modern tools of our time.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/4.jpg',
      title: '4',
      alt: 'Genealogy of a Rhythm',
      caption: 'Genealogy of a Rhythm'
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Data',
      slug: 'data'
    }]
  }, {
    student_id: '105',
    student_name: 'Maxwell Nakamura',
    student_slug: 'maxwell-nakamura',
    advisor_id: '131',
    project_title: 'The Plaza Project: Mapping US public opinion across space, time, and identity.',
    project_question: 'Good citizenship and effective civic engagement relies first on a firm and accurate understanding of one’s society. And so The Plaza Project‘s mission is to measure and visualize the public opinions, attitudes, and values that make up the nation’s social fabric and drives political policy.\r\nThe project’s online platform stores a growing repository of active polls which visitors respond to. The questions on which the polls are based are taken from the news, political surveys, local ballots, personality quizzes, dating websites, psychology tests, morality tests, and canonical philosophy. Questions can also come directly from the users themselves. Responses are visualized across geography, time, and population segments so that the public may see how opinions change from one year to another, across the country’s fifty states, and between American identities, age groups, and political affiliations.\r\nThe open network democratizes public opinion polling, which until now has been conducted by small yet influential organizations like the Pew Research Center, Gallup, and national news organizations, and gives everyday people a forum to ask important questions to the public at large.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '86',
    student_name: 'Nanou Dimachki',
    student_slug: 'nanou-dimachki',
    advisor_id: '129',
    project_title: 'Intimate Patterns.',
    project_question: '"Intimate Patterns" is a series of physical expressions that emerged from the intimate digital conversations between two people. \r\n\r\nThe relationship between the pair is translated into two/three physical installations. \r\n\r\nTexts become a metaphor, becomes tangible in concrete form.\r\n\r\nHow?\r\nI thought of ordinary objects from daily life because physicality is exactly what we miss in digital interactions. Hence the two installations: two light bulbs and two wine glasses.\r\n\r\nRelationships, like the bulbs sometimes go on and off or dim and die... The tangible aspect of bulbs, their accessibility and presence everywhere in every room made me think about how we tend to take them for granted. We can put a bulb on and off when we want to… However, do we have that choice in relationships with people? Is it always our call? Are we ever conscious of the pattern we make with them? Maybe. Who knows? Regardless bulbs are only here to show us in a very simplified and poetic way these digital interactions.\r\nThey go “on” and “off” like the interaction of the texting between those people. On, when received; off, in the absence of it. The lights intensify and dim when the interaction is vivid or dull. The bulbs change colors when the words exchanged are positive or negative, etc.\r\n\r\nThe installation of the two wine glasses come in pairs too, to exchange liquid (the wine) just like the exchange of messages, to reflect the pattern of sending and receiving. The full glass is a metaphor for the emotional fulfillment someone make us feel, when we receive a text. And an empty one is the lack of it or when we are in return filling somebody’s cup. \r\n',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Installation',
      slug: 'installation'
    }]
  }, {
    student_id: '68',
    student_name: 'Nouf Aljowaysir',
    student_slug: 'nouf-aljowaysir',
    advisor_id: '124',
    project_title: 'Nouf.io',
    project_question: 'What information is collected about me online? Can I recreate another version of myself based on who this data describes?\r\n \r\nNouf.io seeks to answer these two questions. I extract, scrape, and collect different archives of my digital information in order to understand who I am online. On a personal level, Nouf.io is a self-reflective character whose actions and behaviors visualize my digital persona.\r\n \r\nOn a broader level, she is a character representative of my data and its categorization and labeling of who I am. After looking through large amounts of my information, I noted many inaccuracies to how I was being portrayed such as “Nouf’s hobbies include acting and playing the harp”. Hence, I wanted to paint a picture to how algorithms categorize us based on interactions we have had online.\r\n \r\nServing as both a self-reflective piece and a commentary, I want users to interact with Nouf.io in order to push the boundaries of privacy and accessibility to my information. Depending on the identity of the user and the amount of interactions we have had via text and Facebook, Nouf.io discloses private information based on our level of digital intimacy. In the same manner that data is passed around online between Facebook and Google, what if I just handed it out and made it available to you? What does it feel like to get to know me if you have never met me? Does her honesty and raw information make you feel uncomfortable? To gain more information from Nouf.io, users are told to interact with me more online to achieve a higher level of accessibility to my data.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Identity',
      slug: 'identity'
    }]
  }, {
    student_id: '108',
    student_name: 'Rita Cheng',
    student_slug: 'rita-cheng',
    advisor_id: '131',
    project_title: 'The Personal Panopticon',
    project_question: 'How are Internet of Things devices like the Fitbit aiding in our collective exploitation and surveillance? What is the future of these caretaking devices? Most importantly: how do I get a piece of this action?\r\n\r\nThe Personal Panopticon is a multimedia project exploring the Internet of Things (IoT), surveillance culture, and the aesthetics of wellness and self-help. The project is a critical look at internet-enabled care devices (e.g. the Fitbit, smart scales, Apple Health) and the politics of their usage. Using them produces metrics to try and improve your well-being, but also is an implicit agreement to data surveillance and continuous monitoring.\r\n\r\nThe project consists of an IoT hub called Karma. Karma will take care of and manage your life, as a vision of the dystopia in which surveillance and monitoring is taken to extremes. Karma will collect information from other devices and will nag you to meet your goals and stay connected. When you are in range, she will talk to you and care for you in person. When you are away, she will call you and remind you of your obligations. You cannot opt out of Karma-- she is connected to your phone, email, and social media, so connecting to any network necessitates connecting to Karma.\r\n\r\nThe project also includes marketing such as the <a href="http://www.karma.care">landing website found here</a> and the Indiegogo campaign. A trade show setup was designed for the quick and dirty show. In this way, I examine how technology companies sell IoT devices and look at the aesthetics of surveillance, gadgets, and wellness.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/render.png',
      title: 'karma',
      alt: 'karma',
      caption: ''
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Data',
      slug: 'data'
    }]
  }, {
    student_id: '87',
    student_name: 'Sharif Al-hadidi',
    student_slug: 'sharif-al-hadidi',
    advisor_id: '129',
    project_title: 'Odyssey',
    project_question: 'Odyssey is a set of features of a proposed larger application suite meant to assist authors, writers, journalists, and students write and organize all their research in one location. This version of the application focuses solely on audio/video transcription. Odyssey seeks to fill a gap within the market for writing tools, as well as improving the experience and helping users save time through automation. I developed a tool to accurately and quickly transcribe multimedia files using two APIs: IBM Watson and Google Speech. Users are provided time stamped and color coded transcripts in order to easy find and correct inevitable mistakes. A user can click on a word within the transcript to start playing the specific audio/video file from that point. This serves two purposes: to retrieve correction recommendations for edits as well as allowing for users to resume a file from a specific location within the file. ',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '18',
    student_name: 'Younho Lee',
    student_slug: 'younho-lee',
    advisor_id: '114',
    project_title: 'The World of Reverie',
    project_question: 'The World of Reverie is a mobile app that allows users to experience a poetic moment in their familiar places. Users can select a phrase from text corpus related to the places and juxtapose the phrase along with scenery with the capability of Augmented Reality. It will invoke a different emotion about the places that you have never had. The first edition is for myself and those who live in New York City. 18,163 phrases parsed from 451 lyrics inspired by the city are ready for you as a source of inspiration. The whole city will be transformed into poetic space that makes you fall into a reverie. \r\n\r\nIt is also for experimenting with creating and collecting a dataset about places in a different way. Activities of associating a phrase with a particular place eventually become a process of analyzing and contextualizing the raw data(text corpus). While users take a journey with using the app, they can naturally transform the text corpus into reinterpreted, personalized data. Finally, users can have a collection of their own poetic experiences about places.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }],
  'Society': [{
    student_id: '96',
    student_name: 'Chetan Hasabnis',
    student_slug: 'chetan-hasabnis',
    advisor_id: '131',
    project_title: 'Building Emergency Intelligence',
    project_question: 'I am part of an NGEMS team developing next generation emergency systems that delivers real-time situational information of people, location and occupancy in buildings to help assist rescue personnel mitigate emergency situations. It provides concise information at the most crucial time to help operators at dispatch centers allocate resources effectively and aid incident commanders en-route to the rescue site with life saving information even before they arrive on scene.\r\n\r\n100+ customer interviews were conducted and two facts were discovered – 1. Operational difficulty and limited site information are the biggest challenge for fire fighters 2. The rescue teams literally go in blind. There is a 15 minute window of crucial time lost from the time the initial call received dispatch centers and until the first responders arrive on the incident site to execute evacuation procedures. I plan maximize rescue operations by providing context relevant information during this brief time by developing real-time emergency system that collects data from IoT sensors installed in buildings.\r\n\r\nFor the thesis I am building a prototype of a browser based application that contains a collection of digital 2d floor maps for the NYU Tisch building at 721 Broadway, visualizing smoke and temperature levels of Wifi enabled smoke detectors installed at ITP on the 4th floor over a mesh network integrated with our NGEMS platform.\r\n\r\nMy efforts are directed toward making it accessible to the first responder community as well as integration with third party CAD provides and incident management application over public safety mesh network.\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Untitled-1-01.png',
      title: 'Building Emergency Intelligence',
      alt: 'Building Emergency Intelligence',
      caption: 'Building Emergency Intelligence'
    },
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '99',
    student_name: 'Jasmine A Soltani',
    student_slug: 'jasmine-a-soltani',
    advisor_id: '131',
    project_title: 'Manifest Energy',
    project_question: 'The lifecycle of a product includes the mining and processing of natural resources, manufacturing, transport, product delivery, use, and its reuse, recycling or disposal. Embodied energy is the energy consumed by all of the processes associated with production: the life-cycle up until the use phase. Manifest Energy is a series of lenticular stickers, a mechanical animation, and website that illustrate the life-cycle and embodied energy of digital devices. \r\n\r\nElectronics are unique in that they have exceedingly high embodied energy, exacerbated by planned obsolescence, their difficulty to repair, lack of supply chain accountability, and the increasing ubiquity of computing. The energy economy, on which the ecologically destructive digital economy is based, is unsustainable in itself. Can illuminating the resource demand of our digital devices change our consumption habits, our relationship with our devices, the way we design and legislate their use, and handle end-of-life?\r\n\r\nIn addition to shifting the paradigm by which we think about energy consumption, I hope my project informs people of actions that can be taken. By extending the lives of our products through repair, we can reduce demand for new items. By developing more modular electronics, we can make these devices easier to repair. By putting pressure on companies and legislators, we can achieve greater supply chain transparency and improve the health of people working on or near production sites. By developing renewable energy sources and eliminating carbon emissions, we can mitigate the ecological impact of the production of digital technologies.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '101',
    student_name: 'Jeffrey Park',
    student_slug: 'jeffrey-park',
    advisor_id: '131',
    project_title: 'Responsibly.me',
    project_question: 'Responsibly.me is a web platform for consumers to make more socially responsible purchasing decisions. Responsibly.me aggregates existing rankings on a company’s Corporate Social Responsibility initiatives and recommends similar products from brands with higher grades. Responsibly.me also provides a dashboard for users to understand their social responsibility values and purchasing habits in order to encourage them to shop more consciously.\r\n\r\nIn this current climate where we face a growing number of wicked problems, both the public and private sector need to do more to create a better world for all of us. According to the 2017 Cone Communications CSR study, 63% of Americans are hopeful businesses will take the lead to drive social and environmental change moving forward. This number increases to 71% for millennials and younger generations. However, only 39% of consumers “researched a company’s business practices or support of social and environmental issues” (2017 Cone Communications CSR study). The majority of users simply are not aware of the efforts corporations take to tackle these social issues and make their businesses more socially responsible.\r\n\r\nResponsibly.me aims to make these efforts more transparent and easier to access for regular consumers. I have collected data on 50 of the top 100 brands according to Forbes and have built a web extension in which users can learn about a brand’s social responsibility rankings. I have also created design wireframes for product recommendations and the user dashboard to get an idea of where I hope to take this project.',
    topics: [{
      name: 'Society',
      slug: 'society'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '10',
    student_name: 'Jenny Lim',
    student_slug: 'jenny-lim',
    advisor_id: '114',
    project_title: 'Awkward Thanksgiving',
    project_question: 'I’ve recently noticed myself censoring my speech out of fear: fear of seeming ignorant, bigoted or worse. While I think it’s important to watch one’s words out of sensitivity and respect for others, I believe that self-censorship due to fear hinders discourse. For my thesis, I wanted to make a game that creates a safe space for people to discuss politics. \r\nIn Awkward Thanksgiving, players begin by adopting an ideology: libertarian, progressive, socialist, etc. This is the ideology that they must represent throughout the game. Some players choose ideologies because it’s fun to pretend to be on the other side. Others choose ideologies because it gives them the freedom to express opinions that their friends may not share.\r\nThe mechanics of the game force players to think beyond their initial stereotypes of their ideologies. Players must use Argument cards when they discuss a topic, and often players will find themselves with Argument cards that do not perfectly align with the “party line.” According to one player, “It’s fun to puzzle out, ‘How am I going to use this card?’ Making arguments that buck stereotype is really nice.”\r\nThe trickiest part of making a “serious” game is making it fun. It doesn’t matter how important a game’s mission is; if it’s not fun, no one will play it. Awkward Thanksgiving provides two kinds of fun: the relief of saying the unsayable, and the joy of improvising family history. During one playtest, two friends playing a divorced couple began bickering over a stolen lawnmower. The exchange provided some relief to a fairly serious discussion on Universal Basic Income.\r\nAwkward Thanksgiving has gone through 6 distinct iterations since mid-February. I’ve run over 12 playtests, with 4-8 players each time. The game is both fun and thought-provoking. I will continue to develop it after graduation.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Lim_thumbnail.png',
      title: 'Lim_thumbnail',
      alt: 'AwkwardThanksgiving',
      caption: ''
    },
    topics: [{
      name: 'Play',
      slug: 'play'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '82',
    student_name: 'Jose Manuel Vega Cebrian',
    student_slug: 'jose-manuel-vega-cebrian',
    advisor_id: '129',
    project_title: 'everything must go ( … )',
    project_question: "<i>everything must go ( … )</i> is an immersive experience that happens in a dark room and lasts around one hour. the panel members - silence, pre-recorded laughter, and cyborg in existential anxiety - have their spots indicated onstage by dim lights. only the third participant has a human shape. during the discussion, the moderator performs chance operations live to decide how the interventions should develop. in the first part the conversation is reserved for the three participants and the moderator's random remarks; for the second part the audience is repeatedly invited to contribute with questions.\r\n\r\na companion booklet is provided for consultation as a logocentric aid, for those who prefer words as a source of meaning. this booklet contains a comprehensive collection of the scripts, ideas, attempted descriptions of the work, and other fragments of text surrounding the genesis of the experience.\r\n\r\nthe creation process started with me being overwhelmed by the climate breakdown and other contemporary crises verging on total collapse(s). it took its short title, <i>everything must go</i>, from a <a href=\"http://www.monbiot.com/2017/11/24/everything-must-go/\">column of the journalist and environmentalist george monbiot</a>.\r\n\r\nin my research i tried to trace back in ideologies and worldviews the origins of \"the problem\", also exploring the difficulties of letting go of the life i take for granted. the process became an acknowledgement of the complexities and contradictions that exist when trying to confront these deep issues. this situation led me to a renewed way of looking at the world, and it also made me decide to extend the title of the work. \r\n\r\nimportant references during the process were the works of john cage, the theater of the absurd, existentialism, and posthuman philosophy. the research also included dipping into readings about zen buddhism, the tao, and the limitations of western thought.\r\n\r\nthe project is a free cultural work, and it was entirely built with free (libre) software.",
    topics: [{
      name: 'Performance',
      slug: 'performance'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '105',
    student_name: 'Maxwell Nakamura',
    student_slug: 'maxwell-nakamura',
    advisor_id: '131',
    project_title: 'The Plaza Project: Mapping US public opinion across space, time, and identity.',
    project_question: 'Good citizenship and effective civic engagement relies first on a firm and accurate understanding of one’s society. And so The Plaza Project‘s mission is to measure and visualize the public opinions, attitudes, and values that make up the nation’s social fabric and drives political policy.\r\nThe project’s online platform stores a growing repository of active polls which visitors respond to. The questions on which the polls are based are taken from the news, political surveys, local ballots, personality quizzes, dating websites, psychology tests, morality tests, and canonical philosophy. Questions can also come directly from the users themselves. Responses are visualized across geography, time, and population segments so that the public may see how opinions change from one year to another, across the country’s fifty states, and between American identities, age groups, and political affiliations.\r\nThe open network democratizes public opinion polling, which until now has been conducted by small yet influential organizations like the Pew Research Center, Gallup, and national news organizations, and gives everyday people a forum to ask important questions to the public at large.',
    topics: [{
      name: 'Data',
      slug: 'data'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }],
  'Performance': [{
    student_id: '22',
    student_name: 'Christina Hall',
    student_slug: 'christina-hall',
    advisor_id: '123',
    project_title: 'The Masks I Wear',
    project_question: 'The Masks I Wear is a solo live performance, alternative documentary that explores the harassment experienced by women in industry. The artist has collected personal stories from four women who have experienced harassment in a professional environment and then “wears” projected motion controlled digital masks to portray the collected stories. Each performance sits only four audience members, each paired with a narrative from a different woman. Through the physical interaction of pushing a button, audience members will be able to influence how much of the narrative is told. This interaction will challenge the audience, putting them in a position of power and control, deciding how much of the emotional story to experience. \r\n\r\nThe artist sits on a rotating stool with the audience surrounding her in a circle. An element of privacy is added by dividing the space between each audience member, allowing them to feel comfortable with varying degrees of interaction during the performance. \r\n\r\nThe artist will be using a combination of facial tracking software and projection mapping to portray the sketched face of the woman that have gone through the harassment or assault.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/HallC_TMIW_thumbnail320x240.jpg',
      title: 'HallC_TMIW_thumbnail320x240',
      alt: 'tmiw',
      caption: ''
    },
    topics: [{
      name: 'Narrative',
      slug: 'narrative'
    }, {
      name: 'Performance',
      slug: 'performance'
    }]
  }, {
    student_id: '82',
    student_name: 'Jose Manuel Vega Cebrian',
    student_slug: 'jose-manuel-vega-cebrian',
    advisor_id: '129',
    project_title: 'everything must go ( … )',
    project_question: "<i>everything must go ( … )</i> is an immersive experience that happens in a dark room and lasts around one hour. the panel members - silence, pre-recorded laughter, and cyborg in existential anxiety - have their spots indicated onstage by dim lights. only the third participant has a human shape. during the discussion, the moderator performs chance operations live to decide how the interventions should develop. in the first part the conversation is reserved for the three participants and the moderator's random remarks; for the second part the audience is repeatedly invited to contribute with questions.\r\n\r\na companion booklet is provided for consultation as a logocentric aid, for those who prefer words as a source of meaning. this booklet contains a comprehensive collection of the scripts, ideas, attempted descriptions of the work, and other fragments of text surrounding the genesis of the experience.\r\n\r\nthe creation process started with me being overwhelmed by the climate breakdown and other contemporary crises verging on total collapse(s). it took its short title, <i>everything must go</i>, from a <a href=\"http://www.monbiot.com/2017/11/24/everything-must-go/\">column of the journalist and environmentalist george monbiot</a>.\r\n\r\nin my research i tried to trace back in ideologies and worldviews the origins of \"the problem\", also exploring the difficulties of letting go of the life i take for granted. the process became an acknowledgement of the complexities and contradictions that exist when trying to confront these deep issues. this situation led me to a renewed way of looking at the world, and it also made me decide to extend the title of the work. \r\n\r\nimportant references during the process were the works of john cage, the theater of the absurd, existentialism, and posthuman philosophy. the research also included dipping into readings about zen buddhism, the tao, and the limitations of western thought.\r\n\r\nthe project is a free cultural work, and it was entirely built with free (libre) software.",
    topics: [{
      name: 'Performance',
      slug: 'performance'
    }, {
      name: 'Society',
      slug: 'society'
    }]
  }, {
    student_id: '89',
    student_name: 'Stephanie Koltun',
    student_slug: 'stephanie-koltun',
    advisor_id: '129',
    project_title: 'How Thrilling',
    project_question: 'As an installation, "How Thrilling" explores these three themes by creating different relationships across contexts. A context is composed of bodies and technology, which together establish an expectation for people to behave and perform. Central in all scenes of the installation is the performance (and identification) of the body — whether that be as dancing, watching, or both. How do contexts come together to give meaning to each other? How do we perform differently in different contexts? How is expectation for performance established and understood in a context?\r\n\r\nFrom the earliest artworks to the printed book to streaming video, technology has extended one’s capacity to represent oneself. But technology also extends one’s capacity to identify ourselves and others. Through computer vision and machine learning, this capacity to identify is extended to technology—independently of a contingent and changing psyche, or as an extension of the psyche who made it.\r\n\r\nContext as the situation of and relationships between, technology and bodies in space. Context establishes an expectation for performance, from which bodies are identified. A public restroom, a library, and a sports field are all examples of where a combination of signs, objects, uniforms, and spatial arrangements, are used to identify and enforce an expectation of a particular performance.\r\n\r\nContingency of the body-psyche can mean choosing to participate, where an example might be rejecting a gendered discourse through drag as discussed by Judith Butler. But there’s also contingency in the material condition of the body. Bodies come in all shapes, sizes, and capacities. Because of this contingency, our bodies may or may not be identified by the expected standards of a technology. \r\n',
    topics: [{
      name: 'Performance',
      slug: 'performance'
    }, {
      name: 'Play',
      slug: 'play'
    }]
  }, {
    student_id: '35',
    student_name: 'Xinyu Hu',
    student_slug: 'xinyu-hu',
    advisor_id: '123',
    project_title: 'The Act of Receiving',
    project_question: "The Act of Receiving is a series of performance art pieces and digital installations examining what it means to be a receiver of information.\r\n\r\nAct I is an experiment where I give my audience the power to control all my information input.\r\n\r\nThis is a performance piece where I sit in a virtual reality headset, but have no control of what I see. My audience can decide from online to show me any YouTube videos they want. They will be able to see what I am seeing in VR at the moment, and a live stream of my reaction to their content. Once the video is submitted, it's immediately mapped onto the four “walls” in my virtual environment, so I will not be able to look away from any point of view. The videos would keep on playing in loop, until another one is submitted.\r\n\r\nAct II is a broadcast of my real-time interaction with information.\r\n\r\nThis is a performance piece where I live stream my interaction with my phone for 12 hours. The screen of my phone is shared and streamed online, along with a streaming of myself. I interact with my phone the same way I would on any other day (reply messages, check emails, scroll instagram, etc.). \r\n\r\nAct III is an invitation for others to experience my history of receiving information.\r\n\r\nThis is a VR installation where viewers physically stand on a treadmill. As they walk forward, in the virtual environment, they are scrolling through a room-sized, simulated chat window with the entire WeChat conversation history between me and my mother for the past six years, experiencing voice messages, texts, images, videos, etc. fading in and out.",
    topics: [{
      name: 'Performance',
      slug: 'performance'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }],
  'Machine Learning': [{
    student_id: '59',
    student_name: 'Cristobal Valenzuela',
    student_slug: 'cristobal-valenzuela',
    advisor_id: '124',
    project_title: 'Runway',
    project_question: 'Runway’s main goal is to make the process of running and using a state of the art machine learning model as easy as possible. If models are the building blocks of machine learning, how can we create more accessible tools to access them? This project is not about creating the right training environment to deploy It is not about training an algorithm and it’s not about hyper-parameters or hard code data science. It is a project built around the simple idea of making pre-trained models accessible.',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thumbnail.jpg',
      title: 'thumbnail',
      alt: 'runway',
      caption: ''
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '25',
    student_name: 'Dror Dov Ayalon',
    student_slug: 'dror-dov-ayalon',
    advisor_id: '123',
    project_title: 'Soundscape: A Tool for music makers',
    project_question: '',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/card-copy-1.png',
      title: 'Soundscape',
      alt: 'Soundscape',
      caption: 'Soundscape'
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'Sound',
      slug: 'sound'
    }]
  }, {
    student_id: '11',
    student_name: 'Jixuan Sun',
    student_slug: 'jixuan-sun',
    advisor_id: '114',
    project_title: 'XIANGRUI &#8211; Auspicious Symbols in the Palace Museum',
    project_question: 'With rapidly changing technologies, how can we find a better way to get the most of information, explore hidden context and stories behind museum exhibits, and maximize the experience? How can we connect with millions of artifacts during the limited visiting hours? ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/thesis-thumbnail.png',
      title: 'thesis thumbnail',
      alt: 'XIANGRUI – Auspicious Symbols in the Palace Museum',
      caption: ''
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '64',
    student_name: 'Koji Kanao',
    student_slug: 'koji-kanao',
    advisor_id: '124',
    project_title: 'Mtindo',
    project_question: 'What kinds of practical style transfer applications can be developed for non-technical people, such as creative professionals, that are easy to use, efficient, and push beyond the limits of what is currently possible with existing graphics tools? People think that machine learning requires a Ph.D./CS degree and a background in mathematics and statistics. It all sounds very complicated and difficult. Unfortunately, machine learning isn’t easy to learn, but using applications designed with non-technical people in mind isn’t so hard and can be a lot of fun. Style transfer, which is the technique of recomposing images in the style of other images, is one form of machine learning that has started to be made available online to the general public through simple games. Mtindo is a style transfer application for the desktop that offers non-technical people a unique opportunity to experience machine learning in action that explores some of the practical potentials of style transfer, beyond the game-like applications that are currently available. Mtindo means style in Swahili. ',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/mtindo_journal_thumbnail.png',
      title: 'mtindo_journal_thumbnail',
      alt: 'mtindo',
      caption: ''
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'Tool\\Service',
      slug: 'toolservice'
    }]
  }, {
    student_id: '48',
    student_name: 'Or Fleisher',
    student_slug: 'or-fleisher',
    advisor_id: '119',
    project_title: 'Volume',
    project_question: "Volume is a system that generates 3D models from single view 2D images and video using state-of-the-art Machine Learning research. It is intended to provide a way to reconstruct archival, historical and pre-existing images and video in 3D space. \r\n\r\nBy providing an interface to bridge between machine learning and storytelling practices, Volume enables content creators to easily prototype 3D assets from 2D images and video in Augmented, Virtual and Mixed reality environments. Volume is built as a cloud service, which abstracts all the machine learning processing and provides a simple interface to reconstruct and view your assets. Upon reconstruction, you are able to download and use these assets in popular game engines such as Unity, Unreal or Three.js using the Volume plugin. \r\n\r\nVolume's main audience are content creators. By allowing anyone, with no previous coding background, to easily prototype 3D Volume encourages inclusion in the content creation process.",
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Thumb.png',
      title: 'Volume_Thumbnail',
      alt: 'Volume_Thumbnail',
      caption: ''
    },
    topics: [{
      name: 'Culture',
      slug: 'culture'
    }, {
      name: 'Machine Learning',
      slug: 'machine-learning'
    }]
  }, {
    student_id: '70',
    student_name: 'Patrick Presto',
    student_slug: 'patrick-presto',
    advisor_id: '124',
    project_title: 'Decrypt.Ed',
    project_question: 'Decrypt.Ed is an interactive and practical guide to understanding cryptocurrencies in an approachable way. Societies and communities at one time traded with salt or cowrie shells as these were seen as trusted forms of currency which everyone agreed held value. Eventually, multiple shifts gave rise to coins, banknotes, and later, plastic cards which act as proxies of value and offer consistency to the system of exchange. If is often the case that currencies, or our understanding of value, evolves faster than societies can adapt. Many things are gained as well as lost in the process, including elements of culture, languages, design, and politics. The process of adapting to a new currency often involves a steep learning curve. Decrypt.Ed is a project that evolved from an exploration of the ways in which value is understood, agreed upon, retained and exchanged and attempts to help newcomers up the cryptocurrency learning curve. \r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/logo2.png',
      title: 'logo2',
      alt: 'logo',
      caption: ''
    },
    topics: [{
      name: 'Education',
      slug: 'education'
    }, {
      name: 'Machine Learning',
      slug: 'machine-learning'
    }]
  }],
  'Sound': [{
    student_id: '25',
    student_name: 'Dror Dov Ayalon',
    student_slug: 'dror-dov-ayalon',
    advisor_id: '123',
    project_title: 'Soundscape: A Tool for music makers',
    project_question: '',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/card-copy-1.png',
      title: 'Soundscape',
      alt: 'Soundscape',
      caption: 'Soundscape'
    },
    topics: [{
      name: 'Machine Learning',
      slug: 'machine-learning'
    }, {
      name: 'Sound',
      slug: 'sound'
    }]
  }, {
    student_id: '80',
    student_name: 'Jarrett C Slavin',
    student_slug: 'jarrett-c-slavin',
    advisor_id: '129',
    project_title: 'Spectrum',
    project_question: 'What does life look like through the bipolar lens?\r\nSpectrum is a mobile audio app that places the user in the shoes of a bipolar mind through various situations &amp; thoughts. The user adjust a slider to hear three different perspectives, (depressed, baseline, and manic) on the same subjects, from the same mind experiencing different mood states. \r\n\r\nThis version of “Spectrum” is comprised entirely of my own personal thoughts, re-living various events in specific situations through each of the 3 primary lenses of the bipolar spectrum.\r\n\r\n“Spectrum” serves as a prototype that could eventually expand to include the thoughts of several different bipolar individuals. For now, for the sake of focus and scale, I choose to focus on expressing my own personal perspective.\r\n\r\nFor anyone who has ever struggled to understand what it means to be bipolar, “Spectrum” seeks to increase empathy, understanding, and communication. Whether you are bipolar yourself, seeking to relate &amp; compare your own experience to mine, or if you are not bipolar but would like to better understand &amp; empathize with those in your life who are, “Spectrum” offers a valuable, insightful experience.\r\n\r\n',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/spectrumThumbnail.jpg',
      title: 'spectrumThumbnail',
      alt: 'thumbnail',
      caption: ''
    },
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'Sound',
      slug: 'sound'
    }]
  }, {
    student_id: '103',
    student_name: 'Lindsey Daniels',
    student_slug: 'lindsey-daniels',
    advisor_id: '131',
    project_title: 'Basic Ingredients',
    project_question: 'If everyone eats and has food habits, then food is able to be used as a shared language among all people. And in that language, everyone proceeds to reveal a lot about themselves - history, socioeconomic status, personal hang-ups, weird quirks, how they handle time, etc. \r\n\r\nIt happens inadvertently and without notice; we can’t help but pour ourselves into that which we (in an ideal world) do everyday. \r\n\r\nAnd if the self is so wrapped up in what we eat and cook, when we offer to feed others, we offer that same self to be consumed. In this way, as we have become an ingredient, we engage in an act of emotional cannibalism. \r\n\r\nBut while feeding others is a nurturing and compassionate act, acts of cannibalism usually manifest as a power exchange. Where is the power in my particular exchange? Is it equal?\t\r\n\r\nBasic Ingredients is a sound installation and personal exercise constructed from recordings in home kitchens and facilitated discussions around the topic of food. What do people reveal about themselves by talking me through recipes? When moving through their own kitchens? If I ask about breakfast, lazy foods, or coffee, what do they tell me outside of eggs, milk, and sugar? \r\n\r\nFor my thesis, I ask people about food and they proceed to tell me about everything else. \r\n\r\nAnd while their answers and actions seemingly all differ, even the sound of the supposed common ones (the shapes of those sounds - how to break an egg, light a stove, measure an ingredient) act as fingerprints, all distinct to the individuals and their spaces. \r\n\r\nIf eating is an experience of the senses, I challenged myself to channel that experience through the limited scope of sound to make an individual available to be known by others, to be consumed by others.\r\n',
    topics: [{
      name: 'Identity',
      slug: 'identity'
    }, {
      name: 'Sound',
      slug: 'sound'
    }]
  }],
  'Tangiable': [{
    student_id: '7',
    student_name: 'Grau Puche Recarens',
    student_slug: 'grau-puche-recarens',
    advisor_id: '114',
    project_title: 'lligam',
    project_question: 'The main thread of this project is the desire to break out of screen-based interactions. Wanting to go away from a visual-feedback-only world, and building something engaging that comes through touch. [ʎigam] is not about finding a solution but going away from the norm and making something weird through an exploration of physical interaction. And that relies on screen just as an accessory or an intensifier.\r\n\r\nThis experimentation had various parameters decided a priori as it had to have a clear end goal making sure something came out of this. The resulting device would be a game composed of two different items; a physical controller, and a digital game. The control was built first and is the main element and platform for the digital game. The video game is linked directly to the controller and only makes sense with it. The reasoning for these parameters besides personal ones is the fact that games are a great exemplifier of good, and bad interaction *building*.\r\n\r\nAll these contributing factors have coalesced into the creation of CCR (CatCat Revolution). An arcade-style game where the player has to pet a cat according to their picky request and try to make them happy (no one is sure if it is even possible)',
    portfolio_icon: {
      src: 'https://itp.nyu.edu/thesis2018/wp-content/uploads/2018/04/Screen-Shot-2018-04-18-at-15.05.48.png',
      title: 'CCR, realization of lligam',
      alt: 'the face of a cat',
      caption: ''
    },
    topics: [{
      name: 'Tangiable',
      slug: 'tangiable'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '43',
    student_name: 'Hayeon Hwang',
    student_slug: 'hayeon-hwang',
    advisor_id: '119',
    project_title: 'Expressive Tactile Controls',
    project_question: 'Push buttons, sliders, switches and dials—we use such controls everyday, and yet we barely notice them. ‘Expressive Tactile Controls’ is a series of playful research experiments that ask: how could our relationship to tactile controls be augmented by giving these controls more personality? How would buttons that have a stronger, more evocative personality affect and improve our relationship with the applications they are built into? How would people react to buttons that ‘talk back?’\r\n\r\nThis question was approached by constructing and testing a series of experimental pushbutton prototypes able to express themselves with various tactile and kinesthetic feedback (vibration, tension, and movement), according to the user’s touch or environment. \r\n\r\nThe first series included controls designed to feel Stubborn, Sensitive/Impatient, Lazy, Timid, and Spontaneous. These ‘personality-enriched’ buttons were then used to provide users with a more intuitive tactile feedback, in accordance with the application they were serving.\r\n',
    topics: [{
      name: 'Tangiable',
      slug: 'tangiable'
    }, {
      name: 'UX\\UI',
      slug: 'uxui'
    }]
  }, {
    student_id: '110',
    student_name: 'Samantha Schulman',
    student_slug: 'samantha-schulman',
    advisor_id: '131',
    project_title: 'Breathe With Me',
    project_question: 'Anxiety disorders affect more than 40 million Americans, many of whom suffer from panic attacks. Panic attacks are unpredictable, debilitating episodes typically characterized by shaking, chest tightness, difficulty breathing, and intense fear. The combination of fear and physiological symptoms continues to heighten one another, escalating the panic attack. Paralyzed with fear, one’s breathing becomes short and shallow. While some strategies for coping with anxiety involve meditation or medication, I want to offer a new solution, one that transforms the anti-anxiety techniques of both diaphragmatic breathing and applied deep body pressure into a garment that could be worn anywhere.\r\n\r\nThe result, Breathe With Me, is is a wearable t-shirt that leverages the expansion and compression of pneumatics to encourage the wearer to focus on and control their breathing during moments of panic and anxiety. The user squeezes a hand-pump to inflate two air pockets that hug their chest and back, providing comfort in the application of gentle pressure. The hand-pump itself is soft and tactile, shaped to match the form of a person’s hand, and absorbs muscle tension to provide stress relief. The repeated squeezing of the pump combined with the soft compression develops a pattern that simulates deep breathing, guiding the user to practice breathing together with their garment. Essential oils are also dispersed with each pump as an additional calming element.\r\n\r\nFurthermore, in creating Breathe with Me, I challenged myself to try to uphold environmental ethics when selecting materials, despite the lack of resources available for fast and affordable sustainable production. My final prototype is made with soft white cotton fabric by the way of vintage laundry bags, and silicone, which is non-toxic throughout its entire lifecycle when properly developed.\r\n',
    topics: [{
      name: 'Health',
      slug: 'health'
    }, {
      name: 'Tangiable',
      slug: 'tangiable'
    }]
  }],
  'Health': [{
    student_id: '109',
    student_name: 'Ran Tian',
    student_slug: 'ran-tian',
    advisor_id: '131',
    project_title: 'Heart Health',
    project_question: 'Unlike some disease that can be instantly felt by the patient or can be life threatening, cardiovascular disease is a silent killer. One third of patients after a cardiac event are not adherent to their medication irrespective of the cardiac medication prescribed, which is a major high growth situation in the US and globally. Patient adherence to medication is crucial for risk reduction following a cardiac event. Cardiac rehabilitation is complex and the workflow consists of 5 phases: patient ID, referral management, enrollment, patient rehabilitation, and maintenance. My thesis is focusing on patient rehabilitation and maintenance.\r\n\r\nThe primary reasons that cause non-adherence after a cardiac event are no symptoms, not filling the prescription, complexity, forgetting, cost and side effects. To address these problems, I’m creating a visually rich AR experience that will improve medication adherence, patient engagement, and create a better relationship between the patients and their heart anatomy to help them think about medication and rehab differently. Targeting the elderly, but highly applicable for youth as well, this AR app has three primary features: medication education via AR animated heart modules; integrated apple watch with realtime heart rate data; fun, emotional, and engaging gamified notifications for medication management. By turning the burdensome rehab trajectory into an experience of a beautiful garden inside the room, the process becomes more like meditation rather than work.',
    topics: [{
      name: 'Health',
      slug: 'health'
    }, {
      name: 'VR\\AR',
      slug: 'vr-ar'
    }]
  }, {
    student_id: '110',
    student_name: 'Samantha Schulman',
    student_slug: 'samantha-schulman',
    advisor_id: '131',
    project_title: 'Breathe With Me',
    project_question: 'Anxiety disorders affect more than 40 million Americans, many of whom suffer from panic attacks. Panic attacks are unpredictable, debilitating episodes typically characterized by shaking, chest tightness, difficulty breathing, and intense fear. The combination of fear and physiological symptoms continues to heighten one another, escalating the panic attack. Paralyzed with fear, one’s breathing becomes short and shallow. While some strategies for coping with anxiety involve meditation or medication, I want to offer a new solution, one that transforms the anti-anxiety techniques of both diaphragmatic breathing and applied deep body pressure into a garment that could be worn anywhere.\r\n\r\nThe result, Breathe With Me, is is a wearable t-shirt that leverages the expansion and compression of pneumatics to encourage the wearer to focus on and control their breathing during moments of panic and anxiety. The user squeezes a hand-pump to inflate two air pockets that hug their chest and back, providing comfort in the application of gentle pressure. The hand-pump itself is soft and tactile, shaped to match the form of a person’s hand, and absorbs muscle tension to provide stress relief. The repeated squeezing of the pump combined with the soft compression develops a pattern that simulates deep breathing, guiding the user to practice breathing together with their garment. Essential oils are also dispersed with each pump as an additional calming element.\r\n\r\nFurthermore, in creating Breathe with Me, I challenged myself to try to uphold environmental ethics when selecting materials, despite the lack of resources available for fast and affordable sustainable production. My final prototype is made with soft white cotton fabric by the way of vintage laundry bags, and silicone, which is non-toxic throughout its entire lifecycle when properly developed.\r\n',
    topics: [{
      name: 'Health',
      slug: 'health'
    }, {
      name: 'Tangiable',
      slug: 'tangiable'
    }]
  }]
};


routes.route('/student/:student').get(getStudentProject);
routes.route('/projects').get(getAllProject);
routes.route('/tag/:tag').get(getTagProjects);
routes.route('/tag/:tag1/:tag2').get(getTwoTagProjects);
routes.route('/pair/:tag').get(getTagPairs);
routes.route('/id/:student').get(getStudentID);

function getStudentID(req, res) {
  res.send(sampleStudentData[req.params.student].student_id);
}

function getAllProject(req, res) {

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

function getTagPairs(req, res) {
  let tagPairs = [];

  if (sampleTagData[req.params.tag]) {
    sampleTagData[req.params.tag].forEach((project) => {
      project.topics.forEach((topic) => {
        tagPairs = tagPairs.concat(topic.name);
      });
    });
  }
  tagPairs = tagPairs.filter(onlyUnique);
  res.send(tagPairs);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

module.exports = routes;
