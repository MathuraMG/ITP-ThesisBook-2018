import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import TagCircle from './TagCircle.jsx';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0,
    };
    this.searchButtonClicked = this.searchButtonClicked.bind(this);
  }
  searchButtonClicked() {
    this.props.setIsDropDownOpen(true);
  }
  render() {
    return (
      <nav className="nav__container">
        <div className="nav__container-left">
          <a
            className="nav__image-container"
            href="https://tisch.nyu.edu/itp"
            target="blank"
          >
            <img
              className="nav__image"
              src="logo.png"
            />
          </a>
          <button
            onClick={() => {
              this.props.setIsTagCircleOpen(true);
              this.props.history.push('/');
              this.props.setShowAboutPage(false);
              this.setState({ test: this.state.test + 1 });
              console.log(this.state.test);
            }}
            className="nav__heading"
          >
          Thesis Archive 18
          </button>
          {
            this.props.isTagCircleOpen &&
            <TagCircle
              history={this.props.history}
              selectedTag={this.props.selectedTag}
              setSelectedTags={this.props.setSelectedTags}
              setSelectedTag={this.props.setSelectedTag}
              getTagProjects={this.props.getTagProjects}
              getTwoTagProjects={this.props.getTwoTagProjects}
              setIsDropDownOpen={this.props.setIsDropDownOpen}
              setIsTagCircleOpen={this.props.setIsTagCircleOpen}
              selectedProjects={this.props.selectedProjects}
              setSelectedProjects={this.props.setSelectedProjects}
              setShowAboutPage={this.props.setShowAboutPage}
              getTagPairs={this.props.getTagPairs}
            />
          }
          <button
            className="nav__container-right-burger"
            onClick={() => {
              if (this.props.isTagCircleOpen) {
                this.props.setIsTagCircleOpen(false);
                $('.nav__container-right').addClass('nav__container-right--show');
              } else {
                this.props.setIsTagCircleOpen(true);
                $('.nav__container-right').removeClass('nav__container-right--show');
              }
            }}
          >
             &#9776;
          </button>
        </div>
        <div className="nav__container-right">
          <button
            className={`nav__container-about ${(this.props.showAboutPage) ? 'nav__container-about--selected' : ''}`}
            onClick={() => {
              this.props.setShowAboutPage(true);
              this.props.setIsTagCircleOpen(false);
              this.props.history.push('/about');
            }}
          >
          About
          </button>

          <Search
            history={this.props.history}
            isDropDownOpen={this.props.isDropDownOpen}
            selectedStudent={this.props.selectedStudent}
            students={this.props.students}
            setSelectedStudent={this.props.setSelectedStudent}
            setIsDropDownOpen={this.props.setIsDropDownOpen}
            getStudentProject={this.props.getStudentProject}
          />
        </div>


      </nav>
    );
  }
}

Nav.propTypes = {
  selectedStudent: PropTypes.string.isRequired,
  setSelectedTags: PropTypes.func.isRequired,
  setSelectedTag: PropTypes.func.isRequired,
  getTagProjects: PropTypes.func.isRequired,
  students: PropTypes.arrayOf.isRequired,
  tags: PropTypes.arrayOf.isRequired,
};

export default Nav;
