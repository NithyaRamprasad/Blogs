import React from 'react';
import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import App from './App';
import CreateUser from './CreateUser'
import { login, logout } from './Redux/Users/userSlice'
import { useSelector, useDispatch } from 'react-redux';

export const UserContext = React.createContext();

const Login = () =>{
    const isUserValid = useSelector(state => state.isUserValid);
    console.log(localStorage);
    const dispatch = useDispatch();
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, setErrorMsg] = useState('');
    const [iscreateUser, setIsCreateUser] = useState(false);

    const {data : users, isLoading, error} = useFetch('http://localhost:8001/users');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = users.filter((item) => item.username === username)[0];
        if(user !== undefined && user.password === password){
            dispatch(login());
        }
        else{
            setErrorMsg('*Username or Password is wrong, please try again!');
        }
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    const handleCreateAccount = () => {
        setIsCreateUser(true);
    }

    return (
        <div>
            <div className="login">
                {!iscreateUser && !isUserValid &&<form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label>User Name :</label>
                    <input 
                        type="text" 
                        required
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label>Password :</label>
                    <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>Login</button>
                    <p className='errorMsg'>{errorMessage}</p>
                    <h4 className='redirecttext' onClick={handleCreateAccount}>Create an account!</h4>
                </form>}
            {iscreateUser && <CreateUser userHandle={setIsCreateUser}/>}
            {iscreateUser && <h4 className='redirecttext' onClick={() => setIsCreateUser(false)}>Already have an account? Login</h4>}
            </div>
            <UserContext.Provider value={[username,setUserName]}>
                {isUserValid && <App updateLoginStatus = {handleLogout}/>}
            </UserContext.Provider>
        </div>
    );
}

export default Login;