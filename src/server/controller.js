const express = require('express');

const routes = express.Router();

const sampleStudents = [
  'student1',
  'student2',
  'student3'
];

const sampleTags = [
  'Art',
  'Education',
  'Performance',
  'Installation',
  'Storytelling',
  'Social Good',
  'VR',
  'Behavior',
  'Product-Tool',
  'Machine Learning',
  'UX-UI',
  'Music-Sound',
  'Algorithms',
  'Politics',
  'Privacy',
  'Mobile Apps',
  'Wearables',
  'Speculative Design',
  'Data Viz',
  'Games',
  'Internet of Things',
  'Networking'
];

const sampleStudentData = {
  'aaron-parsekian': {
    student_id: '94', student_name: 'Aaron Parsekian', student_slug: 'aaron-parsekian', advisor_id: '9', project_title: 'thank you lights', project_question: 'Can I build something exciting and novel that is powered by everyday, often discarded materials? Can I combine new tech with trash artistically?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Education', slug: 'education' }]
  },
  'aarón-montoya-moraga': {
    student_id: '79', student_name: 'Aarón Montoya-Moraga', student_slug: 'aarón-montoya-moraga', advisor_id: '6', project_title: 'its_ok', project_question: 'How can we use technology to achieve catharsis and self-acceptance?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Performance', slug: 'performance' }]
  },
  'adi-wiedersheim-sendagorta': {
    student_id: '83', student_name: 'Adi Wiedersheim Sendagorta', student_slug: 'adi-wiedersheim-sendagorta', advisor_id: '6', project_title: 'Here and There', project_question: 'How can I create more tangible connections between us and the ever-changing perception and distortion of our memories? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  },
  'angela-perrone': {
    student_id: '81', student_name: 'Angela Perrone', student_slug: 'angela-perrone', advisor_id: '6', project_title: 'Museum of Funny Ladies &#8211; A Museumette', project_question: 'How can I create an innovative, interactive experience that tells a piece of the history of women in comedy?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'anne-k-goodfriend': {
    student_id: '47', student_name: 'Anne K Goodfriend', student_slug: 'anne-k-goodfriend', advisor_id: '4', project_title: 'A Place to Remember', project_question: 'How can urban-centered immersive experiences be crafted to recall and retell our stories of community, and place?', topics: [{ name: 'Social Good', slug: 'social-good' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'chelsea-jane-pfohl': {
    student_id: '65', student_name: 'Chelsea Jane Pfohl', student_slug: 'chelsea-jane-pfohl', advisor_id: '5', project_title: 'The Nutshell Experience', project_question: 'How could a virtual reality experience replicate and augment the lessons homicide investigators learn from Frances Glessner Lee’s Nutshell Studies?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR', slug: 'vr' }]
  },
  'chino-kim': {
    student_id: '60', student_name: 'Chino Kim', student_slug: 'chino-kim', advisor_id: '5', project_title: 'Mouth to Mouth Dating', project_question: 'Can a single phone number save the telephone, modern dating and the internet at large?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'christina-b-choi': {
    student_id: '43', student_name: 'Christina B Choi', student_slug: 'christina-b-choi', advisor_id: '4', project_title: 'Plastic Soup: an interactive sea of consumer waste', project_question: 'How can interactive storytelling embrace nonlinear narrative and engage users in the open discovery of information?', topics: [{ name: 'Storytelling', slug: 'storytelling' }]
  },
  'corbin-y-ordel': {
    student_id: '64', student_name: 'Corbin Y Ordel', student_slug: 'corbin-y-ordel', advisor_id: '5', project_title: 'A CLOUD IN BLUE SKY', project_question: 'Can computers and humankind work in tandem to contextualize our world through photographs?\r\n\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Machine Learning', slug: 'machine-learning' }]
  },
  'cristina-cannella': {
    student_id: '41', student_name: 'Cristina Cannella', student_slug: 'cristina-cannella', advisor_id: '4', project_title: 'Navigating with Mynd Map', project_question: 'What would a navigational interface look like that could build our natural sense of direction?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'dana-abrassart': {
    student_id: '70', student_name: 'Dana Abrassart', student_slug: 'dana-abrassart', advisor_id: '6', project_title: 'emBody', project_question: 'How do I design an application for motion capture that encourages mindfulness and body awareness with real-time sonic feedback?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Music-Sound', slug: 'musicsound' }]
  },
  'daniel-silber-baker': {
    student_id: '122', student_name: 'Daniel Silber-Baker', student_slug: 'daniel-silber-baker', advisor_id: '9', project_title: 'Words Birth Worlds', project_question: 'How/ Can A Poem Get Someone Out Of Prison?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'danielle-i-butler': {
    student_id: '99', student_name: 'Danielle I Butler', student_slug: 'danielle-i-butler', advisor_id: '7', project_title: 'Safe House, A Complex Story Told Small', project_question: 'How can complex social issues be addressed when they can’t be directly interacted with due to geography or scale? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'daveed-r.-lockard': {
    student_id: '20', student_name: 'Daveed R. Lockard', student_slug: 'daveed-r.-lockard', advisor_id: '3', project_title: 'Encountering: Arabic', project_question: 'Could a language-learning media experience positively impact people’s attitudes toward unfamiliar cultures?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Education', slug: 'education' }]
  },
  'dhruv-damle': {
    student_id: '45', student_name: 'Dhruv Damle', student_slug: 'dhruv-damle', advisor_id: '4', project_title: 'Seedling', project_question: 'How can technology address changes in resources, needs and outcomes of indoor farming?', topics: [{ name: 'Product-Tool', slug: 'producttool' }]
  },
  'dhruv-r-mehrotra': {
    student_id: '92', student_name: 'Dhruv R Mehrotra', student_slug: 'dhruv-r-mehrotra', advisor_id: '9', project_title: 'Othernet', project_question: 'Othernet: Internet Island', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }, { name: 'Social Good', slug: 'social-good' }]
  },
  'doo-yon-kim-(don)': {
    student_id: '49', student_name: 'Doo Yon Kim (Don)', student_slug: 'doo-yon-kim-(don)', advisor_id: '4', project_title: '❒ LETS : Efficient Platform to Make People Social in Real World.', project_question: 'What Would be an Efficient Way to Make People Social in Real World? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Mobile Apps', slug: 'mobile-apps' }]
  },
  'ella-dagan-pelled': {
    student_id: '88', student_name: 'Ella Dagan Pelled', student_slug: 'ella-dagan-pelled', advisor_id: '9', project_title: 'The Cloakroom', project_question: 'How could ubiquitous things reflect our thoughts and feelings? \r\nCan I find new ways to share our personal stories? \r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'emmanuel-y-klein': {
    student_id: '18', student_name: 'Emmanuel Y Klein', student_slug: 'emmanuel-y-klein', advisor_id: '3', project_title: 'Willo', project_question: 'Can a computer effectively engage a child in an open-ended conversation?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  },
  'esther-hersh': {
    student_id: '27', student_name: 'Esther Hersh', student_slug: 'esther-hersh', advisor_id: '8', project_title: 'Lattice', project_question: 'How can design be utilized to implement tools that would \r\npromote process focused learning?\r\n', topics: [{ name: 'Education', slug: 'education' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'eunjee-kim': {
    student_id: '50', student_name: 'EunJee Kim', student_slug: 'eunjee-kim', advisor_id: '4', project_title: 'R. WARE', project_question: 'Can I convey the concept of FbF to people through a wearable electronic device?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'eve-j-weinberg': {
    student_id: '53', student_name: 'Eve J Weinberg', student_slug: 'eve-j-weinberg', advisor_id: '4', project_title: 'UXMovesMe.com', project_question: 'How does Motion Graphics make UX more persuasive? And what is the psychology behind it?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'fengyi-franklin-zhu': {
    student_id: '38', student_name: 'Fengyi Franklin Zhu', student_slug: 'fengyi-franklin-zhu', advisor_id: '8', project_title: 'A Ritual that Lasts Forever', project_question: 'Can traditional worship survive in our technology-driven era?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  },
  'fengyuan-zhu': {
    student_id: '39', student_name: 'Fengyuan Zhu', student_slug: 'fengyuan-zhu', advisor_id: '8', project_title: 'Magic Window Mixed Reality System', project_question: 'How can we merge the virtual experiences of VR/AR users and the spectators in the same physical space, for reducing the isolation of one group from the other?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }]
  },
  'francesca-rodriguez-sawaya': {
    student_id: '95', student_name: 'Francesca Rodriguez Sawaya', student_slug: 'francesca-rodriguez-sawaya', advisor_id: '9', project_title: 'texere', project_question: 'How can technology marry tradition?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'gal-nissim': {
    student_id: '63', student_name: 'Gal Nissim', student_slug: 'gal-nissim', advisor_id: '5', project_title: 'Rat Tale', project_question: 'What makes one perceive something as either attractive or disgusting, and how this perception can be shifted?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Installation', slug: 'installation' }]
  },
  'gao-yuan': {
    student_id: '104', student_name: 'Gao Yuan', student_slug: 'gao-yuan', advisor_id: '7', project_title: 'Towards Neural Music Style Transfer', project_question: 'Can we transfer the style of one musician to a piece of music recorded by a different musician?', topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Music-Sound', slug: 'musicsound' }]
  },
  'gustavo-eduardo-de-campos-abbott': {
    student_id: '10', student_name: 'Gustavo Eduardo de Campos Abbott', student_slug: 'gustavo-eduardo-de-campos-abbott', advisor_id: '3', project_title: 'How To Draw A Cube', project_question: 'How many possible ways are there to draw a cube, given the condition that each successively drawn edge is connected to a previously drawn edge?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  },
  'hao-tseng': {
    student_id: '52', student_name: 'Hao Tseng', student_slug: 'hao-tseng', advisor_id: '4', project_title: 'Let Go Machine', project_question: 'Is it possible to create an interactive experience that can liberate people from the negativity of regret?\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'ian-c-gibson': {
    student_id: '89', student_name: 'Ian C Gibson', student_slug: 'ian-c-gibson', advisor_id: '9', project_title: 'Vets Ready-to-Create: an MRE to empower veteran makers', project_question: 'How can technology best be used to empower military veteran makers, especially those not reached by existing veteran service organizations?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Social Good', slug: 'social-good' }]
  },
  'isabel-m-donlon': {
    student_id: '46', student_name: 'Isabel M Donlon', student_slug: 'isabel-m-donlon', advisor_id: '4', project_title: 'Screen Leaks: Experiments in Personal Data Sharing', project_question: 'What kind of portrait can I make of myself by letting other people watch me on my computer?', topics: [{ name: 'Data Viz', slug: 'data-viz' }]
  },
  'ishaan-m-chaudhary': {
    student_id: '72', student_name: 'Ishaan M Chaudhary', student_slug: 'ishaan-m-chaudhary', advisor_id: '6', project_title: 'EKTA : A multi-sensory experience', project_question: 'How can I augment my music &amp; bring strangers together in unexpected ways through the use of technology?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }]
  },
  'jamal-m-combs': {
    student_id: '100', student_name: 'Jamal M Combs', student_slug: 'jamal-m-combs', advisor_id: '7', project_title: 'Jamal Combs Action Points (JCAP): Critiquing Role-Playing Game Interfaces', project_question: 'What are characteristics and elements of a successful role-playing game interface that make a compelling experience?', topics: [{ name: 'Games', slug: 'games' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'jamie-charry': {
    student_id: '25', student_name: 'Jamie Charry', student_slug: 'jamie-charry', advisor_id: '8', project_title: 'SETA Maker', project_question: 'Can students gain scientific intuition through making games? How can we foster a life-long relationship with scientific thinking?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Games', slug: 'games' }]
  },
  'jamie-ruddy': {
    student_id: '67', student_name: 'Jamie Ruddy', student_slug: 'jamie-ruddy', advisor_id: '5', project_title: 'Maddy&#8217;s Secret History', project_question: 'Can I inspire middle school girls to pursue technology through storytelling?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'jared-friedman': {
    student_id: '76', student_name: 'Jared Friedman', student_slug: 'jared-friedman', advisor_id: '6', project_title: 'Geode #1 (Fun House)', project_question: 'How can I engineer a personal space to create a moment of ecstatic disruption?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  },
  'jason-beck': {
    student_id: '86', student_name: 'Jason Beck', student_slug: 'jason-beck', advisor_id: '9', project_title: 'Play:Connected', project_question: 'How can connected devices unite children with and without disabilities through play?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Social Good', slug: 'social-good' }]
  },
  'jed-d-watson': {
    student_id: '24', student_name: 'Jed D Watson', student_slug: 'jed-d-watson', advisor_id: '3', project_title: 'Deployed: A dependent’s journey through a military deployment experience.', project_question: 'What does it feel like to be a military child during a military deployment cycle?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'jennifer-kagan': {
    student_id: '29', student_name: 'Jennifer Kagan', student_slug: 'jennifer-kagan', advisor_id: '8', project_title: 'whatisit.tech', project_question: 'What can I make that begins to address the power imbalance between people who make technology and people who are subject to it?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Politics', slug: 'politics' }]
  },
  'jesse-a-horwitz': {
    student_id: '16', student_name: 'Jesse A Horwitz', student_slug: 'jesse-a-horwitz', advisor_id: '3', project_title: 'The Radius Project', project_question: 'How can I know the number of people around me even if I can’t see all of them? Can a portable device be built to answer this question?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'jessica-l-scott-dutcher': {
    student_id: '34', student_name: 'Jessica L Scott-Dutcher', student_slug: 'jessica-l-scott-dutcher', advisor_id: '8', project_title: 'Greenly', project_question: 'How can I get more New Yorkers into nature? How can I deepen their experiences into a lasting love?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'jiaqi-guo': {
    student_id: '105', student_name: 'Jiaqi Guo', student_slug: 'jiaqi-guo', advisor_id: '7', project_title: 'From Photorealistic to Artistic Rendering', project_question: 'How can we approach recreating hand-painted Japanese Anime art with contemporary 3D computer graphics imagery?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'joakim-gregersen-quach': {
    student_id: '66', student_name: 'Joakim Gregersen Quach', student_slug: 'joakim-gregersen-quach', advisor_id: '5', project_title: 'Physical Objects in Augmented Reality', project_question: 'How can physical objects help shape our experience in augmented reality? How can we use physical objects as controllers to create and shape content in augmented reality?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }]
  },
  'jonathan-james-gallagher': {
    student_id: '55', student_name: 'Jonathan James Gallagher', student_slug: 'jonathan-james-gallagher', advisor_id: '5', project_title: 'Yn Erre Auro', project_question: 'How can two users experience the unification of their conscious and unconscious through asymmetrical interaction in VR?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'jordan-frand': {
    student_id: '12', student_name: 'Jordan Frand', student_slug: 'jordan-frand', advisor_id: '3', project_title: 'K.W.E.E.N.', project_question: 'How can wearable technology enhance the performance and expressivity of drag queens and other performers of femininity?', topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'juan-jose-egusquiza': {
    student_id: '102', student_name: 'Juan Jose Egusquiza', student_slug: 'juan-jose-egusquiza', advisor_id: '7', project_title: 're·al·i·ty', project_question: 'How can I - through the use of technology- grab elements from our daily life and combine them to create a new reality? ', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'kc-lathrop': {
    student_id: '31', student_name: 'KC Lathrop', student_slug: 'kc-lathrop', advisor_id: '8', project_title: 'KNOCKED down!', project_question: 'How can playful movement help people let go of their insecurities and fears?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Games', slug: 'games' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'katie-temrowski': {
    student_id: '97', student_name: 'Katie Temrowski', student_slug: 'katie-temrowski', advisor_id: '9', project_title: 'Townsquare', project_question: 'How can design and technology be used to create information equity to promote civic engagement within a redeveloping city like Detroit?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Social Good', slug: 'social-good' }]
  },
  'kevin-stirnweis': {
    student_id: '35', student_name: 'Kevin Stirnweis', student_slug: 'kevin-stirnweis', advisor_id: '8', project_title: 'Filet', project_question: 'How can virtual reality be used to tell personal stories? To what extent does it lend itself to autobiographical content?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'kritchaya-twitchsri': {
    student_id: '68', student_name: 'Kritchaya Twitchsri', student_slug: 'kritchaya-twitchsri', advisor_id: '5', project_title: 'Mind tuning with &#8216;WAVE&#8217;', project_question: 'How can technology tap into our senses and guide through positive behaviour change? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'kylin-chen': {
    student_id: '73', student_name: 'Kylin Chen', student_slug: 'kylin-chen', advisor_id: '6', project_title: 'How to Do Things with Gestures', project_question: 'How can I use design thinking to provide a human-centric way to understand and to interpret gestures; and ultimately, to create meaningful, intuitive gestural interactions?\r\n\r\n', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'leon-eckert': {
    student_id: '26', student_name: 'Leon Eckert', student_slug: 'leon-eckert', advisor_id: '8', project_title: 'Biometric Intimacy', project_question: 'By analysing the rhythm of my keystrokes, can a machine learning algorithm make guesses about my mental state?', topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Privacy', slug: 'privacy' }]
  },
  'leslie-ruckman': {
    student_id: '33', student_name: 'Leslie Ruckman', student_slug: 'leslie-ruckman', advisor_id: '8', project_title: 'Well Rounded: collecting change for collective change', project_question: 'How can consumer behaviors be leveraged to create positive change in the world around us?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'lindsey-f-johnson': {
    student_id: '107', student_name: 'Lindsey F Johnson', student_slug: 'lindsey-f-johnson', advisor_id: '7', project_title: 'The Museum of Mistrust', project_question: 'How can I teach people about the history and effects of con artist in an interactive, entertaining way?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  },
  'lisa-jamhoury': {
    student_id: '90', student_name: 'Lisa Jamhoury', student_slug: 'lisa-jamhoury', advisor_id: '9', project_title: 'Facing You: An Interactive Installation Exploring Life Inside the Internet of Experiences', project_question: 'What does an embodied experience on the internet look like? Is it possible to feel physically present in virtual space?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Networking', slug: 'networking' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'lisa-song': {
    student_id: '123', student_name: 'Lisa Song', student_slug: 'lisa-song', advisor_id: '3', project_title: 'powerSplit', project_question: "How can we use technology to not only control, monitor and track electricity usage but also change people's behavioral habits to reduce unnecessary power usage?", topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'marcela-nowak': {
    student_id: '111', student_name: 'Marcela Nowak', student_slug: 'marcela-nowak', advisor_id: '7', project_title: 'The Dream Catcher', project_question: 'How can we translate the experience of a dream into the world of virtual reality?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Games', slug: 'games' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'mathura-m-govindarajan': {
    student_id: '77', student_name: 'Mathura M Govindarajan', student_slug: 'mathura-m-govindarajan', advisor_id: '6', project_title: 'Cat In A Box', project_question: 'Is it compelling to create rich educational experiences in current day education that are based on traditional forms of Indian storytelling?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'melanie-hoff': {
    student_id: '15', student_name: 'Melanie Hoff', student_slug: 'melanie-hoff', advisor_id: '3', project_title: 'The Trust Game', project_question: 'How do social groups script rituals of exchange and how can these scripts be rewritten? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Politics', slug: 'politics' }]
  },
  'michelle-hessel-alves': {
    student_id: '57', student_name: 'Michelle Hessel Alves', student_slug: 'michelle-hessel-alves', advisor_id: '5', project_title: 'Hidden in Plain Sight', project_question: 'What are the stories behind the New York City food carts?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'muqing-niu': {
    student_id: '110', student_name: 'Muqing Niu', student_slug: 'muqing-niu', advisor_id: '7', project_title: 'Minsta', project_question: 'How can I bring people happiness when they check the weather in the long and gloomy winters? Can social media data be connected with weather data in a way that delights people when they check the weather?\r\n', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Installation', slug: 'installation' }, { name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'nai-chen-yang': {
    student_id: '84', student_name: 'Nai-Chen Yang', student_slug: 'nai-chen-yang', advisor_id: '6', project_title: 'The Undelivered Letters', project_question: 'How can emerging media advance the field of journalistic documentary and history?\r\n\r\n', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'VR', slug: 'vr' }]
  },
  'naoki-ishizuka': {
    student_id: '59', student_name: 'Naoki Ishizuka', student_slug: 'naoki-ishizuka', advisor_id: '5', project_title: '@veatrapper', project_question: 'How can I rap from video in a way it encapsulate relationship with video that Hiphop has right now??', topics: [{ name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  },
  'nicola-carpeggiani': {
    student_id: '71', student_name: 'Nicola Carpeggiani', student_slug: 'nicola-carpeggiani', advisor_id: '6', project_title: 'Sampledelia &#8211; an audiovisual “non-time” experience', project_question: 'How can I create an immersive music performance that involves different medias in the same creative process ? \r\n\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  },
  'nicole-he': {
    student_id: '13', student_name: 'Nicole He', student_slug: 'nicole-he', advisor_id: '3', project_title: 'The Best Art', project_question: 'If computers are way smarter than I am, why shouldn’t the computer come up with my thesis project ideas?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  },
  'nikita-r-huggins': {
    student_id: '17', student_name: 'Nikita R Huggins', student_slug: 'nikita-r-huggins', advisor_id: '3', project_title: 'TRINI TALK', project_question: 'I want to create an online presence for the Trinidadian language, culture, and history to make it more widely known among natives of the island.', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Social Good', slug: 'social-good' }]
  },
  'nilomee-c-jesrani': {
    student_id: '28', student_name: 'Nilomee C Jesrani', student_slug: 'nilomee-c-jesrani', advisor_id: '8', project_title: 'Exploring the Heart &#8211; A VR Experience for Medical Education', project_question: 'How might I leverage the potential of VR Technology to design a learning resource for Medical Students?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Education', slug: 'education' }, { name: 'UX-UI', slug: 'uxui' }, { name: 'VR', slug: 'vr' }]
  },
  'olivia-cueva': {
    student_id: '87', student_name: 'Olivia Cueva', student_slug: 'olivia-cueva', advisor_id: '9', project_title: 'The Periodical', project_question: 'How can we redesign the experience of getting a menstrual period so that it feels celebratory? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'ondina-frate': {
    student_id: '103', student_name: 'Ondina Frate', student_slug: 'ondina-frate', advisor_id: '7', project_title: 'Drawing Feelings', project_question: 'If you could visualize your feelings what would they look like?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Data Viz', slug: 'data-viz' }]
  },
  'osama-m-sehgol': {
    student_id: '96', student_name: 'Osama M Sehgol', student_slug: 'osama-m-sehgol', advisor_id: '9', project_title: 'TimeSvr.com &#8211; Connecting digitally fatigued users to a distributed network of taskers.', project_question: 'Can virtually ordered jobs offer better connections between contracting parties? TimeSvr - is a test case for addressing ethical issues faced by workers of the networked age.', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }]
  },
  'paula-ceballos-delgado': {
    student_id: '42', student_name: 'Paula Ceballos Delgado', student_slug: 'paula-ceballos-delgado', advisor_id: '4', project_title: '[divine_pixels]', project_question: 'How can ancient fortune-telling rituals be reimagined using modern technology? \r\n\r\n', topics: [{ name: 'Speculative Design', slug: 'speculative-design' }, { name: 'Storytelling', slug: 'storytelling' }]
  },
  'peiyu-luo': {
    student_id: '91', student_name: 'Peiyu Luo', student_slug: 'peiyu-luo', advisor_id: '9', project_title: 'Chakr Glove', project_question: 'How can I provide more feedback in a virtual reality experience to make it feel more real?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'philip-j-donaldson': {
    student_id: '75', student_name: 'Philip J Donaldson', student_slug: 'philip-j-donaldson', advisor_id: '6', project_title: 'Breadcrumbs: Postcards from the present', project_question: 'Is it possible for us to untether ourselves from our devices in a way that also allows us to remember life’s special moments?', topics: [{ name: 'Product-Tool', slug: 'producttool' }]
  },
  'ravyn-l-whitley': {
    student_id: '98', student_name: 'Ravyn L Whitley', student_slug: 'ravyn-l-whitley', advisor_id: '9', project_title: 'TALK B[L]ACK', project_question: 'How to effectively create an online community for black women that celebrates and uplifts aspects of black culture and provides resources for daily life that promotes health and well being?\r\n\r\n', topics: [{ name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'rebecca-ricks': {
    student_id: '21', student_name: 'Rebecca Ricks', student_slug: 'rebecca-ricks', advisor_id: '3', project_title: 'Social Assemblages', project_question: 'How can I creatively interpret Facebook data in a way that prompts users to think about how their identity is constructed online?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  },
  'regina-vetka': {
    student_id: '23', student_name: 'Regina Vetka', student_slug: 'regina-vetka', advisor_id: '3', project_title: 'Learn Your Way', project_question: 'Is it possible to create a way to teach the same information to different kind of learners?', topics: [{ name: 'Education', slug: 'education' }]
  },
  'renata-de-carvalho-gaui': {
    student_id: '101', student_name: 'Renata De Carvalho Gaui', student_slug: 'renata-de-carvalho-gaui', advisor_id: '7', project_title: 'The hysterical wearable', project_question: 'how can technology prompt conversations about micro-aggressions towards females?', topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'ruta-kruliauskaite': {
    student_id: '19', student_name: 'Ruta Kruliauskaite', student_slug: 'ruta-kruliauskaite', advisor_id: '3', project_title: 'Wonder Corner', project_question: 'If there were ways to encourage adults to reawaken their childlike curiosity and wonder about the world, what kind of experience would it be?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  },
  'satbir-samantha-multani': {
    student_id: '109', student_name: 'Satbir Samantha Multani', student_slug: 'satbir-samantha-multani', advisor_id: '7', project_title: 'Interstitial Exhibits In Design Lab', project_question: 'How do museum visitors craft their own learning? ', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  },
  'serena-m-parr': {
    student_id: '93', student_name: 'Serena M Parr', student_slug: 'serena-m-parr', advisor_id: '9', project_title: 'Record in Flow', project_question: "How can I share my 360 videos from Standing Rock in a way that's helpful to the effort I documented?", topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Social Good', slug: 'social-good' }]
  },
  'shir-david': {
    student_id: '74', student_name: 'Shir David', student_slug: 'shir-david', advisor_id: '6', project_title: 'Light Scapes', project_question: 'How I can capture light to extend the limits of traditional photography ?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  },
  'sisa-bueno': {
    student_id: '58', student_name: 'Sisa Bueno', student_slug: 'sisa-bueno', advisor_id: '5', project_title: 'CLOSED CELLS, OPEN WOUNDS: The Collective Damage of Mass Incarceration', project_question: 'Can live action video remain an essential medium for deconstructed, abstract storytelling in cinematic virtual reality?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'skylar-jessen': {
    student_id: '48', student_name: 'Skylar Jessen', student_slug: 'skylar-jessen', advisor_id: '4', project_title: 'Humans Being Human Beings: An Exploration in Decompressing Design', project_question: 'How can we remove some of the compression digital tools place on our perception of self and the world around us? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  },
  'song-eun-we': {
    student_id: '69', student_name: 'Song Eun We', student_slug: 'song-eun-we', advisor_id: '5', project_title: 'Artificial Intelligence &amp; the Future of Photojournalism', project_question: 'How can AI help photojournalists survive and thrive in the very near future?', topics: [{ name: 'Algorithms', slug: 'algorithms' }]
  },
  'soyeon-chung': {
    student_id: '44', student_name: 'Soyeon Chung', student_slug: 'soyeon-chung', advisor_id: '4', project_title: 'One less hamburger', project_question: 'How can I help people make sustainable food choices by informing them of the impact of their meat eating habits on the environment?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'viniyata-pany': {
    student_id: '80', student_name: 'Viniyata Pany', student_slug: 'viniyata-pany', advisor_id: '6', project_title: 'Unheard', project_question: 'Do objects possess sonic properties that give them their unique aural essence? Do these essences then combine with other essences to create the physical sounds that we are able to hear?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Wearables', slug: 'wearables' }]
  },
  'wangshu-sun': {
    student_id: '112', student_name: 'Wangshu Sun', student_slug: 'wangshu-sun', advisor_id: '7', project_title: 'Dream of Wings', project_question: 'How can I design and recreate a dream-like flying experience, making it more flowy and intuitive?', topics: [{ name: 'VR', slug: 'vr' }]
  },
  'william-erwin-quest-kennelly': {
    student_id: '30', student_name: 'William Erwin Quest Kennelly', student_slug: 'william-erwin-quest-kennelly', advisor_id: '8', project_title: 'Orbital Sustainability', project_question: 'Current space launch systems are cost prohibitive, and environmentally taxing. How might a VR exhibit of comparative space launch technology inspire next generation solutions?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Speculative Design', slug: 'speculative-design' }, { name: 'VR', slug: 'vr' }]
  },
  'wipawe-sirikolkarn': {
    student_id: '22', student_name: 'Wipawe Sirikolkarn', student_slug: 'wipawe-sirikolkarn', advisor_id: '3', project_title: 'Me, Myself and .io', project_question: 'Is it possible that the internet might know me better than I know myself?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Data Viz', slug: 'data-viz' }]
  },
  'xingjian-an': {
    student_id: '40', student_name: 'Xingjian An', student_slug: 'xingjian-an', advisor_id: '4', project_title: 'The Great Liar', project_question: 'How does VR offer new possibilities for storytelling in an immersive environment?\r\n\r\n', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'xiqiao-zhou': {
    student_id: '54', student_name: 'Xiqiao Zhou', student_slug: 'xiqiao-zhou', advisor_id: '4', project_title: 'Color Your World', project_question: 'How to make the art drawing application, as a form of personal expression, be more creative and easier to use?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'UX-UI', slug: 'uxui' }]
  },
  'xiwei-huang': {
    student_id: '78', student_name: 'Xiwei Huang', student_slug: 'xiwei-huang', advisor_id: '6', project_title: 'The CompBack, a video compositing tool for video with complex backgrounds', project_question: 'How can I use the speed and efficiency of machine learning to create a video compositing feature that works fast on videos with complex background?', topics: [{ name: 'Product-Tool', slug: 'producttool' }]
  },
  'xuhui-xu': {
    student_id: '36', student_name: 'Xuhui Xu', student_slug: 'xuhui-xu', advisor_id: '8', project_title: 'Mistory', project_question: 'How to trigger people to share their past stories?\r\n', topics: [{ name: 'Storytelling', slug: 'storytelling' }]
  },
  'yan-zhao': {
    student_id: '113', student_name: 'Yan Zhao', student_slug: 'yan-zhao', advisor_id: '7', project_title: 'Decluttering Bot', project_question: 'How can technology encourages decluttering, while also brings awareness to overconsumption habits?\r\n', topics: [{ name: 'UX-UI', slug: 'uxui' }]
  },
  'yao': {
    student_id: '82', student_name: 'Yao', student_slug: 'yao', advisor_id: '6', project_title: 'Gravity', project_question: 'How can interactive immersive motion-capture environment provide a better way for users to connect with each other and manipulate the physical and digital space around them?\r\n', topics: [{ name: 'Games', slug: 'games' }, { name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
  },
  'ying-he': {
    student_id: '14', student_name: 'Ying He', student_slug: 'ying-he', advisor_id: '3', project_title: 'UpDate', project_question: 'Long-distance relationships are hard. Can an enhanced online calendar strengthen feelings of connection and release the power of the unspoken?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Data Viz', slug: 'data-viz' }]
  },
  'yiting-liu': {
    student_id: '32', student_name: 'Yiting Liu', student_slug: 'yiting-liu', advisor_id: '8', project_title: 'Catching Santa: A Virtual Reality Fairy Tale', project_question: 'How do new technologies allow us to reinterpret fairy tales? How do new technologies transform the way we experience stories? ', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'yuchi-ma': {
    student_id: '108', student_name: 'Yuchi Ma', student_slug: 'yuchi-ma', advisor_id: '7', project_title: 'Mobile Avatar', project_question: 'How could we show our personal mobile data back to us in a more heuristic and engaging way? ', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }]
  },
  'yue-hu': {
    student_id: '106', student_name: 'Yue Hu', student_slug: 'yue-hu', advisor_id: '7', project_title: 'Once Go Back', project_question: 'How to improve the emotions or feelings in VR? Can sentimental emotions and feeling be improved with VR? Can scent enhance the feelings or emotions during a VR experience?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  },
  'yue-zhang': {
    student_id: '37', student_name: 'Yue Zhang', student_slug: 'yue-zhang', advisor_id: '8', project_title: 'Missing Era VR', project_question: 'How can we use the newest technology to bring back the oldest history?', topics: []
  },
  'yuli-cai': {
    student_id: '11', student_name: 'Yuli Cai', student_slug: 'yuli-cai', advisor_id: '3', project_title: 'Wave-washed Sands: an experience with an ancient Chinese poem', project_question: 'I want to translate a Chinese poem not into words with another language but into universal feelings the words evoke.', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  },
  'yun-li': {
    student_id: '62', student_name: 'Yun Li', student_slug: 'yun-li', advisor_id: '5', project_title: 'Temporal Paradox', project_question: 'How could I create a virtual reality game that is about time?', topics: [{ name: 'Games', slug: 'games' }, { name: 'VR', slug: 'vr' }]
  },
  'zhuoxi': {
    student_id: '51', student_name: 'Zhuoxi', student_slug: 'zhuoxi', advisor_id: '4', project_title: 'Redesign of ITP website for students', project_question: '', topics: [{ name: 'UX-UI', slug: 'uxui' }]
  },
  'zoe-bachman': {
    student_id: '85', student_name: 'Zoe Bachman', student_slug: 'zoe-bachman', advisor_id: '9', project_title: 'diy/gyn: speculative experiments to deal with an absurdist reality', project_question: 'How can speculating about the future help us to consider the consequences of our present politics?', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  },
  'rebecca-(marks)-leopold': {
    student_id: '61', student_name: 'rebecca (marks) leopold', student_slug: 'rebecca-(marks)-leopold', advisor_id: '5', project_title: 'the Em&#x1f636;ji Palette', project_question: 'How can we have more creative control over our data❓\r\nHow can we have more control over our creative data⁉️', topics: [{ name: 'Art', slug: 'art' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Networking', slug: 'networking' }, { name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }]
  }
};

const sampleTagData = {
  'Art': [{
    student_id: '94', student_name: 'Aaron Parsekian', student_slug: 'aaron-parsekian', advisor_id: '9', project_title: 'thank you lights', project_question: 'Can I build something exciting and novel that is powered by everyday, often discarded materials? Can I combine new tech with trash artistically?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Education', slug: 'education' }]
  }, {
    student_id: '79', student_name: 'Aarón Montoya-Moraga', student_slug: 'aarón-montoya-moraga', advisor_id: '6', project_title: 'its_ok', project_question: 'How can we use technology to achieve catharsis and self-acceptance?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '83', student_name: 'Adi Wiedersheim Sendagorta', student_slug: 'adi-wiedersheim-sendagorta', advisor_id: '6', project_title: 'Here and There', project_question: 'How can I create more tangible connections between us and the ever-changing perception and distortion of our memories? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '60', student_name: 'Chino Kim', student_slug: 'chino-kim', advisor_id: '5', project_title: 'Mouth to Mouth Dating', project_question: 'Can a single phone number save the telephone, modern dating and the internet at large?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '64', student_name: 'Corbin Y Ordel', student_slug: 'corbin-y-ordel', advisor_id: '5', project_title: 'A CLOUD IN BLUE SKY', project_question: 'Can computers and humankind work in tandem to contextualize our world through photographs?\r\n\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Machine Learning', slug: 'machine-learning' }]
  }, {
    student_id: '99', student_name: 'Danielle I Butler', student_slug: 'danielle-i-butler', advisor_id: '7', project_title: 'Safe House, A Complex Story Told Small', project_question: 'How can complex social issues be addressed when they can’t be directly interacted with due to geography or scale? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '88', student_name: 'Ella Dagan Pelled', student_slug: 'ella-dagan-pelled', advisor_id: '9', project_title: 'The Cloakroom', project_question: 'How could ubiquitous things reflect our thoughts and feelings? \r\nCan I find new ways to share our personal stories? \r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '38', student_name: 'Fengyi Franklin Zhu', student_slug: 'fengyi-franklin-zhu', advisor_id: '8', project_title: 'A Ritual that Lasts Forever', project_question: 'Can traditional worship survive in our technology-driven era?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '63', student_name: 'Gal Nissim', student_slug: 'gal-nissim', advisor_id: '5', project_title: 'Rat Tale', project_question: 'What makes one perceive something as either attractive or disgusting, and how this perception can be shifted?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '10', student_name: 'Gustavo Eduardo de Campos Abbott', student_slug: 'gustavo-eduardo-de-campos-abbott', advisor_id: '3', project_title: 'How To Draw A Cube', project_question: 'How many possible ways are there to draw a cube, given the condition that each successively drawn edge is connected to a previously drawn edge?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  }, {
    student_id: '72', student_name: 'Ishaan M Chaudhary', student_slug: 'ishaan-m-chaudhary', advisor_id: '6', project_title: 'EKTA : A multi-sensory experience', project_question: 'How can I augment my music &amp; bring strangers together in unexpected ways through the use of technology?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '76', student_name: 'Jared Friedman', student_slug: 'jared-friedman', advisor_id: '6', project_title: 'Geode #1 (Fun House)', project_question: 'How can I engineer a personal space to create a moment of ecstatic disruption?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '24', student_name: 'Jed D Watson', student_slug: 'jed-d-watson', advisor_id: '3', project_title: 'Deployed: A dependent’s journey through a military deployment experience.', project_question: 'What does it feel like to be a military child during a military deployment cycle?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '105', student_name: 'Jiaqi Guo', student_slug: 'jiaqi-guo', advisor_id: '7', project_title: 'From Photorealistic to Artistic Rendering', project_question: 'How can we approach recreating hand-painted Japanese Anime art with contemporary 3D computer graphics imagery?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '111', student_name: 'Marcela Nowak', student_slug: 'marcela-nowak', advisor_id: '7', project_title: 'The Dream Catcher', project_question: 'How can we translate the experience of a dream into the world of virtual reality?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Games', slug: 'games' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '15', student_name: 'Melanie Hoff', student_slug: 'melanie-hoff', advisor_id: '3', project_title: 'The Trust Game', project_question: 'How do social groups script rituals of exchange and how can these scripts be rewritten? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Politics', slug: 'politics' }]
  }, {
    student_id: '13', student_name: 'Nicole He', student_slug: 'nicole-he', advisor_id: '3', project_title: 'The Best Art', project_question: 'If computers are way smarter than I am, why shouldn’t the computer come up with my thesis project ideas?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  }, {
    student_id: '103', student_name: 'Ondina Frate', student_slug: 'ondina-frate', advisor_id: '7', project_title: 'Drawing Feelings', project_question: 'If you could visualize your feelings what would they look like?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Data Viz', slug: 'data-viz' }]
  }, {
    student_id: '21', student_name: 'Rebecca Ricks', student_slug: 'rebecca-ricks', advisor_id: '3', project_title: 'Social Assemblages', project_question: 'How can I creatively interpret Facebook data in a way that prompts users to think about how their identity is constructed online?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  }, {
    student_id: '74', student_name: 'Shir David', student_slug: 'shir-david', advisor_id: '6', project_title: 'Light Scapes', project_question: 'How I can capture light to extend the limits of traditional photography ?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '80', student_name: 'Viniyata Pany', student_slug: 'viniyata-pany', advisor_id: '6', project_title: 'Unheard', project_question: 'Do objects possess sonic properties that give them their unique aural essence? Do these essences then combine with other essences to create the physical sounds that we are able to hear?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '22', student_name: 'Wipawe Sirikolkarn', student_slug: 'wipawe-sirikolkarn', advisor_id: '3', project_title: 'Me, Myself and .io', project_question: 'Is it possible that the internet might know me better than I know myself?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Data Viz', slug: 'data-viz' }]
  }, {
    student_id: '11', student_name: 'Yuli Cai', student_slug: 'yuli-cai', advisor_id: '3', project_title: 'Wave-washed Sands: an experience with an ancient Chinese poem', project_question: 'I want to translate a Chinese poem not into words with another language but into universal feelings the words evoke.', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '61', student_name: 'rebecca (marks) leopold', student_slug: 'rebecca-(marks)-leopold', advisor_id: '5', project_title: 'the Em&#x1f636;ji Palette', project_question: 'How can we have more creative control over our data❓\r\nHow can we have more control over our creative data⁉️', topics: [{ name: 'Art', slug: 'art' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Networking', slug: 'networking' }, { name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }]
  }],
  'Education': [{
    student_id: '94', student_name: 'Aaron Parsekian', student_slug: 'aaron-parsekian', advisor_id: '9', project_title: 'thank you lights', project_question: 'Can I build something exciting and novel that is powered by everyday, often discarded materials? Can I combine new tech with trash artistically?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Education', slug: 'education' }]
  }, {
    student_id: '20', student_name: 'Daveed R. Lockard', student_slug: 'daveed-r.-lockard', advisor_id: '3', project_title: 'Encountering: Arabic', project_question: 'Could a language-learning media experience positively impact people’s attitudes toward unfamiliar cultures?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Education', slug: 'education' }]
  }, {
    student_id: '18', student_name: 'Emmanuel Y Klein', student_slug: 'emmanuel-y-klein', advisor_id: '3', project_title: 'Willo', project_question: 'Can a computer effectively engage a child in an open-ended conversation?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  }, {
    student_id: '27', student_name: 'Esther Hersh', student_slug: 'esther-hersh', advisor_id: '8', project_title: 'Lattice', project_question: 'How can design be utilized to implement tools that would \r\npromote process focused learning?\r\n', topics: [{ name: 'Education', slug: 'education' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '89', student_name: 'Ian C Gibson', student_slug: 'ian-c-gibson', advisor_id: '9', project_title: 'Vets Ready-to-Create: an MRE to empower veteran makers', project_question: 'How can technology best be used to empower military veteran makers, especially those not reached by existing veteran service organizations?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '25', student_name: 'Jamie Charry', student_slug: 'jamie-charry', advisor_id: '8', project_title: 'SETA Maker', project_question: 'Can students gain scientific intuition through making games? How can we foster a life-long relationship with scientific thinking?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Games', slug: 'games' }]
  }, {
    student_id: '67', student_name: 'Jamie Ruddy', student_slug: 'jamie-ruddy', advisor_id: '5', project_title: 'Maddy&#8217;s Secret History', project_question: 'Can I inspire middle school girls to pursue technology through storytelling?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '29', student_name: 'Jennifer Kagan', student_slug: 'jennifer-kagan', advisor_id: '8', project_title: 'whatisit.tech', project_question: 'What can I make that begins to address the power imbalance between people who make technology and people who are subject to it?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Politics', slug: 'politics' }]
  }, {
    student_id: '107', student_name: 'Lindsey F Johnson', student_slug: 'lindsey-f-johnson', advisor_id: '7', project_title: 'The Museum of Mistrust', project_question: 'How can I teach people about the history and effects of con artist in an interactive, entertaining way?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '77', student_name: 'Mathura M Govindarajan', student_slug: 'mathura-m-govindarajan', advisor_id: '6', project_title: 'Cat In A Box', project_question: 'Is it compelling to create rich educational experiences in current day education that are based on traditional forms of Indian storytelling?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '28', student_name: 'Nilomee C Jesrani', student_slug: 'nilomee-c-jesrani', advisor_id: '8', project_title: 'Exploring the Heart &#8211; A VR Experience for Medical Education', project_question: 'How might I leverage the potential of VR Technology to design a learning resource for Medical Students?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Education', slug: 'education' }, { name: 'UX-UI', slug: 'uxui' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '23', student_name: 'Regina Vetka', student_slug: 'regina-vetka', advisor_id: '3', project_title: 'Learn Your Way', project_question: 'Is it possible to create a way to teach the same information to different kind of learners?', topics: [{ name: 'Education', slug: 'education' }]
  }, {
    student_id: '19', student_name: 'Ruta Kruliauskaite', student_slug: 'ruta-kruliauskaite', advisor_id: '3', project_title: 'Wonder Corner', project_question: 'If there were ways to encourage adults to reawaken their childlike curiosity and wonder about the world, what kind of experience would it be?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '109', student_name: 'Satbir Samantha Multani', student_slug: 'satbir-samantha-multani', advisor_id: '7', project_title: 'Interstitial Exhibits In Design Lab', project_question: 'How do museum visitors craft their own learning? ', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  }],
  'Performance': [{
    student_id: '79', student_name: 'Aarón Montoya-Moraga', student_slug: 'aarón-montoya-moraga', advisor_id: '6', project_title: 'its_ok', project_question: 'How can we use technology to achieve catharsis and self-acceptance?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '12', student_name: 'Jordan Frand', student_slug: 'jordan-frand', advisor_id: '3', project_title: 'K.W.E.E.N.', project_question: 'How can wearable technology enhance the performance and expressivity of drag queens and other performers of femininity?', topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '59', student_name: 'Naoki Ishizuka', student_slug: 'naoki-ishizuka', advisor_id: '5', project_title: '@veatrapper', project_question: 'How can I rap from video in a way it encapsulate relationship with video that Hiphop has right now??', topics: [{ name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '71', student_name: 'Nicola Carpeggiani', student_slug: 'nicola-carpeggiani', advisor_id: '6', project_title: 'Sampledelia &#8211; an audiovisual “non-time” experience', project_question: 'How can I create an immersive music performance that involves different medias in the same creative process ? \r\n\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '101', student_name: 'Renata De Carvalho Gaui', student_slug: 'renata-de-carvalho-gaui', advisor_id: '7', project_title: 'The hysterical wearable', project_question: 'how can technology prompt conversations about micro-aggressions towards females?', topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '82', student_name: 'Yao', student_slug: 'yao', advisor_id: '6', project_title: 'Gravity', project_question: 'How can interactive immersive motion-capture environment provide a better way for users to connect with each other and manipulate the physical and digital space around them?\r\n', topics: [{ name: 'Games', slug: 'games' }, { name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
  }],
  'Installation': [{
    student_id: '83', student_name: 'Adi Wiedersheim Sendagorta', student_slug: 'adi-wiedersheim-sendagorta', advisor_id: '6', project_title: 'Here and There', project_question: 'How can I create more tangible connections between us and the ever-changing perception and distortion of our memories? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '81', student_name: 'Angela Perrone', student_slug: 'angela-perrone', advisor_id: '6', project_title: 'Museum of Funny Ladies &#8211; A Museumette', project_question: 'How can I create an innovative, interactive experience that tells a piece of the history of women in comedy?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '65', student_name: 'Chelsea Jane Pfohl', student_slug: 'chelsea-jane-pfohl', advisor_id: '5', project_title: 'The Nutshell Experience', project_question: 'How could a virtual reality experience replicate and augment the lessons homicide investigators learn from Frances Glessner Lee’s Nutshell Studies?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '99', student_name: 'Danielle I Butler', student_slug: 'danielle-i-butler', advisor_id: '7', project_title: 'Safe House, A Complex Story Told Small', project_question: 'How can complex social issues be addressed when they can’t be directly interacted with due to geography or scale? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '88', student_name: 'Ella Dagan Pelled', student_slug: 'ella-dagan-pelled', advisor_id: '9', project_title: 'The Cloakroom', project_question: 'How could ubiquitous things reflect our thoughts and feelings? \r\nCan I find new ways to share our personal stories? \r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '38', student_name: 'Fengyi Franklin Zhu', student_slug: 'fengyi-franklin-zhu', advisor_id: '8', project_title: 'A Ritual that Lasts Forever', project_question: 'Can traditional worship survive in our technology-driven era?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '95', student_name: 'Francesca Rodriguez Sawaya', student_slug: 'francesca-rodriguez-sawaya', advisor_id: '9', project_title: 'texere', project_question: 'How can technology marry tradition?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '63', student_name: 'Gal Nissim', student_slug: 'gal-nissim', advisor_id: '5', project_title: 'Rat Tale', project_question: 'What makes one perceive something as either attractive or disgusting, and how this perception can be shifted?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '52', student_name: 'Hao Tseng', student_slug: 'hao-tseng', advisor_id: '4', project_title: 'Let Go Machine', project_question: 'Is it possible to create an interactive experience that can liberate people from the negativity of regret?\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '72', student_name: 'Ishaan M Chaudhary', student_slug: 'ishaan-m-chaudhary', advisor_id: '6', project_title: 'EKTA : A multi-sensory experience', project_question: 'How can I augment my music &amp; bring strangers together in unexpected ways through the use of technology?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '76', student_name: 'Jared Friedman', student_slug: 'jared-friedman', advisor_id: '6', project_title: 'Geode #1 (Fun House)', project_question: 'How can I engineer a personal space to create a moment of ecstatic disruption?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '24', student_name: 'Jed D Watson', student_slug: 'jed-d-watson', advisor_id: '3', project_title: 'Deployed: A dependent’s journey through a military deployment experience.', project_question: 'What does it feel like to be a military child during a military deployment cycle?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '97', student_name: 'Katie Temrowski', student_slug: 'katie-temrowski', advisor_id: '9', project_title: 'Townsquare', project_question: 'How can design and technology be used to create information equity to promote civic engagement within a redeveloping city like Detroit?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '107', student_name: 'Lindsey F Johnson', student_slug: 'lindsey-f-johnson', advisor_id: '7', project_title: 'The Museum of Mistrust', project_question: 'How can I teach people about the history and effects of con artist in an interactive, entertaining way?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '90', student_name: 'Lisa Jamhoury', student_slug: 'lisa-jamhoury', advisor_id: '9', project_title: 'Facing You: An Interactive Installation Exploring Life Inside the Internet of Experiences', project_question: 'What does an embodied experience on the internet look like? Is it possible to feel physically present in virtual space?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Networking', slug: 'networking' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '57', student_name: 'Michelle Hessel Alves', student_slug: 'michelle-hessel-alves', advisor_id: '5', project_title: 'Hidden in Plain Sight', project_question: 'What are the stories behind the New York City food carts?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '110', student_name: 'Muqing Niu', student_slug: 'muqing-niu', advisor_id: '7', project_title: 'Minsta', project_question: 'How can I bring people happiness when they check the weather in the long and gloomy winters? Can social media data be connected with weather data in a way that delights people when they check the weather?\r\n', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Installation', slug: 'installation' }, { name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '71', student_name: 'Nicola Carpeggiani', student_slug: 'nicola-carpeggiani', advisor_id: '6', project_title: 'Sampledelia &#8211; an audiovisual “non-time” experience', project_question: 'How can I create an immersive music performance that involves different medias in the same creative process ? \r\n\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '19', student_name: 'Ruta Kruliauskaite', student_slug: 'ruta-kruliauskaite', advisor_id: '3', project_title: 'Wonder Corner', project_question: 'If there were ways to encourage adults to reawaken their childlike curiosity and wonder about the world, what kind of experience would it be?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '109', student_name: 'Satbir Samantha Multani', student_slug: 'satbir-samantha-multani', advisor_id: '7', project_title: 'Interstitial Exhibits In Design Lab', project_question: 'How do museum visitors craft their own learning? ', topics: [{ name: 'Education', slug: 'education' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '93', student_name: 'Serena M Parr', student_slug: 'serena-m-parr', advisor_id: '9', project_title: 'Record in Flow', project_question: "How can I share my 360 videos from Standing Rock in a way that's helpful to the effort I documented?", topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '74', student_name: 'Shir David', student_slug: 'shir-david', advisor_id: '6', project_title: 'Light Scapes', project_question: 'How I can capture light to extend the limits of traditional photography ?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '82', student_name: 'Yao', student_slug: 'yao', advisor_id: '6', project_title: 'Gravity', project_question: 'How can interactive immersive motion-capture environment provide a better way for users to connect with each other and manipulate the physical and digital space around them?\r\n', topics: [{ name: 'Games', slug: 'games' }, { name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '11', student_name: 'Yuli Cai', student_slug: 'yuli-cai', advisor_id: '3', project_title: 'Wave-washed Sands: an experience with an ancient Chinese poem', project_question: 'I want to translate a Chinese poem not into words with another language but into universal feelings the words evoke.', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }]
  }],
  'Storytelling': [{
    student_id: '81', student_name: 'Angela Perrone', student_slug: 'angela-perrone', advisor_id: '6', project_title: 'Museum of Funny Ladies &#8211; A Museumette', project_question: 'How can I create an innovative, interactive experience that tells a piece of the history of women in comedy?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '47', student_name: 'Anne K Goodfriend', student_slug: 'anne-k-goodfriend', advisor_id: '4', project_title: 'A Place to Remember', project_question: 'How can urban-centered immersive experiences be crafted to recall and retell our stories of community, and place?', topics: [{ name: 'Social Good', slug: 'social-good' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '43', student_name: 'Christina B Choi', student_slug: 'christina-b-choi', advisor_id: '4', project_title: 'Plastic Soup: an interactive sea of consumer waste', project_question: 'How can interactive storytelling embrace nonlinear narrative and engage users in the open discovery of information?', topics: [{ name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '122', student_name: 'Daniel Silber-Baker', student_slug: 'daniel-silber-baker', advisor_id: '9', project_title: 'Words Birth Worlds', project_question: 'How/ Can A Poem Get Someone Out Of Prison?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '99', student_name: 'Danielle I Butler', student_slug: 'danielle-i-butler', advisor_id: '7', project_title: 'Safe House, A Complex Story Told Small', project_question: 'How can complex social issues be addressed when they can’t be directly interacted with due to geography or scale? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '88', student_name: 'Ella Dagan Pelled', student_slug: 'ella-dagan-pelled', advisor_id: '9', project_title: 'The Cloakroom', project_question: 'How could ubiquitous things reflect our thoughts and feelings? \r\nCan I find new ways to share our personal stories? \r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '95', student_name: 'Francesca Rodriguez Sawaya', student_slug: 'francesca-rodriguez-sawaya', advisor_id: '9', project_title: 'texere', project_question: 'How can technology marry tradition?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '52', student_name: 'Hao Tseng', student_slug: 'hao-tseng', advisor_id: '4', project_title: 'Let Go Machine', project_question: 'Is it possible to create an interactive experience that can liberate people from the negativity of regret?\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '67', student_name: 'Jamie Ruddy', student_slug: 'jamie-ruddy', advisor_id: '5', project_title: 'Maddy&#8217;s Secret History', project_question: 'Can I inspire middle school girls to pursue technology through storytelling?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '24', student_name: 'Jed D Watson', student_slug: 'jed-d-watson', advisor_id: '3', project_title: 'Deployed: A dependent’s journey through a military deployment experience.', project_question: 'What does it feel like to be a military child during a military deployment cycle?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '55', student_name: 'Jonathan James Gallagher', student_slug: 'jonathan-james-gallagher', advisor_id: '5', project_title: 'Yn Erre Auro', project_question: 'How can two users experience the unification of their conscious and unconscious through asymmetrical interaction in VR?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '102', student_name: 'Juan Jose Egusquiza', student_slug: 'juan-jose-egusquiza', advisor_id: '7', project_title: 're·al·i·ty', project_question: 'How can I - through the use of technology- grab elements from our daily life and combine them to create a new reality? ', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '35', student_name: 'Kevin Stirnweis', student_slug: 'kevin-stirnweis', advisor_id: '8', project_title: 'Filet', project_question: 'How can virtual reality be used to tell personal stories? To what extent does it lend itself to autobiographical content?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '111', student_name: 'Marcela Nowak', student_slug: 'marcela-nowak', advisor_id: '7', project_title: 'The Dream Catcher', project_question: 'How can we translate the experience of a dream into the world of virtual reality?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Games', slug: 'games' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '77', student_name: 'Mathura M Govindarajan', student_slug: 'mathura-m-govindarajan', advisor_id: '6', project_title: 'Cat In A Box', project_question: 'Is it compelling to create rich educational experiences in current day education that are based on traditional forms of Indian storytelling?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '57', student_name: 'Michelle Hessel Alves', student_slug: 'michelle-hessel-alves', advisor_id: '5', project_title: 'Hidden in Plain Sight', project_question: 'What are the stories behind the New York City food carts?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '42', student_name: 'Paula Ceballos Delgado', student_slug: 'paula-ceballos-delgado', advisor_id: '4', project_title: '[divine_pixels]', project_question: 'How can ancient fortune-telling rituals be reimagined using modern technology? \r\n\r\n', topics: [{ name: 'Speculative Design', slug: 'speculative-design' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '58', student_name: 'Sisa Bueno', student_slug: 'sisa-bueno', advisor_id: '5', project_title: 'CLOSED CELLS, OPEN WOUNDS: The Collective Damage of Mass Incarceration', project_question: 'Can live action video remain an essential medium for deconstructed, abstract storytelling in cinematic virtual reality?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '40', student_name: 'Xingjian An', student_slug: 'xingjian-an', advisor_id: '4', project_title: 'The Great Liar', project_question: 'How does VR offer new possibilities for storytelling in an immersive environment?\r\n\r\n', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '36', student_name: 'Xuhui Xu', student_slug: 'xuhui-xu', advisor_id: '8', project_title: 'Mistory', project_question: 'How to trigger people to share their past stories?\r\n', topics: [{ name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '32', student_name: 'Yiting Liu', student_slug: 'yiting-liu', advisor_id: '8', project_title: 'Catching Santa: A Virtual Reality Fairy Tale', project_question: 'How do new technologies allow us to reinterpret fairy tales? How do new technologies transform the way we experience stories? ', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '106', student_name: 'Yue Hu', student_slug: 'yue-hu', advisor_id: '7', project_title: 'Once Go Back', project_question: 'How to improve the emotions or feelings in VR? Can sentimental emotions and feeling be improved with VR? Can scent enhance the feelings or emotions during a VR experience?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }],
  'Social Good': [{
    student_id: '47', student_name: 'Anne K Goodfriend', student_slug: 'anne-k-goodfriend', advisor_id: '4', project_title: 'A Place to Remember', project_question: 'How can urban-centered immersive experiences be crafted to recall and retell our stories of community, and place?', topics: [{ name: 'Social Good', slug: 'social-good' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '92', student_name: 'Dhruv R Mehrotra', student_slug: 'dhruv-r-mehrotra', advisor_id: '9', project_title: 'Othernet', project_question: 'Othernet: Internet Island', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '89', student_name: 'Ian C Gibson', student_slug: 'ian-c-gibson', advisor_id: '9', project_title: 'Vets Ready-to-Create: an MRE to empower veteran makers', project_question: 'How can technology best be used to empower military veteran makers, especially those not reached by existing veteran service organizations?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '86', student_name: 'Jason Beck', student_slug: 'jason-beck', advisor_id: '9', project_title: 'Play:Connected', project_question: 'How can connected devices unite children with and without disabilities through play?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '34', student_name: 'Jessica L Scott-Dutcher', student_slug: 'jessica-l-scott-dutcher', advisor_id: '8', project_title: 'Greenly', project_question: 'How can I get more New Yorkers into nature? How can I deepen their experiences into a lasting love?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '97', student_name: 'Katie Temrowski', student_slug: 'katie-temrowski', advisor_id: '9', project_title: 'Townsquare', project_question: 'How can design and technology be used to create information equity to promote civic engagement within a redeveloping city like Detroit?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '33', student_name: 'Leslie Ruckman', student_slug: 'leslie-ruckman', advisor_id: '8', project_title: 'Well Rounded: collecting change for collective change', project_question: 'How can consumer behaviors be leveraged to create positive change in the world around us?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '17', student_name: 'Nikita R Huggins', student_slug: 'nikita-r-huggins', advisor_id: '3', project_title: 'TRINI TALK', project_question: 'I want to create an online presence for the Trinidadian language, culture, and history to make it more widely known among natives of the island.', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '87', student_name: 'Olivia Cueva', student_slug: 'olivia-cueva', advisor_id: '9', project_title: 'The Periodical', project_question: 'How can we redesign the experience of getting a menstrual period so that it feels celebratory? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '98', student_name: 'Ravyn L Whitley', student_slug: 'ravyn-l-whitley', advisor_id: '9', project_title: 'TALK B[L]ACK', project_question: 'How to effectively create an online community for black women that celebrates and uplifts aspects of black culture and provides resources for daily life that promotes health and well being?\r\n\r\n', topics: [{ name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '93', student_name: 'Serena M Parr', student_slug: 'serena-m-parr', advisor_id: '9', project_title: 'Record in Flow', project_question: "How can I share my 360 videos from Standing Rock in a way that's helpful to the effort I documented?", topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Social Good', slug: 'social-good' }]
  }],
  'VR': [{
    student_id: '65', student_name: 'Chelsea Jane Pfohl', student_slug: 'chelsea-jane-pfohl', advisor_id: '5', project_title: 'The Nutshell Experience', project_question: 'How could a virtual reality experience replicate and augment the lessons homicide investigators learn from Frances Glessner Lee’s Nutshell Studies?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '39', student_name: 'Fengyuan Zhu', student_slug: 'fengyuan-zhu', advisor_id: '8', project_title: 'Magic Window Mixed Reality System', project_question: 'How can we merge the virtual experiences of VR/AR users and the spectators in the same physical space, for reducing the isolation of one group from the other?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '66', student_name: 'Joakim Gregersen Quach', student_slug: 'joakim-gregersen-quach', advisor_id: '5', project_title: 'Physical Objects in Augmented Reality', project_question: 'How can physical objects help shape our experience in augmented reality? How can we use physical objects as controllers to create and shape content in augmented reality?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '55', student_name: 'Jonathan James Gallagher', student_slug: 'jonathan-james-gallagher', advisor_id: '5', project_title: 'Yn Erre Auro', project_question: 'How can two users experience the unification of their conscious and unconscious through asymmetrical interaction in VR?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '102', student_name: 'Juan Jose Egusquiza', student_slug: 'juan-jose-egusquiza', advisor_id: '7', project_title: 're·al·i·ty', project_question: 'How can I - through the use of technology- grab elements from our daily life and combine them to create a new reality? ', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '35', student_name: 'Kevin Stirnweis', student_slug: 'kevin-stirnweis', advisor_id: '8', project_title: 'Filet', project_question: 'How can virtual reality be used to tell personal stories? To what extent does it lend itself to autobiographical content?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '111', student_name: 'Marcela Nowak', student_slug: 'marcela-nowak', advisor_id: '7', project_title: 'The Dream Catcher', project_question: 'How can we translate the experience of a dream into the world of virtual reality?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Games', slug: 'games' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '84', student_name: 'Nai-Chen Yang', student_slug: 'nai-chen-yang', advisor_id: '6', project_title: 'The Undelivered Letters', project_question: 'How can emerging media advance the field of journalistic documentary and history?\r\n\r\n', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '28', student_name: 'Nilomee C Jesrani', student_slug: 'nilomee-c-jesrani', advisor_id: '8', project_title: 'Exploring the Heart &#8211; A VR Experience for Medical Education', project_question: 'How might I leverage the potential of VR Technology to design a learning resource for Medical Students?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Education', slug: 'education' }, { name: 'UX-UI', slug: 'uxui' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '91', student_name: 'Peiyu Luo', student_slug: 'peiyu-luo', advisor_id: '9', project_title: 'Chakr Glove', project_question: 'How can I provide more feedback in a virtual reality experience to make it feel more real?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '58', student_name: 'Sisa Bueno', student_slug: 'sisa-bueno', advisor_id: '5', project_title: 'CLOSED CELLS, OPEN WOUNDS: The Collective Damage of Mass Incarceration', project_question: 'Can live action video remain an essential medium for deconstructed, abstract storytelling in cinematic virtual reality?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '112', student_name: 'Wangshu Sun', student_slug: 'wangshu-sun', advisor_id: '7', project_title: 'Dream of Wings', project_question: 'How can I design and recreate a dream-like flying experience, making it more flowy and intuitive?', topics: [{ name: 'VR', slug: 'vr' }]
  }, {
    student_id: '30', student_name: 'William Erwin Quest Kennelly', student_slug: 'william-erwin-quest-kennelly', advisor_id: '8', project_title: 'Orbital Sustainability', project_question: 'Current space launch systems are cost prohibitive, and environmentally taxing. How might a VR exhibit of comparative space launch technology inspire next generation solutions?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Speculative Design', slug: 'speculative-design' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '40', student_name: 'Xingjian An', student_slug: 'xingjian-an', advisor_id: '4', project_title: 'The Great Liar', project_question: 'How does VR offer new possibilities for storytelling in an immersive environment?\r\n\r\n', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '32', student_name: 'Yiting Liu', student_slug: 'yiting-liu', advisor_id: '8', project_title: 'Catching Santa: A Virtual Reality Fairy Tale', project_question: 'How do new technologies allow us to reinterpret fairy tales? How do new technologies transform the way we experience stories? ', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '106', student_name: 'Yue Hu', student_slug: 'yue-hu', advisor_id: '7', project_title: 'Once Go Back', project_question: 'How to improve the emotions or feelings in VR? Can sentimental emotions and feeling be improved with VR? Can scent enhance the feelings or emotions during a VR experience?', topics: [{ name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '62', student_name: 'Yun Li', student_slug: 'yun-li', advisor_id: '5', project_title: 'Temporal Paradox', project_question: 'How could I create a virtual reality game that is about time?', topics: [{ name: 'Games', slug: 'games' }, { name: 'VR', slug: 'vr' }]
  }],
  'Behavior': [{
    student_id: '60', student_name: 'Chino Kim', student_slug: 'chino-kim', advisor_id: '5', project_title: 'Mouth to Mouth Dating', project_question: 'Can a single phone number save the telephone, modern dating and the internet at large?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '70', student_name: 'Dana Abrassart', student_slug: 'dana-abrassart', advisor_id: '6', project_title: 'emBody', project_question: 'How do I design an application for motion capture that encourages mindfulness and body awareness with real-time sonic feedback?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '20', student_name: 'Daveed R. Lockard', student_slug: 'daveed-r.-lockard', advisor_id: '3', project_title: 'Encountering: Arabic', project_question: 'Could a language-learning media experience positively impact people’s attitudes toward unfamiliar cultures?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Education', slug: 'education' }]
  }, {
    student_id: '49', student_name: 'Doo Yon Kim (Don)', student_slug: 'doo-yon-kim-(don)', advisor_id: '4', project_title: '❒ LETS : Efficient Platform to Make People Social in Real World.', project_question: 'What Would be an Efficient Way to Make People Social in Real World? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Mobile Apps', slug: 'mobile-apps' }]
  }, {
    student_id: '53', student_name: 'Eve J Weinberg', student_slug: 'eve-j-weinberg', advisor_id: '4', project_title: 'UXMovesMe.com', project_question: 'How does Motion Graphics make UX more persuasive? And what is the psychology behind it?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '63', student_name: 'Gal Nissim', student_slug: 'gal-nissim', advisor_id: '5', project_title: 'Rat Tale', project_question: 'What makes one perceive something as either attractive or disgusting, and how this perception can be shifted?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Installation', slug: 'installation' }]
  }, {
    student_id: '31', student_name: 'KC Lathrop', student_slug: 'kc-lathrop', advisor_id: '8', project_title: 'KNOCKED down!', project_question: 'How can playful movement help people let go of their insecurities and fears?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Games', slug: 'games' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '68', student_name: 'Kritchaya Twitchsri', student_slug: 'kritchaya-twitchsri', advisor_id: '5', project_title: 'Mind tuning with &#8216;WAVE&#8217;', project_question: 'How can technology tap into our senses and guide through positive behaviour change? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '14', student_name: 'Ying He', student_slug: 'ying-he', advisor_id: '3', project_title: 'UpDate', project_question: 'Long-distance relationships are hard. Can an enhanced online calendar strengthen feelings of connection and release the power of the unspoken?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Data Viz', slug: 'data-viz' }]
  }],
  'Product-Tool': [{
    student_id: '60', student_name: 'Chino Kim', student_slug: 'chino-kim', advisor_id: '5', project_title: 'Mouth to Mouth Dating', project_question: 'Can a single phone number save the telephone, modern dating and the internet at large?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '41', student_name: 'Cristina Cannella', student_slug: 'cristina-cannella', advisor_id: '4', project_title: 'Navigating with Mynd Map', project_question: 'What would a navigational interface look like that could build our natural sense of direction?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '45', student_name: 'Dhruv Damle', student_slug: 'dhruv-damle', advisor_id: '4', project_title: 'Seedling', project_question: 'How can technology address changes in resources, needs and outcomes of indoor farming?', topics: [{ name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '27', student_name: 'Esther Hersh', student_slug: 'esther-hersh', advisor_id: '8', project_title: 'Lattice', project_question: 'How can design be utilized to implement tools that would \r\npromote process focused learning?\r\n', topics: [{ name: 'Education', slug: 'education' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '53', student_name: 'Eve J Weinberg', student_slug: 'eve-j-weinberg', advisor_id: '4', project_title: 'UXMovesMe.com', project_question: 'How does Motion Graphics make UX more persuasive? And what is the psychology behind it?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '39', student_name: 'Fengyuan Zhu', student_slug: 'fengyuan-zhu', advisor_id: '8', project_title: 'Magic Window Mixed Reality System', project_question: 'How can we merge the virtual experiences of VR/AR users and the spectators in the same physical space, for reducing the isolation of one group from the other?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '16', student_name: 'Jesse A Horwitz', student_slug: 'jesse-a-horwitz', advisor_id: '3', project_title: 'The Radius Project', project_question: 'How can I know the number of people around me even if I can’t see all of them? Can a portable device be built to answer this question?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '105', student_name: 'Jiaqi Guo', student_slug: 'jiaqi-guo', advisor_id: '7', project_title: 'From Photorealistic to Artistic Rendering', project_question: 'How can we approach recreating hand-painted Japanese Anime art with contemporary 3D computer graphics imagery?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '66', student_name: 'Joakim Gregersen Quach', student_slug: 'joakim-gregersen-quach', advisor_id: '5', project_title: 'Physical Objects in Augmented Reality', project_question: 'How can physical objects help shape our experience in augmented reality? How can we use physical objects as controllers to create and shape content in augmented reality?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '68', student_name: 'Kritchaya Twitchsri', student_slug: 'kritchaya-twitchsri', advisor_id: '5', project_title: 'Mind tuning with &#8216;WAVE&#8217;', project_question: 'How can technology tap into our senses and guide through positive behaviour change? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '73', student_name: 'Kylin Chen', student_slug: 'kylin-chen', advisor_id: '6', project_title: 'How to Do Things with Gestures', project_question: 'How can I use design thinking to provide a human-centric way to understand and to interpret gestures; and ultimately, to create meaningful, intuitive gestural interactions?\r\n\r\n', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '90', student_name: 'Lisa Jamhoury', student_slug: 'lisa-jamhoury', advisor_id: '9', project_title: 'Facing You: An Interactive Installation Exploring Life Inside the Internet of Experiences', project_question: 'What does an embodied experience on the internet look like? Is it possible to feel physically present in virtual space?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Networking', slug: 'networking' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '123', student_name: 'Lisa Song', student_slug: 'lisa-song', advisor_id: '3', project_title: 'powerSplit', project_question: "How can we use technology to not only control, monitor and track electricity usage but also change people's behavioral habits to reduce unnecessary power usage?", topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '110', student_name: 'Muqing Niu', student_slug: 'muqing-niu', advisor_id: '7', project_title: 'Minsta', project_question: 'How can I bring people happiness when they check the weather in the long and gloomy winters? Can social media data be connected with weather data in a way that delights people when they check the weather?\r\n', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Installation', slug: 'installation' }, { name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '87', student_name: 'Olivia Cueva', student_slug: 'olivia-cueva', advisor_id: '9', project_title: 'The Periodical', project_question: 'How can we redesign the experience of getting a menstrual period so that it feels celebratory? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '96', student_name: 'Osama M Sehgol', student_slug: 'osama-m-sehgol', advisor_id: '9', project_title: 'TimeSvr.com &#8211; Connecting digitally fatigued users to a distributed network of taskers.', project_question: 'Can virtually ordered jobs offer better connections between contracting parties? TimeSvr - is a test case for addressing ethical issues faced by workers of the networked age.', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '91', student_name: 'Peiyu Luo', student_slug: 'peiyu-luo', advisor_id: '9', project_title: 'Chakr Glove', project_question: 'How can I provide more feedback in a virtual reality experience to make it feel more real?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '75', student_name: 'Philip J Donaldson', student_slug: 'philip-j-donaldson', advisor_id: '6', project_title: 'Breadcrumbs: Postcards from the present', project_question: 'Is it possible for us to untether ourselves from our devices in a way that also allows us to remember life’s special moments?', topics: [{ name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '48', student_name: 'Skylar Jessen', student_slug: 'skylar-jessen', advisor_id: '4', project_title: 'Humans Being Human Beings: An Exploration in Decompressing Design', project_question: 'How can we remove some of the compression digital tools place on our perception of self and the world around us? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  }, {
    student_id: '44', student_name: 'Soyeon Chung', student_slug: 'soyeon-chung', advisor_id: '4', project_title: 'One less hamburger', project_question: 'How can I help people make sustainable food choices by informing them of the impact of their meat eating habits on the environment?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '78', student_name: 'Xiwei Huang', student_slug: 'xiwei-huang', advisor_id: '6', project_title: 'The CompBack, a video compositing tool for video with complex backgrounds', project_question: 'How can I use the speed and efficiency of machine learning to create a video compositing feature that works fast on videos with complex background?', topics: [{ name: 'Product-Tool', slug: 'producttool' }]
  }],
  'Machine Learning': [{
    student_id: '64', student_name: 'Corbin Y Ordel', student_slug: 'corbin-y-ordel', advisor_id: '5', project_title: 'A CLOUD IN BLUE SKY', project_question: 'Can computers and humankind work in tandem to contextualize our world through photographs?\r\n\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Machine Learning', slug: 'machine-learning' }]
  }, {
    student_id: '104', student_name: 'Gao Yuan', student_slug: 'gao-yuan', advisor_id: '7', project_title: 'Towards Neural Music Style Transfer', project_question: 'Can we transfer the style of one musician to a piece of music recorded by a different musician?', topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '26', student_name: 'Leon Eckert', student_slug: 'leon-eckert', advisor_id: '8', project_title: 'Biometric Intimacy', project_question: 'By analysing the rhythm of my keystrokes, can a machine learning algorithm make guesses about my mental state?', topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Privacy', slug: 'privacy' }]
  }],
  'UX-UI': [{
    student_id: '41', student_name: 'Cristina Cannella', student_slug: 'cristina-cannella', advisor_id: '4', project_title: 'Navigating with Mynd Map', project_question: 'What would a navigational interface look like that could build our natural sense of direction?', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '53', student_name: 'Eve J Weinberg', student_slug: 'eve-j-weinberg', advisor_id: '4', project_title: 'UXMovesMe.com', project_question: 'How does Motion Graphics make UX more persuasive? And what is the psychology behind it?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '100', student_name: 'Jamal M Combs', student_slug: 'jamal-m-combs', advisor_id: '7', project_title: 'Jamal Combs Action Points (JCAP): Critiquing Role-Playing Game Interfaces', project_question: 'What are characteristics and elements of a successful role-playing game interface that make a compelling experience?', topics: [{ name: 'Games', slug: 'games' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '34', student_name: 'Jessica L Scott-Dutcher', student_slug: 'jessica-l-scott-dutcher', advisor_id: '8', project_title: 'Greenly', project_question: 'How can I get more New Yorkers into nature? How can I deepen their experiences into a lasting love?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '68', student_name: 'Kritchaya Twitchsri', student_slug: 'kritchaya-twitchsri', advisor_id: '5', project_title: 'Mind tuning with &#8216;WAVE&#8217;', project_question: 'How can technology tap into our senses and guide through positive behaviour change? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '73', student_name: 'Kylin Chen', student_slug: 'kylin-chen', advisor_id: '6', project_title: 'How to Do Things with Gestures', project_question: 'How can I use design thinking to provide a human-centric way to understand and to interpret gestures; and ultimately, to create meaningful, intuitive gestural interactions?\r\n\r\n', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '33', student_name: 'Leslie Ruckman', student_slug: 'leslie-ruckman', advisor_id: '8', project_title: 'Well Rounded: collecting change for collective change', project_question: 'How can consumer behaviors be leveraged to create positive change in the world around us?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '123', student_name: 'Lisa Song', student_slug: 'lisa-song', advisor_id: '3', project_title: 'powerSplit', project_question: "How can we use technology to not only control, monitor and track electricity usage but also change people's behavioral habits to reduce unnecessary power usage?", topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '28', student_name: 'Nilomee C Jesrani', student_slug: 'nilomee-c-jesrani', advisor_id: '8', project_title: 'Exploring the Heart &#8211; A VR Experience for Medical Education', project_question: 'How might I leverage the potential of VR Technology to design a learning resource for Medical Students?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Education', slug: 'education' }, { name: 'UX-UI', slug: 'uxui' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '87', student_name: 'Olivia Cueva', student_slug: 'olivia-cueva', advisor_id: '9', project_title: 'The Periodical', project_question: 'How can we redesign the experience of getting a menstrual period so that it feels celebratory? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '98', student_name: 'Ravyn L Whitley', student_slug: 'ravyn-l-whitley', advisor_id: '9', project_title: 'TALK B[L]ACK', project_question: 'How to effectively create an online community for black women that celebrates and uplifts aspects of black culture and provides resources for daily life that promotes health and well being?\r\n\r\n', topics: [{ name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '44', student_name: 'Soyeon Chung', student_slug: 'soyeon-chung', advisor_id: '4', project_title: 'One less hamburger', project_question: 'How can I help people make sustainable food choices by informing them of the impact of their meat eating habits on the environment?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '54', student_name: 'Xiqiao Zhou', student_slug: 'xiqiao-zhou', advisor_id: '4', project_title: 'Color Your World', project_question: 'How to make the art drawing application, as a form of personal expression, be more creative and easier to use?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '113', student_name: 'Yan Zhao', student_slug: 'yan-zhao', advisor_id: '7', project_title: 'Decluttering Bot', project_question: 'How can technology encourages decluttering, while also brings awareness to overconsumption habits?\r\n', topics: [{ name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '51', student_name: 'Zhuoxi', student_slug: 'zhuoxi', advisor_id: '4', project_title: 'Redesign of ITP website for students', project_question: '', topics: [{ name: 'UX-UI', slug: 'uxui' }]
  }],
  'Music-Sound': [{
    student_id: '70', student_name: 'Dana Abrassart', student_slug: 'dana-abrassart', advisor_id: '6', project_title: 'emBody', project_question: 'How do I design an application for motion capture that encourages mindfulness and body awareness with real-time sonic feedback?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '99', student_name: 'Danielle I Butler', student_slug: 'danielle-i-butler', advisor_id: '7', project_title: 'Safe House, A Complex Story Told Small', project_question: 'How can complex social issues be addressed when they can’t be directly interacted with due to geography or scale? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '104', student_name: 'Gao Yuan', student_slug: 'gao-yuan', advisor_id: '7', project_title: 'Towards Neural Music Style Transfer', project_question: 'Can we transfer the style of one musician to a piece of music recorded by a different musician?', topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '72', student_name: 'Ishaan M Chaudhary', student_slug: 'ishaan-m-chaudhary', advisor_id: '6', project_title: 'EKTA : A multi-sensory experience', project_question: 'How can I augment my music &amp; bring strangers together in unexpected ways through the use of technology?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }]
  }, {
    student_id: '59', student_name: 'Naoki Ishizuka', student_slug: 'naoki-ishizuka', advisor_id: '5', project_title: '@veatrapper', project_question: 'How can I rap from video in a way it encapsulate relationship with video that Hiphop has right now??', topics: [{ name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '71', student_name: 'Nicola Carpeggiani', student_slug: 'nicola-carpeggiani', advisor_id: '6', project_title: 'Sampledelia &#8211; an audiovisual “non-time” experience', project_question: 'How can I create an immersive music performance that involves different medias in the same creative process ? \r\n\r\n', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '80', student_name: 'Viniyata Pany', student_slug: 'viniyata-pany', advisor_id: '6', project_title: 'Unheard', project_question: 'Do objects possess sonic properties that give them their unique aural essence? Do these essences then combine with other essences to create the physical sounds that we are able to hear?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Wearables', slug: 'wearables' }]
  }],
  'Algorithms': [{
    student_id: '122', student_name: 'Daniel Silber-Baker', student_slug: 'daniel-silber-baker', advisor_id: '9', project_title: 'Words Birth Worlds', project_question: 'How/ Can A Poem Get Someone Out Of Prison?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '10', student_name: 'Gustavo Eduardo de Campos Abbott', student_slug: 'gustavo-eduardo-de-campos-abbott', advisor_id: '3', project_title: 'How To Draw A Cube', project_question: 'How many possible ways are there to draw a cube, given the condition that each successively drawn edge is connected to a previously drawn edge?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  }, {
    student_id: '13', student_name: 'Nicole He', student_slug: 'nicole-he', advisor_id: '3', project_title: 'The Best Art', project_question: 'If computers are way smarter than I am, why shouldn’t the computer come up with my thesis project ideas?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  }, {
    student_id: '21', student_name: 'Rebecca Ricks', student_slug: 'rebecca-ricks', advisor_id: '3', project_title: 'Social Assemblages', project_question: 'How can I creatively interpret Facebook data in a way that prompts users to think about how their identity is constructed online?', topics: [{ name: 'Algorithms', slug: 'algorithms' }, { name: 'Art', slug: 'art' }]
  }, {
    student_id: '69', student_name: 'Song Eun We', student_slug: 'song-eun-we', advisor_id: '5', project_title: 'Artificial Intelligence &amp; the Future of Photojournalism', project_question: 'How can AI help photojournalists survive and thrive in the very near future?', topics: [{ name: 'Algorithms', slug: 'algorithms' }]
  }],
  'Politics': [{
    student_id: '92', student_name: 'Dhruv R Mehrotra', student_slug: 'dhruv-r-mehrotra', advisor_id: '9', project_title: 'Othernet', project_question: 'Othernet: Internet Island', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '29', student_name: 'Jennifer Kagan', student_slug: 'jennifer-kagan', advisor_id: '8', project_title: 'whatisit.tech', project_question: 'What can I make that begins to address the power imbalance between people who make technology and people who are subject to it?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Politics', slug: 'politics' }]
  }, {
    student_id: '15', student_name: 'Melanie Hoff', student_slug: 'melanie-hoff', advisor_id: '3', project_title: 'The Trust Game', project_question: 'How do social groups script rituals of exchange and how can these scripts be rewritten? ', topics: [{ name: 'Art', slug: 'art' }, { name: 'Politics', slug: 'politics' }]
  }, {
    student_id: '84', student_name: 'Nai-Chen Yang', student_slug: 'nai-chen-yang', advisor_id: '6', project_title: 'The Undelivered Letters', project_question: 'How can emerging media advance the field of journalistic documentary and history?\r\n\r\n', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '85', student_name: 'Zoe Bachman', student_slug: 'zoe-bachman', advisor_id: '9', project_title: 'diy/gyn: speculative experiments to deal with an absurdist reality', project_question: 'How can speculating about the future help us to consider the consequences of our present politics?', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  }, {
    student_id: '61', student_name: 'rebecca (marks) leopold', student_slug: 'rebecca-(marks)-leopold', advisor_id: '5', project_title: 'the Em&#x1f636;ji Palette', project_question: 'How can we have more creative control over our data❓\r\nHow can we have more control over our creative data⁉️', topics: [{ name: 'Art', slug: 'art' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Networking', slug: 'networking' }, { name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }]
  }],
  'Privacy': [{
    student_id: '92', student_name: 'Dhruv R Mehrotra', student_slug: 'dhruv-r-mehrotra', advisor_id: '9', project_title: 'Othernet', project_question: 'Othernet: Internet Island', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '26', student_name: 'Leon Eckert', student_slug: 'leon-eckert', advisor_id: '8', project_title: 'Biometric Intimacy', project_question: 'By analysing the rhythm of my keystrokes, can a machine learning algorithm make guesses about my mental state?', topics: [{ name: 'Machine Learning', slug: 'machine-learning' }, { name: 'Privacy', slug: 'privacy' }]
  }, {
    student_id: '61', student_name: 'rebecca (marks) leopold', student_slug: 'rebecca-(marks)-leopold', advisor_id: '5', project_title: 'the Em&#x1f636;ji Palette', project_question: 'How can we have more creative control over our data❓\r\nHow can we have more control over our creative data⁉️', topics: [{ name: 'Art', slug: 'art' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Networking', slug: 'networking' }, { name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }]
  }],
  'Mobile Apps': [{
    student_id: '49', student_name: 'Doo Yon Kim (Don)', student_slug: 'doo-yon-kim-(don)', advisor_id: '4', project_title: '❒ LETS : Efficient Platform to Make People Social in Real World.', project_question: 'What Would be an Efficient Way to Make People Social in Real World? ', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Mobile Apps', slug: 'mobile-apps' }]
  }, {
    student_id: '34', student_name: 'Jessica L Scott-Dutcher', student_slug: 'jessica-l-scott-dutcher', advisor_id: '8', project_title: 'Greenly', project_question: 'How can I get more New Yorkers into nature? How can I deepen their experiences into a lasting love?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '33', student_name: 'Leslie Ruckman', student_slug: 'leslie-ruckman', advisor_id: '8', project_title: 'Well Rounded: collecting change for collective change', project_question: 'How can consumer behaviors be leveraged to create positive change in the world around us?\r\n', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Social Good', slug: 'social-good' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '123', student_name: 'Lisa Song', student_slug: 'lisa-song', advisor_id: '3', project_title: 'powerSplit', project_question: "How can we use technology to not only control, monitor and track electricity usage but also change people's behavioral habits to reduce unnecessary power usage?", topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '96', student_name: 'Osama M Sehgol', student_slug: 'osama-m-sehgol', advisor_id: '9', project_title: 'TimeSvr.com &#8211; Connecting digitally fatigued users to a distributed network of taskers.', project_question: 'Can virtually ordered jobs offer better connections between contracting parties? TimeSvr - is a test case for addressing ethical issues faced by workers of the networked age.', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '44', student_name: 'Soyeon Chung', student_slug: 'soyeon-chung', advisor_id: '4', project_title: 'One less hamburger', project_question: 'How can I help people make sustainable food choices by informing them of the impact of their meat eating habits on the environment?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '54', student_name: 'Xiqiao Zhou', student_slug: 'xiqiao-zhou', advisor_id: '4', project_title: 'Color Your World', project_question: 'How to make the art drawing application, as a form of personal expression, be more creative and easier to use?', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '108', student_name: 'Yuchi Ma', student_slug: 'yuchi-ma', advisor_id: '7', project_title: 'Mobile Avatar', project_question: 'How could we show our personal mobile data back to us in a more heuristic and engaging way? ', topics: [{ name: 'Mobile Apps', slug: 'mobile-apps' }]
  }, {
    student_id: '61', student_name: 'rebecca (marks) leopold', student_slug: 'rebecca-(marks)-leopold', advisor_id: '5', project_title: 'the Em&#x1f636;ji Palette', project_question: 'How can we have more creative control over our data❓\r\nHow can we have more control over our creative data⁉️', topics: [{ name: 'Art', slug: 'art' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Networking', slug: 'networking' }, { name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }]
  }],
  'Wearables': [{
    student_id: '88', student_name: 'Ella Dagan Pelled', student_slug: 'ella-dagan-pelled', advisor_id: '9', project_title: 'The Cloakroom', project_question: 'How could ubiquitous things reflect our thoughts and feelings? \r\nCan I find new ways to share our personal stories? \r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Installation', slug: 'installation' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '50', student_name: 'EunJee Kim', student_slug: 'eunjee-kim', advisor_id: '4', project_title: 'R. WARE', project_question: 'Can I convey the concept of FbF to people through a wearable electronic device?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '12', student_name: 'Jordan Frand', student_slug: 'jordan-frand', advisor_id: '3', project_title: 'K.W.E.E.N.', project_question: 'How can wearable technology enhance the performance and expressivity of drag queens and other performers of femininity?', topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '31', student_name: 'KC Lathrop', student_slug: 'kc-lathrop', advisor_id: '8', project_title: 'KNOCKED down!', project_question: 'How can playful movement help people let go of their insecurities and fears?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Games', slug: 'games' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '91', student_name: 'Peiyu Luo', student_slug: 'peiyu-luo', advisor_id: '9', project_title: 'Chakr Glove', project_question: 'How can I provide more feedback in a virtual reality experience to make it feel more real?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '101', student_name: 'Renata De Carvalho Gaui', student_slug: 'renata-de-carvalho-gaui', advisor_id: '7', project_title: 'The hysterical wearable', project_question: 'how can technology prompt conversations about micro-aggressions towards females?', topics: [{ name: 'Performance', slug: 'performance' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '80', student_name: 'Viniyata Pany', student_slug: 'viniyata-pany', advisor_id: '6', project_title: 'Unheard', project_question: 'Do objects possess sonic properties that give them their unique aural essence? Do these essences then combine with other essences to create the physical sounds that we are able to hear?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Music-Sound', slug: 'musicsound' }, { name: 'Wearables', slug: 'wearables' }]
  }],
  'Speculative Design': [{
    student_id: '18', student_name: 'Emmanuel Y Klein', student_slug: 'emmanuel-y-klein', advisor_id: '3', project_title: 'Willo', project_question: 'Can a computer effectively engage a child in an open-ended conversation?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  }, {
    student_id: '42', student_name: 'Paula Ceballos Delgado', student_slug: 'paula-ceballos-delgado', advisor_id: '4', project_title: '[divine_pixels]', project_question: 'How can ancient fortune-telling rituals be reimagined using modern technology? \r\n\r\n', topics: [{ name: 'Speculative Design', slug: 'speculative-design' }, { name: 'Storytelling', slug: 'storytelling' }]
  }, {
    student_id: '48', student_name: 'Skylar Jessen', student_slug: 'skylar-jessen', advisor_id: '4', project_title: 'Humans Being Human Beings: An Exploration in Decompressing Design', project_question: 'How can we remove some of the compression digital tools place on our perception of self and the world around us? ', topics: [{ name: 'Product-Tool', slug: 'producttool' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  }, {
    student_id: '30', student_name: 'William Erwin Quest Kennelly', student_slug: 'william-erwin-quest-kennelly', advisor_id: '8', project_title: 'Orbital Sustainability', project_question: 'Current space launch systems are cost prohibitive, and environmentally taxing. How might a VR exhibit of comparative space launch technology inspire next generation solutions?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Speculative Design', slug: 'speculative-design' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '85', student_name: 'Zoe Bachman', student_slug: 'zoe-bachman', advisor_id: '9', project_title: 'diy/gyn: speculative experiments to deal with an absurdist reality', project_question: 'How can speculating about the future help us to consider the consequences of our present politics?', topics: [{ name: 'Politics', slug: 'politics' }, { name: 'Speculative Design', slug: 'speculative-design' }]
  }],
  'Data Viz': [{
    student_id: '50', student_name: 'EunJee Kim', student_slug: 'eunjee-kim', advisor_id: '4', project_title: 'R. WARE', project_question: 'Can I convey the concept of FbF to people through a wearable electronic device?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '46', student_name: 'Isabel M Donlon', student_slug: 'isabel-m-donlon', advisor_id: '4', project_title: 'Screen Leaks: Experiments in Personal Data Sharing', project_question: 'What kind of portrait can I make of myself by letting other people watch me on my computer?', topics: [{ name: 'Data Viz', slug: 'data-viz' }]
  }, {
    student_id: '16', student_name: 'Jesse A Horwitz', student_slug: 'jesse-a-horwitz', advisor_id: '3', project_title: 'The Radius Project', project_question: 'How can I know the number of people around me even if I can’t see all of them? Can a portable device be built to answer this question?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '110', student_name: 'Muqing Niu', student_slug: 'muqing-niu', advisor_id: '7', project_title: 'Minsta', project_question: 'How can I bring people happiness when they check the weather in the long and gloomy winters? Can social media data be connected with weather data in a way that delights people when they check the weather?\r\n', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Installation', slug: 'installation' }, { name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '17', student_name: 'Nikita R Huggins', student_slug: 'nikita-r-huggins', advisor_id: '3', project_title: 'TRINI TALK', project_question: 'I want to create an online presence for the Trinidadian language, culture, and history to make it more widely known among natives of the island.', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '28', student_name: 'Nilomee C Jesrani', student_slug: 'nilomee-c-jesrani', advisor_id: '8', project_title: 'Exploring the Heart &#8211; A VR Experience for Medical Education', project_question: 'How might I leverage the potential of VR Technology to design a learning resource for Medical Students?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Education', slug: 'education' }, { name: 'UX-UI', slug: 'uxui' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '103', student_name: 'Ondina Frate', student_slug: 'ondina-frate', advisor_id: '7', project_title: 'Drawing Feelings', project_question: 'If you could visualize your feelings what would they look like?\r\n', topics: [{ name: 'Art', slug: 'art' }, { name: 'Data Viz', slug: 'data-viz' }]
  }, {
    student_id: '30', student_name: 'William Erwin Quest Kennelly', student_slug: 'william-erwin-quest-kennelly', advisor_id: '8', project_title: 'Orbital Sustainability', project_question: 'Current space launch systems are cost prohibitive, and environmentally taxing. How might a VR exhibit of comparative space launch technology inspire next generation solutions?', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Speculative Design', slug: 'speculative-design' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '22', student_name: 'Wipawe Sirikolkarn', student_slug: 'wipawe-sirikolkarn', advisor_id: '3', project_title: 'Me, Myself and .io', project_question: 'Is it possible that the internet might know me better than I know myself?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Data Viz', slug: 'data-viz' }]
  }, {
    student_id: '14', student_name: 'Ying He', student_slug: 'ying-he', advisor_id: '3', project_title: 'UpDate', project_question: 'Long-distance relationships are hard. Can an enhanced online calendar strengthen feelings of connection and release the power of the unspoken?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Data Viz', slug: 'data-viz' }]
  }],
  'Games': [{
    student_id: '100', student_name: 'Jamal M Combs', student_slug: 'jamal-m-combs', advisor_id: '7', project_title: 'Jamal Combs Action Points (JCAP): Critiquing Role-Playing Game Interfaces', project_question: 'What are characteristics and elements of a successful role-playing game interface that make a compelling experience?', topics: [{ name: 'Games', slug: 'games' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '25', student_name: 'Jamie Charry', student_slug: 'jamie-charry', advisor_id: '8', project_title: 'SETA Maker', project_question: 'Can students gain scientific intuition through making games? How can we foster a life-long relationship with scientific thinking?', topics: [{ name: 'Education', slug: 'education' }, { name: 'Games', slug: 'games' }]
  }, {
    student_id: '31', student_name: 'KC Lathrop', student_slug: 'kc-lathrop', advisor_id: '8', project_title: 'KNOCKED down!', project_question: 'How can playful movement help people let go of their insecurities and fears?', topics: [{ name: 'Behavior', slug: 'behavior' }, { name: 'Games', slug: 'games' }, { name: 'Wearables', slug: 'wearables' }]
  }, {
    student_id: '111', student_name: 'Marcela Nowak', student_slug: 'marcela-nowak', advisor_id: '7', project_title: 'The Dream Catcher', project_question: 'How can we translate the experience of a dream into the world of virtual reality?', topics: [{ name: 'Art', slug: 'art' }, { name: 'Games', slug: 'games' }, { name: 'Storytelling', slug: 'storytelling' }, { name: 'VR', slug: 'vr' }]
  }, {
    student_id: '82', student_name: 'Yao', student_slug: 'yao', advisor_id: '6', project_title: 'Gravity', project_question: 'How can interactive immersive motion-capture environment provide a better way for users to connect with each other and manipulate the physical and digital space around them?\r\n', topics: [{ name: 'Games', slug: 'games' }, { name: 'Installation', slug: 'installation' }, { name: 'Performance', slug: 'performance' }]
  }, {
    student_id: '62', student_name: 'Yun Li', student_slug: 'yun-li', advisor_id: '5', project_title: 'Temporal Paradox', project_question: 'How could I create a virtual reality game that is about time?', topics: [{ name: 'Games', slug: 'games' }, { name: 'VR', slug: 'vr' }]
  }],
  'Internet of Things': [{
    student_id: '86', student_name: 'Jason Beck', student_slug: 'jason-beck', advisor_id: '9', project_title: 'Play:Connected', project_question: 'How can connected devices unite children with and without disabilities through play?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Social Good', slug: 'social-good' }]
  }, {
    student_id: '123', student_name: 'Lisa Song', student_slug: 'lisa-song', advisor_id: '3', project_title: 'powerSplit', project_question: "How can we use technology to not only control, monitor and track electricity usage but also change people's behavioral habits to reduce unnecessary power usage?", topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'UX-UI', slug: 'uxui' }]
  }, {
    student_id: '110', student_name: 'Muqing Niu', student_slug: 'muqing-niu', advisor_id: '7', project_title: 'Minsta', project_question: 'How can I bring people happiness when they check the weather in the long and gloomy winters? Can social media data be connected with weather data in a way that delights people when they check the weather?\r\n', topics: [{ name: 'Data Viz', slug: 'data-viz' }, { name: 'Installation', slug: 'installation' }, { name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '91', student_name: 'Peiyu Luo', student_slug: 'peiyu-luo', advisor_id: '9', project_title: 'Chakr Glove', project_question: 'How can I provide more feedback in a virtual reality experience to make it feel more real?', topics: [{ name: 'Internet of Things', slug: 'internet-of-things' }, { name: 'Product-Tool', slug: 'producttool' }, { name: 'VR', slug: 'vr' }, { name: 'Wearables', slug: 'wearables' }]
  }],
  'Networking': [{
    student_id: '90', student_name: 'Lisa Jamhoury', student_slug: 'lisa-jamhoury', advisor_id: '9', project_title: 'Facing You: An Interactive Installation Exploring Life Inside the Internet of Experiences', project_question: 'What does an embodied experience on the internet look like? Is it possible to feel physically present in virtual space?', topics: [{ name: 'Installation', slug: 'installation' }, { name: 'Networking', slug: 'networking' }, { name: 'Product-Tool', slug: 'producttool' }]
  }, {
    student_id: '61', student_name: 'rebecca (marks) leopold', student_slug: 'rebecca-(marks)-leopold', advisor_id: '5', project_title: 'the Em&#x1f636;ji Palette', project_question: 'How can we have more creative control over our data❓\r\nHow can we have more control over our creative data⁉️', topics: [{ name: 'Art', slug: 'art' }, { name: 'Mobile Apps', slug: 'mobile-apps' }, { name: 'Networking', slug: 'networking' }, { name: 'Politics', slug: 'politics' }, { name: 'Privacy', slug: 'privacy' }]
  }]
};


routes.route('/student/:student').get(getStudentProject);
routes.route('/tag/:tag').get(getTagProjects);
routes.route('/tag/:tag1/:tag2').get(getTwoTagProjects);
routes.route('/pair/:tag').get(getTagPairs);
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
