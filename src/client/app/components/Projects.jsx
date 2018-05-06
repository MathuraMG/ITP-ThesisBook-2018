import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredName: '',
      studentArray: []
    };
  }

  componentDidMount() {
    if (this.props.selectedProjects.length > 0) {
      const tempArray = this.shuffleArray(this.props.selectedProjects);
      this.setState({ studentArray: tempArray }); //eslint-disable-line
    }
  }

  componentWillUpdate(nextProps) {
    if ((this.props.selectedProjects !== nextProps.selectedProjects)
    || (this.props.selectedTag !== nextProps.selectedTag)) {
      if (nextProps.selectedProjects && nextProps.selectedProjects.length > 0) {
        const tempArray = this.shuffleArray(nextProps.selectedProjects);
        this.setState({ studentArray: tempArray }); //eslint-disable-line
      }
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i = -1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  truncate(desc) {
    if (window.innerWidth <= 768) {
      return (desc.length > 250) ? (`${desc.slice(0, 250)}...`) : desc;
    } else if (window.innerWidth > 1200) {
      return (desc.length > 250) ? (`${desc.slice(0, 250)}...`) : desc;
    }
    return (desc.length > 150) ? (`${desc.slice(0, 150)}...`) : desc;
  }

  render() {
    return (
      <section className="projects">
        {this.state.studentArray.map(project => (
          <div
            className="projects__container"
            role="link"
            onClick={() => {
              this.props.history.push(`/student/${project.student_slug}`);
            }}
            onKeyDown={() => {
              this.props.history.push(`/student/${project.student_slug}`);
            }}
            tabIndex="0"
          >
            <ul className="projects__tags">
              {project.topics[0] &&
                <li className={`projects__tag ${(this.props.selectedTag === project.topics[0].name)
                  ? ''
                  : 'projects__tag--selected'}`}
                >
                  {project.topics[0].name}
                </li>
              }
              {project.topics[1] &&
                <li className={`projects__tag ${(this.props.selectedTag === project.topics[1].name)
                  ? ''
                  : 'projects__tag--selected'}`}
                >
                  {project.topics[1].name}
                </li>
              }
            </ul>
            <div
              className="projects__inside-container"
              onMouseEnter={(e) => {
                this.setState({ hoveredName: e.target.parentElement.id });
                this.props.setShowProjectText(true);
              }}
              onMouseLeave={() => { this.props.setShowProjectText(false); }}
            >
              <div id={project.student_slug}>
                {project.portfolio_icon &&
                <img
                  src={project.portfolio_icon.src}
                  alt={project.portfolio_icon.alt}
                  className="projects__image"
                />
                }
                {!project.portfolio_icon &&
                <img className="projects__image" src="backup.png" alt="itp logo" />
                }
                <section
                  id={project.student_slug}
                  className="projects__text"
                >
                  <h3 className="projects__name">{project.student_name}</h3>
                  <h1 className="projects__title">{ReactHtmlParser(project.project_title)}</h1>
                </section>
              </div>

              <div
                className={`projects__inside${(this.props.showProjectText
                  && this.state.hoveredName === project.student_slug) ?
                  '--show' : '--hide'}`}
              >
                <p className="projects__inside-text">
                  {ReactHtmlParser(this.truncate(project.short_description))}
                </p>
              </div>


            </div>

          </div>
        ))}

      </section>
    );
  }
}

Projects.propTypes = {
  history: PropTypes.object.isRequired,
  selectedProjects: PropTypes.array.isRequired,
  selectedTag: PropTypes.string.isRequired,
  setShowProjectText: PropTypes.func.isRequired,
  showProjectText: PropTypes.bool.isRequired
};

export default Projects;
