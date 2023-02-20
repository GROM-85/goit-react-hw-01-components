import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import style from './FriendList.module.css';

export  function FriendList({
  friends,
}){
    return <ul className={style.friend_list}>
      {friends.map(friend => (
        <FriendItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        />
      ))}
  </ul>
}

FriendList.propTypes = {
  friend:PropTypes.arrayOf(PropTypes.shape(
    {
      id:PropTypes.string.isRequired,
    }
  ))
}
