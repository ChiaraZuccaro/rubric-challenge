import styles from "./styles.module.scss";

import { ContactCard } from "../ContactCard/contactcard";
export const ContactList = ({ arrayInfo, removeInfo }) => {
  return (
    <>
      <ul>
        {arrayInfo.map((contact, index) => (
          <ContactCard contact={contact} key={index} removeInfo={removeInfo} />
        ))}
      </ul>
    </>
  );
};
