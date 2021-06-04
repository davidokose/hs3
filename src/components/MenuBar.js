import React from 'react';

const MenuBar = ({menu}) => {
    return (
        <div className="ui massive vertical menu">
            <a className="active teal item">
                Dashboard
                <div className="ui teal left pointing label">N50m</div>
            </a>
            <a className="item">
                Enrolment
                <div className="ui label">935k</div>
            </a>
            <a className="item">
                Addcreditation
                <div className="ui label">11</div>
            </a>
            <a className="item">
                Subscription
                <div className="ui label">N120m</div>
            </a>
            <a className="item">
                Service Usage
                <div className="ui label">100</div>
            </a>
            <a className="item">
                Settlements
                <div className="ui label">N30m</div>
            </a>
        </div>
    )
};

export default MenuBar;