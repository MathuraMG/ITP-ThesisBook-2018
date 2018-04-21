import React from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

class Projects extends React.Component {
  render() {
    return (
      <section className="projects">
        {this.props.selectedProjects.map(project => (
          <div
            className="projects__container"
            onClick={
              () => {
                this.props.history.push(`/student/${project.student_slug}`);
                // window.location.replace(`${window.location.origin}/student/${project.student_slug}`);
                // this.getStudentProject(project.student_id);
                // this.props.setIsTagCircleOpen(false);
              }
            }
          >
            <ul className="projects__tags">
              {project.topics[0] &&
                <li className={`projects__tag ${(this.props.selectedTag === project.topics[0].name) ? 'projects__tag--selected' : ''}`}>
                  {project.topics[0].name}
                </li>
              }
              {project.topics[1] &&
                <li className={`projects__tag ${(this.props.selectedTag === project.topics[1].name) ? 'projects__tag--selected' : ''}`}>
                  {project.topics[1].name}
                </li>
              }
            </ul>

            <img className="projects__image" src="https://placebear.com/300/200" />
            <h3 className="projects__name">{project.student_name}</h3>
            <h1 className="projects__title">{project.project_title}</h1>
          </div>
        ))}

      </section>
    );
  }
}


export default Projects;
