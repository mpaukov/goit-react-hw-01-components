import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

function TransactionHistory(transactions) {
  return (
    <table className={styles['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.objectOf(PropTypes.array),
};

export default TransactionHistory;
