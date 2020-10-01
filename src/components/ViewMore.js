import React from 'react';

export default function ViewMore(props) {
    const {house, setToggle} = props;

    const closeMenu = () =>  {
        document.body.style.overflow = "auto";
        setToggle(false);
    };

    return (
        <>
            <div className="modal-wrap">
                <div className="card-wrap modal-inner">
                    <div className="card-header py-1">
                    <h4> <span> Area: </span> {house.county}</h4>
                    <h4> <span> Date: </span> {house.date}</h4>
                    <h4> <span> Time: </span> {house.time}</h4>
                    </div>
                    <div className="text-center">
                        <h4> <span>Address: </span> {house.postcode}, {house.street_name} {house.street_line_2} {house.house_number} {house.county}</h4>
                        <h4><span>Unique ID: </span>{house.id} </h4>
                        <hr/>
                    </div>
                    <div className="card-image py-1">
                        <img alt="card-main" src="/images/card-image.jpg" alt=""/>
                    </div>
                    <div className="card-details py-1">
                        <h4> <span>Price: </span>£{house.price} </h4>
                        <button onClick={closeMenu} className="main"> Close Menu </button>
                    </div>
                </div>
            </div>
        </>
    )
};
