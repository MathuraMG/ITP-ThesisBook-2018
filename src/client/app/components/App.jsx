import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Project from './Project.jsx';
import Projects from './Projects.jsx';
import Search from './Search.jsx';
import TagCircle from './TagCircle.jsx';
import TagSearcher from './TagSearcher.jsx';

import * as projectActions from '../action/project.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getStudentProject = this.getStudentProject.bind(this);
    this.getTagProjects = this.getTagProjects.bind(this);
  }

  getStudentProject(student) {
    axios.get(`/api/student/${student}`)
      .then((res) => {
        this.props.setSelectedProject(res.data);
      });
  }

  getTagProjects(tag) {
    axios.get(`/api/tag/${tag}`)

      .then((res) => {
        this.props.setSelectedProjects(res.data);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentProject}>Get Examples</button>
        <Link to="/about">About</Link>
        <Search
          selectedStudent={this.props.selectedStudent}
          students={this.props.students}
          setSelectedStudent={this.props.setSelectedStudent}
          getStudentProject={this.getStudentProject}
        />
        <TagCircle />
        <TagSearcher
          tags={this.props.tags}
          selectedTags={this.props.selectedTags}
          setSelectedTags={this.props.setSelectedTags}
          setSelectedTag={this.props.setSelectedTag}
          getTagProjects={this.getTagProjects}
        />
        <Project
          selectedProject={this.props.selectedProject}
        />
        <Projects
          selectedProjects={this.props.selectedProjects}
        />
      </div>
    );
  }
}

App.propTypes = {
  selectedProject: PropTypes.shape.isRequired,
  selectedProjects: PropTypes.arrayOf.isRequired,
  selectedStudent: PropTypes.string.isRequired,
  selectedTag: PropTypes.string.isRequired,
  selectedTags: PropTypes.arrayOf.isRequired,
  tags: PropTypes.arrayOf.isRequired,
  students: PropTypes.arrayOf.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  setSelectedProjects: PropTypes.func.isRequired,
  setSelectedStudent: PropTypes.func.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  setSelectedTags: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
  return {
    selectedProject: state.projectReducer.selectedProject,
    selectedProjects: state.projectReducer.selectedProjects,
    selectedStudent: state.projectReducer.selectedStudent,
    selectedTag: state.projectReducer.selectedTag,
    selectedTags: state.projectReducer.selectedTags,
    tags: state.projectReducer.tags,
    students: state.projectReducer.students,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign(
      {},
      projectActions
    ),
    dispatch
  );
}
export default (connect(mapStateToProps, mapDispatchToProps)(App));
