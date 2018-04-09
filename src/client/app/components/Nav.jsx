import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search.jsx';
import TagCircle from './TagCircle.jsx';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/about">About</Link>
        <Search
          selectedStudent={this.props.selectedStudent}
          students={this.props.students}
          setSelectedStudent={this.props.setSelectedStudent}
          getStudentProject={this.props.getStudentProject}
        />
        <button
          onClick={() => { this.props.setIsTagCircleOpen(true); }}
        >
          Search By TagCircle
        </button>
        {
          this.props.isTagCircleOpen &&
          <TagCircle
            setSelectedTags={this.props.setSelectedTags}
            setSelectedTag={this.props.setSelectedTag}
            getTagProjects={this.props.getTagProjects}
            setIsTagCircleOpen={this.props.setIsTagCircleOpen}
          />
        }
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
