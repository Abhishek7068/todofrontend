import {Link} from "react-router-dom";
import "./register.css";


const Register = () => {
    return  (
    <div className="ContainerRegister">
        <div className="boxRegister">
            <div className="FormRegister">
                <h1>Register</h1>
                <form action="">
                    <label htmlFor="User">User Name</label>
                    <input type="text" />
                    <label htmlFor="Email">Email</label>
                    <input type="text" />
                    <label htmlFor="Password">Password</label>
                    <input type="password" required />
                    <label htmlFor="Confirm">Confirm Password</label>
                    <input type="password" required />
                    <span className="LinkToLogin">Already registered ? <Link to="/login" className="LoginHere">Login here</Link> </span>
                    <button className="buttonRegister">Register</button>                        
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;
