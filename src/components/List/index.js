import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getList } from '../../actions';

const List = ({
  list, loading, error, getList,
}) => {
  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="List">
      <h1>YAC19T</h1>
      { loading && <p>Loading...</p> }
      { error && <p>There was an error, please try again later.</p>}
      { list && (
        <div className="countries">
          { list.map(({ id, name }) => (
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
  getList: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.list;
const mapDispatchToProps = { getList };

export default connect(mapStateToProps, mapDispatchToProps)(List);
