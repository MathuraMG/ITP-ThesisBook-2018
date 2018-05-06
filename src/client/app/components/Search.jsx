import React from 'react';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';
import $ from 'jquery';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log($('input'));
  }
  render() {
    const studentList = this.props.students;
    const style = {
      'background': 'white',
      'padding': '2px 0px',
      'font-size': '90%',
      'position': 'fixed',
      'overflow-y': 'scroll',
      'max-height': '80%',
      'width': '200px',
    };
    const inputProps = {
      // onFocus: this.test(),
      // onBlur: this.props.setIsDropDownOpen(false),
      placeholder: 'SEARCH BY STUDENT'
    };
    return (
      <div
        className="search__container"
      >
        <Autocomplete
          getItemValue={item => item.label}
          items={studentList}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          renderItem={(item, isHighlighted) =>
            (
              <div className="search__values" style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
              </div>
            )
          }
          value={this.props.selectedStudent}

          onChange={(e) => {
            this.props.setSelectedStudent(e.target.value);
          }
          }
          onSelect={(value) => {
            console.log(value);
            this.props.history.push(`/student/${value}`);
            window.location.reload();
            // window.location.replace(`${window.location.origin}/student/${value}`);
          }
          }
          menuStyle={style}
          inputProps={inputProps}
        />

      </div>
    );
  }
}
Search.propTypes = {
  history: PropTypes.object.isRequired,
  selectedStudent: PropTypes.string.isRequired,
  setSelectedStudent: PropTypes.func.isRequired,
  students: PropTypes.array.isRequired,
};

export default Search;
