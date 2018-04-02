import * as ActionTypes from '../constants.jsx';

const initialState = {
  selectedProject:{},
  selectedProjects:[],
  selectedStudent:'',
  selectedTag:'',
  selectedTags:[],
  tags: [
    'tag1',
    'tag2',
    'tag3',
    'tag4',
    'tag5',
    'tag6',
    'tag7',
    'tag8',
    'tag9',
    'tag10',
  ],
  students: [
    'student1',
    'student2',
    'student3',
    'student4',
    'student5',
    'student6',
    'student7',
    'student8',
    'student9',
    'student10',
  ]
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
