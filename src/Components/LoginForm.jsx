import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

function LoginForm({loginUser, setUserName}) {

    const [failLogin, setFailLogin] = useState(false);
    let login = "";
    let password = "";

    const history = useHistory();

    const handleLoginChange = (e) => {
        login = e.target.value;
    }

    const handlePasswordChange = (e) => {
        password = e.target.value;
    }

    const tryLoginUser = () => {
        let result = loginUser({login: login, password: password});
        if(result)
        {
            setUserName(login);
            history.push("/customDataList");
        }
        else setFailLogin(true);
    }

    return(
        <div className="col-12 mx-auto mt-4">
            <p className="h3 col-2 row mx-auto mt-1">Авторизация</p>
            
            <div className="col-4 row mx-auto">
                <p className="h4 col-3 row">Логин:</p>
                <div className="col-6 row mx-auto">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={handleLoginChange}
                    />
                 </div>
            </div>
            <div className="col-4 row mx-auto mt-1">
                <p className="h4 col-3 row">Пароль:</p>
                <div className="col-6 row mx-auto">
                    <input 
                        type="password" 
                        className="form-control-lg"
                        onChange={handlePasswordChange}
                    />
                </div>
            </div>
            { failLogin &&
              <label className="text-danger">Вы ввели неверный логин или пароль!</label>
            }
            <div className="col-2 row mx-auto mt-2">
                <button className="btn-lg btn-primary" onClick={tryLoginUser}>Войти</button>
            </div>
            <div className="col-2 row mx-auto mt-1">
                <Link className="btn-lg btn-primary" to="/register">Регистрация</Link>
            </div>
        </div>
    );
}

export default LoginForm;