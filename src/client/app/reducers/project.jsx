import * as ActionTypes from '../constants.jsx';

const initialState = {
  aboutTopic: 0,
  isTagCircleOpen: true,
  isDropDownOpen: false,
  selectedProject: {},
  selectedProjects: [],
  selectedStudent: '',
  selectedTag: 'Health',
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
    'Tangiable',
    'Health'],
  students: [
    { label: 'alejandro-matamala', name: 'Alejandro Matamala' },
    { label: 'alexander-zimmer', name: 'Alexander Zimmer' },
    { label: 'amanda-min-jin-lee', name: 'Amanda Min-Jin Lee' },
    { label: 'anastasios-germanidis', name: 'Anastasios Germanidis' },
    { label: 'ariana-vassilopoulou', name: 'Ariana Vassilopoulou' },
    { label: 'brandon-kader', name: 'Brandon Kader' },
    { label: 'chen-mike-yen-kkasfd', name: 'Chen Mike Yen kkasfd' },
    { label: 'chetan-hasabnis', name: 'Chetan Hasabnis' },
    { label: 'chloe-gao', name: 'Chloe Gao' },
    { label: 'christina-hall', name: 'Christina Hall' },
    { label: 'cristobal-valenzuela', name: 'Cristobal Valenzuela' },
    { label: 'david-temchulla', name: 'David Temchulla' },
    { label: 'dominic-barrett', name: 'Dominic Barrett' },
    { label: 'dong-chan-kim', name: 'Dong Chan Kim' },
    { label: 'dror-dov-ayalon', name: 'Dror Dov Ayalon' },
    { label: 'grau-puche-recarens', name: 'Grau Puche Recarens' },
    { label: 'hayeon-hwang', name: 'Hayeon Hwang' },
    { label: 'jarrett-c-slavin', name: 'Jarrett C Slavin' },
    { label: 'jasmine-a-soltani', name: 'Jasmine A Soltani' },
    { label: 'jaycee-holmes', name: 'Jaycee Holmes' },
    { label: 'jeffrey-park', name: 'Jeffrey Park' },
    { label: 'jenny-lim', name: 'Jenny Lim' },
    { label: 'jina-jung', name: 'Jina Jung' },
    { label: 'jingfei-lin', name: 'Jingfei Lin' },
    { label: 'jingru-yin', name: 'Jingru Yin' },
    { label: 'jinhee-ahn', name: 'Jinhee Ahn' },
    { label: 'jixuan-sun', name: 'Jixuan Sun' },
    { label: 'jose-manuel-vega-cebrian', name: 'Jose Manuel Vega Cebrian' },
    { label: 'kar-rosen', name: 'Kar Rosen' },
    { label: 'katherine-a-takacs', name: 'Katherine A Takacs' },
    { label: 'koji-kanao', name: 'Koji Kanao' },
    { label: 'lindsey-daniels', name: 'Lindsey Daniels' },
    { label: 'luqian-chen', name: 'Luqian Chen' },
    { label: 'marco-guarino', name: 'Marco Guarino' },
    { label: 'maxwell-nakamura', name: 'Maxwell Nakamura' },
    { label: 'nanou-dimachki', name: 'Nanou Dimachki' },
    { label: 'nathaniel-padgett', name: 'Nathaniel Padgett' },
    { label: 'nouf-aljowaysir', name: 'Nouf Aljowaysir' },
    { label: 'or-fleisher', name: 'Or Fleisher' },
    { label: 'pan-pan', name: 'Pan Pan' },
    { label: 'patrick-presto', name: 'Patrick Presto' },
    { label: 'ran-tian', name: 'Ran Tian' },
    { label: 'richard-lapham', name: 'Richard Lapham' },
    { label: 'rita-cheng', name: 'Rita Cheng' },
    { label: 'roi-lev', name: 'Roi Lev' },
    { label: 'samantha-schulman', name: 'Samantha Schulman' },
    { label: 'se-young-kim', name: 'Se Young Kim' },
    { label: 'sean-seunghwan-kim', name: 'Sean Seunghwan Kim' },
    { label: 'sharif-al-hadidi', name: 'Sharif Al-hadidi' },
    { label: 'siman-li', name: 'Siman Li' },
    { label: 'stephanie-koltun', name: 'Stephanie Koltun' },
    { label: 'swapna-joshi', name: 'Swapna Joshi' },
    { label: 'xinyu-hu', name: 'Xinyu Hu' },
    { label: 'xitong-xu', name: 'Xitong Xu' },
    { label: 'yeseul-song', name: 'Yeseul Song' },
    { label: 'younho-lee', name: 'Younho Lee' },
    { label: 'yuan-chen', name: 'Yuan Chen' },
    { label: 'yunho-choi', name: 'Yunho Choi' }]

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
      console.log('hi');
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
