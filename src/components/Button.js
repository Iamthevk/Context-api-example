import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Button({ children }) {
    const theme = useContext(ThemeContext)
    console.log(theme)
    return (
        <button className={theme.theme}>{children}</button>
    )
}

export default Button