import React from 'react';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

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
          console.log(e.target.value);
          this.props.setCurrentStudent(e.target.value);
        }
        }
        onSelect={(value) => {
          console.log(value);
          this.props.setCurrentStudent(value);
        }
        }
      />
    );
  }
}
Search.propTypes = {
  students: PropTypes.shape.isRequired,
  currentStudent: PropTypes.string.isRequired,
  setCurrentStudent: PropTypes.func.isRequired
};

export default Search;
