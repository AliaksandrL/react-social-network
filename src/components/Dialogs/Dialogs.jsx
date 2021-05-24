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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Sasha" id="2" />
        <DialogItem name="Nastya" id="3" />
        <DialogItem name="Zhenya" id="4" />
        <DialogItem name="Valera" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How is your it?" />
        <Message message="Yes!" />
        <Message message="Yes!" />
      </div>
    </div>
  );
};

export default Dialogs;
