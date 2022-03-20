import React from 'react';


const UserForm = (props) => {
    const { inputs, setInputs } = props;
    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };
    retrun(
        <form>
            <div>
                <label htmlFor='FirstName'>FirstName: </label>
                <input onChange={onChange} type="text" name="FirstName"></input>
                <p>
                    {inputs.FirstName.length > 0 && inputs.FirstName.length < 2
                        ? "First name Must be at least 2 characters." : ""}
                </p>
            </div>
            <div>
                <label htmlFor='LastName'>Last Name:</label>
                <input onChange={onChange} type="text" name="LastName"></input>
                <p>
                    {inputs.LastName.length > 0 && inputs.LastName.length < 2
                        ? "Last name Must be at least 2 characters." : ""}
                </p>
            </div>
            <div>
                <label htmlFor='Email'>Email:</label>
                <input onChange={onChange} type="text" name="Email"></input>
                <p>
                    {inputs.Email.length > 0 && inputs.Email.length < 8
                        ? "Last name Must be at least 8 characters." : ""}
                </p>
            </div>
            <div>
                <label htmlFor='LastName'>Password:</label>
                <input onChange={onChange} type="password" name="Password"></input>
                <p>
                    {inputs.Password.length > 0 && inputs.Password.length < 8
                        ? "Password Must be at least 8 characters." : ""}
                </p>
            </div>
            <div>
                <label htmlFor='ConfirmPassword'>Confirm Password:</label>
                <input onChange={onChange} type="password" name="ConfirmPassword"></input>
                <p>
                    {inputs.ConfirmPassword.length > 0 &&
                        inputs.ConfirmPassword.length < 8
                        ? "Password must be at least 8 characters.": ""
                        }
                    {inputs.Password !== inputs.ConfirmPassword ? "Passwords do not match." : ""}
                </p>
            </div>
        </form>
    )
}