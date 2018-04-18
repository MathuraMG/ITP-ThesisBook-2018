import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import TagCircle from './TagCircle.jsx';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.searchButtonClicked = this.searchButtonClicked.bind(this);
  }
  searchButtonClicked() {
    console.log('hello ');
    this.props.setIsDropDownOpen(true);
  }
  render() {
    return (
      <nav className="nav__container">
        <div className="nav__container-left">
          <img
            className="nav__image"
            src="https://placebear.com/100/100"
          />
          <button
            onClick={() => { this.props.setIsTagCircleOpen(true); }}
            className="nav__heading"
          >
          Thesis Archive 18
          </button>
          {
            this.props.isTagCircleOpen &&
            <TagCircle
              selectedTag={this.props.selectedTag}
              setSelectedTags={this.props.setSelectedTags}
              setSelectedTag={this.props.setSelectedTag}
              getTagProjects={this.props.getTagProjects}
              getTwoTagProjects={this.props.getTwoTagProjects}
              setIsDropDownOpen={this.props.setIsDropDownOpen}
              setIsTagCircleOpen={this.props.setIsTagCircleOpen}
              selectedProjects={this.props.selectedProjects}
              setSelectedProjects={this.props.setSelectedProjects}
            />
          }
        </div>
        <div className="nav__container-right">
          <Link to="/about">About</Link>

          <Search
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
