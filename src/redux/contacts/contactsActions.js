import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (task) => ({
  payload: {
    task: { id: uuidv4(), ...task },
  },
}));

const removeContact = createAction("contacts/remove");

const changeFilter = createAction("contacts/changeFilter");

export default { addContact, removeContact, changeFilter };
