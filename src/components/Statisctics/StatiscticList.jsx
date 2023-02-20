import PropTypes from "prop-types";
import { StatisticItem } from "./StatisticItem";
import style from './StatisticList.module.css';

export function StatisticList({
    title,
    stats,
}){

return <section className={style.statistics}>

  {title && <h2 className={style.title}>{title}</h2>}

<ul className={style.stat_list}>
  {stats.map(stat => (
    <StatisticItem
      key={stat.id}
      id={stat.id}
      label={stat.label}
      percentage={stat.percentage}
      />
  ))} 
</ul>
</section>
}

StatisticList.propTypes = {
    title:PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
    })),
}


