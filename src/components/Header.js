import React from 'react';

const Header = ({menu}) => {
    return (
        <div className="ui large menu">

            <div className="right menu">
                <div className="ui action input">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <div className="ui button">Login</div>
                </div>
            </div>
        </div>
    );
};

export default Header;