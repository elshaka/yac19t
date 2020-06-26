import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries,
} from 'react-vis';
import { getItem } from '../../actions';

const Item = ({
  item, loading, error, getItem, match: { params: { id } },
}) => {
  useEffect(() => {
    getItem(id);
  }, [getItem, id]);


  if (loading) {
    return <p>Loading...</p>;
  };

  if (error) {
    return <p>There was an error, please try again later.</p>;
  };

  if (!item) {
    return <p>There is no data available for the selected country</p>;
  }

  return (
    <div className="Item">
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
        <XYPlot
          width={600}
          height={300}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <LineSeries
            data={
              item.stats.map((point, index) => ({
                x: index, y: point.confirmed,
              }))
            }
          />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    </div>
  );
};

Item.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.number.isRequired,
    deaths: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      confirmed: PropTypes.number.isRequired,
      deaths: PropTypes.number.isRequired,
      recovered: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      datetime: PropTypes.string.isRequired,
    })).isRequired,
  }),
  getItem: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Item.defaultProps = {
  item: null,
};

const mapStateToProps = state => state.item;
const mapDispatchToProps = { getItem };

export default connect(mapStateToProps, mapDispatchToProps)(Item);
