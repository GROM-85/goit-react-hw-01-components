import PropTypes from 'prop-types';
import style from './Transaction.module.css'

export function TransactionItem({id,type,currency,amount}){
    return <tr id ={id}>
    <td className={style.type}>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
</tr>    
}

TransactionItem.propTypes = {
    type:PropTypes.string,
    amount:PropTypes.string,
    currency: PropTypes.string,
}