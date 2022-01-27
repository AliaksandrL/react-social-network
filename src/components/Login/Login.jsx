import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
// import s from "./../common/FormsControls/FormsControls.module.css";
import s from "./Login.module.css";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <div className={s.wrapper}>
            <h3>Please Log In</h3>
            <form onSubmit={handleSubmit} className={s.form}>
                {/*{createField("Email", "email", [required], Input)}*/}
                {/*{createField("Password", "password", [required], Input, {type: "password"})}*/}
                {/*{createField(null, "rememberMe", [required], Input, {type: "checkbox"}, "remember me")}*/}

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}
                <p className={s.inputWrapper}>
                    <div className={s.n}>
                        <Field component={Input} validate={[required]} name={"email"} placeholder={"Email"}/>
                    </div>
                </p>
                <div>
                    <Field component={Input} validate={[required]} name={"password"} placeholder={"Password"} />
                </div>
                <div className={s.checkboxText}>
                    <Field component={Input} validate={[required]} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <div className={s.error}>
                    {error}
                </div>
                <div>
                    <button className={s.submit}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remeberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);