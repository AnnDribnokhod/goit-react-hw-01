import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.image} src={image} alt="User avatar" width="100" />
        <p className={css.font_bold}>{name}</p>
        <p className={css.text_grey}>@{tag}</p>
        <p className={css.text_grey}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.font_bold}>{stats.followers}</span>
        </li>

        <li className={css.item}>
          <span>Views</span>
          <span className={css.font_bold}>{stats.views}</span>
        </li>

        <li className={css.item}>
          <span>Likes</span>
          <span className={css.font_bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
