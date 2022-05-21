import styles from "./styles.module.scss";

export const ContactCard = ({ contact, removeInfo }) => {
  const removeCard = () => {
    removeInfo(contact);
  };

  return (
    <li className={styles.card}>
      <h3>
        {contact.name} {contact.surname}
      </h3>
      <p>{contact.number}</p>
      <button onClick={removeCard}>X</button>
    </li>
  );
};
