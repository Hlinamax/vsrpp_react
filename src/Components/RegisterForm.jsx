import React, { useState } from 'react';
import { connect } from 'react-redux';
import userRegister from '../store/actionCreators/userRegister';
import { useForm } from 'react-hook-form';
import api from '../api';

function RegisterForm({ history, users, addUser }) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { register, handleSubmit, formState: { errors }} = useForm();

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const createUser = async () => {
        let newUser = {
            id: users[users.length - 1].id + 1,
            login: login,
            password: password,
            email: email
        };
        addUser(newUser);
        await api.addUser(newUser);
        history.push("/login");
    }

    return (
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h1 className="text-center pt-3 text-secondary">Регистрация</h1>
                    <form onSubmit={handleSubmit(createUser)}>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Логин:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                {...register("login", { required: "Требуется логин", 
                                                        minLength: {value: 3, message: "Логин должен состоять не менее чем из 3-х символов!"}, 
                                                        maxLength: {value: 50, message: "Логин должен содержать не более 50 символов!"},
                                                        validate: {loginTaken: value => {
                                                            let isNotExist = true
                                                            users.forEach(user => {
                                                                if(value === user.login) isNotExist = false;
                                                            });
                                                            return isNotExist || "Данный пользователь уже существует";
                                                        }}})} 
                                onChange={handleLoginChange} 
                            />
                            {errors.login && <small className="text-danger d-flex">{errors.login.message}</small>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Пароль:</label>
                            <input 
                                type="password" 
                                className="form-control"
                                {...register("password", { required: "Требуется пароль",
                                                           minLength: {value: 8, message: "Пароль должен состоять не менее чем из 8-х символов!"},
                                                           validate: { number: value => /\d/.test(value) || "Пароль должен иметь хотя бы одну цифру!",
                                                                       capitalLetter: value => new RegExp('[A-Z]').test(value) || "Пароль должен иметь хотя бы одну букву!"}})} 
                                onChange={handlePasswordChange}
                            />
                            {errors.password && <small className="text-danger d-flex">{errors.password.message}</small>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Подтверждение пароля:</label>
                            <input 
                                type="password" 
                                className="form-control"
                                {...register("confirmPassword", { required: "Требуется подтверждение пароля",
                                                                  validate: value => {
                                                                      console.log(value + " password: " + password)
                                                                      return value !== {password} || "Пароли не совпадают!";
                                                                    }})} 
                            />
                            {errors.confirmPassword && <small className="text-danger d-flex">{errors.confirmPassword.message}</small>}
                        </div>
                        <div className="form-group mb-2">
                            <label className="col-form-label d-flex">Электронная почта:</label>
                            <input 
                                type="text" 
                                className="form-control"
                                {...register("email", { required: "Введите Эл.почту!",
                                                        pattern: {
                                                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                                                            message: "Не верно введён e-mail! Пример example@g.com"},
                                                        validate: {emailTaken: value => {
                                                            let isNotExist = true
                                                            users.forEach(user => {
                                                                if(value === user.email) isNotExist = false;
                                                            });
                                                            return isNotExist || "Данная почта уже зарегистрирована!";
                                                        }}})} 
                                onChange={handleEmailChange}
                            />
                            {errors.email && <small className="text-danger d-flex">{errors.email.message}</small>}
                        </div>
                        <button className="btn-lg btn-primary" type="submit">Подтверждение</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        users: state.users
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addUser: (user) => dispatch(userRegister(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);