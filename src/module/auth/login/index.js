import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../auth.css"

function LogIn() {
    // Initialize navigate hook
    const navigate = useNavigate();

    // Initialize state variables
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Retrieve user credentials from localStorage
    const userName = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');

    // Function to handle form submission
    const handleChange = (e) => {
        e.preventDefault();

        // Check if entered email and password match the stored credentials
        if (email === userName && password === userPassword) {
            // Set loggedIn status in localStorage
            localStorage.setItem("loggedIn", true);
            alert('Login successful');
            navigate('/');
        } else {
            alert("Invalid credentials");
        }
    }

    return (
        <>
            <div className="login-form-container">
                {/* Close button */}
                <span id="close-login-form" className="fas fa-times"></span>

                {/* Login form */}
                <form>
                    <h3>Sign In</h3>
                    <input type="email" placeholder="email" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {/* Submit button */}
                    <input type="submit" value="Sign In" className="btn" onClick={handleChange} />
                </form>
            </div>
        </>
    )
}

export default LogIn;

// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// function LogIn() {

//     const navigate = useNavigate();

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//    const userName = localStorage.getItem('email');
//    const userPassword = localStorage.getItem('password');


// const handleChange =(e)=>{
//     if(email===userName && password === userPassword)
//     {
//         localStorage.setItem("loggedIn",true);
//     alert('login succefully');
//     navigate('/')
    
// }else{
//     alert("invalid user");
// }
// }
//     return (
//         <>
//             <div className="login-form-container">

//                 <span id="close-login-form" className="fas fa-times"></span>

//                 <form action="">
//                     <h3>Sign In</h3>
//                     <input type="email" placeholder="email" className="box" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <input type="password" placeholder="password" className="box" value={password} onChange={(e) => setPassword(e.target.value)} />

//                     <input type="submit" value="Sign Up" className="btn"  onClick={handleChange}/>



//                 </form>

//             </div>
//         </>
//     )


   
// }

// export default LogIn
