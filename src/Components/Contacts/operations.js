import axios from "axios";
import * as actions from "../../Redux/actions";

axios.defaults.baseURL = "http://localhost:3030";

export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get("/contacts")
    .then((response) => dispatch(actions.fetchContactSuccess(response.data)))
    .catch((error) => dispatch(actions.fetchContactRejected(error.message)));
};

export const addContact = (data) => (dispatch) => {
  const contact = {
    name: data.name,
    number: data.number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactRejected(error)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactRejected(error)));
};
