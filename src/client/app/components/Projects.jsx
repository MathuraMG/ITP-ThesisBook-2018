import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const axios = require('axios');

class Projects extends React.Component {
  render() {
    return (
      <section className="projects">
        {this.props.selectedProjects.map(project => (
          <div
            className="projects__container"
            onClick={() => {
              this.props.history.push(`/student/${project.student_slug}`);
            }}
          >
            <ul className="projects__tags">
              {project.topics[0] && <li className={`projects__tag ${(this.props.selectedTag === project.topics[0].name)
                ? ''
                : 'projects__tag--selected'}`}
              >
                {project.topics[0].name}
              </li>
              }
              {project.topics[1] && <li className={`projects__tag ${(this.props.selectedTag === project.topics[1].name)
                ? ''
                : 'projects__tag--selected'}`}
              >
                {project.topics[1].name}
              </li>
              }
            </ul>

            {project.portfolio_icon &&
              <img className="projects__image" src={project.portfolio_icon.src} alt={project.portfolio_icon.alt} />
            }
            {!project.portfolio_icon &&
              <img className="projects__image" src="backup.png" alt="itp logo" />
            }
            <section className="projects__text">
              <h3 className="projects__name">{project.student_name}</h3>
              <h1 className="projects__title">{ReactHtmlParser(project.project_title)}</h1>
            </section>
          </div>
        ))}

      </section>
    );
  }
}

export default Projects;
