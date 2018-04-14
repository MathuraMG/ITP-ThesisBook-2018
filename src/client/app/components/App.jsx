import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Nav from './Nav.jsx';
import Project from './Project.jsx';
import Projects from './Projects.jsx';
import Search from './Search.jsx';
import TagCircle from './TagCircle.jsx';

import * as projectActions from '../action/project.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.getStudentProject = this.getStudentProject.bind(this);
    this.getAllProject = this.getAllProject.bind(this);
    this.getTagProjects = this.getTagProjects.bind(this);
    this.getTwoTagProjects = this.getTwoTagProjects.bind(this);
    this.studentName = this.studentName.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.getStudentProjectAPI = this.getStudentProjectAPI.bind(this);
  }

  getStudentProjectAPI(student) {
    console.log('in here');
    axios.get(`/api/id/${student}`)
      .then((res) => {
        console.log(student);

        const id = res.data;
        const baseUrl = 'http://allorigins.me/get?url=https://itp.nyu.edu/thesis2017/wp-content/themes/itpthesis/api.php?student_id=';
        axios.get(baseUrl + id)
          .then((res) => {
            const data = JSON.parse(res.data.contents);
            this.props.setSelectedProject(data);
          });
      });
  }

  componentDidMount() {
    this.loadPage();
  }

  studentName() {
    const location = this.props.location.pathname;
    const studentName = location.match(/\/student\/([\w-].*)/);
    return studentName ? studentName[1] : null;
  }

  loadPage() {
    if (this.studentName()) {
      console.log(this.studentName());
      this.getStudentProjectAPI(this.studentName());
      this.props.setIsTagCircleOpen(false);
    } else {
      this.getAllProject();
    }
  }

  getStudentProject(student) {
    axios.get(`/api/student/${student}`)
      .then((res) => {
        this.props.setSelectedProject(res.data);
      });
  }

  getAllProject() {
    const baseUrl = 'http://allorigins.me/get?url=https://itp.nyu.edu/thesis2017/wp-content/themes/itpthesis/api.php?student_id=-1';
    axios.get(baseUrl)
      .then((res) => {
        // console.log(res.data);
        const data = JSON.parse(res.data.contents);
        this.props.setSelectedProjects(data);
      });
  }

  getTagProjects(tag) {
    axios.get(`/api/tag/${tag}`)
      .then((res) => {
        this.props.setSelectedProjects(res.data);
      });
  }

  getTwoTagProjects(tag1, tag2) {
    axios.get(`/api/tag/${tag1}/${tag2}`)
      .then((res) => {
        this.props.setSelectedProjects(res.data);
      });
  }

  render() {
    return (
      <div className="main__container">
        <Nav
          getStudentProject={this.getStudentProject}
          getTagProjects={this.getTagProjects}
          getTwoTagProjects={this.getTwoTagProjects}
          selectedTag={this.props.selectedTag}
          selectedProjects={this.props.selectedProjects}
          selectedStudent={this.props.selectedStudent}
          setSelectedStudent={this.props.setSelectedStudent}
          setSelectedTags={this.props.setSelectedTags}
          setSelectedTag={this.props.setSelectedTag}
          students={this.props.students}
          isTagCircleOpen={this.props.isTagCircleOpen}
          setIsTagCircleOpen={this.props.setIsTagCircleOpen}
          setSelectedProjects={this.props.setSelectedProjects}
        />
        {
          this.props.showSingleProject &&
          <Project
            selectedProject={this.props.selectedProject}
          />
        }
        {
          !this.props.showSingleProject &&
          <Projects
            setIsTagCircleOpen={this.props.setIsTagCircleOpen}
            selectedProjects={this.props.selectedProjects}
            setSelectedProject={this.props.setSelectedProject}
          />
        }

      </div>
    );
  }
}

App.propTypes = {
  isTagCircleOpen: PropTypes.bool.isRequired,
  selectedProject: PropTypes.shape.isRequired,
  selectedProjects: PropTypes.arrayOf.isRequired,
  selectedStudent: PropTypes.string.isRequired,
  selectedTag: PropTypes.string.isRequired,
  selectedTags: PropTypes.arrayOf.isRequired,
  showSingleProject: PropTypes.bool.isRequired,
  students: PropTypes.arrayOf.isRequired,
  tags: PropTypes.arrayOf.isRequired,

  setIsTagCircleOpen: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  setSelectedProjects: PropTypes.func.isRequired,
  setSelectedStudent: PropTypes.func.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  setSelectedTags: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isTagCircleOpen: state.projectReducer.isTagCircleOpen,
    selectedProject: state.projectReducer.selectedProject,
    selectedProjects: state.projectReducer.selectedProjects,
    selectedStudent: state.projectReducer.selectedStudent,
    selectedTag: state.projectReducer.selectedTag,
    selectedTags: state.projectReducer.selectedTags,
    showSingleProject: state.projectReducer.showSingleProject,
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
