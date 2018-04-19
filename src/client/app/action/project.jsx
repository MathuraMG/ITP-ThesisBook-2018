import axios from 'axios';
import * as ActionTypes from '../constants.jsx';

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

export function setSelectedProject(value) {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_PROJECT,
      value
    });
  };
}

export function setSelectedProjects(value) {
  console.log(value);
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
