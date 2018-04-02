import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search.jsx';
import TagSearcher from './TagSearcher.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setCurrentStudent = this.setCurrentStudent.bind(this);
    this.setSelectedTags = this.setSelectedTags.bind(this);
  }

  setCurrentStudent(student) {
    this.setState({
      currentStudent: student
    });
  }

  setSelectedTags(tags) {
    this.setState({
      selectedTags: tags
    });
  }

  getStudentProject() {
    axios.get(`/api/student/${this.state.currentStudent}`)
      .then((res) => {
        console.log(res.data);
      });
  }

  getTagProjects() {
    axios.get(`/api/tag/${this.state.currentTag}`)
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
        />
        <TagSearcher
          tags={this.state.tags}
          selectedTags={this.state.selectedTags}
          setSelectedTags={this.setSelectedTags}
        />
      </div>
    );
  }
}

export default App;
