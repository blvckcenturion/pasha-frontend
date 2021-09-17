import React from 'react'

const Modal = ({ children, isOpen }) => {
    if (isOpen) return (
        <div className="modal-container" >
            <div className="modal-card">{ children}</div>
        </div>
    )
    return null
}

export default Modal
