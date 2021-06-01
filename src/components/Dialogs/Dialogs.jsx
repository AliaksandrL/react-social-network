import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Nastya" },
    { id: 4, name: "Zhenya" },
    { id: 5, name: "Valera" },
  ]

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it?" },
    { id: 3, message: "Yes!" },
    { id: 4, message: "No" },
    { id: 5, message: "Yoo" },
  ]

    let dialogsElements = dialogs
    .map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElements = messages
    .map( m => <Message message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }             
      </div>
      <div className={s.messages}>
     { messagesElements }
      </div>
    </div>
  );
};

export default Dialogs;
