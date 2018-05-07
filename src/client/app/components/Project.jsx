import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';

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
    // Accounting for spelling mistake in Tangible in the DB
    return (
      <section className="project__container">
        <img src="arrow.png" className="project__arrow" />
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
        {this.props.selectedProject.project_url &&
          <a
            className="project__student-site"
            href={this.props.selectedProject.project_url}
            target="blank"
          >
            Student Site
          </a>
        }
        <h2 className="project__student-name">{this.props.selectedProject.student_name}</h2>
        <h1 className="project__title">{ReactHtmlParser(this.props.selectedProject.project_title)}</h1>
        <div className="project__details">
          <p className="project__tags">
            {this.props.selectedProject.topics[0].name === 'Tangible' ? 'Tangible' : this.props.selectedProject.topics[0].name},	&nbsp;
            {this.props.selectedProject.topics[1].name === 'Tangible' ? 'Tangible' : this.props.selectedProject.topics[1].name}
          </p>
          <p className="project__advisor">
            Advisor:
            {
              this.props.selectedProject.advisor_name === 'Kathleen Sullivan' ?
                'Kat Sullivan' :
                this.props.selectedProject.advisor_name
            }
          </p>
        </div>
        <p className="project__abstract">{ReactHtmlParser(this.props.selectedProject.short_description)}</p>
        {this.props.selectedProject.slide_show[0] &&
          <Carousel showArrows={false} emulateTouch>
            {renderArray}
          </Carousel>}
        <p className="project__desc">
          {ReactHtmlParser(this.props.selectedProject.project_question)}
        </p>
        {
          this.props.selectedProject.video_documentation_url &&
          <iframe
            className="project__vimeo"
            src={this.props.selectedProject.further_reading}
            width="100%"
            height="400px"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen="true"
          >
          </iframe>
        }

        <div className="project__further">{ReactHtmlParser(this.props.selectedProject.further_reading)}</div>
        <button
          className="project__top"
          onClick={() => {
            $('.project__container').animate({ scrollTop: 0 }, 'fast');
          }}
        >Back To Top
        </button>
      </section>
    );
  }
}

Project.propTypes = {
  history: PropTypes.object.isRequired,
  selectedProject: PropTypes.shape({
    project_url: PropTypes.string.isRequired,
    project_title: PropTypes.string.isRequired,
    advisor_name: PropTypes.string.isRequired,
    student_name: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    slide_show: PropTypes.array.isRequired,
    project_question: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
    video_documentation_url: PropTypes.string.isRequired,
    further_reading: PropTypes.string.isRequired,
  })
};

export default Project;
