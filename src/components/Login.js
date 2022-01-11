import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history("/");
            props.showAlert("Logged-in successfully", "success")
        }
        else{
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div>
        <h2>Login to continue to iNoteBook</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label htmlFor="email" className="htmlForm-label">Email address</label>
                    <input type="email" className="htmlForm-control mx-2" value={credentials.email} name="email" id="email" aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="htmlForm-label">Password</label>
                    <input type="password" className="htmlForm-control mx-2" name="password" value={credentials.password} id="password" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
