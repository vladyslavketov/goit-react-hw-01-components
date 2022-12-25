import PropTypes from 'prop-types';
import getRandomHexColor from './randomColor';
import css from './Statistics.module.css';


const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.statTitle}>Upload stats</h2>}
      <ul className={css.statList}>
        {stats.map(({id, label, percentage}) => (
          <li
            key={id}
            className={css.statItem}
            style={{backgroundColor: getRandomHexColor()}}
          >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,      
    }))
}

export default Statistics;