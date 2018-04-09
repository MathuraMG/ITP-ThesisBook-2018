import React from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

class Projects extends React.Component {
  getStudentProject(id) {
    const baseUrl = 'http://allorigins.me/get?url=https://itp.nyu.edu/thesis2017/wp-content/themes/itpthesis/api.php?student_id=';
    axios.get(baseUrl + id)
      .then((res) => {
        const data = JSON.parse(res.data.contents);
        this.props.setSelectedProject(data);
      });
  }
  render() {
    return (
      <section className="projects">
        {this.props.selectedProjects.map(project => (
          <div
            className="projects__container"
            onClick={
              () => {
                console.log(project.student_id);
                this.getStudentProject(project.student_id);
                this.props.setIsTagCircleOpen(false);
              }
            }
          >
            <img className="projects__image" src="https://placebear.com/300/200" />
            <h1 className="projects__title">{project.project_title}</h1>
            <h3 className="projects__name">{project.student_name}</h3>
            <p className="projects__questions">{project.project_question}</p>
          </div>
        ))}

      </section>
    );
  }
}


export default Projects;
