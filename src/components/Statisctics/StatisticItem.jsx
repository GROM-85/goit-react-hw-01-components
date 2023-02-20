import PropTypes from "prop-types";
import style from './StatisticList.module.css';

export function StatisticItem({
    id,
    label,
    percentage
  }){
    return <li className={style.item} id={id} style={{backgroundColor:getRandomHexColor()}}>
    <span className={style.label}>{label}</span>
    <span className={style.percent}>{percentage}%</span>
  </li>
  }
  
  StatisticItem.propTypes = {
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number,
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }