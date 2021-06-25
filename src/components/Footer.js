import React from 'react'
import "../css/footer.css"

const Footer = () => {

    const d = new Date()
    return (
        <div className="footer">
            <p>
                Copyright &copy; {d.getFullYear()}
            </p>
        </div>
    )
}

export default Footer
