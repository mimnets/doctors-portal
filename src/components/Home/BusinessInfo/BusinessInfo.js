import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData =[
        {
            title:'Opening Hours',
            description:'We are open 24/7',
            icon:faClock,
            background: 'primary'
        },
        {
            title:'Visit our location',
            description:'Uttara, Dhaka-1230, Bangladesh',
            icon:faMapMarker,
            background: 'dark'
        },
        {
            title:'Call us now',
            description:'+88 01743 762978',
            icon:faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className='row'>
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;