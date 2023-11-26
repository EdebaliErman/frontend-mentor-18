import React from 'react'

function Button({name}) {
    return (
        <>
            <input type='email' placeholder='Enter your email...' />
            <button>{name}</button>
        </>
    )
}

export default Button
