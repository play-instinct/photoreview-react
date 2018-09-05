import React from 'react';
import { Link } from 'react-router-dom';
import './ride.component.css';
import PropTypes from 'prop-types'; 


const Ride = props => (
    <div className="one-ride-container">
        <Link to={`/ride/detail/${props.id}`} className="ride-link">
        <h5>it loaded!</h5>
            <h4 className="ride-title">{props.name}</h4>
            <h6 className="ride-date">{props.date}</h6>
        </Link>
    </div>
);


Ride.propTypes = {
    name: PropTypes.string.isRequired,
    driver: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    phoneNumber: PropTypes.number.isRequired,
    courtesyTime: PropTypes.number.isRequired,
    destination: PropTypes.string.isRequired,
    seats: PropTypes.number.isRequired,
    destination: PropTypes.string.isRequired,
    pickupLocation: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired,
    baby_seat: PropTypes.bool.isRequired,
    wheelchair_access: PropTypes.bool.isRequired,
    note: PropTypes.string.isRequired
};

Ride.defaultProps = {
    seats: 0,
    name: 'loading'


}


export default Ride;