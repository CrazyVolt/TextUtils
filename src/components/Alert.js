import React from 'react'

const Alert = ({userName, alert}) => {
    return (
        alert && <div className={` alert alert-${alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{userName}!</strong> {alert.message}.
        </div>
    )
}

export default Alert
