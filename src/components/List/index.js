import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getList } from '../../actions';
import Filter from './filter';

const List = ({
  list, loading, error, filter, getList,
}) => {
  useEffect(() => {
    getList();
  }, [getList]);

  const query = filter.trim().toLowerCase();
  const filtered = list.filter(p => p.name.toLowerCase().includes(query));

  return (
    <div className="List">
      <h1>YAC19T</h1>
      { loading && <p>Loading...</p> }
      { error && <p>There was an error, please try again later.</p>}
      { !loading && !error && list && (
        <div className="countries">
          <Filter />
          { filtered.map(({ id, name }) => (
            <div className="country" key={id}>
              <Link to={`/${id}`}>{name}</Link>
            </div>
          )) }
        </div>
      )}
    </div>
  );
};

List.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.list;
const mapDispatchToProps = { getList };

export default connect(mapStateToProps, mapDispatchToProps)(List);
