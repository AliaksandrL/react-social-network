import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {/*{createField("Email", "email", [required], Input)}*/}
            {/*{createField("Password", "password", [required], Input, {type: "password"})}*/}
            {/*{createField(null, "rememberMe", [required], Input, {type: "checkbox"}, "remember me")}*/}
            <div>
                <Field component={Input} validate={[required]} name={"email"} placeholder={"Email"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div className={s.formSummaryError}>
                {error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.remeberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);