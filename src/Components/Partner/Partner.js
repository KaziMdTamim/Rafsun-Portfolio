import React from 'react';
import './Partner.css';
import partner_img from '../../images/partner.png';

const Partner = () => {
    return (
        <div className="partnership">
            <h6>I Worked With</h6>
            <div className='partner-img'>
            <img className='img-thumbnail' src={partner_img} alt="" />
            </div>
        </div>
    );
};

export default Partner;