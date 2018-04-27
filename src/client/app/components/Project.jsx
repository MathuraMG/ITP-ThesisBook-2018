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
          // onClick={() => { console.log('image change'); }}
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
        <img src="https://itp.nyu.edu/testthesis/arrow.png" className="project__arrow" />
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
            {this.props.selectedProject.topics[0].name === 'Tangiable' ? 'Tangible' : this.props.selectedProject.topics[0].name},	&nbsp;
            {this.props.selectedProject.topics[1].name === 'Tangiable' ? 'Tangible' : this.props.selectedProject.topics[1].name}
          </p>
          <p className="project__advisor">Advisor: {this.props.selectedProject.advisor_name == 'Kathleen Sullivan' ? 'Kat Sullivan' : this.props.selectedProject.advisor_name}</p>
        </div>
        <p className="project__abstract">{ReactHtmlParser(this.props.selectedProject.short_description)}</p>
        {this.props.selectedProject.slide_show[0] &&
          <Carousel>
            {renderArray}
          </Carousel>}
        <p className="project__desc">{ReactHtmlParser(this.props.selectedProject.project_question)}</p>

        {this.props.selectedProject.video_documentation_url && <iframe className="project__vimeo" src={this.props.selectedProject.video_documentation_url} width="100%" height="400px" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen>
        </iframe>}

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
  selectedProject: PropTypes.shape.isRequired
};

export default Project;
