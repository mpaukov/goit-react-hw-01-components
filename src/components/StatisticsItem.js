import PropTypes from 'prop-types';

function StatisticsItem({ name, value }) {
  return (
    <>
      <span className="label">.{name}</span>
      <span className="percentage">{value}%</span>
    </>
  );
}

StatisticsItem.propTypes = {};

export default StatisticsItem;
