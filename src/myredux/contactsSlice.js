import { createSlice } from '@reduxjs/toolkit';
const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
const contactsInitailState = [savedContacts];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitailState,
  reducers: {
    addContact(state, action) {
      console.log(action);
      console.log(action.payload);
      state.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

/*  const addContact = contact => {
    const isInContactsList = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContactsList) {
      alert(`${contact.name} is already in contact list`);
    } else {
      setContacts(prevContacts => [
        { id: nanoid(), ...contact },
        ...prevContacts,
      ]);
    }
  };

const onContactDelete = evt => {
    const idToDelete = evt.target.value;
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== idToDelete)
    );
  };

///Contact form
   const [data, setData] = useState({
    name: '',
    number: '',
  });

  const handleSubmit = evt => {
    evt.preventDefault();
    onFormSubmit({
      name: data.name,
      number: data.number,
    });
    evt.target.reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };
*/
