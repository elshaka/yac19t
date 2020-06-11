import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setListFilter } from '../../actions';

const Filter = ({ filter, setListFilter }) => {
  const setFilterHandler = e => {
    setListFilter(e.target.value);
  };
  return <input type="text" placeholder="Search" value={filter} onChange={setFilterHandler} />;
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setListFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ list: { filter } }) => ({ filter });
const mapDispatchToProps = { setListFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
