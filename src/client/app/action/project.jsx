import axios from 'axios';
import * as ActionTypes from '../constants.jsx';

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
