import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.header}>
          <th className={styles.headerCell}>Type</th>
          <th className={styles.headerCell}>Amount</th>
          <th className={styles.headerCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td className={`${styles.cell} ${styles.type}`}>{type}</td>
            <td className={styles.cell}>{amount}</td>
            <td className={styles.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory; 