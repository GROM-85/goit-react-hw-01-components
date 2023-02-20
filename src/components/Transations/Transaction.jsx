import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import style from "./Transaction.module.css";

export const Transaction = ({items}) => {
    return <table className={style.transaction}>
    <thead>
      <tr className={style.title}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody className={style.tbody}>
        {items.map(item => (
            <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
            />
        ))}
    </tbody>
  </table>
}

Transaction.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }),)
    
}