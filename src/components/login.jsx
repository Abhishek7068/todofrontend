import "./login.css";
import {Link} from "react-router-dom";


const Login = () => {
    return (
        <div className="Container">
            <div className="box">
                <div className="Form">
                    <h1>Login</h1>
                    <form action="">
                        <label htmlFor="Email">Email</label>
                        <input type="text" />
                        <label htmlFor="Password">Password</label>
                        <input type="password" required />
                        <span className="LinkToRegister">If not yet registered ? <Link to="/register" className="RegisterHere">Register here</Link> </span>
                        <button className="buttonLogin">Login</button>                        
                    </form>
                </div>
            </div>
        </div>
    ) 
}

export default Login;