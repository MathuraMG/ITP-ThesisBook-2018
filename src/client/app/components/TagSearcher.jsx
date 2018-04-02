import React from 'react';
import PropTypes from 'prop-types';

const axios = require('axios');

class TagSearcher extends React.Component {
  getPairedProjects(tag) {
    axios.get(`/api/pair/${tag}`)
      .then((res) => {
        console.log(res.data);
        this.props.setSelectedTags(res.data);
      });
  }

  render() {
    return (
      <ul>
        {this.props.tags.map(tag => (
          <li>
            <button
              className={`tag__button${this.props.selectedTags.includes(tag) ? '--selected' : '--unselected'}`}
              onClick={() => {
                this.getPairedProjects(tag);
              }}
            >
              {tag}
            </button>
          </li>
        ))}

      </ul>
    );
  }
}

TagSearcher.propTypes = {
  setSelectedTags: PropTypes.func.isRequired,
  tags: PropTypes.shape.isRequired,
};

export default TagSearcher;
