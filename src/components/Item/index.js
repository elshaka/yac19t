import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../actions';

const Item = ({
  item, loading, error, getItem, match: { params: { id } }
}) => {
  useEffect(() => {
    getItem(id);
  }, [getItem, id]);

  return (
    <div className="Item">
      { loading && <p>Loading...</p> }
      { error && <p>There was an error, please try again later.</p> }
      { !error && item && (
        <div className="country">
          <h2>{item.name}</h2>
          <p>
            Confirmed:
            {item.confirmed}
          </p>
          <p>
            Deaths:
            {item.deaths}
          </p>
          <p>
            Recovered:
            {item.recovered}
          </p>
          <p>
            Active:
            {item.active}
          </p>
        </div>
      ) }
    </div>
  );
};

const mapStateToProps = state => state.item;
const mapDispatchToProps = { getItem };

export default connect(mapStateToProps, mapDispatchToProps)(Item);
