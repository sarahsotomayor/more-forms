import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); 

    const createUser = (e) => {
        e.preventDefault(); 

        const newUser = { firstName, lastName, email, password, confirmPassword };

        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        setHasBeenSubmitted( true );
    };

    return(
        <div>
        <form onSubmit={ createUser }>
            { 
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form</h3>
            }
            <div>
                {firstName && firstName.length < 2 ? <p>First Name must be at least 2 characters</p>: null }
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={ firstName }/>
            </div>
            <div>
                {lastName && lastName.length < 2 ? <p>Last Name must be at least 2 characters</p>: null }
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={ lastName }/>
            </div>
            <div>
                {email && email.length < 5 ? <p>Email must be at least 5 characters</p>: null }
                <label>Email: </label>
                <input type="text" onChange={ (e) => setEmail(e.target.value)} value={ email }/>
            </div>
            <div>
                {password && password.length < 8 ? <p>Password must be at least 8 characters</p>: null }
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value)} value={ password }/>
            </div>
            <div>
                {confirmPassword && confirmPassword != password ? <p>Confirm password must match password</p>: null }
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <section>
            <h2>Your Form Data</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </section>
        </div>
    );
};

export default UserForm;