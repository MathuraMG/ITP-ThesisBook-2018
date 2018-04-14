import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Project extends React.Component {
  renderImages(images) {
    const array = [];
    images.forEach((image, index) => {
      array.push(<div key={index}>
        <img
          src={image.src}
        />
        // <p className="legend">Legend</p>
      </div>);
    });

    return array;
  }
  render() {
    const renderArray = this.renderImages(this.props.selectedProject.slide_show);
    return (
      <section className="project__container">
        <h2 className="project__student-name">{this.props.selectedProject.student_name}</h2>
        <h1 className="project__title">{this.props.selectedProject.project_title}</h1>
        <p className="project__abstract">{this.props.selectedProject.short_description}</p>
        <Carousel>
          {renderArray}
        </Carousel>
        <p>{this.props.selectedProject.description}</p>
        {ReactHtmlParser(this.props.selectedProject.further_reading)}
      </section>
    );
  }
}

Project.propTypes = {
  selectedProject: PropTypes.shape.isRequired
};

export default Project;
