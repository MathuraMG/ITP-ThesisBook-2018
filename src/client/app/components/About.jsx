import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Carousel } from 'react-responsive-carousel';
import * as AboutDefs from '../aboutConstants.jsx';

class About extends React.Component {
  render() {
    return (
      <section className="about__container">
        <img
          src="arrow.png"
          className="project__arrow"
          alt="arrow"
        />

        <div className="about__items">
          <button
            className={`about__item ${this.props.aboutTopic === 0 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(0);
            }}
          > Thesis
          </button>
          <button
            className={`about__item ${this.props.aboutTopic === 1 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(1);
            }}
          > Class of 2018
          </button>
          <button
            className={`about__item ${this.props.aboutTopic === 2 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(2);
            }}
          > Credits
          </button>

        </div>

        <div className="about__content">

          {(this.props.aboutTopic === 0) &&
          <div>
            <p className="about__para">
              {ReactHtmlParser(AboutDefs.ABOUT_ITP)}
            </p>
          </div>
          }

          {(this.props.aboutTopic === 1) &&
          <div className="about__thesis-2018">
            <Carousel>
              <img
                src="https://placebear.com/400/200"
                alt="placeholder"
              />
              <img
                src="https://placebear.com/400/200"
                alt="placeholder"
              />
            </Carousel>
            <p className="about__para">
              {ReactHtmlParser(AboutDefs.ABOUT_THESIS_2018)}
            </p>
          </div>
          }


          {(this.props.aboutTopic === 2) &&
          <div>
            <p className="about__para">
              {ReactHtmlParser(AboutDefs.ABOUT_CREDITS)}
            </p>
          </div>
          }

        </div>
      </section>
    );
  }
}

About.propTypes = {
  aboutTopic: PropTypes.number.isRequired,
  setAboutTopic: PropTypes.func.isRequired,
};

export default About;
