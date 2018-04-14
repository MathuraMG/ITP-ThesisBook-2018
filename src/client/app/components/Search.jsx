import React from 'react';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    const studentList = this.props.students;
    const style = {
      'background': 'rgba(255, 255, 255, 0.9)',
      'padding': '2px 0px',
      'font-size': '90%',
      'position': 'fixed',
      'overflow-y': 'scroll',
      'max-height': '100%',
      'width': '200px',
    };
    return (
      <div className="search__container">
        <Autocomplete
          getItemValue={item => item.label}
          items={studentList}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          renderItem={(item, isHighlighted) =>
            (<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.name}
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
          menuStyle={style}

        />
      </div>
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
