import React, {useState} from 'react';

import ViewMore from "../components/ViewMore";

export default function Card(props) {
    const [toggle, setToggle] = useState(false);
    const {house} = props;

    const openModal = () => {
        document.body.style.overflow = "hidden";
        window.scrollTo(0,0);
        setToggle(true);
    };

    return (
        <div className="card-wrap">
            <div className="card-header py-1">
                <h4> <span>Postcode: </span> {house.postcode}</h4>
                <h4> <span> Area: </span> {house.county}</h4>
                <h4> <span> Date: </span> {house.date}</h4>
                <h4> <span> Time: </span> {house.time}</h4>
            </div>
            <div className="text-center">
                <hr/>
            </div>
            <div className="card-image py-1">
                <img alt="card-main" src="/images/card-image.jpg" alt=""/>
            </div>
            <div className="card-details py-1">
                <h4> <span>Price: </span>£{house.price} </h4>
                <button onClick={openModal} className="main"> More Details</button>
            </div>
            {toggle && ( 
                <ViewMore house={house} setToggle={setToggle}/>
            )}
        </div>
    )
};
