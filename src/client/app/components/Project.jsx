import React from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
  render() {
    return (
      <section>
        <h1>{this.props.selectedProject.project}</h1>
        <h2>{this.props.selectedProject.name}</h2>
        <p>{this.props.selectedProject.short}</p>
      </section>
    );
  }
}

Project.propTypes = {
  selectedProject: PropTypes.shape.isRequired
};

export default Project;
