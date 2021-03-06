import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import About from './About.jsx';
import Nav from './Nav.jsx';
import Project from './Project.jsx';
import Projects from './Projects.jsx';
import * as studentConstants from '../studentConstants.jsx';

import * as projectActions from '../action/project.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleStudentData: studentConstants.STUDENT_DATA,
      sampleTagData: studentConstants.TAG_DATA,

    };

    this.getStudentProject = this.getStudentProject.bind(this);
    this.getAllProject = this.getAllProject.bind(this);
    this.getTagProjects = this.getTagProjects.bind(this);
    this.getTwoTagProjects = this.getTwoTagProjects.bind(this);
    this.studentName = this.studentName.bind(this);
    this.aboutPage = this.aboutPage.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.getStudentProjectAPI = this.getStudentProjectAPI.bind(this);
    this.getTagPairs = this.getTagPairs.bind(this);
  }

  componentDidMount() {
    this.loadPage();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  getStudentProjectAPI(student) {
    const id = this.state.sampleStudentData[student].student_id;
    const baseUrl =
    'https://itp.nyu.edu/thesis2018/wp-content/themes/itpthesis/api.php?student_id=';
    axios.get(baseUrl + id)
      .then((res) => {
        this.props.setSelectedProject(res.data);
      });
  }

  getTagPairs(tag) {
    let tagPairs = [];

    if (this.state.sampleTagData[tag]) {
      this.state.sampleTagData[tag].forEach((project) => {
        project.topics.forEach((topic) => {
          tagPairs = tagPairs.concat(topic.name);
        });
      });
    }
    tagPairs = tagPairs.filter(this.onlyUnique);
    this.props.setSelectedTag(tag);
    this.getTagProjects(tag);
  }

  getStudentProject(student) {
    axios.get(`/api/student/${student}`)
      .then((res) => {
        this.props.setSelectedProject(res.data);
      });
  }

  getAllProject() {
    const baseUrl =
    'https://itp.nyu.edu/thesis2018/wp-content/themes/itpthesis/api.php?student_id=-1';
    axios.get(baseUrl)
      .then((res) => {
        const data = res.data;

        this.props.setSelectedProjects(data);
      });
  }

  getTagProjects(tag) {
    this.props.setSelectedProjects(this.state.sampleTagData[tag]);
  }

  getTwoTagProjects(tag1, tag2) {
    const filteredProjects = [];
    this.state.sampleTagData[tag2].forEach((project) => {
      project.topics.forEach((tag) => {
        if (tag.name === tag1) {
          filteredProjects.push(project);
        }
      });
    });
    this.props.setSelectedProjects(filteredProjects);
  }

  aboutPage() {
    const location = this.props.location.pathname;
    const aboutPath = location.match(/\/about/);
    return !!aboutPath;
  }

  loadPage() {
    this.props.setShowAboutPage(false);
    if (this.aboutPage()) {
      this.props.setShowAboutPage(true);
      this.props.setIsTagCircleOpen(false);
    } else if (this.studentName()) {
      // this.props.history.push(`/student/${this.studentName}`);
      this.getStudentProjectAPI(this.studentName());
      this.props.setIsTagCircleOpen(false);
    } else if (this.props.selectedTag) {
      const tempTag = this.props.selectedTag;
      this.getTagPairs(tempTag);
      this.props.setSelectedTag(tempTag);
    } else {
      const tags = this.props.tags;
      const tag = tags[Math.floor(Math.random() * tags.length)];
      this.getTagPairs(tag);
      this.props.setSelectedTag(tag);
    }
  }

  studentName() {
    const location = this.props.location.pathname;
    const studentName = location.match(/\/student\/([\w-].*)/);
    return studentName ? studentName[1] : null;
  }

  render() {
    return (
      <div className={`main__container ${this.props.showAboutPage ? 'main__container--about' : ''}`}>
        <Nav
          history={this.props.history}
          getStudentProject={this.getStudentProject}
          getTagProjects={this.getTagProjects}
          getTwoTagProjects={this.getTwoTagProjects}
          selectedTag={this.props.selectedTag}
          selectedProjects={this.props.selectedProjects}
          selectedStudent={this.props.selectedStudent}
          setIsTagCircleOpen={this.props.setIsTagCircleOpen}
          setIsDropDownOpen={this.props.setIsDropDownOpen}
          setSelectedProjects={this.props.setSelectedProjects}
          setShowAboutPage={this.props.setShowAboutPage}
          setSelectedStudent={this.props.setSelectedStudent}
          setSelectedTag={this.props.setSelectedTag}
          showAboutPage={this.props.showAboutPage}
          students={this.props.students}
          isDropDownOpen={this.props.isDropDownOpen}
          isTagCircleOpen={this.props.isTagCircleOpen}
          getTagPairs={this.getTagPairs}
        />
        <hr className="main__line" />
        {
          this.props.showSingleProject && !this.props.showAboutPage &&
          <Project
            history={this.props.history}
            selectedProject={this.props.selectedProject}
            setIsTagCircleOpen={this.props.setIsTagCircleOpen}
          />
        }
        {
          !this.props.showSingleProject && !this.props.showAboutPage &&
          <Projects
            history={this.props.history}
            setIsTagCircleOpen={this.props.setIsTagCircleOpen}
            selectedProjects={this.props.selectedProjects}
            setSelectedProject={this.props.setSelectedProject}
            selectedTag={this.props.selectedTag}
            showProjectText={this.props.showProjectText}
            setShowProjectText={this.props.setShowProjectText}
          />
        }
        {
          this.props.showAboutPage &&
          <About
            history={this.props.history}
            aboutTopic={this.props.aboutTopic}
            setAboutTopic={this.props.setAboutTopic}
          />
        }

      </div>
    );
  }
}

App.propTypes = {
  aboutTopic: PropTypes.number.isRequired,
  history: PropTypes.object.isRequired,
  isTagCircleOpen: PropTypes.bool.isRequired,
  isDropDownOpen: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  selectedProject: PropTypes.object.isRequired,
  selectedProjects: PropTypes.array.isRequired,
  selectedStudent: PropTypes.string.isRequired,
  selectedTag: PropTypes.string.isRequired,
  showAboutPage: PropTypes.bool.isRequired,
  showSingleProject: PropTypes.bool.isRequired,
  showProjectText: PropTypes.bool.isRequired,
  students: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,

  setAboutTopic: PropTypes.func.isRequired,
  setIsTagCircleOpen: PropTypes.func.isRequired,
  setIsDropDownOpen: PropTypes.func.isRequired,
  setShowAboutPage: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  setSelectedProjects: PropTypes.func.isRequired,
  setSelectedStudent: PropTypes.func.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  setShowProjectText: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    aboutTopic: state.projectReducer.aboutTopic,
    isTagCircleOpen: state.projectReducer.isTagCircleOpen,
    isDropDownOpen: state.projectReducer.isDropDownOpen,
    selectedProject: state.projectReducer.selectedProject,
    selectedProjects: state.projectReducer.selectedProjects,
    selectedStudent: state.projectReducer.selectedStudent,
    selectedTag: state.projectReducer.selectedTag,
    showAboutPage: state.projectReducer.showAboutPage,
    showSingleProject: state.projectReducer.showSingleProject,
    showProjectText: state.projectReducer.showProjectText,
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
