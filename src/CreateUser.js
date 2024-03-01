import { useState } from "react";
import useFetch from "./useFetch";

const CreateUser = ({userHandle}) =>{
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading,setLoading] = useState(false);
    const [isUserExists,setIsUserExists] = useState(false);

    const {data : users, isLoading: isLoadingUser, error} = useFetch('http://localhost:8001/users');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const userdata = {username:user, password};
        console.log(user);

        setLoading(true);

        fetch('http://localhost:8001/users', {
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(userdata)
        }).then(() => {
            setLoading(false);
            userHandle(false);
        })
    }

    const handleCheckUser = (e) =>{
        const user = users.filter((item) => item.username === e.target.value)[0];
        user !== undefined ? setIsUserExists(true) : setIsUserExists(false);
        setUser(e.target.value);
    }

    return(
        <div className="create-user">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <label>User Name :</label>
                <input 
                    type="text" 
                    required
                    value={user}
                    onChange={(e) => handleCheckUser(e)}
                />
                <label>Password :</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isUserExists && !isLoading && <button>Create</button>}
                {isLoading && <button disabled>Creating User Account...</button>}
                {isUserExists && <p className="errorMsg">Username already exists.</p>}
            </form>
        </div>
    );
}

export default CreateUser;