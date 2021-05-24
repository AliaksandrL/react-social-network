import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1"> Dimych </NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Nastya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Zhenya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it?</div>
        <div className={s.message}>Yes!</div>
      </div>
    </div>
  );
};

export default Dialogs;
