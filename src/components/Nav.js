import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Button from './Button'

function Nav() {
    const context = useContext(ThemeContext)

    return (
        <>
            <Button>Login</Button>
            <Button>Register</Button>
            <div style={{ marginLeft: "40%" }}>
                <button style={{ fontSize: "2rem" }} onClick={() => context.toggleTheme()}>Toggle Theme</button>
            </div>
        </>
    )
}

export default Nav