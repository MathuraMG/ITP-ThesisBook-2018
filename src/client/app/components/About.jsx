import React from 'react';
import * as AboutDefs from '../aboutConstants.jsx';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class About extends React.Component {
  render() {
    return (
      <section className="about__container">
        <img src="/arrow.png" className="project__arrow" />

        <div className="about__items">
          <button
            className={`about__item ${this.props.aboutTopic == 0 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(0);
            }}
          > Thesis
          </button>
          <button
            className={`about__item ${this.props.aboutTopic == 1 ? 'about__item--selected' : ''}`}
            onClick={() => {
              this.props.setAboutTopic(1);
            }}
          > Class of 2018
          </button>
          <button
            className={`about__item ${this.props.aboutTopic == 2 ? 'about__item--selected' : ''}`}
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
          <div>
            // <img className="about__class-image" src="https://placebear.com/400/200" />
            <p className="about__para">
              {ReactHtmlParser(AboutDefs.ABOUT_THESIS_2018)}
            </p>
          </div>
          }


          {(this.props.aboutTopic === 2) &&
          <div>
            <ul className="about__list">
              <li> Hoomins </li>
              <li> Hoomins </li>
              <li> Hoomins </li>
              <li> Hoomins </li>
              <li> Hoomins </li>
            </ul>
          </div>
          }

        </div>
      </section>
    );
  }
}

export default About;
