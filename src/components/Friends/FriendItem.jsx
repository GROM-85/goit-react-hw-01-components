import PropTypes from 'prop-types';
import style from './FriendList.module.css';

export const FriendItem = ({avatar,name,isOnline}) => {
 return <li className={style.item}>
 <span className={style.status} style={{backgroundColor: (isOnline && "green")||"red"}}></span>
 <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
 <p className={style.name}>{name}</p>
</li>
} 


FriendItem.propTypes = {
    avatar : PropTypes.string,
    name:PropTypes.string,
    isOnline: PropTypes.bool,
}