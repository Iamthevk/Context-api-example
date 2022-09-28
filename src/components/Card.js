import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
function Card(props) {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme.theme}>{props.children}</div>
    )
}

export default Card