import { useSelector, useDispatch } from "react-redux";
import * as operations from "../Contacts/operations";
import { getVisibleContacts } from "../Contacts/contacts-selectors";
import s from "./ContactList.module.css";
import { useEffect } from "react";

export default function ContactList() {
  const items = useSelector((state) => getVisibleContacts(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const onDeleteContact = (contactId) =>
    dispatch(operations.deleteContact(contactId));

  return (
    <ul className={s.contactList}>
      {items.length > 0 &&
        items.map(({ name, number, id }) => (
          <li key={id} className={s.list}>
            <p className={s.text}>
              {name} : {number}
            </p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  );
}
