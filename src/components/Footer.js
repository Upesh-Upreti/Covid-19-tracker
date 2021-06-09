import React from 'react'

const Footer = () => {

    const d = new Date()
    return (
        <div>
            <p>
                Copyright &copy; {d.getFullYear()}
            </p>
        </div>
    )
}

export default Footer
