import * as ActionTypes from '../constants.jsx';

const initialState = {
  aboutTopic: 0,
  isTagCircleOpen: true,
  isDropDownOpen: false,
  selectedProject: {},
  selectedProjects: [],
  selectedStudent: '',
  selectedTag: '',
  selectedTags: [],
  showSingleProject: false,
  showAboutPage: false,
  tags: ['Culture',
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
    'Health'],
  students: [{ label: 'akmyrat-tuyliyev', name: 'Akmyrat Tuyliyev' },
    { label: 'alejandro-matamala', name: 'Alejandro Matamala' },
    { label: 'alex-fast', name: 'Alex Fast' },
    { label: 'alexander-zimmer', name: 'Alexander Zimmer' },
    { label: 'alexia-kyriakopoulou', name: 'Alexia Kyriakopoulou' },
    { label: 'amanda-min-jin-lee', name: 'Amanda Min-Jin Lee' },
    { label: 'anastasios-germanidis', name: 'Anastasios Germanidis' },
    { label: 'anne-michelle-gallero', name: 'Anne-Michelle Gallero' },
    { label: 'ari-melenciano', name: 'Ari Melenciano' },
    { label: 'ariana-vassilopoulou', name: 'Ariana Vassilopoulou' },
    { label: 'brandon-kader', name: 'Brandon Kader' },
    { label: 'bryan-hsu', name: 'Bryan Hsu' },
    { label: 'chester-dols', name: 'Chester Dols' },
    { label: 'chetan-hasabnis', name: 'Chetan Hasabnis' },
    { label: 'chloe-gao', name: 'Chloe Gao' },
    { label: 'christina-hall', name: 'Christina Hall' },
    { label: 'cristobal-valenzuela', name: 'Cristobal Valenzuela' },
    { label: 'daniella-garcia-rosales', name: 'Daniella Garcia-Rosales' },
    { label: 'danni-huang', name: 'Danni Huang' },
    { label: 'david-temchulla', name: 'David Temchulla' },
    { label: 'diego-cruz-castillo', name: 'Diego Cruz Castillo' },
    { label: 'dimosthenis-markopoulos', name: 'Dimosthenis Markopoulos' },
    { label: 'dominic-barrett', name: 'Dominic Barrett' },
    { label: 'dong-chan-kim', name: 'Dong Chan Kim' },
    { label: 'dror-dov-ayalon', name: 'Dror Dov Ayalon' },
    { label: 'elizabeth-white', name: 'Elizabeth White' },
    { label: 'ellen-kim', name: 'Ellen Kim' },
    { label: 'grau-puche-recarens', name: 'Grau Puche Recarens' },
    { label: 'hayeon-hwang', name: 'Hayeon Hwang' },
    { label: 'hayeon-kim', name: 'Hayeon Kim' },
    { label: 'jacquelyn-zen', name: 'Jacquelyn Zen' },
    { label: 'jarrett-c-slavin', name: 'Jarrett C Slavin' },
    { label: 'jasmine-a-soltani', name: 'Jasmine A Soltani' },
    { label: 'jaycee-holmes', name: 'Jaycee Holmes' },
    { label: 'jeffrey-park', name: 'Jeffrey Park' },
    { label: 'jennifer-g-tis', name: 'Jennifer G Tis' },
    { label: 'jenny-lim', name: 'Jenny Lim' },
    { label: 'jesal-trivedi', name: 'Jesal Trivedi' },
    { label: 'ji-young-chun', name: 'Ji Young Chun' },
    { label: 'jina-jung', name: 'Jina Jung' },
    { label: 'jingfei-lin', name: 'Jingfei Lin' },
    { label: 'jingru-yin', name: 'Jingru Yin' },
    { label: 'jinhee-ahn', name: 'Jinhee Ahn' },
    { label: 'jixuan-sun', name: 'Jixuan Sun' },
    { label: 'kar-rosen', name: 'Kar Rosen' },
    { label: 'katherine-a-takacs', name: 'Katherine A Takacs' },
    { label: 'koji', name: 'Koji' },
    { label: 'kyung-a-na', name: 'Kyung A Na' },
    { label: 'laura-kerry', name: 'Laura Kerry' },
    { label: 'li-chung-chen', name: 'Li-Chung Chen' },
    { label: 'lin-yang', name: 'Lin Yang' },
    { label: 'lindsey-daniels', name: 'Lindsey Daniels' },
    { label: 'lindsey-piscitell', name: 'Lindsey Piscitell' },
    { label: 'luqian-chen', name: 'Luqian Chen' },
    { label: 'manning-qu', name: 'Manning Qu' },
    { label: 'marco-guarino', name: 'Marco Guarino' },
    { label: 'maria-del-pilar-gomez-ruiz', name: 'Maria Del Pilar Gomez Ruiz' },
    { label: 'maxwell-nakamura', name: 'Maxwell Nakamura' },
    { label: 'melissa-parker', name: 'Melissa Parker' },
    { label: 'miao-tian', name: 'Miao Tian' },
    { label: 'michael-kripchak', name: 'Michael Kripchak' },
    { label: 'michael-simpson', name: 'Michael Simpson' },
    { label: 'mithru-swarna', name: 'Mithru Swarna' },
    { label: 'nanou-dimachki', name: 'Nanou Dimachki' },
    { label: 'nathaniel-padgett', name: 'Nathaniel Padgett' },
    { label: 'nitish-wakalkar', name: 'Nitish Wakalkar' },
    { label: 'nouf-aljowaysir', name: 'Nouf Aljowaysir' },
    { label: 'or-fleisher', name: 'Or Fleisher' },
    { label: 'oriana-neidecker', name: 'Oriana Neidecker' },
    { label: 'pan-pan', name: 'Pan Pan' },
    { label: 'patrick-presto', name: 'Patrick Presto' },
    { label: 'paula-leonvendagar', name: 'Paula Leonvendagar' },
    { label: 'philip-mccausland', name: 'Philip McCausland' },
    { label: 'ran-tian', name: 'Ran Tian' },
    { label: 'regina-cantu-de-alba', name: 'Regina Cantu De Alba' },
    { label: 'richard-lapham', name: 'Richard Lapham' },
    { label: 'rita-cheng', name: 'Rita Cheng' },
    { label: 'roi-lev', name: 'Roi Lev' },
    { label: 'rushali-rupchand-paratey', name: 'Rushali Rupchand Paratey' },
    { label: 'samantha-schulman', name: 'Samantha Schulman' },
    { label: 'scott-reitherman', name: 'Scott Reitherman' },
    { label: 'se-young-kim', name: 'Se Young Kim' },
    { label: 'sean-kim', name: 'Sean Kim' },
    { label: 'sebastian-morales', name: 'Sebastian Morales' },
    { label: 'sharif-al-hadidi', name: 'Sharif Al-hadidi' },
    { label: 'shelley-hu', name: 'Shelley Hu' },
    { label: 'shivanku-kumar-fnu', name: 'Shivanku Kumar Fnu' },
    { label: 'siman-li', name: 'Siman Li' },
    { label: 'stephanie-koltun', name: 'Stephanie Koltun' },
    { label: 'steven-simon', name: 'Steven Simon' },
    { label: 'swapna-joshi', name: 'Swapna Joshi' },
    { label: 'tiriree-kananuruk', name: 'Tiriree Kananuruk' },
    { label: 'utsav-chadha', name: 'Utsav Chadha' },
    { label: 'wenqi-li', name: 'Wenqi Li' },
    { label: 'woo-hyun-kim', name: 'Woo Hyun Kim' },
    { label: 'woraya-boonyapanachoti', name: 'Woraya Boonyapanachoti' },
    { label: 'xitong-xu', name: 'Xitong Xu' },
    { label: 'yanlin-ma', name: 'Yanlin Ma' },
    { label: 'ye-lu', name: 'Ye Lu' },
    { label: 'yeseul-song', name: 'Yeseul Song' },
    { label: 'yihan-chen', name: 'Yihan Chen' },
    { label: 'younho-lee', name: 'Younho Lee' },
    { label: 'yuan-chen', name: 'Yuan Chen' },
    { label: 'yueping-wang', name: 'Yueping Wang' },
    { label: 'yuhan-zhang', name: 'Yuhan Zhang' },
    { label: 'yunho-choi', name: 'Yunho Choi' },
    { label: 'yuqiao-qin', name: 'Yuqiao Qin' },
    { label: 'yutong-zhang', name: 'Yutong Zhang' },
    { label: 'zachary-coble', name: 'Zachary Coble' },
    { label: 'ziyu-he', name: 'Ziyu He' },
    { label: 'sejo-vega-cebrián', name: 'sejo vega-cebrián' }]

};

const project = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_ABOUT_TOPIC:
    {
      return Object.assign({}, state, {
        aboutTopic: action.value
      });
    }
    case ActionTypes.SET_IS_TAG_CIRCLE_OPEN:
    {
      return Object.assign({}, state, {
        isTagCircleOpen: action.value
      });
    }
    case ActionTypes.SET_IS_DROPDOWN_OPEN:
    {
      return Object.assign({}, state, {
        isDropDownOpen: action.value
      });
    }
    case ActionTypes.SET_SHOW_ABOUT_PAGE:
    {
      return Object.assign({}, state, {
        showAboutPage: action.value
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
