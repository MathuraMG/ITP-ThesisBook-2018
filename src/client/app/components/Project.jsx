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

      </div>);
    });

    return array;
  }
  render() {
    const renderArray = this.renderImages(this.props.selectedProject.slide_show);
    // Accounting for spelling mistake in Tangiable in the DB
    return (
      <section className="project__container">
        <img src="/arrow.png" className="project__arrow" />
        <button
          className="project__close"
          onClick={() => {
            this.props.history.push('/');
            this.props.setIsTagCircleOpen(true);
          }
          }
        >
          &times;
        </button>
        <h2 className="project__student-name">{this.props.selectedProject.student_name}</h2>
        <h1 className="project__title">{ReactHtmlParser(this.props.selectedProject.project_title)}</h1>
        <div className="project__details">
          <p className="project__tags">
            {this.props.selectedProject.topics[0].name === 'Tangiable' ? 'Tangible' : this.props.selectedProject.topics[0].name},	&nbsp;
            {this.props.selectedProject.topics[1].name === 'Tangiable' ? 'Tangible' : this.props.selectedProject.topics[1].name}
          </p>
          <p className="project__advisor">Advisor: {this.props.selectedProject.advisor_name}</p>
        </div>
        <p className="project__abstract">{ReactHtmlParser(this.props.selectedProject.short_description)}</p>
        <Carousel>
          {renderArray}
        </Carousel>
        <p className="project__desc">{this.props.selectedProject.project_question}</p>
        <iframe className="project__vimeo" src="https://player.vimeo.com/video/167009768" width="640" height="360" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen>
        </iframe>
        <div className="project__further">{ReactHtmlParser(this.props.selectedProject.further_reading)}</div>
      </section>
    );
  }
}

Project.propTypes = {
  selectedProject: PropTypes.shape.isRequired
};

export default Project;
