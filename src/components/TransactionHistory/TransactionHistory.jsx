import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={clsx(css.text_center, css.bg_stone)}>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr
              className={clsx(
                css.text_center,
                index % 2 === 0 ? css.bg_gray : css.bg_lightgray
              )}
              key={item.id}>
              <td className={css.cell}>
                {item.type.charAt(0).toUpperCase()}
                {item.type.slice(1)}
              </td>
              <td className={css.cell}>{item.amount}</td>
              <td className={css.cell}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
