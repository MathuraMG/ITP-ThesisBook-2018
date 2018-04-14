import * as ActionTypes from '../constants.jsx';

const initialState = {
  isTagCircleOpen: true,
  selectedProject: {},
  selectedProjects: [],
  selectedStudent: '',
  selectedTag: '',
  selectedTags: [],
  showSingleProject: false,
  tags: [
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
  ],
  students: [
    { label: 'aaron-parsekian', name: 'Aaron Parsekian' },
    { label: 'aarón-montoya-moraga', name: 'Aarón Montoya-Moraga' },
    { label: 'adi-wiedersheim-sendagorta', name: 'Adi Wiedersheim Sendagorta' },
    { label: 'angela-perrone', name: 'Angela Perrone' },
    { label: 'anne-k-goodfriend', name: 'Anne K Goodfriend' },
    { label: 'chelsea-jane-pfohl', name: 'Chelsea Jane Pfohl' },
    { label: 'chino-kim', name: 'Chino Kim' },
    { label: 'christina-b-choi', name: 'Christina B Choi' },
    { label: 'corbin-y-ordel', name: 'Corbin Y Ordel' },
    { label: 'cristina-cannella', name: 'Cristina Cannella' },
    { label: 'dana-abrassart', name: 'Dana Abrassart' },
    { label: 'daniel-silber-baker', name: 'Daniel Silber-Baker' },
    { label: 'danielle-i-butler', name: 'Danielle I Butler' },
    { label: 'daveed-r.-lockard', name: 'Daveed R. Lockard' },
    { label: 'dhruv-damle', name: 'Dhruv Damle' },
    { label: 'dhruv-r-mehrotra', name: 'Dhruv R Mehrotra' },
    { label: 'doo-yon-kim-(don)', name: 'Doo Yon Kim (Don)' },
    { label: 'ella-dagan-pelled', name: 'Ella Dagan Pelled' },
    { label: 'emmanuel-y-klein', name: 'Emmanuel Y Klein' },
    { label: 'esther-hersh', name: 'Esther Hersh' },
    { label: 'eunjee-kim', name: 'EunJee Kim' },
    { label: 'eve-j-weinberg', name: 'Eve J Weinberg' },
    { label: 'fengyi-franklin-zhu', name: 'Fengyi Franklin Zhu' },
    { label: 'fengyuan-zhu', name: 'Fengyuan Zhu' },
    { label: 'francesca-rodriguez-sawaya', name: 'Francesca Rodriguez Sawaya' },
    { label: 'gal-nissim', name: 'Gal Nissim' },
    { label: 'gao-yuan', name: 'Gao Yuan' },
    { label: 'gustavo-eduardo-de-campos-abbott', name: 'Gustavo Eduardo de Campos Abbott' },
    { label: 'hao-tseng', name: 'Hao Tseng' },
    { label: 'ian-c-gibson', name: 'Ian C Gibson' },
    { label: 'isabel-m-donlon', name: 'Isabel M Donlon' },
    { label: 'ishaan-m-chaudhary', name: 'Ishaan M Chaudhary' },
    { label: 'jamal-m-combs', name: 'Jamal M Combs' },
    { label: 'jamie-charry', name: 'Jamie Charry' },
    { label: 'jamie-ruddy', name: 'Jamie Ruddy' },
    { label: 'jared-friedman', name: 'Jared Friedman' },
    { label: 'jason-beck', name: 'Jason Beck' },
    { label: 'jed-d-watson', name: 'Jed D Watson' },
    { label: 'jennifer-kagan', name: 'Jennifer Kagan' },
    { label: 'jesse-a-horwitz', name: 'Jesse A Horwitz' },
    { label: 'jessica-l-scott-dutcher', name: 'Jessica L Scott-Dutcher' },
    { label: 'jiaqi-guo', name: 'Jiaqi Guo' },
    { label: 'joakim-gregersen-quach', name: 'Joakim Gregersen Quach' },
    { label: 'jonathan-james-gallagher', name: 'Jonathan James Gallagher' },
    { label: 'jordan-frand', name: 'Jordan Frand' },
    { label: 'juan-jose-egusquiza', name: 'Juan Jose Egusquiza' },
    { label: 'kc-lathrop', name: 'KC Lathrop' },
    { label: 'katie-temrowski', name: 'Katie Temrowski' },
    { label: 'kevin-stirnweis', name: 'Kevin Stirnweis' },
    { label: 'kritchaya-twitchsri', name: 'Kritchaya Twitchsri' },
    { label: 'kylin-chen', name: 'Kylin Chen' },
    { label: 'leon-eckert', name: 'Leon Eckert' },
    { label: 'leslie-ruckman', name: 'Leslie Ruckman' },
    { label: 'lindsey-f-johnson', name: 'Lindsey F Johnson' },
    { label: 'lisa-jamhoury', name: 'Lisa Jamhoury' },
    { label: 'lisa-song', name: 'Lisa Song' },
    { label: 'marcela-nowak', name: 'Marcela Nowak' },
    { label: 'mathura-m-govindarajan', name: 'Mathura M Govindarajan' },
    { label: 'melanie-hoff', name: 'Melanie Hoff' },
    { label: 'michelle-hessel-alves', name: 'Michelle Hessel Alves' },
    { label: 'muqing-niu', name: 'Muqing Niu' },
    { label: 'nai-chen-yang', name: 'Nai-Chen Yang' },
    { label: 'naoki-ishizuka', name: 'Naoki Ishizuka' },
    { label: 'nicola-carpeggiani', name: 'Nicola Carpeggiani' },
    { label: 'nicole-he', name: 'Nicole He' },
    { label: 'nikita-r-huggins', name: 'Nikita R Huggins' },
    { label: 'nilomee-c-jesrani', name: 'Nilomee C Jesrani' },
    { label: 'olivia-cueva', name: 'Olivia Cueva' },
    { label: 'ondina-frate', name: 'Ondina Frate' },
    { label: 'osama-m-sehgol', name: 'Osama M Sehgol' },
    { label: 'paula-ceballos-delgado', name: 'Paula Ceballos Delgado' },
    { label: 'peiyu-luo', name: 'Peiyu Luo' },
    { label: 'philip-j-donaldson', name: 'Philip J Donaldson' },
    { label: 'ravyn-l-whitley', name: 'Ravyn L Whitley' },
    { label: 'rebecca-ricks', name: 'Rebecca Ricks' },
    { label: 'regina-vetka', name: 'Regina Vetka' },
    { label: 'renata-de-carvalho-gaui', name: 'Renata De Carvalho Gaui' },
    { label: 'ruta-kruliauskaite', name: 'Ruta Kruliauskaite' },
    { label: 'satbir-samantha-multani', name: 'Satbir Samantha Multani' },
    { label: 'serena-m-parr', name: 'Serena M Parr' },
    { label: 'shir-david', name: 'Shir David' },
    { label: 'sisa-bueno', name: 'Sisa Bueno' },
    { label: 'skylar-jessen', name: 'Skylar Jessen' },
    { label: 'song-eun-we', name: 'Song Eun We' },
    { label: 'soyeon-chung', name: 'Soyeon Chung' },
    { label: 'viniyata-pany', name: 'Viniyata Pany' },
    { label: 'wangshu-sun', name: 'Wangshu Sun' },
    { label: 'william-erwin-quest-kennelly', name: 'William Erwin Quest Kennelly' },
    { label: 'wipawe-sirikolkarn', name: 'Wipawe Sirikolkarn' },
    { label: 'xingjian-an', name: 'Xingjian An' },
    { label: 'xiqiao-zhou', name: 'Xiqiao Zhou' },
    { label: 'xiwei-huang', name: 'Xiwei Huang' },
    { label: 'xuhui-xu', name: 'Xuhui Xu' },
    { label: 'yan-zhao', name: 'Yan Zhao' },
    { label: 'yao', name: 'Yao' },
    { label: 'ying-he', name: 'Ying He' },
    { label: 'yiting-liu', name: 'Yiting Liu' },
    { label: 'yuchi-ma', name: 'Yuchi Ma' },
    { label: 'yue-hu', name: 'Yue Hu' },
    { label: 'yue-zhang', name: 'Yue Zhang' },
    { label: 'yuli-cai', name: 'Yuli Cai' },
    { label: 'yun-li', name: 'Yun Li' },
    { label: 'zhuoxi', name: 'Zhuoxi' },
    { label: 'zoe-bachman', name: 'Zoe Bachman' },
    { label: 'rebecca-(marks)-leopold', name: 'rebecca (marks) leopold' }
  ]
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_TAG_CIRCLE_OPEN:
    {
      return Object.assign({}, state, {
        isTagCircleOpen: action.value
      });
    }
    case ActionTypes.SET_SELECTED_PROJECT:
    {
      return Object.assign({}, state, {
        selectedProject: action.value,
        showSingleProject: true
      });
    }

    case ActionTypes.SET_SELECTED_PROJECTS:
    {
      return Object.assign({}, state, {
        selectedProjects: action.value,
        showSingleProject: false
      });
    }
    case ActionTypes.SET_SELECTED_TAG:
    {
      return Object.assign({}, state, {
        selectedTag: action.value
      });
    }

    case ActionTypes.SET_SELECTED_TAGS:
    {
      return Object.assign({}, state, {
        selectedTags: action.value
      });
    }

    case ActionTypes.SET_SELECTED_STUDENT:
    {
      return Object.assign({}, state, {
        selectedStudent: action.value
      });
    }

    default:
      return state;
  }
};

export default project;
