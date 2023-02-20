import PropTypes from 'prop-types';
import defaultImg from "../../defaultAva.png";
import style from './Profile.module.css';

console.log(defaultImg);// export img form webpack/parcel cause path is relative to dist

export function Profile({username,
    avatar = defaultImg,
    tag,
    stats,
    location
    }){
    return <div className={style.profile}>
    <div className={style.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={style.avatar}
      />
      <p className={style.name}>{username}</p>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
    </div>
  
    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
  }

  Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.object,
    tag: PropTypes.string,

  }