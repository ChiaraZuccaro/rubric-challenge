import { useState } from "react";
import { Input } from "../Input/input";
import styles from "./styles.module.scss";

export const NewContact = ({ newContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const sendNew = (e) => {
    e.preventDefault();
    newContact({
      name: name,
      surname: surname,
      number: number,
    });
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={sendNew}>
        <Input type="Name" value={name} setValue={setName} />
        <Input type="Surname" value={surname} setValue={setSurname} />
        <Input type="Number" value={number} setValue={setNumber} />
        <input type="submit" value="Send" className={styles.send} />
      </form>
    </div>
  );
};
