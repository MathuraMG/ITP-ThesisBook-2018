import * as ActionTypes from '../constants.jsx';

const initialState = {
  selectedProject:{},
  selectedProjects:[],
  selectedStudent:'',
  selectedTag:'',
  selectedTags:[],
  tags: [
    "Art",
    "Education",
    "Performance",
    "Installation",
    "Storytelling",
    "Social Good",
    "VR",
    "Behavior",
    "Product/Tool",
    "Machine Learning",
    "UX/UI",
    "Music/Sound",
    "Algorithms",
    "Politics",
    "Privacy",
    "Mobile Apps",
    "Wearables",
    "Speculative Design",
    "Data Viz",
    "Games",
    "Internet of Things",
    "Networking"
  ],
  students: ["aaron-parsekian",
  "aarón-montoya-moraga",
  "adi-wiedersheim-sendagorta",
  "angela-perrone",
  "anne-k-goodfriend",
  "chelsea-jane-pfohl",
  "chino-kim",
  "christina-b-choi",
  "corbin-y-ordel",
  "cristina-cannella",
  "dana-abrassart",
  "daniel-silber-baker",
  "danielle-i-butler",
  "daveed-r.-lockard",
  "dhruv-damle",
  "dhruv-r-mehrotra",
  "doo-yon-kim-(don)",
  "ella-dagan-pelled",
  "emmanuel-y-klein",
  "esther-hersh",
  "eunjee-kim",
  "eve-j-weinberg",
  "fengyi-franklin-zhu",
  "fengyuan-zhu",
  "francesca-rodriguez-sawaya",
  "gal-nissim",
  "gao-yuan",
  "gustavo-eduardo-de-campos-abbott",
  "hao-tseng",
  "ian-c-gibson",
  "isabel-m-donlon",
  "ishaan-m-chaudhary",
  "jamal-m-combs",
  "jamie-charry",
  "jamie-ruddy",
  "jared-friedman",
  "jason-beck",
  "jed-d-watson",
  "jennifer-kagan",
  "jesse-a-horwitz",
  "jessica-l-scott-dutcher",
  "jiaqi-guo",
  "joakim-gregersen-quach",
  "jonathan-james-gallagher",
  "jordan-frand",
  "juan-jose-egusquiza",
  "kc-lathrop",
  "katie-temrowski",
  "kevin-stirnweis",
  "kritchaya-twitchsri",
  "kylin-chen",
  "leon-eckert",
  "leslie-ruckman",
  "lindsey-f-johnson",
  "lisa-jamhoury",
  "lisa-song",
  "marcela-nowak",
  "mathura-m-govindarajan",
  "melanie-hoff",
  "michelle-hessel-alves",
  "muqing-niu",
  "nai-chen-yang",
  "naoki-ishizuka",
  "nicola-carpeggiani",
  "nicole-he",
  "nikita-r-huggins",
  "nilomee-c-jesrani",
  "olivia-cueva",
  "ondina-frate",
  "osama-m-sehgol",
  "paula-ceballos-delgado",
  "peiyu-luo",
  "philip-j-donaldson",
  "ravyn-l-whitley",
  "rebecca-ricks",
  "regina-vetka",
  "renata-de-carvalho-gaui",
  "ruta-kruliauskaite",
  "satbir-samantha-multani",
  "serena-m-parr",
  "shir-david",
  "sisa-bueno",
  "skylar-jessen",
  "song-eun-we",
  "soyeon-chung",
  "viniyata-pany",
  "wangshu-sun",
  "william-erwin-quest-kennelly",
  "wipawe-sirikolkarn",
  "xingjian-an",
  "xiqiao-zhou",
  "xiwei-huang",
  "xuhui-xu",
  "yan-zhao",
  "yao",
  "ying-he",
  "yiting-liu",
  "yuchi-ma",
  "yue-hu",
  "yue-zhang",
  "yuli-cai",
  "yun-li",
  "zhuoxi",
  "zoe-bachman",
  "rebecca-(marks)-leopold"]
};

const project = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.SET_SELECTED_PROJECT:
      {
        return Object.assign({}, state, {
          selectedProject: action.value
        });
      }

    case ActionTypes.SET_SELECTED_PROJECTS:
      {
        return Object.assign({}, state, {
          selectedProjects: action.value
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
