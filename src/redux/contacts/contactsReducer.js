import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import contactsActions from "./contactsActions";

const addContact = (state, action) => [action.payload.task, ...state];

const removeContact = (state, action) =>
  state.filter((task) => task.id !== action.payload);

const items = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [contactsActions.addContact]: addContact,
    [contactsActions.removeContact]: removeContact,
  }
);

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, { payload }) => (state = payload),
});

export default combineReducers({
  items,
  filter,
});
