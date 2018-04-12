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
        value={this.props.selectedStudent}
        onChange={(e) => {
          this.props.setSelectedStudent(e.target.value);
        }
        }
        onSelect={(value) => {
          window.location.replace(`${window.location.origin}/student/${value}`);
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
