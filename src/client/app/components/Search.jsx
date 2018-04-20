import React from 'react';
import Autocomplete from 'react-autocomplete';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }
  componentDidMount() {
    // debugger; //eslint-disable-line
    // document.getElementsByClassName('search__container')[0].onfocus(() => { console.log('focused'); });
    // document.getElementsByClassName('search__container')[0].setAttribute('onfocus', 'console.log("trstsT")');
    document.getElementsByTagName('input')[0].addEventListener('focus', () => {

    });
    document.getElementsByTagName('input')[0].addEventListener('blur', () => {
      console.log('AAAA');
    });
    //   this.props.setIsDropDownOpen(false);
    // });
    // document.getElementsByTagName('input')[0].defaultValue = 'Search';
  }
  test() {
    console.log('hi');
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
      'max-height': '100%',
      'width': '200px',
    };
    const inputProps = {
      // onFocus: this.test(),
      // onBlur: this.props.setIsDropDownOpen(false),
      placeholder: 'Search By Student'
    };
    return (
      <div className="search__container" tabIndex="2">

        <Autocomplete
          getItemValue={item => item.label}
          items={studentList}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          renderItem={(item, isHighlighted) =>
            (<div className="search__values" style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
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
          inputProps={inputProps}
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
