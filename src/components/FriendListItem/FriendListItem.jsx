import css from "./FriendListItem.module.css";

import clsx from "clsx";
export default function FriendList({ avatar, name, isOnline }) {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.text_base, css.font_medium)}>{name}</p>
      <p className={clsx(css.text_xs, isOnline ? css.red : css.green)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
