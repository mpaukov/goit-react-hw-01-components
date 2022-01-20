import PropTypes from 'prop-types';

import StatisticsItem from './StatisticsItem';

function Statistics({ title, stats }) {
  const entries = Object.entries(stats.stats);

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {entries.map(entry => (
          <li className="item" key={entry[0]}>
            <StatisticsItem name={entry[0]} value={entry[1]} />
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number)),
};

export default Statistics;
