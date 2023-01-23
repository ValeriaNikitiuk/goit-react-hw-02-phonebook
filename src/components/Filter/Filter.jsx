import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onFilters }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onFilters} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilters: PropTypes.func,
};

export default Filter;
