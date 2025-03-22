import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="Avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem; 