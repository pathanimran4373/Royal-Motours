import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function ResisterPage() {
const navigate = useNavigate();

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === ""){
            toast.error('name is required');
        }else if(number === ""){
            toast.error('number is required');
        }else if(email === ""){
            toast.error('email is required');
        }else if(password === ""){
            toast.error('password is required');
        } else {
        localStorage.setItem('name', name);
        localStorage.setItem('number', number);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert("you resister succefully");
        navigate('/SignUp')
    }
};


return (
    <>
        <div className="login-form-container">

            <span id="close-login-form" className="fas fa-times"></span>

            <form action="">
                <h3>Resister</h3>
                <input type="name" placeholder="name" className="box" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="number" className="box" value={number} onChange={(e) => setNumber(e.target.value)} />
                <input type="email" placeholder="email" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="password" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Register" className="btn" onClick={handleSubmit} />
                {/* <button classNameName='btn' type='submit'onClick={handleSubmit}>Log IN</button> */}

                <p>or login with</p>

                <div className="buttons">
                    <a href="#" className="btn"> google </a>
                    <a href="#" className="btn"> facebook </a>
                </div>

            </form>

        </div>
    </>
)
}

export default ResisterPage
