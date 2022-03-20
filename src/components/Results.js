import React from 'react'

const Results = props => {
    const { FirstName, LastName, Email, Password, ConfirmPassword } = props.data;
    return (
        <div>
            <h2>Results</h2>
            <p>First Name: {FirstName}</p>
            <p>Last Name: {LastName}</p>
            <p>Email Name: {Email}</p>
            <p>Password: {Password}</p>
            <p>Confirm Password: {ConfirmPassword}</p>
        </div>
    )
}

export default Results;