import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import { URL } from '../../config';

export default function Login() {
    let history = useNavigate();

    let [userData, setUserData] = useState ({
        email: '',
        password: '',
    })
    let [error, setError] = useState('')
    let [showPassword, setShowPassword] = useState(false)
    
    function handleChange(e){
        setUserData({...userData, [e.target.name]: e.target.value})
    }


    async function handleLogin(e){
        e.preventDefault();
        let log = await fetchLogin();

        if (log.valid){
            console.log(log);
            localStorage.setItem('token', log.token)
            if (localStorage.getItem('')){

            }
            history('/wall')
        } else {
            if (log.status === 203){
                setError(log.message)
            }
            if (log.status === 202){
                setError(log.message)
            }
            if (log.status === 500){
                setError('Ha ocurrido un error')
            }
        }
        
    }

    async function fetchLogin(){
        let response = await axios.post(`${URL}login`, {
            email: userData.email, password: userData.password
        });
        if (response.status===200){
            return {valid: true, token: response.data.user};
        }
        else if (response.status===203 || response.status===202){
            console.log(response)
            return {valid: false, message: response.data.message, status: response.status} ;
        }
        else if (response.status===500){
            return {valid: false, message: response.data, status: response.status};
        }
    }

    function handleShowPassword() {
        setShowPassword(true);
    }

    function handleHidePassword() {
        setShowPassword(false);
    }

    return (
        <div className={style.loginContainer}>
            <form onSubmit={handleLogin} className={style.formContainer}>
            <p className={style.errorP}>{error}</p>
            <label className={style.emailLabel}>Email</label>
            <input className={style.emailInput} onChange={handleChange} value={userData.email} name='email' placeholder='  Email...'></input>
            
            <label className={style.passwordLabel}>Password</label>
            <input type={showPassword ? 'text' : 'password'}  className={style.passwordInput} onChange={handleChange} value={userData.password} name='password' placeholder='  Password...'></input>
            
            <button type='submit' className={style.logButton}>Log in</button>
            <button type='button' className={style.passButton} onMouseDown={handleShowPassword} onMouseUp={handleHidePassword} onMouseLeave={handleHidePassword} >O</button>
            <button type='button' className={style.googleButton}>Sign in with Google</button>
            </form>
        </div>
    )
}