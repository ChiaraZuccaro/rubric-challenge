import { useEffect, useState } from "react";
import "./App.css";
import rubric from "./utils/rubric";
import { ContactList } from "./components/ContactList/contactsList";
import { NewContact } from "./components/NewContact/newContact";

function App() {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState([]);
  const [infoToPush, setInfoToPush] = useState();
  const [localInfo, setLocalInfo] = useState(rubric);

  useEffect(() => {
    if (infoToPush !== undefined) {
      localInfo.push(infoToPush);
      localStorage.setItem("rubric", JSON.stringify(localInfo));
    }
  }, [infoToPush]);

  useEffect(() => {
    const filtered = localInfo.filter((singlecontact) =>
      singlecontact.name.toLowerCase().includes(search)
    );
    setFilter(filtered);
  }, [search]);

  const removeFromArray = (deleteInfo) => {
    const deleteContact = localInfo.filter(
      (contact) => contact.name !== deleteInfo.name
    );
    setLocalInfo(deleteContact);
  };

  return (
    <>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="type to search"
        />
      </div>

      <div className="form-list-wrapper">
        <NewContact newContact={setInfoToPush} />
        {filter.length == 0 && (
          <ContactList arrayInfo={localInfo} removeInfo={removeFromArray} />
        )}
        {filter.length > 1 && (
          <ContactList arrayInfo={filter} removeInfo={removeFromArray} />
        )}
      </div>
    </>
  );
}

export default App;
