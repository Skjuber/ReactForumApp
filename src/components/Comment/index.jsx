import css from './comment.module.css'
import userImage from './placeholder-user.png';

const Comment = ({ name, email, body }) => {
  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img src={userImage} className={css.userImage} alt="user avatar" />
      </div>
      <div className={css.body}>
        <p className={css.email}>{email}</p>
        <p>{name}</p>
        <p>{body}</p>
      </div>
    </div>
  );
}
 
export default Comment;