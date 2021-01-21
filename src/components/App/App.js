import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import titleTransition from "../../transitions/title.module.css";
import alertTransition from "../../transitions/alert.module.css";
import filterTransition from "../../transitions/filter.module.css";

export default class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <CSSTransition
          in={true}
          timeout={500}
          classNames={titleTransition}
          appear={true}
        >
          <h1 className="mainTitle">Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <CSSTransition
          in={true}
          timeout={250}
          unmountOnExit
          classNames={filterTransition}
        >
          <Filter />
        </CSSTransition>
        <ContactList />
      </div>
    );
  }
}
