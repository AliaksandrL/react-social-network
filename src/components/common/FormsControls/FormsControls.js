import React from "react";
import s from "./FormsControls.module.css"

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.child}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props}><textarea {...input} {...props} /></FormControl>
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}