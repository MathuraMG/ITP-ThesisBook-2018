import React from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

class Projects extends React.Component {
  render() {
    return (
      <section>
        {this.props.currentProjects.map(project => (
          <div>
            <h1>{project.project}</h1>
            <h2>{project.name}</h2>
            <p>{project.short}</p>
          </div>
        ))}

      </section>
    );
  }
}


export default Projects;
