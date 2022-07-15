import React from 'react'
import './button.css'

type Props = {
    children: React.ReactNode,
    color?: string
}

function Button({ children, color='default' }: Props) {
    return <button className={color}>{children}</button>
}

export default Button