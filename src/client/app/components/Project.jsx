import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Project extends React.Component {
  renderImages(images) {
    const array = [];
    images.forEach((image, index) => {
      array.push(<div key={index}>
        <img
          src={image.src}
        />
        <p className="legend">Legend</p>
      </div>);
    });

    return array;
  }
  render() {
    const renderArray = this.renderImages(this.props.selectedProject.slide_show);
    console.log(renderArray);
    return (
      <section>
        <h1>{this.props.selectedProject.project_title}</h1>
        <h2>{this.props.selectedProject.student_name}</h2>
        <p>{this.props.selectedProject.project_question}</p>
        <p>{this.props.selectedProject.short_description}</p>
        <p>{this.props.selectedProject.description}</p>
        <Carousel>
          {renderArray}
        </Carousel>
      </section>
    );
  }
}

Project.propTypes = {
  selectedProject: PropTypes.shape.isRequired
};

export default Project;
