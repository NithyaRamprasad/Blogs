import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import App from './App';
import CreateUser from './CreateUser'

const Login = () =>{
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [isValidUser, setIsValid] = useState(false);
    const [errorMessage, setErrorMsg] = useState('');
    const [iscreateUser, setIsCreateUser] = useState(false);

    useEffect(() =>{
        setIsValid(sessionStorage.getItem('isValid') === 'true');
    },[]);

    const {data : users, isLoading, error} = useFetch('http://localhost:8001/users');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const user = users.filter((item) => item.username === username)[0];
        if(user !== undefined && user.password === password){
            sessionStorage.setItem('userName',user.username);
            sessionStorage.setItem('isValid','true');
            setIsValid(true);
        }
        else{
            setErrorMsg('*Username or Password is wrong, please try again!');
        }
    }

    const handleLogout = () => {
        sessionStorage.setItem('isValid','false');
        setIsValid(false);
    }

    const handleCreateAccount = () => {
        setIsCreateUser(true);
    }

    return (
        <div>
            <div className="login">
                {!iscreateUser && !isValidUser &&<form onSubmit={handleSubmit}>
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
            {isValidUser && <App updateLoginStatus = {handleLogout}/>}
        </div>
    );
}

export default Login;