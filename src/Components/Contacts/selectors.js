export const getAllContacts = (state) => state.contacts.items;

export const getFilter = (state) => state.contacts.filter;

export const getAllContactsLength = (state) => {
  const items = getAllContacts(state);
  return items.length;
};

export const getVisibleContacts = (state) => {
  const items = getAllContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return items.filter((item) => {
    return item.name.toLowerCase().includes(normalizedFilter);
  });
};
