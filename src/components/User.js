import React from 'react'

const User = ({ email, gender, phone, name, pix, username }) => {
    const Reload = () => {
        window.location.reload();
    }
    return (
        <div className="row user">
            <div className="col s12 m12">
                <div className="card blue-grey darken-1">
                    <div className="card-image">
                        <img src={pix} className="imm" alt="" />
                        <span className="card-title blue-text">{name}</span>
                    </div>
                    <div className="card-content white-text">
                        <span className="card-title">{email}</span>
                        <p>{username} said "I am convenient because I require little markup to use effectively."</p>
                    </div>
                    <div className="card-action">
                        <a href="/#">Gender: {gender}</a>
                        <a href="/#">Phone: {phone}</a>
                        <a href="/#" onClick={Reload} className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>Reload</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
