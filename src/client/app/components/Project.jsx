import React from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
  render() {
    return (
      <section>
        <h1>{this.props.currentProject.project}</h1>
        <h2>{this.props.currentProject.name}</h2>
        <p>{this.props.currentProject.short}</p>
      </section>
    );
  }
}

Project.propTypes = {
  currentProject: PropTypes.shape.isRequired
};

export default Project;
