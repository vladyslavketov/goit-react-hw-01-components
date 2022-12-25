import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileDesc}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.profileAvatar}
        />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>
      <ul className={css.profileStats}>
        <li>
          <span className={css.profileLabel}>Followers</span>
          <span className={css.profileQuantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.profileLabel}>Views</span>
          <span className={css.profileQuantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.profileLabel}>Likes</span>
          <span className={css.profileQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
}

export default Profile;