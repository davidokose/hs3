import React from 'react';

const Footer = ({menu}) => {
    return (
        <div className="ui menu">
            <a className="item">Our Website</a>
            <a className="item">About Us</a>
            <a className="item">Contact Us</a>
            <div className="right menu">
                <div className="ui action input">
                    <input type="text" placeholder="email address" />
                    <div className="ui button">Subscribe</div>
                </div>
            </div>
        </div>
    )
};

export default Footer;