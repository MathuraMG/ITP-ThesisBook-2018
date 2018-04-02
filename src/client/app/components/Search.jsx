import React from 'react';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const studentList = this.props.students.map(student => ({ label: student }));
    return (
      <Autocomplete
        getItemValue={item => item.label}
        items={studentList}
        renderItem={(item, isHighlighted) =>
          (<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>)
        }
        value={this.props.currentStudent}
        onChange={(e) => {
          this.props.setSelectedStudent(e.target.value);
        }
        }
        onSelect={(value) => {
          console.log(value);
          this.props.getStudentProject(value);
          this.props.setSelectedStudent(value);
          console.log(this.props.selectedStudent);
        }
        }
      />
    );
  }
}
Search.propTypes = {
  selectedStudent: PropTypes.string.isRequired,
  getStudentProject: PropTypes.func.isRequired,
  setSelectedStudent: PropTypes.func.isRequired,
  students: PropTypes.shape.isRequired,
};

export default Search;
