import React from 'react';
import { Link } from 'react-router-dom';

import Project from './Project.jsx';
import Search from './Search.jsx';
import TagSearcher from './TagSearcher.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: {},
      currentProjects: [],
      currentStudent: '',
      currentTag: 'tag1',
      selectedTags: [],
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
    this.getStudentProject = this.getStudentProject.bind(this);
    this.setCurrentProject = this.setCurrentProject.bind(this);
    this.setCurrentStudent = this.setCurrentStudent.bind(this);
    this.setCurrentTag = this.setCurrentTag.bind(this);
    this.setSelectedTags = this.setSelectedTags.bind(this);
  }

  setCurrentStudent(student) {
    this.setState({
      currentStudent: student
    });
  }

  setCurrentTag(tag) {
    this.setState({
      currentTag: tag
    });
  }

  setCurrentProject(project) {
    this.setState({
      currentProject: project
    });
  }

  setSelectedTags(tags) {
    this.setState({
      selectedTags: tags
    });
  }

  getStudentProject(student) {
    axios.get(`/api/student/${student}`)
      .then((res) => {
        console.log(res.data);
        this.setCurrentProject(res.data);
      });
  }

  getTagProjects(tag) {
    console.log(tag);
    axios.get(`/api/tag/${tag}`)
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentProject}>Get Examples</button>
        <Link to="/about">About</Link>
        <Search
          currentStudent={this.state.currentStudent}
          students={this.state.students}
          setCurrentStudent={this.setCurrentStudent}
          getStudentProject={this.getStudentProject}
        />
        <TagSearcher
          tags={this.state.tags}
          selectedTags={this.state.selectedTags}
          setSelectedTags={this.setSelectedTags}
          setCurrentTag={this.setCurrentTag}
          getTagProjects={this.getTagProjects}
        />
        <Project
          currentProject={this.state.currentProject}
        />
      </div>
    );
  }
}

export default App;
