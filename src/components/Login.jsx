import React,{useState}from 'react';


const Login = ({setLog}) => {


const [user,setUser] = useState ({
    username:'' ,
    password:''
});
const [error,setError] = useState (false)
const {username,password} = user;

 const onChange = e=> {
    setUser({
        ...user,
        [e.target.name] : e.target.value
    })
} 
 
const onSubmit = e=> {
    e.preventDefault();
    

    if (username.trim() === '' || password ==='') {
        setError (true);
        return;
    }

    setError(false);

    if (username.trim() !== 'admin' && password !== "admin") {
        setError (true);
        return;
    }
    setError (false);
    setLog(true);
    }


    return ( 
        <div className="login-container">

            {error?<p className="error">*Username or password is incorrect</p> : null}
            <form 
                className="login-form"
                onSubmit={onSubmit}
            >
                <h2>Log in Here</h2>
                <label 
                    htmlFor="username"
                    >Username: </label>
                <input 
                    type="text"
                    id="username"
                    name="username"
                    placeholder="*Username" 
                    value={username}
                    onChange={onChange}
                    
                    />

                <label 
                    htmlFor="password" 
                >Password: </label>

                <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder="*Password" 
                    value= {password}
                    onChange={onChange}
                />

                <input type="submit" value="Log In" className="login-btn"/>
            </form>

        </div>
    
    
        );
}
 
export default Login;