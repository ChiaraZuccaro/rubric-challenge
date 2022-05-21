import styles from "./styles.module.scss";

export const Input = ({ type, value, setValue }) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={type.toLowerCase()}>{type}:</label>
      <input
        required
        id={type.toLowerCase()}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={
          type.toLowerCase() === "name"
            ? "type here the name ..."
            : type.toLowerCase() === "surname"
            ? "here the surname ..."
            : type.toLowerCase() === "number"
            ? "write here the cellphone ..."
            : ""
        }
      />
    </div>
  );
};
