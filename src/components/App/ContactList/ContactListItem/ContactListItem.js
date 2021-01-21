import React from "react";
import contactsActions from "../../../../redux/contacts/contactsActions";
import { connect } from "react-redux";
import styles from "./ContactListItem.module.css";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.ContactList_item}>
    <div className={styles.contactWrapper}>
      <p>{name}</p>
      <p className={styles.numberContact}>{number}</p>
    </div>
    {
      <button
        className={styles.ContactList_button}
        type="button"
        name="delete"
        onClick={onRemove}
      >
        &#10006;
      </button>
    }
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const item = state.tasks.items.find((item) => item.id === ownProps.id);
  return { ...item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
