import * as ActionTypes from '../constants.jsx';

export function setAboutTopic(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_ABOUT_TOPIC,
      value
    });
  };
}
export function setIsTagCircleOpen(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_IS_TAG_CIRCLE_OPEN,
      value
    });
  };
}

export function setIsDropDownOpen(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_IS_DROPDOWN_OPEN,
      value
    });
  };
}

export function setShowAboutPage(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SHOW_ABOUT_PAGE,
      value
    });
  };
}

export function setSelectedProject(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_PROJECT,
      value
    });
  };
}

export function setSelectedProjects(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_PROJECTS,
      value
    });
  };
}

export function setSelectedStudent(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_STUDENT,
      value
    });
  };
}

export function setSelectedTag(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_TAG,
      value
    });
  };
}

export function setSelectedTags(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_TAGS,
      value
    });
  };
}


export function setShowProjectText(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SHOW_PROJECT_TEXT,
      value
    });
  };
}
