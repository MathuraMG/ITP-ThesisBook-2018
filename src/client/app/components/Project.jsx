import React from 'react';
import PropTypes from 'prop-types';

class Project extends React.Component {
  renderImages(images) {
    const array = [];
    images.forEach((image) => {
      array.push(<img
        src={image.src}
      />);
    });

    return array;
  }
  render() {
    const renderArray = this.renderImages(this.props.selectedProject.slide_show);
    return (
      <section>
        <h1>{this.props.selectedProject.project_title}</h1>
        <h2>{this.props.selectedProject.student_name}</h2>
        <p>{this.props.selectedProject.project_question}</p>
        <p>{this.props.selectedProject.short_description}</p>
        <p>{this.props.selectedProject.description}</p>
        {renderArray}
      </section>
    );
  }
}

Project.propTypes = {
  selectedProject: PropTypes.shape.isRequired
};

export default Project;
