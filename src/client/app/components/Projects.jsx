import React from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

class Projects extends React.Component {
  render() {
    return (
      <section>
        {this.props.selectedProjects.map(project => (
          <div>
            <h1>{project.project_title}</h1>
            <h2>{project.student_name}</h2>
            <p>{project.project_question}</p>
          </div>
        ))}

      </section>
    );
  }
}


export default Projects;
