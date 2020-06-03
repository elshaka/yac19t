import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList } from '../../actions';

const List = ({ list, loading, error, getList }) => {
  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div className="List">
      <h1>YAC19T</h1>
      <p>Are you wearing a mask?</p>
      { loading && <p>Loading...</p> }
      { error && <p>There was an error, please try again later.</p>}
      { !error && <div class="countries">
        { list.map(country => <div className="country" key={country.id}>{ country.name }</div>) }
      </div>}
    </div>
  );
};

const mapStateToProps = (state) => state.list;
const mapDispatchToProps = { getList };

export default connect(mapStateToProps, mapDispatchToProps)(List);
